var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var VocaComponent = React.createClass({
  getInitialState : function() {
    return {
      vocas: ['apple','boy', 'cinammon'],
      level: 3
    }
  },
  render: function() {
    // this 
    var levelr = setTimeout(function() {
      this.setState({
        level: 5
      });
    }.bind(this), 5000);


    return(
      <div id='voca-list'>
        <p>Vocabulary.</p>
        <p>{this.state.level}</p>
        <ul>
          <li>{this.state.vocas[0]}</li>
          <li>{this.state.vocas[1]}</li>
          <li>{this.state.vocas[2]}</li>
        </ul>
      </div>
    );
  }
});


// put component into html page
ReactDOM.render(
  <VocaComponent />,
  document.getElementById('voca-wrapper')
);
