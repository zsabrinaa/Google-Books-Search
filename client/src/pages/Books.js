import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/SearchForm";
import BookDetail from "../components/BookDetail";

class Books extends Component {
  state = {
    books: [],
    search: "",
    title: "",
    author: "",
    src: "",
    synopsis: ""
  };

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
  };

  saveBook = (title, author, src,synopsis) => {
    API.saveBook(title, author, src,synopsis)
      .then(
        this.setState({
          title: this.state.title,
          author: this.state.author,
          src: this.state.src,
          synopsis: this.state.synopsis
        })
      ).catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">  
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-6 sm-12">
           
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>                  
                    <BookDetail
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      title={book.volumeInfo.title}
                      author={book.volumeInfo.authors}
                    />
                    <SaveBtn onClick={() => {
                      this.saveBook(
                        book.volumeInfo.title,
                        book.volumeInfo.authors,
                        book.volumeInfo.imageLinks.smallThumbnail,
                        book.volumeInfo.description)
                    }
                    } />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h5 style={{color:""}}>No Results to Display</h5>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
