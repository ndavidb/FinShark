import {useEffect, useState} from "react";
import {getCompanyProfile} from "../../api";
import {useParams} from "react-router";
import {CompanyProfile} from "../../company";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";

interface Props {
}
const CompanyPage = (props: Props) => {
    const {ticker} = useParams()
    const [company, setCompany] = useState<CompanyProfile>()
    
    useEffect(() =>{
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!)
            setCompany(result?.data[0])
        };
        getProfileInit();
        
    }, [])
    return (
        <>
            {company ? (
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <Sidebar />
                    <CompanyDashboard ticker={ticker!}>
                        <Tile title="Company Name" subtitle={company.companyName}/>
                        <Tile title="Price" subtitle={company.price.toString()}/>
                        <Tile title="DCF" subtitle={company.dcf.toString()}/>
                        <Tile title="Sector" subtitle={company.sector}/>
                        <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
                            {company.description}
                        </p>
                    </CompanyDashboard>
                </div>
            ) : (
                < Spinner />
            )
            }
        </>
    );
};
export default CompanyPage;
