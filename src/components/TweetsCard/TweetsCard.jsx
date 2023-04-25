import './TweetCard.css';

const TweetCard = ({
    tweet: { tweets, followers, id, avatar },
    followingTweetsId,
    onClickFollowing
}) => {
    return (
        <div className="TweetCard">
            {/* <div className="TweetCard__container">
                <div className="TweetCard-info">      */}
                    <img className="TweetCard__picture" src="../img/picture2.png" alt="background-img" />
                    <img className="TweetCard__logo" src="../img/LogoJPG.jpg" alt="logo" />
                    <img className="TweetCard__rectangle" src="../img/rectangle.png" alt="rectangle" />
                    <img className="TweetCard__user-photo" src={avatar} alt="user" />
                    <img className="TweetCard__ellipse" src="../img/ellipse.png" alt="ellipse" />
                    <p className="TweetCard__tweets-counter"> {tweets} tweets</p>
                    <p className="TweetCard__followers-counter"> {followers} followers</p>
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
                {/* </div>
            </div> */}
        </div>
    )
};
export default TweetCard;

