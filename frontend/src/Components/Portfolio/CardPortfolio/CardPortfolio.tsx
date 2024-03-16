interface Props {
    portfolioValue: string;
}
const CardPortfolio = ({portfolioValue}: Props) => {
    return (
        <>
            <h3>{portfolioValue}</h3>
            <button>X</button>
        </>
    );
};
export default CardPortfolio;
