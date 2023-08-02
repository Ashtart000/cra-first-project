import React, { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = () => {
            const {user, logOut} = useContext(UserContext);
            const {avatar, firstName, lastName} = user;
            return (
                        <div>
                            InnerChild
                            <p>{user.firstName} {user.lastName}</p>
                            <img style={{width: '200px', borderRadius: '50%'}} src={avatar} alt={`${firstName} ${lastName}`}/>
                            <button onClick={logOut}>Log out</button>
                        </div>
            );
}

export default InnerChild;
