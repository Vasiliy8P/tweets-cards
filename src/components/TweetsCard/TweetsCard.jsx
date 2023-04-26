import pictureImg from '../img/picture.png';
import logoImg from '../img/Logo.png';
import rectangleImg from '../img/rectangle.png';
import ellipseImg from '../img/ellipse.png';
import './TweetsCard.css';

const TweetsCard = ({
    tweet: { tweets, followers, id, avatar },
    followingTweetsId,
    onClickFollowing
}) => {
    return (
        <div className="TweetCard">
            <img className="TweetCard__picture" src={pictureImg} alt="background-img" />
            <img className="TweetCard__logo" src={logoImg} alt="logo" />
            <img className="TweetCard__rectangle" src={rectangleImg} alt="rectangle" />
            <img className="TweetCard__user-photo" src={avatar} alt="user" />
            <img className="TweetCard__ellipse" src={ellipseImg} alt="ellipse" />
            <p className="TweetCard__tweets-counter"> {tweets} tweets</p>
            <p className="TweetCard__followers-counter"> {followers.toLocaleString('en-US')} followers</p>
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
    )
};
export default TweetsCard;

