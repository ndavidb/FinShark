import React, {SyntheticEvent} from "react";
import "./Card.css";
import {CompanySearch} from "../../company";
import search from "../Search/Search";
import addPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e : SyntheticEvent) => void;
}
const Card : React.FC<Props> = ({searchResult, onPortfolioCreate}: Props) => {
    return (
        <div className="Card">
            <img className="company_logo" alt="Image"/>
            <div className="card_details">
                <h2>{searchResult.name} - {searchResult.symbol}</h2>
                <p>{searchResult.currency}</p>
            </div>
            <p>{searchResult.stockExchange} - {searchResult.stockExchange}</p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
        </div>
    );
};
export default Card;
