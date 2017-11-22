import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editQuestion} from '../actions/index';

class Edit extends Component {
  constructor(props){
    super(props);

    this.state = {
      question:'',
      answer:'',
      distractors:'',
      id:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount(){
    const val = this.props.questions[0].filter((obj) => {
      return obj.id === this.props.match.params.id;
    });

    this.setState(() => ({
      question:val[0].question,
      answer:val[0].answer,
      distractors:val[0].distractors,
      id:val[0].id
    }));
  }

  onInputChange = (event) => {
    event.persist();
    console.log(event.target.value);
    if(event.target.name === 'question'){
      this.setState(() => ({question: event.target.value}));
    } else if (event.target.name === 'answer') {
      this.setState(() => ({answer: event.target.value}));
    } else {
      this.setState(() => ({distractors: event.target.value}));
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const values = this.state;
    this.props.editQuestion(values, () => {
      this.props.history.push('/');
    });
  }

  renderQuestions(){
    const val = this.props.questions[0].filter((obj) => {
      return obj.id === this.props.match.params.id;
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          name="question"
          placeholder="Enter a new question"
          onChange={this.onInputChange}
          value={this.state.question}
          />
          <input 
            type="text"
            name="answer"
            placeholder="Enter the answer"
            onChange={this.onInputChange}
            value={this.state.answer}
          />
          <input 
            type="text"
            name="distractors"
            placeholder="Enter up to 4 distractors separated by commas"
            onChange={this.onInputChange}
            value={this.state.distractors}
          />
          <button >Submit</button>
        </form>
      </div>
    );
  }

  render() {
      return (
      <div>
        <p>Editing question with id of ...{this.props.match.params.id}</p>
        <div>
          {this.props.questions[0] && this.renderQuestions()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({questions}) {
	return {questions};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({editQuestion}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);