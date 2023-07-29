export const getUsers = (count, page) => {
    const url = `https://randomuser.me/api/?results=${count}&seed=ONL-JS-FE2023-1&page=${page}`;
    return fetch(url)
    .then((response) => response.json());
}

