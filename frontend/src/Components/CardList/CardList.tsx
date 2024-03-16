import React, {SyntheticEvent} from "react";
import Card from "../Card/Card";
import {v4 as uuidv4} from "uuid";
import {CompanySearch} from "../../company";

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e :SyntheticEvent) => void;
}
const CardList : React.FC<Props> = ({searchResults, onPortfolioCreate}: Props) => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card
                            id={uuidv4()}
                            key={uuidv4()}
                            searchResult={result}
                            onPortfolioCreate={onPortfolioCreate}
                        />
                    )
                }) 
            ) : (
                <h1>No result</h1>
            )}
        </>
    );
};
export default CardList;
