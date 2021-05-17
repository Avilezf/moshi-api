class Product {

    productid;
    collection;
    editorial;
    isbn;
    title;
    author;
    price;
    quantity;
    category;
    rating;
    image;

    constructor(productid, collection, editorial, isbn, title, author, price, quantity, category, rating) {

        this.productid = productid;
        this.collection = collection;
        this.editorial = editorial;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.rating = rating;
        
    }

    //Getters
    getProductId() {
        return this.productid;
    }

    getCollection() {
        return this.collection;
    }

    getEditorial() {
        return this.editorial;
    }

    getISBN() {
        return this.isbn;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getPrice() {
        return this.price;
    }

    getQuantity() {
        return this.quantity;
    }

    getCategory() {
        return this.category;
    }

    getRating() {
        return this.rating;
    }

    //Setters
    setCollection(collection) {
        this.collection = collection;
    }

    setEditorial(editorial) {
        this.editorial = editorial;
    }

    setISBN(isbn) {
        this.isbn = isbn;
    }

    setTitle(title) {
        this.title = title;
    }

    setAuthor(author) {
        this.author = author;
    }

    setPrice(price) {
        this.price = price;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    setCategory(category) {
        this.category = category;
    }

    setRating(rating) {
        this.rating = rating;
    }

    //Value
    //To JSON

    toJSON() {
        return JSON.parse(JSON.stringify({
            productid: this.productid,
            collection: this.collection,
            editorial: this.editorial,
            isbn: this.isbn,
            title: this.title,
            author: this.author,
            price: this.price,
            quantity: this.quantity,
            category: this.category,
            rating: this.rating
        }))


    }

    toValue() {
        return [`productId: ${this.productid}`, `Collection: ${this.collection}`, `Editorial: ${this.editorial}`, `ISBN: ${this.isbn}`, `Title: ${this.title}`, `Author: ${this.author}`, `Price: ${this.price}`, `Quantity: ${this.quantity}`, `Category: ${this.category}`, `Rating:${this.rating}`]
    }

    toList() {
        return [this.productid, this.collection, this.editorial, this.isbn, this.title, this.author, this.price, this.quantity, this.category, this.rating];
    }

    toList2() {
        return [this.collection, this.editorial, this.isbn, this.title, this.author, this.price, this.quantity, this.category, this.rating];
    }




}

module.exports = Product;