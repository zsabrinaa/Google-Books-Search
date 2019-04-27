import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  componentDidMount(){
    API.getBook(this.props.match.params.id)
    .then(({data}) => {
      this.setState({
        book:data
      })
    }).catch((err => console.log(err)))  
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h4>
                {this.state.book.title} by {this.state.book.author}
              </h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
               {this.state.book.synopsis ? (
                 <p style={{backgroundColor:"white",opacity:"0.8"}}>{this.state.book.synopsis}</p>
               ): ( <h3>No Synopsis to Display</h3>)
               }              
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/books/saved">← Back to Collection</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
