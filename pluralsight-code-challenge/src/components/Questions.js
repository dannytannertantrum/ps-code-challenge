import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Questions extends Component {
  
  renderQuestions(questions){
    return (
      <p key={questions.id}>
        {questions.question}&nbsp;
        <Link to={`/edit/${questions.id}`}>Edit</Link>  
      </p>
    );
  }

  render(){
    console.log(this.props.questions[0]);
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

export default connect(mapStateToProps)(Questions);