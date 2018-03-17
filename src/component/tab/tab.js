import React,{Component} from 'react'
import{NavLink} from 'react-router-dom'
import "./tab.css"

class Header extends Component{
	render(){
		return(
	  <div id="tab">
		<div className="tabitem"><NavLink activeClassName="active" to="/index">商品</NavLink></div>
		<div className="tabitem"><NavLink activeClassName="active" to="/upvote">评论</NavLink></div>
		<div className="tabitem"><NavLink activeClassName="active" to="/index">商家</NavLink></div>
	</div>
	)

	}
}

export default Header