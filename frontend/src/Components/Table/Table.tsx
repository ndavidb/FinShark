import {testIncomeStatementData} from "./TestData";
import {v4 as uuidv4} from "uuid";

interface Props {
    config: any;
    data: any;
}

const Table = ({config, data}: Props) => {
    
    const renderedRows = data.map((company: any, rowIndex: number) => {
        const rowKey = company.id || `row_${rowIndex}`;
        return (
            <tr key={rowKey}>
                {config.map((value: any, index: number) => {
                    return (
                        <td key={index}>
                            {value.render(company)}
                        </td>
                        )
                })}
            </tr>
        )
    })
    
    const renderedHeaders = (
        <tr>
            {config.map((value: any, index: number) => {
                const headID = value.cik || `header${index}`; 
                return (
                    <th key={headID} className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {value.label}
                    </th>
                )
            })}
        </tr>
    )
        
    
        
    
    return (
        <div className="container w-fit bg-white overflow-auto shadow  rounded-lg mt-5">
            <table className="w-80 overflow-auto divide-y divide-gray-200 m-5">
                <thead className="bg-gray-50">{renderedHeaders}</thead>
                <tbody>{renderedRows}</tbody>
            </table>
        </div>
    );
};
export default Table;
