let myBooks = [
    'Harry Potter',
    'Hunger Games',
    'Game of Thrones',
    'The thing',
    'Lord of The Rings',
    24,
    'Divergent'
]

let booksArray = []

let addBook = (book) => {
    if (!book.includes('The')) {
        booksArray.push(book)
    }
    console.log(booksArray)
}

try {
    myBooks.map(item => {
        if (typeof item != 'string') throw 'There is some wrong values in the Array';
        addBook(item);
    });
} catch (error) {
    console.log(error);
}

let a = 'my name is Paolo :)';

let exampleArray = [
    23,
    'b',
    'c'
]

console.log(exampleArray.includes('b'));
console.log(a.includes('my'));
console.log(!a.includes('great'));