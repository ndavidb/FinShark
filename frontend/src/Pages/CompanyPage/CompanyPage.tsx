import {useEffect, useState} from "react";
import {getCompanyProfile} from "../../api";
import {useParams} from "react-router";
import {CompanyProfile} from "../../company";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";

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
                    <CompanyDashboard>
                        <Tile title="Company Name" subtitle={company.companyName}/>
                    </CompanyDashboard>
                </div>
            ) : (
                <div>No company resulted</div>
            )
            }
        </>
    );
};
export default CompanyPage;
