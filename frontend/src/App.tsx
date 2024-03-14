import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";

function App() {
    const [search, setSearch] = useState<string>("");

    const onClick = (e: SyntheticEvent) : void => {
        console.log(e)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
        setSearch(e.target.value)
        console.log(e)
    }

    return (
        <div className="App">
            <Search search={search} handleChange={handleChange} onClick={onClick} />
            <CardList/>
        </div>
    );
}

export default App;
