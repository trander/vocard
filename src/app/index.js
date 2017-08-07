var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var VocaComponent = React.createClass({
  getInitialState : function() {
    return {
      vocas: ['apple','boy', 'cinammon', 'dangerous']
    }
  },
  render: function() {
    var vocas = this.state.vocas;
    vocas = vocas.map(function(item, index) {
      return (
        <li>{item}</li>
      )
    })

    return(
      <div id='voca-list'>
        <p>Vocabulary.</p>
        <p>{this.state.level}</p>
        <ul>{vocas}</ul>
      </div>
    );
  }
});


// put component into html page
ReactDOM.render(
  <VocaComponent />,
  document.getElementById('voca-wrapper')
);
