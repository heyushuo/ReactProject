import React from 'react';

export default class ComponentMain extends React.Component{
	render(){
		let username="heyushuo";
		const flag=false;
		const html='hello&nbsp;heyushuo';
		return (
			<div>
				<h2>我是主题部分</h2>
				<p>{ username==''?'用户还没有登陆':'用户名'+ username }</p>
				<p><input type="button" value={username} disabled={flag} /></p>
				{/*这里是注释内容*/}
				<p>{html}</p>  {/*需要使用  Unicode  的转码*/}
				<p dangerouslySetInnerHTML={{__html : html}}></p>
			</div>
		)
	}
}