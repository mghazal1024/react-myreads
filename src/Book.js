import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfSelection from './ShelfSelection'
import noCoverThumb from './icons/noCover-thumbnail.png'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelfChange: PropTypes.func.isRequired
  }

  render() {
    const { book, books, shelfChange } = this.props

    // in case nothing is found

    const coverThumb = () => {
      if(book.imageLinks && book.imageLinks.thumbnail) {
        return book.imageLinks.thumbnail
      } else {
        return noCoverThumb
      }
    }

    const bookTitle = () => {
      let notAvailable = 'This title is not available'
      if(book.title) {
        return book.title
      } else {
        return notAvailable
      }
    }




    return(
      <li>
        <div className = "book">
          <div className = "book-top">
            <div className = "book-cover">
              <img src= {coverThumb()} alt={book.title}/>
            </div>
            <ShelfSelection
              book = { book }
              books = { books }
              shelfChange = { shelfChange }
            />
          </div>
          <p className = "book-title">{ bookTitle() }</p>
          { book.authors && book.authors.map((author, index) => {
            return <p className = "book-authors" key={index}>{ author }</p>
          })}
        </div>
      </li>
    )

  }

}


export default Book
