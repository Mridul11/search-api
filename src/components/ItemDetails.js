import React from 'react'

const ItemDetails = (props) => {
    if(!props.newval){ return <div></div> }
    return (
        <div>
            <p>{props.newval.name}</p>
            <div>{props.newval.owner.node_id}</div>
            <img src={props.newval.owner.avatar_url} alt="somImgs"/>
        </div>
    )
}

export default ItemDetails;