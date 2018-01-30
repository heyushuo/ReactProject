import React from 'react';
import ReactDom from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentMain from './components/main';
class HomeIndex extends React.Component{
	render(){
		return (
			<div>
				<ComponentHeader />
				<ComponentMain/>
				<ComponentFooter />
			</div>

		)
	}
}

ReactDom.render(
	<HomeIndex />,
	document.getElementById("example")
)
