import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
    portfolioValues: string[];
}
const ListPortfolio = ({portfolioValues}: Props) => {
    return (
        <>
            <h1>My portfolio</h1>
            {portfolioValues &&
                portfolioValues.map((portfolioValue : string) => {
                    return (
                        <CardPortfolio portfolioValue={portfolioValue}/>
                    )
                })    
            }
        </>
    );
};
export default ListPortfolio;
