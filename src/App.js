import React from 'react'


//* means all import all methods from BooksApi
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import MainPage from './MainPage';

class BooksApp extends React.Component {

  state = {
            books: []
  }

/*code based on method from udacity course work lesson 4 Render UI with external data*/
  //React lifecycle event in react runs custom behaviour at certain times in the Components Lifecycle. I use the function called
  //componentDidMount(){} it is invoked by react immediately after the component is inserted/mounted into the DOM/view
  componentDidMount(){
    //componentDidMount function calls the BooksAPI so makes the api request  + we use a getAll() method returns a promise 
    //when the promise is resolved we can call .then() function, it will be invoked with our books 
    BooksAPI.getAll().then( (books) => {
      //we set the state/update state by passing in the books we fetched from BooksAPI through the getAll() promise + .then()
        this.setState({books})  
        //usual pass an object key: value pair but as the key and the value are the same I pass just books
        //data as the state is changed + setState() called it causes a re-rendered of our component above state = { books: [] }
        //in our above state which then passes the new books down to our book list which then renders them to the view
        //telling it to update with the new information passed in and to display changes on the UI
        //so instead of hard coding the contacts in our state above we make the API request and allow that to update it
        })
  }


 
moveShelf = (book, shelf) => {
  BooksAPI.update(book, shelf);
   //can put below in to a unique method and call that method both her and in componentDidMount() method
   BooksAPI.getAll().then( (books) => {
   this.setState({books})
    })
}


  render() {
      console.log(this.state.books);
    return (
      <div className="app">

          <SearchPage />

          
          {/*<MainPage 
          books={this.state.books}
          moveShelf={this.moveShelf}

           />*/}


      </div>
    )
  }
}

export default BooksApp
