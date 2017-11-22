import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createQuestion} from '../actions/index';

class CreateQuestion extends Component {
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

  onInputChange = (event) => {
    event.persist();
    if(event.target.name === 'question'){
      this.setState(() => ({question: event.target.value}), () => {
        this.setState(() =>({id: event.target.value}));
      });
    } else if (event.target.name === 'answer') {
      this.setState(() => ({answer: event.target.value}));
    } else {
      this.setState(() => ({distractors: event.target.value}));
    }
	}

  handleSubmit = (e) => {
    e.preventDefault();
    const values = this.state;
    this.props.createQuestion(values, () => {
      this.props.history.push('/');
    });
  }

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="question"
          placeholder="Enter a new question" 
          onChange={this.onInputChange}  
        />
        <input 
          type="text"
          name="answer"
          placeholder="Enter the answer" 
          onChange={this.onInputChange}  
        />
        <input 
          type="text"
          name="distractors"
          placeholder="Enter up to 4 distractors separated by commas" 
          onChange={this.onInputChange}  
        />
        <button>Submit</button>
			</form>
		);
	}
}

// hook up the action creator fetchWeather to SearchBar container
function mapDispatchToProps(dispatch){
	return bindActionCreators({createQuestion}, dispatch);
}

// null is the first argument because this container doesn't care about the state at all
export default connect(null, mapDispatchToProps)(CreateQuestion);