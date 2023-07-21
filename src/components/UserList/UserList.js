import React from "react";
import { getUsers } from "../../api"; 
import UserCard from "./UserCard";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        getUsers().then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
        });
    }

    render() {
        const {users} = this.state;

        return(
            <>
                <h1>User List</h1>

                {/* {users.length > 0 ? <UserCard user={users[0]} /> : null} */}
                {users.map((oneUser) => <UserCard key={oneUser.email} user={oneUser} />)}
            </>
        )
    }
}

export default UserList;

