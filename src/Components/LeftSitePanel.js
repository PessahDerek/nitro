import React from 'react'
import useProducts from '../Store/useProducts'
import Button1 from './Button1'
import SearchBar from './SearchBar'


const LeftSitePanel = ({setSearched}) => {
    const { } = useProducts()
    
    return (
    <div className='leftSitePanel' style={style} >
        <SearchBar setSearched={setSearched} />
        <p>Sort By</p>
        <Button1 />
    </div>
  )
}
const style = {
    width: "90%",
    height: "95%",
    margin: 'auto',
    paddingTop: '5%',
    display: 'grid',
    gridAutoFlow: "row",
    gridTemplateRows: "max-content",
    boxShadow: "0px 0px 12px rgba(1,1,1,0.1)"
}

export default LeftSitePanel