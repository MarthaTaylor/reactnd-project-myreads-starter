// code reused from udacity FEND Part 5 React course material covered and from Maeva tutorial https://www.youtube.com/watch?v=i6L2jLHV9j8 and help from my fellow student Daniela Kuester
// import all the needed components
import React, { Component } from 'react'

import { Link } from 'react-router-dom'


/* imported a Link component to use as the link a for the + symbol on open search page changed css in App.css
*   to keep the + image with Link being used a instead of the button that was here */
class OpenSearchPage extends Component {

		render(){
			return(

				
	            <div className="open-search">
	              <Link to="/search">Add a book</Link>
	            </div>

				)
		}
}

export default OpenSearchPage