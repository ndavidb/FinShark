import axios from "axios";

import {CompanyProfile, CompanySearch} from "./company";

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<CompanySearch>(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        )
        return data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error message: ", error.message)
            return error.message
        } else {
            console.log("This is an unexpected error", error)
            return "Unexpected error"
        }
    }
};

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await
            axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
            )
        return data
    } catch (error: any) {
        console.log(error.message)
    }
};