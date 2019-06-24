import React, { Component } from 'react';

class SearchRequest extends Component {
	constructor(props){
		super(props);
		this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({value: event.target.value.toUpperCase()});
	}



	render(){
		return(
			<div>
				<input type="text" onChange={this.handleChange} value={this.state.value} />
				<hr/>
				<span>
					{this.state.value}
				</span>
			</div>
		);
	}
}

export default SearchRequest;