import { createBrowserRouter } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage";
import App from "../App";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";
import CashFlowStatement from "../Components/CashFlowStatement/CashFlowStatement";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";

export const router = createBrowserRouter ([
        {
            path: "/", 
            element: <App />,
            children: [
                {path:"", element: <HomePage />},
                {path: "search", element: <SearchPage />},
                {path: "design-guide", element: <DesignGuide />},
                {
                    path: "company/:ticker", 
                    element: <CompanyPage />,
                    children: [
                        {path: "company-profile", element: <CompanyProfile />},
                        {path: "income-statement", element: <IncomeStatement />},
                        {path: "balancesheet-statement", element: <BalanceSheet />},
                        {path: "cashflow-statement", element: <CashFlowStatement />},
                        
                    ]
                }
            ]
        }]
);