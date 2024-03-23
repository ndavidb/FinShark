import {CompanyBalanceSheet} from "../../company";
import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBalanceSheet} from "../../api";
import Spinner from "../Spinner/Spinner";
import RatioList from "../RatioList/RatioList";

interface Props {}

const config = [
    {
        label: <div className="font-bold">Total Assets</div>,
        render: (company: CompanyBalanceSheet) => company.totalAssets,
    },
    {
        label: "Current Assets",
        render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
    },
    {
        label: "Total Cash",
        render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    },
    {
        label: "Property & equipment",
        render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
    },
    {
        label: "Intangible Assets",
        render: (company: CompanyBalanceSheet) => company.intangibleAssets,
    },
    {
        label: "Long Term Debt",
        render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
        label: "Total Debt",
        render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
    },
    {
        label: <div className="font-bold">Total Liabilities</div>,
        render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    },
    {
        label: "Current Liabilities",
        render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
    },
    {
        label: "Long-Term Debt",
        render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
        label: "Long-Term Income Taxes",
        render: (company: CompanyBalanceSheet) => company.otherLiabilities,
    },
    {
        label: "Stakeholder's Equity",
        render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
    },
    {
        label: "Retained Earnings",
        render: (company: CompanyBalanceSheet) => company.retainedEarnings,
    },
];

const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [balanceSheetData, setBalanceSheetData] = useState<CompanyBalanceSheet>();

    useEffect(() => {
        const getBalanceSheetData = async () => {
            const result = await getBalanceSheet(ticker);
            setBalanceSheetData(result!.data[0])
        }
        getBalanceSheetData();
    }, []);
    
    return (
        <>
            {balanceSheetData ? (
                <RatioList config={config} data={balanceSheetData} />
            ) : (
                <Spinner />
            )}
        </>
    );
};
export default BalanceSheet;
