import React from 'react';
import searchIcon from '../icons/search/search.png';

const SearchField = (props) => {

    let findText = null ;

    function handleSearch(e) {
        findText = e.target.value;
    }

    function handleClick() {
        if(findText) {
            props.search(findText)
        }
    }

    return (
        <div className="search">
            <input type="text" placeholder="Znajdź to czego szukasz" onChange={handleSearch} ></input>
            <button onClick={handleClick}><img src={searchIcon} alt=""/></button>
        </div>
    );
}
 
export default SearchField;