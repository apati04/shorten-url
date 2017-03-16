import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSumbit(e) {
    e.preventDefault();

    Meteor.call('links.insert', this.refs.link.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSumbit.bind(this)}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    )
  }
};

export default LinkCreate;
