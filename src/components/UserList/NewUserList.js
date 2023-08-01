import { useState, useEffect } from "react";
import { getUsers } from "../../api"; 
import UserCard from "./UserCard";
import styles from './UserListStyle.module.scss';
import PacmanLoader from "react-spinners/PacmanLoader";

const NewUserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [userCount, setUserCount] = useState(100);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const loadUsers = (usersCount, page) => {
        getUsers(usersCount, page).then((data) => {
            const {results} = data;
            setUsers(results)
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    };

    useEffect(() => {
        loadUsers(userCount, page);
    }, [page]);

    const renderUsers = () => {
        return filteredUsers.length > 0
        ? filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
        : users.map((user) => <UserCard user={user} key={user.login.uuid} />)
    }

    const handleSearch = ({ target: { value } }) => {
        if (value === '') {
            setFilteredUsers([])
        } else {
            const searchValue = value;
            const filteredUsers = users.filter((user) =>
                user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1
            );
            setFilteredUsers(filteredUsers)
        }
    };

    const handleEmailSearch = ({ target: { value } }) => {
        if (value === '') {
            setFilteredUsers([])
        } else {
            const searchValue = value;
            const filteredUsers = users.filter((user) =>
                user.email.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1
            );
            setFilteredUsers(filteredUsers)
        }
    };

    const prevBtnHandler = () => {
        if(page > 1) {
            setPage(page - 1)
        }    
    }

    const nextBtnHandler = () => {
        setPage(page + 1)
    }

    return (
        <>
                <h1>User List</h1>
                <div className={styles['input-container']}>
                    <label>
                    Type count users
                    <input type="number" min={1} max={100} onChange={({ target: { value } }) => {setUserCount(value)}}/>
                </label>
                <button onClick={() => loadUsers(userCount, page)}>Load users</button>               
                <label>
                    Search by last name
                    <input type="text" onChange={handleSearch} />
                </label>
                <label>
                    Search by email
                    <input type="text" onChange={handleEmailSearch} />
                </label>
                </div>
                <button onClick={prevBtnHandler}>Previous Page</button>
                <button onClick={nextBtnHandler}>Next Page</button>
                <section className="card-container">
                    {isLoading && <PacmanLoader
                        size={100}
                        color="#36d7b7"
                        cssOverride={{
                            margin: '20px 20px'
                        }}
                    />}
                    {error && <h2 style={{backgroundColor: 'red', color: 'white'}}>{error.message}</h2>}
                    {users.length > 0 ? renderUsers() : null}
                </section>
            </>
    );
}

export default NewUserList;
