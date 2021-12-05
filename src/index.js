import React from "react";
// import { Component } from 'react';
import ReactDom from "react-dom";

// // **Lecture = 1**

// // capitalise the first letter of Greeting
// function Greeting() {
//   return <h4>this is roopam and this is my first component.</h4>;
// }

// // Always close the components

// ReactDom.render(<Greeting />, document.getElementById("root"));

// **Lecture - 2 **

// // stateless functional Component
// // always return JSX

// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// }

// // const Greeting = () => {
// //   // return React.createElement('h1',{},'hello world')
// //   return React.createElement(
// //     "div",
// //     {},
// //     React.createElement("h1", {}, "hello world")
// //   );
// // };

// ReactDom.render(<Greeting />, document.getElementById("root"));

// **Lecture - 3 **

// // div/ section / article fragment
// // use camelCase for html atribute
// // className instead of class
// // close evry element
// // formatting

// function Greeting() {
//   return (
//     // do not create the div soup
//     // to avoid div soup , we use <> </>
//     //capitalise C in onClick and instead of class use className
//     <>
//       <div onClick="" className="">
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//           <img src="" alt="" />
//         </ul>
//       </div>
//       <div></div>
//     </>
//   );
// }

// ReactDom.render(<Greeting />, document.getElementById("root"));

// **Lecture - 4 **

// function Greeting() {
//   return (
//     <div>
//       <Person> </Person>
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };

// ReactDom.render(<Greeting />, document.getElementById("root"));

// **Lecture - 5 -- PROJECT **

// function BookList() {
//   return (
//     <section>
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const BookList = () => {
//   return (
//     <section>
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };

// const Book = () => {
//   return (
//     <article>
//       <Image />
//       <Author />
//       <BookName />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
//     alt=""
//   />
// );

// const Author = () => <h1>Paulo Coelho</h1>;
// const BookName = () => <h1>The Alchemist</h1>;

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 6 __ CSS*

// import "./index.css";

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Author />
//       <BookName />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
//     alt=""
//   />
// );

// const Author = () => <h1>Paulo Coelho</h1>;
// const BookName = () => <h1>The Alchemist</h1>;

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 7 __ JSX - CSS**

// import "./index.css";

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <BookName />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
//     alt=""
//   />
// );

// const BookName = () => <h1>The Alchemist</h1>;

// // this is how you add 'Inline' CSS

// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>Paulo Coelho</h4>
// );

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 8 __ JSX - JS**

// import "./index.css";

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book />
//     </section>
//   );
// }

// const author = "Paulo Coelho";

// const Book = () => {
//   const title = "The Alchemist";

//   return (
//     <article className="book">
//       <img
//         src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"
//         alt=""
//       />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <h4>{author.toUpperCase()}</h4>
//       {/* <p>{let x = 6}</p> */}
//       <p>{6 + 6}</p>
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 9----- PROPS**

// import "./index.css";
// //setup vars

// const author = "Paulo Coelho";
// const title = "The Alchemist";
// const img =
//   "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg";

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book job="developer" />
//       <Book title={"random title"} number={22} />
//     </section>
//   );
// }

// const Book = (props) => {
//   // console.log(props);

//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 9.2----- PROPS**

// import "./index.css";
// //setup vars

// const firstBook = {
//   img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
//   title: "The Alchemist",
//   author: "Paulo Coelho",
// };

// const secondBook = {
//   img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
//   title: "Ikigai: The Japanese secret to a long and happy life",
//   author: "Héctor García",
// };

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       />
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// const Book = (props) => {
//   // console.log(props);

//   return (
//     <article className="book">
//       <img src={props.img} alt="" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 9.3----- PROPS**

// import "./index.css";
// //setup vars

// const firstBook = {
//   img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
//   title: "The Alchemist",
//   author: "Paulo Coelho",
// };

// const secondBook = {
//   img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
//   title: "Ikigai: The Japanese secret to a long and happy life",
//   author: "Héctor García",
// };

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       />
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// // const Book = (props) =>{

// //     const {img, title, author} = props

// //     return (
// //         <article className='book'>

// //              <img src={img} alt="" />
// //              <h1>{title}</h1>
// //              <h4>{author}</h4>

// //         </article>
// //     )
// // }

// const Book = ({ img, title, author }) => {
//   // const {img, title, author} = props

//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 9.4----- PROPS CHILDREN**

// import "./index.css";
// //setup vars

// const firstBook = {
//   img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
//   title: "The Alchemist",
//   author: "Paulo Coelho",
// };

// const secondBook = {
//   img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
//   title: "Ikigai: The Japanese secret to a long and happy life",
//   author: "Héctor García",
// };

// function BookList() {
//   return (
//     <section className="bookList">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut
//           dicta itaque reiciendis accusantium illum soluta provident porro
//           asperiores delectus?
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author, children } = props;

//   console.log(props);

//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 10----- Simple List**

// import "./index.css";

// // const books = [
// //   {
// //     img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
// //     title: "The Alchemist",
// //     author: "Paulo Coelho",
// //   },

// //   {
// //     img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
// //     title: "Ikigai: The Japanese secret to a long and happy life",
// //     author: "Héctor García",
// //   },
// // ];

// const names = ["john", "susan", "peter"];

// const newNames = names.map((name) => {
//   //   console.log(name);
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

// function BookList() {
//   return <section className="bookList">{newNames}</section>;
// }

// // const Book = (props) => {
// //   const { img, title, author, children } = props;

// //   return (
// //     <article className="book">
// //       <img src={img} alt="" />
// //       <h1>{title}</h1>
// //       <h4>{author}</h4>
// //       {children}
// //     </article>
// //   );
// // };

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 11----- Proper List**

// import "./index.css";

// const books = [
//   {
//     img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//   },

//   {
//     img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
//     title: "Ikigai: The Japanese secret to a long and happy life",
//     author: "Héctor García",
//   },

//   {
//     img: "https://m.media-amazon.com/images/I/91b0X3BfLfL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "J.K. Rowling",
//   },
// ];

// function BookList() {
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         const { img, title, author } = book;
//         return <Book book={book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   //   console.log(props);
//   const { img, title, author } = props.book;

//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 12.1----- Key Prop and Spread Operator**

// import "./index.css";

// const books = [
//   {
//     id: 1,
//     img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//   },

//   {
//     id: 2,
//     img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
//     title: "Ikigai: The Japanese secret to a long and happy life",
//     author: "Héctor García",
//   },

//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/91b0X3BfLfL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "J.K. Rowling",
//   },
// ];

// function BookList() {
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         // const { img, title, author } = book;
//         return <Book key={book.id} book={book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   //   console.log(props);
//   const { img, title, author } = props.book;

//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

// *Lecture - 12.2----- Key Prop and Spread Operator**

// import "./index.css";

// const books = [
//   {
//     id: 1,
//     img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//   },

//   {
//     id: 2,
//     img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
//     title: "Ikigai: The Japanese secret to a long and happy life",
//     author: "Héctor García",
//   },

//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/91b0X3BfLfL._AC_UY327_FMwebp_QL65_.jpg",
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "J.K. Rowling",
//   },
// ];

// function BookList() {
//   return (
//     <section className="bookList">
//       {books.map((book) => {
//         // const { img, title, author } = book;
//         return <Book key={book.id} {...book}></Book>;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   //   console.log(props);
//   const { img, title, author } = props;

//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

// // *Lecture - 13----- Event Basics**

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },

  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91b0X3BfLfL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //attribute, event handler
  //onClick, onMouseOver
  // const clickHandler = () => {
  //   alert("Hello World");
  // };
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      {/* inline function  */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* // referencing the function */}
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
