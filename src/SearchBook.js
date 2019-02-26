// code reused from udacity FEND Part 5 React course material covered and from Maeva tutorial https://www.youtube.com/watch?v=i6L2jLHV9j8 and help from my fellow student Daniela Kuester
import React, {Component} from 'react';

import Book from './Book';

import * as BooksAPI from './BooksAPI';

import {Link} from 'react-router-dom';

/* the SearchForBook class component has to states a query that accepts a string vale and searchedBooks value f an empty array both will be 
* used to allow the query(string) method given to be used to search an array list of books to meet functional rubc requirements */
class SearchForBook extends Component {

	state = {
		query: '',
		searchedBooks: []
	}

	// update the state with the updated query string input on the search page from the user coming from the render() below onChange()
	updateQuery = (query) => {
		this.setState({	query: query }) 
		this.updateSearchedBooks(query);
	}

	/* handles searched functional requirements on search page to update the query if needed if the user inputs characters to the input 
	 * field or not and display page without error */
	updateSearchedBooks = (query) => {
		if(query){
			/* using BookAPI search for query string entered to input on search page the result of search(query) You receive the promise 
			*  with the list of books that you .then act on to setState() update the state of the search. I error handle if no book matches 
			*  utilized the .error property to set the searchedBooks value to an empty array so no error shows on the page and the .map array method can run */
			BooksAPI.search(query).then( (searchedBooks) => {
			// if an error show an empty array this allows no books to show on the page if the users input doesn't match the data from BookAPI stored in the backend
			if(searchedBooks.error){
					this.setState( { searchedBooks: [] } );
				// if no error display searched books list
			} else {
				this.setState( { searchedBooks : searchedBooks } ); 
			}	
		   }) // else no query string entered by user display nothing but set the value to an empty array and empty books off the page
		} else {
			this.setState( { searchedBooks: [] } );
		}		
	}


    /* render/display the search page and its url path. render result from the searched input field when it changes run the onChange()
    *  and run the updateQuery in App.js with the input value if a book has not been placed on a shelf set its default value to None 
    *  If query matches what is in the data FROM BookAPI display the list of fetched book and if you choose a self to place hem on 
    * they hold the shelf name as there default value in the search page while also getting moved to hat shelf in he Main page */
 	render(){
		return(
			<div className="search-books">
	            
	            <div className="search-books-bar">
		               <Link className="close-search" to="/"> 
		                 Close 
		               </Link>
			             
		              <div className="search-books-input-wrapper">		              
		                
		                <input 
			                type="text" 
			                placeholder="Search by title or author"				               
			                value={this.state.query}				             
			                onChange={(event) => this.updateQuery(event.target.value)}
		                />

		           	  </div>
	            </div>
	           
	            <div className="search-books-results">
		             <ol className="books-grid">
		              {
		              	this.state.searchedBooks.map( (searchedBook) => {
		              			
	              			let shelf = "None";

	              			this.props.books.map( (book) => (
	              				book.id === searchedBook.id ?
	              				shelf = book.shelf : ''
	              			 ));
	              			
	              			return (
	              				<li key={searchedBook.id}>			              				
			              			<Book 
			              				book={searchedBook}
			              				moveBookToThisShelf={this.props.moveBookToThisShelf}
			              				currentShelf={shelf}
			              			/>
	              				</li>
		              	   );
		              	})
		               }
		             </ol>
	            </div>

            </div>
		);
	}
}
// export the component to make reusable
export default SearchForBook;