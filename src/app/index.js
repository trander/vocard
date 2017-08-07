var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var VocaComponent = React.createClass({
  render: function() {
    return(
      <h1>Hellooooooo</h1>
    );
  }
});

// put component into html page
ReactDOM.render(
  <VocaComponent />,
  document.getElementById('voca-wrapper')
);
