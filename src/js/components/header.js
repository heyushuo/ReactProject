import React from 'react';
import ReactDom from 'react-dom';

export default class Header extends React.Component{
	render(){
		//需要放到render函数里边
		//行内样式
		const style={
			header: {
				color: "red",
				backgroundColor: "yellow",
				paddingTop: "15px",
				paddingBottom: "20px"
			}
		}
		return (
			<header className="smallFont" style={style.header} >
				<h1>我是头部 我的老大是何玉硕 我是头部 我是头部</h1>
			</header>
		)
	}
}