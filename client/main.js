var ReactDOM = require('react-dom');
var React = require('react');
var HelloMessage = require('./component');
window.onload = function(){
    ReactDOM.render(<HelloMessage />, document.getElementById('app'));
};

