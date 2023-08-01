import React, { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
            const {user, logOut} = useContext(UserContext);
            return (
                        <div>
                            InnerChild
                            <p>{user.firstName} {user.lastName}</p>
                            <img style={{width: '200px', borderRadius: '50%'}} src={user.avatar} alt={`${user.firstName} ${user.lastName}`}/>
                            <button onClick={logOut}>Log out</button>
                        </div>
            );
}

export default InnerChild;
