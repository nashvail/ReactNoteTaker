var React = require('react');
var Utils = require('./utils.js');

// Components
var NoteBooksList = require('./NoteBooksList');
var NotesList = require('./NotesList');
var Display = require('./ReusableParts/Display');

class APP extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {
			// supposed to be pulled from the localStorage
			notebooks: [],
			selectedNotebook: {}
		};
	}

	componentWillMount() {
	}

	componentDidUpdate(prevProps, prevState) {
	}

	render() {
		return (
			<div>
				<div className="row">
					<NoteBooksList callbackParent={this} />
					<Display if={!Utils.isEmptyObject(this.state.selectedNotebook)}>
						<NotesList notebook={this.state.selectedNotebook} />
					</Display>
					<Display if={Utils.isEmptyObject(this.state.selectedNotebook)}>
						<h3>Select a notebook to begin</h3>
					</Display>
				</div>
			</div>
		);
	}	
};

module.exports = APP;
