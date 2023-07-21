import './style.css';

function UserCard(props) {
    const {user: {name: {first: firstName, last: lastName}, email, picture: {large: imgSrc}}} = props;

    return (
        <article className='card-wrapper'>
            <img src={imgSrc} alt={`${firstName} ${lastName}`} className='user-img' />
            <h1>{firstName} {lastName}</h1>
            <p>{email}</p>
        </article>
    )
}

export default UserCard;