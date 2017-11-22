import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {getQuestions} from '../actions/index';

class Home extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.getQuestions();
	}

	render(){
		return (
			<div>
				<button onClick={this.handleClick}>Get questions</button>
				<button><Link to="/create" >Create new question</Link></button>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getQuestions}, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);