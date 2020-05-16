import React from 'react'

const Search = (props) => {
  return (
      <div className="ui search">
        <div className="ui icon input">
          <input 
            name="searchName"
            className="prompt"
            value={props.searchName}
            onChange={props.onChange}
          />
          <i className="search icon" />
        </div>
      </div>
    )
  }

export default Search
