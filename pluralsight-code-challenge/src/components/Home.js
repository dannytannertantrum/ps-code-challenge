import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Home = () => (
	<div>
		<button><Link to="/list" >Get questions</Link></button>
		<button><Link to="/create" >Create new question</Link></button>
	</div>
);

export default Home;