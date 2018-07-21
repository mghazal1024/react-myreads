import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShelfSelection extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelfChange: PropTypes.func.isRequired
  }


  render() {

    const { book, books, shelfChange } = this.props

    let defaultShelf = 'none'


    // set the current shelf to the books
    for(let element of books) {
      if(element.id === book.id) {
        defaultShelf = element.shelf
        break
      }
    }
    

    return(
      <div className="book-shelf-changer">
        <select onChange = {(event) => shelfChange(book, event.target.value)} defaultValue = { defaultShelf }>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )

  }
}

export default ShelfSelection
