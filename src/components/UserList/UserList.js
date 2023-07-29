import React from "react";
import { getUsers } from "../../api"; 
import UserCard from "./UserCard";
import styles from './UserListStyle.module.scss';
import PacmanLoader from "react-spinners/PacmanLoader";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100,
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    renderUsers = () => {
        const { users, filteredUsers } = this.state;
        // После фильтра ломается новая загрузка юзеров
        return filteredUsers.length > 0
        ? filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
        : users.map((user) => <UserCard user={user} key={user.login.uuid} />)
    }

    handleSearch = ({ target: { value } }) => {
        if (value === '') {
            this.setState({
                filteredUsers: []
            });
        } else {
            const { users } = this.state;
            const searchValue = value;
            const filteredUsers = users.filter((user) =>
                user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1
            );
            this.setState({
                filteredUsers
            });
        }
    };

    handleEmailSearch = ({ target: { value } }) => {
        if (value === '') {
            this.setState({
                filteredUsers: []
            });
        } else {
            const { users } = this.state;
            const searchValue = value;
            const filteredUsers = users.filter((user) =>
                user.email.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1
            );
            this.setState({
                filteredUsers
            });
        }
    };

    setUserCount = ({target: {value}}) => {
        this.setState({
            userCount: value
        })
    }

    loadUsers = () => {
        getUsers(this.state.userCount).then((data) => {
            const {results} = data;
            this.setState({
                users: results
                
            })
        })
        .catch((error) => {
            this.setState({
                error
            })
        })
        .finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        const { users, isLoading, error } = this.state;
        return (
            <>
                <h1>User List</h1>
                <div className={styles['input-container']}>
                    <label>
                    Type count users
                    <input type="number" min={1} max={100} onChange={this.setUserCount}/>
                </label>
                <button onClick={this.loadUsers}>Load users</button>               
                <label>
                    Search by last name
                    <input type="text" onChange={this.handleSearch} />
                </label>
                <label>
                    Search by email
                    <input type="text" onChange={this.handleEmailSearch} />
                </label>
                </div>
                <section className="card-container">
                    {isLoading && <PacmanLoader
                        size={100}
                        color="#36d7b7"
                        cssOverride={{
                            margin: '20px 20px'
                        }}
                    />}
                    {error && <h2 style={{backgroundColor: 'red', color: 'white'}}>{error.message}</h2>}
                    {users.length > 0 ? this.renderUsers() : null}
                </section>
            </>
        )
    }
}

export default UserList;

