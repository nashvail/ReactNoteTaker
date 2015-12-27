var React = require('react');

class ListHeader extends React.Component {
	constructor(props) {
		super(props);	

		this.addNew = this.addNew.bind(this);
	}

	addNew(){
		alert('A new notebook will be added');
	}

	render() {
		return (
			<div className="header">
				<div className="row">
					<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
						<h3 className="heading">{this.props.title}</h3>
					</div>
					<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
						<button type="button" className="btn btn-primary" onClick={this.addNew}>&#43;</button>
					</div>
				</div>
			</div>
		);
	}	
};

module.exports = ListHeader;