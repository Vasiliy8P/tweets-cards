import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { getDecrementFollowersApi, getIncrementFollowersApi, getTweetsApi } from 'services/api';
import TweetCard from 'components/TweetsCard/TweetsCard';
import './Tweets.css';


const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const [page, setPage] = useState(1);
    console.log(tweets)

    useEffect(() => {
        console.log('useEffect');

        getTweetsApi(page)
            .then(fetchTweets => {
                setTweets(prevTweets => [...prevTweets, ...fetchTweets])
            })                
            .catch(error => console.log(error.message));
    }, [page]); 

    const incrementFollowers = (tweetId, tweetFollowers) => {
        getIncrementFollowersApi(tweetId, tweetFollowers)
            .then(fetchTweet => {
                setTweets(prevTweets => prevTweets.map(prevTweet => {
                    if (prevTweet.id === fetchTweet.id) {
                        prevTweet.followers = fetchTweet.followers;
                    };
                    return prevTweet
                })
                )
            })                
            .catch(error => console.log(error.message));
    }

    const decrementFollowers = (tweetId, tweetFollowers) => {
        getDecrementFollowersApi(tweetId, tweetFollowers)
            .then(fetchTweet => {
                console.log(fetchTweet)
                setTweets(prevTweets => prevTweets.map(prevTweet => {
                    if (prevTweet.id === fetchTweet.id) {
                        prevTweet.followers = fetchTweet.followers;
                    };
                    return prevTweet;
                })
                )
            })                
            .catch(error => console.log(error.message));
    }

    const hendleClickBtn = () => {
        setPage(prevState => (prevState + 1));
    }

    return (
        <>
            <ul className='Tweets-list'>
                {tweets.map(tweet => (
                    <li key={nanoid()} >
                        <TweetCard
                            tweet={tweet}
                            onIncrementFollowers={incrementFollowers}
                            onDecrementFollowers={decrementFollowers} />
                    </li>
                ))}
            </ul>
            <button type='button' onClick={hendleClickBtn}>Load more</button>
        </>
    )
};

export default Tweets;