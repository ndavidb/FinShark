import {ChangeEvent, SyntheticEvent, useState} from "react";

interface Props {
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: SyntheticEvent) => void;
}
const Search : React.FC<Props> = ({search, handleChange, onClick}: Props) => {
    
    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)}/>
            <button onClick={(e) => onClick(e)}>Send</button>
        </div>
    );
};
export default Search;
//