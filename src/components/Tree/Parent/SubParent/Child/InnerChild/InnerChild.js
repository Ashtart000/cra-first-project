import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    // const {user: {firstName, lastName, avatar}} = props
    return (
        <UserContext.Consumer>
            {(value) => {
                const {firstName, lastName, avatar} = value;
                    return (
                        <div style={{border: '2px solid black', padding: '25px'}}>
                            InnerChild
                            <p>{firstName} {lastName}</p>
                            <img style={{width: '200px', borderRadius: '50%'}} src={avatar} alt={`${firstName} ${lastName}`}/>
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
