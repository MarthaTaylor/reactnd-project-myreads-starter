// code reused from udacity FEND Part 5 React course material covered and from Maeva tutorial https://www.youtube.com/watch?v=i6L2jLHV9j8 and help from my fellow student Daniela Kuester
// import all the needed compOnents
import React, {Component} from 'react';

/* Created the book component. It renders a lot info. If there is a thumbnail display it else just display empty/nothing as needed to tell 
*  it display nothing so map would be able to work on it alternatively I could have used a ternary operator of: let anyThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';
*  instead of the code if else below i choose not to as i think the if else is easier to read and teaching more with them both on display here 
*  also display the relevant properties of the particular title and authors of the books and the default shelf the are on*/
//value={this.props.currentShelf}
class Book extends Component {

    render(){
        let anyThumbnail = this.props.book.imageLinks; 

        if(anyThumbnail){
            anyThumbnail = this.props.book.imageLinks.thumbnail
        } else{
            anyThumbnail = ''
        }

        return(
             <div className="book">

                 <div className="book-top">

                     <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url("${anyThumbnail}")` }}></div>
                         
                         <div className="book-shelf-changer">
                              <select                     
                                    onChange={ (event) => this.props.moveBookToThisShelf(
                                    this.props.book, event.target.value       
                                    )}
                                    value={this.props.currentShelf}
                                >
                                    
                                    <option value="move" disabled>Move to...</option> 
                                    <option value="none"> None </option>                                
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read"> Read </option> 
                                     
                                                                      
                              </select>
                         </div>

                     </div>
                                
                <div className="book-title"> {this.props.book.title}  </div>
                <div className="book-authors"> {this.props.book.authors} </div>

             </div>

            );
        }
    }

// export the component to make reusable
export default Book;
 
 