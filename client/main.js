import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1>ReactApp</h1>
  );
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
})
