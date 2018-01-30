import React from 'react';
import ReactDom from 'react-dom';
import ComponentHeader from './components/header';

class HomeIndex extends React.Component{
	render(){
		return (
			<div>
				<ComponentHeader />
				<div className="main">
					我是body部分
				</div>
			</div>

		)
	}
}

ReactDom.render(
	<HomeIndex />,
	document.getElementById("example")
)
