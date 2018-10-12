import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            term:null
        }
    }

    render(){
        return(
            <div>
                <input 
                    placeholder="enter the search term"
                    onChange={e => this.setState({term : e.target.value})}
                    onKeyDown = {e => (e.key === 'Enter') ? this.props.onSearchTermChange(this.state.term): null}
                />
            </div>
        )
    }
}

export default SearchBar;