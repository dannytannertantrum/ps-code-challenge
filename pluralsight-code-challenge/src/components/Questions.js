import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getQuestions} from '../actions/index';
import {bindActionCreators} from 'redux';

class Questions extends Component {

  constructor(props){
    super(props);

    this.state = {
      search:''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillMount(){
    this.props.getQuestions();
  }

  onInputChange(event){
		event.persist();
    this.setState(() => ({search: event.target.value}));
	}
  
  renderQuestions(questions){
    let newDist = questions.distractors.split(',').join(', ');

    return (
      <div key={questions.id} className="question-block">
        <label>
          {questions.question}&nbsp;
          <Link to={`/edit/${questions.id}`}>Edit</Link>  
        </label>
        <p>Answer: {questions.answer}<br/>
        Distractors: {newDist}</p>
      </div>
    );
  }

  render(){
    if(this.props.questions[0]){
      let filteredQuestions = this.props.questions[0].filter((question) => {
        return question.question.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      });

      return (
        <div>
          <input
            type="text"
            placeholder="Filter questions"
            value={this.state.search}
            onChange={this.onInputChange}
          />
        {filteredQuestions && filteredQuestions.map(this.renderQuestions)}
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

function mapStateToProps({questions}) {
	return {questions};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getQuestions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);