import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class BookListing extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfChange: PropTypes.func.isRequired
  }

  state = {
    shelfCategory: [
      { category: 'currentlyReading', title: 'Currently Reading' },
      { category: 'wantToRead', title: 'Want to Read' },
      { category: 'read', title: 'Read'}
    ]
  }

  render() {
    const { books, shelfChange } = this.props

    return(
      <div className = "list-books-content">
        {this.state.shelfCategory.map((shelf, index) => {
          const shelfBooks = books.filter( book => book.shelf === shelf.category )
          return(
            <div className = "bookshelf" key = { index }>
              <h2 className = "bookshelf-title">{shelf.title}</h2>
              <div className = "bookshelf-books">
                <Shelf
                  books = { shelfBooks }
                  shelfChange = { shelfChange }
                />
              </div>
            </div>
          )

        })}
      </div>
    )
  }

}

export default BookListing
