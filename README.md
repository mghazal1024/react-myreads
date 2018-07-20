# My Reads

This is a small application that allows you to keep track of the books you are reading by organizing them in three categories:
'Currently Readting', 'Want to Read', and 'Read'.

## Installation

The application is easy to install. All you have to do is clone the repository and install dependencies with 'npm install' and then run the server inside the folder where you cloned the repository with 'npm run start'

## React Components

The application is broken into several components for better organization that are called starting at the App.js file and then delegated as needed.

## Folder Structure (For the components)
inside the src folder

```
App.js // Here the initial components are called from
|_SearchBooks.js // Component for the search block
|_BookListing.js // Component that list the saved bookshelf
  |_Shelf.js // Component for the each of the shelfs
    |_Book.js // Component to render each of the books
      |_ShelfSelection // Component to move the books from one shelf to another
```
