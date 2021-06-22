# MyReads Project

## By: `Amr Hesham Salem`

This is the completed project for Udacity's React Fundamentals course.

To run the project on your pc:

1. install all project dependencies with `npm install`
2. start the development server with `npm start`
3. if the localhost page doesn't open on its own, follow the following link in your browser to open it http://localhost:3000/ .

## Component structure:

```bash
├──mainPage
│   ├──BookShelf:"wantToRead"
│   │     ├──Book:"...someBookId"
│   │     ├──Book:"...someBookId"
│   │     ├── ......
│   │     └──Book:"...someBookId"
│   │
│   ├──BookShelf:"currentlyReading"
│   │     ├──Book:"...someBookId"
│   │     ├──Book:"...someBookId"
│   │     ├── ......
│   │     └──Book:"...someBookId"
│   │
│   └──BookShelf:"read"
│         ├──Book:"...someBookId"
│         ├──Book:"...someBookId"
│         ├──......
│         └──Book:"...someBookId"
│
└── Search Page
    ├──Book:"...someBookId"
    ├──Book:"...someBookId"
    ├── .............
    └──Book:"...someBookId"

```

## Notes

- when calling the BooksAPI.Update() it should return a promise that resolves to the data required, however, the structure of the returned object is more complicated than the object that we have in our state. Instead, I used BooksAPI.getAll() inside the then statement to get a single array of books.

- I have taken into consideration the books that have no thumbnails and others that have no author, all these should render without a problem.
