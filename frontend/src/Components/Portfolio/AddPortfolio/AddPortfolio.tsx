import React, {SyntheticEvent} from "react";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}
const AddPortfolio : React.FC<Props> = ({onPortfolioCreate, symbol}: Props) => {
    return (
        <form onSubmit={onPortfolioCreate}>
            <input readOnly={true} hidden={true} value={symbol}></input>
            <button type="submit">Add</button>
        </form>
    );
};
export default AddPortfolio;
