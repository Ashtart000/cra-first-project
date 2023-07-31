import React from 'react';
import { withUser } from '../../../../../../HOC';

const InnerChild = (props) => {
            const {user: {firstName, lastName, avatar}, logOut} = props;
            return (
                        <div>
                            InnerChild
                            <p>{firstName} {lastName}</p>
                            <img style={{width: '200px', borderRadius: '50%'}} src={avatar} alt={`${firstName} ${lastName}`}/>
                            <button onClick={logOut}>Log out</button>
                        </div>
            );
}

const InnerChildWithContext = withUser(InnerChild);

export default InnerChildWithContext;
