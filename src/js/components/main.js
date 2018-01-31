import React from 'react';

export default class ComponentMain extends React.Component{

	componentWillMount(){
		//组件将要加载时
		console.log("组件将要加载时");
	}

	componentDidMount(){
		console.log("组件加载完调用");
	}


	render(){
		let username="heyushuo";
		const flag=false;
		const html='hello&nbsp;heyushuo';
		return (
			<div>
				<div>
					{this.props.userId} {this.props.username}
				</div>
				<h2>我是主题部分</h2>
				<p>{ username==''?'用户还没有登陆':'用户名'+ username }</p>
				<p><input type="button" value={username} disabled={flag} /></p>
				{/*这里是注释内容*/}
				<p>{html}</p>  {/*需要使用  Unicode  的转码*/}
				<p dangerouslySetInnerHTML={{__html : html}}></p>
				<h2>主题部分结束</h2>
				<h1>生命周期开始</h1>
				<div>
					render()函数结束后，<br/>
					第一次调用结束后<br/>
					1.组件将要加载的函数 componentWillMount();<br/>
					2.组件加载完成后     componentDidMount();<br/>
					之后在调用render()<br/>
					1.组件跟新前         componentWillUpdata();
					<br/>
					2.组件跟新完成后     componentDidUpdata();
					<br/>
					组件删除的时候会调用 componentWillUnmount();
					<br/>
					<img src="./src/img/React生命周期函数.png" alt=""/>
					<br/>
					<img src="./src/img/React生命周期.png" alt=""/>
				</div>
			</div>
		)
	}
}