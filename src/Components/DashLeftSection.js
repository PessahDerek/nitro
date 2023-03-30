import React from 'react'
import LinkBtn2 from './LinkBtn2'

const DashLeftSection = () => {

    const paths = [
        {txt: "Selling", path: "./"},
        {txt: "Settings", path: "settings"},
        {txt: "My bids", path: 'mywonbids'},
        {txt: "Logout", path: "logout"}
    ]
  return (
    <section style={pcStyle}>
        {paths.map(({txt, path}) => <LinkBtn2 key={txt} txt={txt} subPath={path} />)}
    </section>
  )
}

const pcStyle = {
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateRows: '5rem',
    flex: '0 1 10%',
    gap: '0.1rem',
    backgroundColor: "#1e1e1e",
    justifyContent: 'space-around',
}

export default DashLeftSection