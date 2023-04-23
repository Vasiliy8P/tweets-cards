import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { getTweetsApi } from 'services/api';
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

    const hendleClickBtn = () => {
        setPage(prevState => (prevState + 1));
    }

    return (
        <>
            <ul className='Tweets-list'>
                {tweets.map(tweet => (
                    <li key={nanoid()} >
                        <TweetCard tweet={tweet} />
                    </li>
                ))}
            </ul>
            <button type='button' onClick={hendleClickBtn}>Load more</button>
        </>
    )
};

export default Tweets;