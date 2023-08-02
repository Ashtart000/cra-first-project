import React from 'react';
import { useData } from '../DataProvider/useData';

function PhonesLoader() {
    const { data, isLoading, error } = useData(getPhones);

    function getPhones() {
        return fetch('./phones.json')
            .then((response) => response.json())
    }

    return (
        <>
            {isLoading && <div>Loading....</div>}
            {error && <div>Error happening: {error.message}</div>}
            <ul>
                {data.map((data) =>
                    <li key={`${Date.now()} ${data.brand} ${data.model}`}>{data.brand} - {data.model}. Price: {data.price}</li>
                )}
            </ul>
        </>
    );

}

export default PhonesLoader;