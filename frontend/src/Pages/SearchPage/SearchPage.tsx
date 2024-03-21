import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {CompanySearch} from "../../company";
import {searchCompanies} from "../../api";

interface Props {}
const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([])
    const [searchResults, setSearchResults] = useState<CompanySearch[]>([])
    const [serverError, setServerError] = useState<string>("")
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) : void => {
        setSearch(e.target.value)
    };

    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        const exists = portfolioValues.find((value) => value === e.target[0].value);
        if (exists) return;
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if (typeof result === "string"){
            setServerError(result);
        } else if(Array.isArray(result.data)){
            setSearchResults(result.data);
        }
        console.log(searchResults);
    };

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => {
            return value !== e.target[0].value;
        })
        setPortfolioValues(removed)
    }
    
    return (
        <>
            <Search search={search} handleSearchChange={handleSearchChange} onSearchSubmit={onSearchSubmit} />
            <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
            {serverError && <h1>{serverError}</h1>}

            <CardList searchResults={searchResults} onPortfolioCreate={onPortfolioCreate}/>
        </>
    );
};
export default SearchPage;
