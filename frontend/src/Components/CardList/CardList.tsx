import React from "react";
import Card from "../Card/Card";

interface Props {}
const CardList : React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Card companyName="Apple" ticker="APPL" price={100} />
            <Card companyName="Microsoft" ticker="MSFT" price={200} />
            <Card companyName="Amazon" ticker="AMZ" price={450} />
        </div>
    );
};
export default CardList;
