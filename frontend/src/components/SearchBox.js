import React from 'react'

const SearchBox = (props) => {
    return (
        <div>
            <input className="align-items-center justify-content-center form-control" style={{textAlign: 'center'}}
                   type="text" value={props.value} onChange={(e) => props.setSearchValue(e.target.value)}
                   placeholder="Enter your Movie Name"/>
        </div>
    )
}
export default SearchBox;