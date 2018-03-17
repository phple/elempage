import React,{Component} from 'react'
import "./upvote.css"
import Score from './../score/score.js'
import Discuss from './../discuss/discuss.js'

class Upvote extends Component{
	render(){
		return(
		
				<div className="swiper swiper-container" id="con">
				<div id="ratings-content" className="wrapper swiper-wrapper">		
				   <Score  />
				   <Discuss></Discuss>
				</div>
				</div>
		)	
	}
}

export default Upvote