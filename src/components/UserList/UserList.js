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

    renderUsers = () => {
        const { users } = this.state;
        return users.map((user) => <UserCard user={user} key={user.login.uuid} />)
    }

    render() {
        const { users } = this.state;
        return (
            <>
                <h1>User List</h1>
                <section className="card-container">
                    {users.length > 0 ? this.renderUsers() : null}
                </section>
            </>
        )
    }
}

export default UserList;

