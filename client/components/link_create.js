import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSumbit(e) {
    e.preventDefault();
    console.log(this.refs.input.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSumbit.bind(this)}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="input" className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    )
  }
};

export default LinkCreate;
