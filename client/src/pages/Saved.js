import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import BookDetail from "../components/BookDetail";
import DeleteBtn from "../components/DeleteBtn";
class Saved extends Component {
    state = {
      books: []
    };

componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data)
        this.setState({ books: res.data})
      })
      .catch(err => console.log(err));
  };
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
    render(){
return(
    <Container fluid>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Books Collection </h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}> 
                    <BookDetail
                      src={book.src}
                      title={book.title} 
                      author={book.authors}
                    />
                  </Link>
                  <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
       
      </Container>
)
    }
};
export default Saved;
