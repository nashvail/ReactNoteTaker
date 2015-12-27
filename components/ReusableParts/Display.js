var React = require('react');

var Display = React.createClass({
	render() {
		console.log('The value of if is ' + this.props.if);
		return (this.props.if) ? <div>{this.props.children}</div> : null;
	}
});

module.exports = Display;