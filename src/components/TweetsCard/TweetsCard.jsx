// import { useEffect, useState } from 'react';
import './TweetCard.css';

const TweetCard = ({
    tweet: { user, tweets, followers, id },
    followingTweetsId,
    onClickFollowing
}) => {
    return (
        <div className="TweetCard">
            <div className="TweetCard__container">
                <div className="TweetCard__header">
                    <img className="TweetCard__logo" src="logo" alt="logo" />
                </div>
                <div className="TweetCard__user">
                    <p>{user}</p>
                    <img className="TweetCard__user-photo" src="user" alt="user" />
                </div>
                <div className="TweetCard__tweets-info">
                    <p className="TweetCard__tweets-counter"> {tweets} TWEETS</p>
                    <p className="TweetCard__followers-counter"> {followers} FOLLOWERS</p>
                    <button
                        className={
                            followingTweetsId.includes(id)
                                ? "TweetCard__btn-following"
                                : "TweetCard__btn-follow"}
                        type="button"
                        onClick={() => onClickFollowing(id, followers)}
                    >
                        {followingTweetsId.includes(id) ? "following" : "Follow"}
                    </button>
                </div>
            </div>
        </div>
    )
};
export default TweetCard;

