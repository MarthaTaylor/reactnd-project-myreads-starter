import React, {Component} from 'react';

class SearchBook extends Component {

	state = {
		query: "",
		searchBooks: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		}) 
	}

 	render(){
		return(
			<div className="search-books">
	            
	            <div className="search-books-bar">
	              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
		             
		              <div className="search-books-input-wrapper">		              
		                
		                <input type="text" 
		                placeholder="Search by title or author"
		                value={this.state.query}
		                onChange={(event) => this.updateQuery(event.target.value)}
		                />

		           	 </div>
	            </div>
	           
	            <div className="search-books-results">
	              <ol className="books-grid"></ol>
	            </div>

            </div>
		);
	}
}

export default SearchBook;