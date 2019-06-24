import React, { Component } from 'react';

class Userinput extends Component {
	constructor(props){
		super(props);
		this.state = {value: '', products: [], hasProducts: false};
		

		this.handleChange = this.handleChange.bind(this);
	}


	handleChange(event){

		this.setState({value: event.target.value.toUpperCase()});
		if(event.target.value !== "" && event.target.value.length >= 1) {
			this.getResult(event.target.value);
		}else{
			this.setState({ hasProducts: false });
		}
	}

	getResult(q){
		fetch("https://www.pricerunner.dk/public/search/suggest/dk?q=" + q)
		.then(res => res.json())
		.then(
			(results) => {
				const products = results.products;

				this.setState({ hasProducts: true });
				this.setState({ products });
			}
		)
	}

	render(){
		const hasProducts = this.state.hasProducts;

		return (
			<div className="container">
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<hr/>
				{hasProducts &&
					<ul>
						{this.state.products.map(product =>
							<li key={product.id}>
								<a href={"https://www.pricerunner.dk"+product.url} target="_blank" rel="noopener noreferrer">
									{product.name}<img alt={product.name} src={"https://images.pricerunner.com/product/200x200/"+ product.imageId} />
								</a>
							</li>
						)}
					</ul>
				}
				
			</div>
		);
	}
}

export default Userinput