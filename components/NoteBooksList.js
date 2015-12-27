var React = require('react');

var NoteBook = require('./NoteBook');
var ListHeader = require('./ReusableParts/ListHeader');

// Importing test data
var notebooksData = require('../testdata/notebooks.js');

class NoteBooksList extends React.Component {
	constructor(props) {
		super(props);	

		this.state = {
			selectedNotebook: {},
			notebooks: []
		};

		this.newNotebookSelected = this.newNotebookSelected.bind(this);
		this.renderNoteBook = this.renderNoteBook.bind(this);
	}

	componentWillMount() {
		this.state.notebooks = notebooksData;      
	}

	componentDidUpdate(prevProps, prevState) {
		if( this.state.selectedNotebook.name !== prevState.selectedNotebook.name )
			this.newNotebookSelected();
	}

	componentWillUpdate(nextProps, nextState) {

	}

	newNotebookSelected() {
		console.log('A new notebook was selected');
		this.props.callbackParent.setState({ selectedNotebook: this.state.selectedNotebook});
	}

	renderNoteBook(notebookId, notebookData) {
		return(
			<NoteBook
				{...this.state}
				key={notebookId}
				notebookData={notebookData}
				callbackParent={this}/>
		);
	}

	render() {
		return (
			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 notebooks-list">
				<ListHeader title="Notebooks" />
				<div className="list">
					{this.state.notebooks.map((notebook, index) => {
						return this.renderNoteBook(index, notebook);
					})}
				</div>
			</div>
		);
	}	
};

module.exports = NoteBooksList;