import {TestDataCompany} from "../Table/TestData";

interface Props {
    config: any;
    data: any;
}


const RatioList = ({config, data}: Props) => {

    const renderedCells = config.map((row: any, index: number) => {
        return (
            <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 items-center space-x-4">
                        <div className="text-sm font-medium text-gray-900 truncate">
                            {row.label}
                        </div>
                        
                        <div className="text-sm text-gray-500 truncate">
                            {row.subTitle && row.subTitle}
                        </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    })

    return (
        <div className="bg-white w-10/12 shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full">
            <ul className="divide-y divide-gray-20">{renderedCells}</ul>
        </div>
    );
};
export default RatioList;
