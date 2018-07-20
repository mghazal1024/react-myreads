import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfChange: PropTypes.func.isRequired
  }

  render() {
    const { books, shelfChange } = this.props

    return(
      <ol className = "books-grid">
        {books.map((book) => {
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
    )

  }

}

export default Shelf
