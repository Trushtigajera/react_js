import { useEffect, useState } from "react";
import axios from 'axios';

function Search() {

    let [search, setsearch] = useState("");
    let [all, setall] = useState([])
    let [datapro, setdatapro] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                console.log(response.data.products);
                setdatapro(response.data.products);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    })
    const searchHandler = () => {
        var data = all.filter((ele) => {
            return ele.title === search;
        });
        setall(data);
    };

    return (
        <>
            <div className="search_input">
                <input type="text" placeholder="serach for products" onChange={(e) => setsearch(e.target.value)}></input>
                <button className="src" onClick={searchHandler}>serach here</button>
            </div>
        </>
    );
}
export default Search;