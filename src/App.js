// code reused from udacity FEND Part 5 React course material covered and from Maeva tutorial https://www.youtube.com/watch?v=i6L2jLHV9j8 and help from my fellow student Daniela Kuester
// import all the needed components
import React from 'react';

import {Route} from 'react-router-dom';

import SearchForBook from './SearchBook';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {

  state = {
            books: []
  }

 /* code reused and based on udacity course work lesson 4 Render UI with external data and Maeva tutorial https://www.youtube.com/watch?v=i6L2jLHV9j8
  * React lifecycle event in react runs custom behaviour at certain times in the Components Lifecycle. I use the function called
  * componentDidMount(){} it is invoked by react immediately after the component is inserted/mounted into the DOM/view */
  componentDidMount(){
    /* componentDidMount function calls the BooksAPI so makes the api request  + we use a getAll() method returns a promise 
    *  when the promise is resolved we can call .then() function, it will be invoked with our books */
    BooksAPI.getAll().then( (books) => {
      //we set the state/update state by passing in the books we fetched from BooksAPI through the getAll() promise + .then()
        this.setState({books})  
        /* usual pass an object key: value pair but as the key and the value are the same I pass just books
        *  data as the state is changed + setState() called it causes a re-rendered of our component above state = { books: [] }
        *  in our above state which then passes the new books down to our book list which then renders them to the view
        *  telling it to update with the new information passed in and to display changes on the UI
        *  so instead of hard coding the contacts in our state above we make the API request and allow that to update it */
        })
  }

//old code that didn't allow books to change shelf straight/smooth as i hadn't used a promise with the getAll()
// see direct below for updated code that works alot better 
//  //here I use the getAll() method already provided by udacity to get the data of books from BookAPI in the backend 
//  //i will use it here to enable the app to move books between shelves
// moveBookToThisShelf = (book, shelf) => {

//   BooksAPI.update(book, shelf);
//    // can put below in to a unique method and call that method both here and in componentDidMount() method
//    BooksAPI.getAll().then( (books) => {
//    // if you do not update the state the page won't refresh and update by itself, here I use setState() to update the state
//    this.setState({books})
//     })
// }

// ********instead of the above i used this it works better async with a promise*******************
moveBookToThisShelf = (book, shelf) => {
  
  BooksAPI.update(book, shelf).then( BooksAPI.getAll().then( (books) => {
  
   this.setState({books})
    }))
  
}

   /* Route is inside render() on both pages browser router was enable in index.js for this parent App.js file
   *  routes are used here to give each page a unique URL address path which wll be the one I set it to below / and /search 
   *  this enabling users to navigate between the Main and Search page easier
   *  using the back and forward buttons. This will also allow users to bookmark the unique url of the pages  
   * books is the name of the props so in MainPage refer to it as this.props.books*/  

  render() {
    return (
      <div className="app">        

          <Route exact path="/" render={ () => (
               <MainPage 
                
                books={this.state.books}
                moveBookToThisShelf={this.moveBookToThisShelf}
                />  
          )} />
         

           <Route path="/search" render={ () => (
                <SearchForBook                
                 moveBookToThisShelf={this.moveBookToThisShelf}
                 books={this.state.books}
                  />   
            )} />      
                  
      </div>
    )
  }
}
// export the component to make reusable
export default BooksApp;

