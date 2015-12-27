var React = require('react');

var Note = require('./Note');
var ListHeader = require('./ReusableParts/ListHeader');
var Display = require('./ReusableParts/Display');

class NotesList extends React.Component {
	constructor(props) {
		super(props);	

		this.renderNote = this.renderNote.bind(this);
	}

	componentWillMount() {
	}

	renderNote(noteContent) {
		return (
			<Note content={noteContent}/>
		);
	}

	render() {
		return (
			<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 notes-list">
				<ListHeader title={"Notes in " + this.props.notebook.name } />
				<Display if={this.props.notebook.notes.length}>
					{this.props.notebook.notes.map((note) => this.renderNote(note.content))}
				</Display>
				<Display if={!this.props.notebook.notes.length}>
					<h3>No notes found</h3>
				</Display>
			</div>
		);
	}	
};

module.exports = NotesList;