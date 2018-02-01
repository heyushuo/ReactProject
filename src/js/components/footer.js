import React from 'react';
// var footerCss=require("../../css/footer.css")

// import "../../css/footer.css"
import footer from "../../css/footer.css"
export default class ComponentFooter extends React.Component{
	render(){
		return (
			<footer className={footer.footer +" "+ footer.aaa} >
				<h3>我是底部部分</h3>
			</footer>
		)
	}
}