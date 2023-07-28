import './style.scss';
import PropTypes from 'prop-types';
import React from 'react';

class UserCard extends React.Component {
    render() {
        const {user: {name: {first: firstName, last: lastName}, email, picture: {large: imgSrc}}} = this.props;

    return (
        <article className='card-wrapper'>
            <img src={imgSrc} alt={`${firstName} ${lastName}`} className='user-img' />
            <h1>{firstName} {lastName}</h1>
            <p>{email}</p>
        </article>
    )
    }    
}

// UserCard.propTypes = {
//     user: PropTypes.object.isRequired
// }

UserCard.propTypes = {
    user: PropTypes.shape(
        {
            name: PropTypes.shape(
                {
                    first: PropTypes.string.isRequired,
                    last: PropTypes.string.isRequired
                }
            ).isRequired,
            email: PropTypes.string.isRequired,
            picture: PropTypes.shape(
                {
                    large: PropTypes.string
                }
            )
        }
    ).isRequired
 }


export default UserCard;