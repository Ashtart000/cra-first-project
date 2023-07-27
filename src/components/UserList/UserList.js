import React from "react";
import { getUsers } from "../../api"; 
import UserCard from "./UserCard";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100
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

    handleSearch = ({target: {value}}) => {
        //1 Якщо в інпуту нічого немає, то чистимо масив відфільтрованих юзерів
        // НЕ РАБОТАЕТ
        if(value === '') {
            this.setState({
                filteredUsers: []
            })
        }
        

        //2 Фільтруємо по прізвищу
        const {users} = this.state;

        const searchValue = value;
        const filteredUsers = users.filter((user) => user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1
            // логічний оператор замість if вище так само повертає тру або фолс
            // if(user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1) {
            //     return true
            // } else {
            //     return false
            //     }
        ) 
        
        //3 Кладемо в стейт відфільтрованих юзерів
        this.setState({
            //filteredUsers: filteredUsers
            // =
            filteredUsers
        })
    }

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
        });
    }

    render() {
        const { users } = this.state;
        return (
            <>
                <h1>User List</h1>
                <label>
                    Type count users
                    <input type="number" min={1} max={100} onChange={this.setUserCount}/>
                </label>
                <button onClick={this.loadUsers}>Load users</button>
                <label>
                    Search by last name
                    <input type="text" onChange={this.handleSearch} />
                </label>
                <section className="card-container">
                    {users.length > 0 ? this.renderUsers() : <h2>Users is Loading!..</h2>}
                </section>
            </>
        )
    }
}

export default UserList;

