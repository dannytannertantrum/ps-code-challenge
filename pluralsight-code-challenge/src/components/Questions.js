import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getQuestions} from '../actions/index';
import {bindActionCreators} from 'redux';

class Questions extends Component {

  componentWillMount(){
    this.props.getQuestions();
  }
  
  renderQuestions(questions){
    return (
      <p key={questions.id}>
        {questions.question}&nbsp;
        <Link to={`/edit/${questions.id}`}>Edit</Link>  
      </p>
    );
  }

  render(){
    return (
      <div>
        {this.props.questions[0] && this.props.questions[0].map(this.renderQuestions)}
      </div>
    );
  }
}

function mapStateToProps({questions}) {
	return {questions};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getQuestions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);