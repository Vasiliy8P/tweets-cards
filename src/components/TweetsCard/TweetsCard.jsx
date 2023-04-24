import { useState } from 'react';
import './TweetCard.css';

const TweetCard = ({ tweet, onIncrementFollowers, onDecrementFollowers }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const hendleClickFollowing = (tweetId, tweetFollowers) => {
        setIsFollowing(prevState => !prevState);

        if (isFollowing === true) {
            onIncrementFollowers(tweetId, tweetFollowers);
        } else if (isFollowing === false) {
            onDecrementFollowers(tweetId, tweetFollowers);
        };       
    }    

    return (
        <div className="TweetCard">
            <div className="TweetCard__container">
                <div className="TweetCard__header">
                    <img className="TweetCard__logo" src="logo" alt="logo" />
                </div>
                <div className="TweetCard__user">
                    <p>{tweet.user}</p>
                    <img className="TweetCard__user-photo" src="user" alt="user" />
                </div>
                <div className="TweetCard__tweets-info">
                    <p className="TweetCard__tweets-counter"> {tweet.tweets} TWEETS</p>
                    <p className="TweetCard__followers-counter"> {tweet.followers} FOLLOWERS</p>
                    <button className="TweetCard__btn" type="buttom" onClick={() => hendleClickFollowing(tweet.id, tweet.followers)}>
                        {isFollowing ? "FOLLOWING" : "FOLLOW"}
                    </button>
                </div>
            </div>
        </div>
    )
};
export default TweetCard;

