import {CompanyCashFlow} from "../../company";
import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCashFlowStatement} from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

interface Props {}

const config = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cashflow",
        render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
        label: "Investing Cashflow",
        render: (company: CompanyCashFlow) =>
            company.netCashUsedForInvestingActivites,
    },
    {
        label: "Financing Cashflow",
        render: (company: CompanyCashFlow) =>
            company.netCashUsedProvidedByFinancingActivities,
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
        label: "CapEX",
        render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
        label: "Issuance Of Stock",
        render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
];

const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>();
    
    useEffect(() => {
        const getCashFlowData = async () => {
            const result = await getCashFlowStatement(ticker);
            setCashFlowData(result!.data)
        }
        getCashFlowData();
    }, [])
    
    
    return (
        <>
            {cashFlowData ? (
                <Table config={config} data={cashFlowData} />
            ) : (
                <Spinner />
            )}   
        </>
    );
};
export default CashFlowStatement;
