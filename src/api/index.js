export const getUsers = () => {
    const url = 'https://randomuser.me/api';
    return fetch(url)
    .then((response) => response.json());
}

