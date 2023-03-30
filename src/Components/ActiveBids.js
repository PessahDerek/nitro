import './comp.css'

const ActiveBids = ({product}) => {
    let myId = JSON.parse(localStorage.getItem('aucUser'))._id
    let bidList = product.bids.filter(p=>p.bidder !== '')
    let bidObj = bidList.filter(p=>p.bidder === myId).at(-1)
    let myIndex = []
    bidList.forEach((p, i)=>{
        if(p.bidder === myId) myIndex.push(i)
    })
    let standingBid = bidList.at(-1).amount
    return (
        <div className="activeBids">
            <div>
                <img src={product.images[0]} alt="" />
            </div>
            <h3>{product.product}</h3>
            <p>Standing Bid: {Number(standingBid).toLocaleString("en-US")}</p>
            <p>Your Bid: {Number(bidObj.amount).toLocaleString('en-US')}</p>
            <p>Difference: {Number(standingBid - bidObj.amount).toLocaleString('en-US')}</p>
            <p>Your position: { bidList.length - myIndex.at(-1)}</p>
        </div>
    )
}

export default ActiveBids
