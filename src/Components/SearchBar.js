import React from 'react'
import { api_ } from '../Apis/api'

const SearchBar = ({setSearched}) => {

    const search = async e => {
        let bids = await api_.get('/search/'+e.target.value)
        setSearched(bids.data)
    }
  return (
    <input className='searchBar' style={style} placeholder='Search'
        onChange={search}
    />
  )
}

const style = {
    width: '90%',
    height: "30px",
    margin: 'auto',
    fontSize: "18px",
    borderBottom: "1px solid black"
}

export default SearchBar