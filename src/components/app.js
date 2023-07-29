import React from "react";
import ToDoList from "./ToDoList/ToDoList";
import UserList from "./UserList/UserList";
import CounterPage from "./Counter/CounterPage";
import AlohaDashboard from "./AlohaDashboard/AlohaDashboard"
//import List from "./List/List";
//import FlexContainer from "./FlexContainer/FlexContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to='/'>Go home</Link></li>
                    <li><Link to='users'>Go to users list</Link></li>
                    <li><Link to='todo'>Go to todo list</Link></li>
                    <li><Link to='counter'>Go to counter page</Link></li>
                    <li><Link to='aloha'>Go to aloha</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/users" element={<UserList />} />
                <Route path="/todo" element={<ToDoList />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/aloha" element={<AlohaDashboard />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

const Home = () => {
    return <h1>Home page</h1>
}

const NotFound = () => {
    return (
        <>
            <h1>404</h1>
            <p>Page not found</p>
        </>
    )
}
