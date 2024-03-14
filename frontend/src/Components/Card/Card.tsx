import React from "react";
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}
const Card : React.FC<Props> = ({companyName, ticker, price}: Props) => {
    return (
        <div className="Card">
            <img src="https://images.unsplash.com/photo-1506191038310-8fa38e6528d9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image"/>
            <div className="card_details">
                <h2>{companyName} - {ticker}</h2>
                <p>{price}</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, fuga.</p>
        </div>
    );
};
export default Card;
