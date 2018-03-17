import React , {Component} from 'react'
import Menu from './../menu/menu.js'
import RightFood from './../rightFood/rightFood.js'
import './content.css'
class Content extends Component{
	render(){
		return(
			<div id="good">
			     <Menu></Menu>
			     <RightFood></RightFood>	
			</div>
			)
	}
}


export default Content