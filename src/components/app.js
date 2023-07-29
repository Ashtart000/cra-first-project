import React from "react";
//import TVLoader from "./TVLoader/TVLoader";
//import PhonesLoader from "./PhonesLoader/PhonesLoader";
import DataProvider from "./DataProvider/DataProvider";


function App() {

    return(
        <>
            <DataProvider>
            {() => {
                return fetch('./tv.json')
                .then((response) => response.json())
            }} 
            {(state) => {
                const {data, isLoading, error} = state;
                return (
                    <>
                    {isLoading && <div>Loading...</div>}
                    {error && <div>{error.message}</div>}
                    <ol>
                        {data.map((data) => 
                            <li key={`${Date.now()} ${data.brand} ${data.model}`}>{data.brand} - {data.model} - {data.price}</li>
                        )}
                    </ol>
                    </>
                );
            }}
            </DataProvider>    
        </>
    )
}

export default App;


