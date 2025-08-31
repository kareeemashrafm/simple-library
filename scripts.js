const books= [];


function Book(title,author,pages){
  this.id=crypto.randomUUID();
  this.author=author;
  this.title=title;
  this.pages=pages;

}
function addbook(title,author,pages){

  const book=new Book(title,author,pages);
  books.push(book);
  displaybook();
};

function displaybook(){
  const container=document.getElementById("bookcontainer");
  container.innerHTML="";

  books.forEach((book) =>{

    const card=document.createElement("div");
    card.classList.add("bookcard");
    card.innerHTML=`
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
    `
    container.appendChild(card);
  })
  
  
}

const addbutton=document.getElementById("addbutton");
  const form=document.getElementById("form");
  addbutton.addEventListener("click",()=>{
    form.style.display="block";
  })

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  addbook(title,author,pages);
  this.reset();
  this.style.display="none";
});


