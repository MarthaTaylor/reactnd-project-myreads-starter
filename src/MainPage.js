// code reused from udacity FEND Part 5 React course material covered and from Maeva tutorial https://www.youtube.com/watch?v=i6L2jLHV9j8 and help from my fellow student Daniela Kuester
// import all the needed components
import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import Book from './Book';

import OpenSearchPage from './OpenSearchPage'

/* mainpage component renders the myreads app main page that has 3 book shelves. it displays/renders any books searched for and added to the  
*  main page along with their specific relevant property details of author and title. It allows users to move books to different shelfs 
* via the control. displays the control default value to whatever shelf the book is on. Also allows users to move books out of the page my 
* selecting None in the drop down control. It allows users to navigate to the search page with the Link a  "a + symbol" for pen search 
* used the name books in this page as in App.js inside <Main /> it is the name of the prop books={this.state.books} */
class MainPage extends Component {

	render(){
		console.log(this.props.books);
		return(
			<div className="list-books">
		            	<div className="list-books-title">
		              		<h1>MyReads</h1>
		           		 </div>
		        <div className="list-books-content">           
		             <div>
		                
		          <div className="bookshelf">
		                  <h2 className="bookshelf-title">Currently Reading</h2>
		                  <div className="bookshelf-books">                   
		                   <ol className="books-grid">
			                   {
			                   	this.props.books.filter( book => book.shelf === 'currentlyReading').map(book => ( 
			                   	<li key={book.id}>
			                   		<Book 
			                   		book={book}
			                   		moveBookToThisShelf={this.props.moveBookToThisShelf}
			                   		currentShelf="currentlyReading"			                   		
			                   		/>
			                   	 </li>
			                   	))
			                   }	                        
		                    </ol>
		                  </div>
		                </div>

		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Want to Read</h2>
		                  <div className="bookshelf-books">                   
		                   <ol className="books-grid">
			                   {
			                   	this.props.books.filter( book => book.shelf === 'wantToRead').map(book => ( 
			                   	<li key={book.id}>
			                   		<Book 
			                   		book={book}
			                   		moveBookToThisShelf={this.props.moveBookToThisShelf}
			                   		currentShelf="wantToRead"
			                   		/>
			                   	 </li>
			                   	))
			                   }	  		                        
		                    </ol>
		                  </div>
		                </div>
		                
		                <div className="bookshelf">
		                  	<h2 className="bookshelf-title">Read</h2>
			                  <div className="bookshelf-books">
				                    <ol className="books-grid">
				                 		{
					                   	this.props.books.filter( book => book.shelf === 'read').map( (book) => ( 
					                   	<li key={book.id}>
					                   		<Book 
					                   		book={book}
					                   		moveBookToThisShelf={this.props.moveBookToThisShelf}
					                   		currentShelf="read"
					                   		/>
					                   	 </li>
					                   	))
					                   }		                       
				                    </ol>
			                  </div>
		                </div>

		             </div>
		        </div>

            	
	            <div> 
	              <OpenSearchPage />
	            </div>

		    </div>

		);
	}
}
/* Below used to be <div className="open-search">  <Link to="/search">Add a book</Link> </div> with the Link component imported above 
*  but I  recreated it as a separate component imported OpenSearchPage it is for the + symbol to open the search page 
*  it utilises the Link component. Css in App.css to keep the + image with Link being used a instead of the button that was here
*  export the MainPage component below*/
export default MainPage;


