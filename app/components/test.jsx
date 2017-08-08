import React from 'react';
class Test extends React.Component {
	render(){
		return (
			<div>这是一个测试组件{this.props.skill}
				<button onClick={this.onTap}>Ok</button>
			</div>
		)
	}
	onTap(){
		console.log("test")
	}
}
module.exports = Test;