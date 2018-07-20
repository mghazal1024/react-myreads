import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfSelection from './ShelfSelection'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelfChange: PropTypes.func.isRequired
  }

  render() {
    const { book, books, shelfChange } = this.props
    return(
      <li>
        <div className = "book">
          <div className = "book-top">
            <div className = "book-cover">
              <img src={book.imageLinks.thumbnail} alt={book.title}/>
            </div>
            <ShelfSelection
              book = { book }
              books = { books }
              shelfChange = { shelfChange }
            />
          </div>
          <p className = "book-title">{ book.title }</p>
          <p className = "book-authors">{ book.authors }</p>
        </div>
      </li>
    )

  }

}

export default Book
