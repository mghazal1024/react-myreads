import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookListing from './BookListing'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    books: [],
  }

  componentDidMount() {
    //Gell the books once loaded
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  // Changing the shelf from the selection menu
  shelfChange = ( selectedBook, selectedShelf ) => {
    BooksAPI.update( selectedBook, selectedShelf ).then( response => {
      //Shelf for the new book
      selectedBook.shelf = selectedShelf

      var updatedBooks = this.state.books.filter( book => book.id !== selectedBook.id )

      updatedBooks.push( selectedBook );
      this.setState({ books: updatedBooks })
    })
  }

  render() {

    const { books } = this.state

    return (
      <div className="app">
          <Route path = "/search" render = {({searchHistory}) => (
            // Search block component is called
            <SearchBooks
              books = { books }
              shelfChange = { this.shelfChange }
            />
          )} />
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              {/* Listing of book component called */}
              <BookListing
                books = { this.state.books }
                shelfChange = { this.shelfChange }
              />
              <div className="open-search">
                <Link to="/search">Search</Link>
              </div>
            </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
