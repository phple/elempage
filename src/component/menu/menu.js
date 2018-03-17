import React , {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import './menu.css'

class MenuUI extends Component{
	constructor(){
		super()
		this.state = {
			goods : []
		}
		this.isMover = false
	}
	render(){
		return(
			<div id="swiperMenu" className="menu swiper-container">
			<div className="swiper-wrapper">
			<ul className="swiper-slide">
				{
					this.state.goods.map((item,index)=>{
						return <li key={index} onTouchEnd={(evt)=>this.bindTouch(index,evt)}  onTouchStart={(event)=>{this.menuposition(index,event)}}><span className="spanitem">
						<span></span><span className="spantext">{item.name}</span></span></li>
					})
				}
			</ul> 
			</div>
		  </div>
  )}
	bindTouch(index,evt){
		if( Math.abs(this.isMover - evt.changedTouches[0].pageY) > 1 ){
			this.isMover = false

		}else{

		var swiperRight = document.getElementById('swiperRight');
		var swiperRightUl = swiperRight.getElementsByClassName('swiper-wrapper')[0];
		var swiperRightLi = swiperRightUl.getElementsByClassName('swiper-slide');
		swiperRightUl.style.transition = 'all .5s linear 0s'
		swiperRightUl.style.transform = 'translateY('+ -swiperRightLi[index].offsetTop +'px)';
		}

	}
	menuposition(index,event){
		event.stopPropagation()
		this.isMover = event.changedTouches[0].pageY;

	}
	componentWillMount(){
		axios.get('/VueDemo_Sell_Eleme/static/data.json').then((res)=>{
			if(res.status === 200){
				this.setState ({
					goods : res.data.goods
				})

			}
		})
		
	}
	componentDidMount(){
		new window.Swiper('#swiperMenu',{
				 direction : 'vertical'
			})	
	}
	
}
function mapStateToProps(state){
	return{
		ulHeight: state.changeUl
	}	
}
function mapDispatchToProps(dispatch){
	return{}
}
var Menu = connect(mapStateToProps,mapDispatchToProps)(MenuUI)
export default Menu