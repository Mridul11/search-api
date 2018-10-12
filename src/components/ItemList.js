import React from 'react'

const ItemList = ({arrval, onVideoSelect}) => {
    if(!arrval){
        return( <div>Loading...</div>)
    }
    return(
        <ul>
           { arrval.map(arr => 
            <li key={arr.id} 
                onClick={() => onVideoSelect(arr)}>
                {arr.name}
            </li>) 
            }
        </ul>
    )
}

export default ItemList;