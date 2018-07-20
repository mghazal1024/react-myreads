import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfChange: PropTypes.func.isRequired
  }

  state = {
    searchQuery: '',
    foundBooks: [],
    searchError: false
  }

  // Collect the books based on the search query
  collectBooks = (event) => {

    const searchQuery = event.target.value.trim()
    this.setState({ searchQuery: searchQuery })

    if(searchQuery) {
      BooksAPI.search(searchQuery, 30).then((books) => {
        if(books.length > 0) {
          this.setState({foundBooks: books, searchError: false })
        } else {
          this.setState({ foundBooks: [], searchError: true })
        }
      })
    } else {
      this.setState({foundBooks: [], searchError: false })
    }
  }

  render() {

    const { searchQuery, foundBooks, searchError } = this.state
    const { books, shelfChange } = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className = "close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value = { searchQuery }
              onChange = { this.collectBooks }/>
          </div>
        </div>
        <div className="search-books-results">
          { foundBooks.length > 0 && (
            <div>
              <h3>Your Search found { foundBooks.length } books </h3>
              <ol className="books-grid">
                {foundBooks.map((book) => {
                  return(
                    <Book
                      book = { book }
                      books = { books }
                      shelfChange = { shelfChange }
                      key = { book.id }
                    />
                  )
                })}
              </ol>
            </div>
          )}
          { searchError && (
            <div>
              <h3>You Search Found 0 books. Please adjust your search and try again</h3>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBooks
