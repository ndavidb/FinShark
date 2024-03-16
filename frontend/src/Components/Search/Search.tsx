import React, {ChangeEvent, SyntheticEvent, useState} from "react";

interface Props {
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (e: SyntheticEvent) => void;
}
const Search : React.FC<Props> = ({search, handleSearchChange, onSearchSubmit}: Props) => {
    
    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input value={search} onChange={handleSearchChange}/>
            </form>
        </>
    );
};
export default Search;
//