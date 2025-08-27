const books= [];


function book(author,title,pages,read){
  this.id=crypto.randomUUID();
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.read=read;

}
function addbook(){

  const book=new book(author,title,pages,read);
  books.push(book);
};

