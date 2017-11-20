import React, {Component} from 'react';
import {connect} from 'react-redux';

class Questions extends Component {
  
  renderQuestions(questions){
    return (
      <p key={questions.question}>{questions.question}</p>
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