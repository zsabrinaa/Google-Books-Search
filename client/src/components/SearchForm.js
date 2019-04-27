import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group test">
      <h1>Google Books</h1>
        <label htmlFor="search">Search For Books:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Title"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
