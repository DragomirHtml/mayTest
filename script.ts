import { LibraryBook } from "./types/LibraryBook";

const book1 = new LibraryBook({
    title: "Войина и мир", 
    author: "Л. Н. Толстой", 
    year: 1869
});

book1.borrow("Драгомир");