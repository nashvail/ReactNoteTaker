var React = require('react');

class NoteBook extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			data: {}
		};

		this.handleClick = this.handleClick.bind(this);
		this.selectedClass = this.selectedClass.bind(this);
	}

	componentWillMount() {
		this.setState({
			data: this.props.notebookData
		});
	}

	handleClick() {
		this.props.callbackParent.setState({ selectedNotebook: this.state.data });
	}

	selectedClass() {
		if ( this.state.data.name === this.props.selectedNotebook.name )
			return 'selected';
		else 
			return '';
	}

	render() {
		return (
			<div onClick={this.handleClick} className={"notebook " + this.selectedClass() }>
				{this.state.data.name}
			</div>
		);
	}	
};

module.exports = NoteBook;