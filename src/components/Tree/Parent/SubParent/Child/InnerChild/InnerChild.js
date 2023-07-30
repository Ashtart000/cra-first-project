import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    // const {user: {firstName, lastName, avatar}} = props
    return (
        <UserContext.Consumer>
            {({user, logOut}) => {
                const {firstName, lastName, avatar} = user;
                    return (
                        <div>
                            InnerChild
                            <p>{firstName} {lastName}</p>
                            <img style={{width: '200px', borderRadius: '50%'}} src={avatar} alt={`${firstName} ${lastName}`}/>
                            <button onClick={logOut}>Log out</button>
                        </div>
                    )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;

/*
<div style={{border: '2px solid black', padding: '25px'}}>
            InnerChild
            <p>{firstName} {lastName}</p>
            <img style={{width: '200px', borderRadius: '50%'}} src={avatar} alt={`${firstName} ${lastName}`}/>
        </div>
*/
