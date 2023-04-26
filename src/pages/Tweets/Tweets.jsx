import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import 'bootstrap/js/dist/dropdown';
import { getDecrementFollowersApi, getIncrementFollowersApi, getTweetsApi } from 'services/api';
import TweetsCard from 'components/TweetsCard/TweetsCard';
import Loader from 'components/Loader/Loader';
import './Tweets.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialFollowingTweetsId = () => {
    const saveFollowingTweetsId = localStorage.getItem("followingTweets");
    if (saveFollowingTweetsId !== null) {
        const parsedFollowingTweetsId = JSON.parse(saveFollowingTweetsId);
        return parsedFollowingTweetsId
    }
    return [];
}

const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const [page, setPage] = useState(1);
    const [followingTweetsId, setFollowingTweetsId] = useState(initialFollowingTweetsId());   
    const [isLoading, setIsLoading] = useState(null);
    const [filterTweets, setFilterTweets] = useState([]);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    
    useEffect(() => {
        setIsLoading(true);
        getTweetsApi(page)
            .then(fetchTweets => {
                setTweets(prevTweets => [...prevTweets, ...fetchTweets])
                setFilterTweets(prevTweets => [...prevTweets, ...fetchTweets])
                setIsLoading(false);
            })
            .catch(error => console.log(error.message));
    }, [page]);

    useEffect(() => {
        localStorage.setItem("followingTweets", JSON.stringify(followingTweetsId));
    }, [followingTweetsId]);

    const incrementFollowers = (tweetId, tweetFollowers) => {
        getIncrementFollowersApi(tweetId, tweetFollowers)
            .then(fetchTweet => {
                setTweets(prevTweets => prevTweets.map(prevTweet => {
                    if (prevTweet.id === fetchTweet.id) {
                        prevTweet.followers = fetchTweet.followers;
                    };
                    return prevTweet
                }))
            })
            .catch(error => console.log(error.message));
    };

    const decrementFollowers = (tweetId, tweetFollowers) => {
        getDecrementFollowersApi(tweetId, tweetFollowers)
            .then(fetchTweet => {
                setTweets(prevTweets => prevTweets.map(prevTweet => {
                    if (prevTweet.id === fetchTweet.id) {
                        prevTweet.followers = fetchTweet.followers;
                    };
                    return prevTweet;
                }));
            })
            .catch(error => console.log(error.message));
    };

    const hendleClickFollowing = (tweetId, followers) => {
        if (!followingTweetsId.includes(tweetId)) {
            setFollowingTweetsId(prevState => [...prevState, tweetId]);
            incrementFollowers(tweetId, followers);
            return
        } else {
            setFollowingTweetsId(prevState => [...prevState.filter(prevState => prevState !== tweetId)]);
            decrementFollowers(tweetId, followers);
        }
    }

    const hendleClickBtnLoadMore = () => {
        setPage(prevState => (prevState + 1));
    };

    const getFilterTweets = (selectedFilter) => {
        if (selectedFilter === "All") {
            setFilterTweets(tweets);
        } else if (selectedFilter === "Follow") {
            setFilterTweets(tweets.filter(tweet => !followingTweetsId.includes(tweet.id)));
        } else if (selectedFilter === "Followings") {
            setFilterTweets(tweets.filter(tweet => followingTweetsId.includes(tweet.id)));
        }
    };

    return (
        <>
            <div className='Btn-wrapper'>
                <Link to={backLinkHref} className='Tweets-list__btn-back-link'>
                    <button className='Tweets-list__btn-back' type='button'>
                        Back
                    </button>
                </Link>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Show
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button className="dropdown-item" type="button" onClick={() => getFilterTweets("All")}>all</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => getFilterTweets("Follow")}>follow</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => getFilterTweets("Followings")}>followings</button></li>
                    </ul>
                </div>
            </div>
            <ul className='Tweets-list'>
                {(filterTweets.map(tweet => (
                    <li key={nanoid()} className='Tweets-list__item'>
                        <TweetsCard
                            tweet={tweet}
                            onClickFollowing={hendleClickFollowing}
                            followingTweetsId={followingTweetsId}
                        />
                    </li>
                )))}
            </ul>
            {isLoading && <Loader />}
            {(tweets.length > 0) && !isLoading &&
                <button
                    className='Tweets-list__btn-LoadMore'
                    type='button'
                    onClick={hendleClickBtnLoadMore}
                >
                    Load more
                </button>
            }
        </>
    )
};

export default Tweets;