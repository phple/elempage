import React , {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import $ from 'jquery'
import Detaile from './../detaile/detaile.js'
import './rightFood.css'

class RightFoodUI extends Component{
	constructor(){
		super()
		this.state = {
			goods : [],
			money: [],
			data : null
		}
		this.isMove = false
	}
	render(){
		return(
		     <div className="rightfood">
				 <div id="swiperRight" className="foodwrapper swiper-container">
				 <ul className="swiper-wrapper">
				 {this.state.goods.map((item,index)=>{

				 	return <li className="swiper-slide hei" key={index} id="hei" onTouchStart={(ev)=>this.listmove(ev)}  onTouchEnd={(ev)=>{this.position(index,ev)}}>
						
							<h1 className="hot">{item.name}</h1>
							<ul className="ulALL">
								{this.state.goods[index].foods.map((item,index)=>{
									return <li className="foot-item" key={index}>
												<div className="icon">
													<img src={item.image} alt="1"/>
												</div>
								<div className="content">
									<h2>{item.name}</h2>
									<p className="description">{item.description}</p>
									<div className="sell-info">
										<span className="sellCount">月售{item.sellCount}份</span>
									     <span className="rating">好评率{item.rating}%</span>
									</div>
									<div className="price">
										<span className="newPrice">
											<span className="unit">￥</span>
										        <a className="newp"> {item.price}</a></span></div>							
								</div>
								<div className="cart">
									<span className="short" onTouchStart={(ev)=>{this.short(index,ev)}}><i className="iconfont icon-jian"></i></span>
									<span className="clickCount"></span>
									
									<span className="jia" onTouchStart={(ev)=>{this.jia(index,ev)}}><i className="iconfont icon-jia"></i></span>
								
								</div>		
							    </li>
							})}													
						</ul>
											
				    </li>
				 })}
				 </ul>			
				</div>
				<Detaile dataA={this.state.data}></Detaile>

		</div>				
)}
	

	jia(index,ev){
		ev.stopPropagation();
		var This = this;
		this.setState({
			allNum : $('.cart').length
		});
		$('.cart').off().on('touchstart','.jia i',function(ev){
			if(!this.num) this.num=0;
			this.num = ++this.num;
		 	ev.stopPropagation();			
			$(this).parent().prev().prev().show();
			$(this).parent().prev().show();
			$(this).attr('iactive')
			var index = $(this).index('.icon-jia');
			var priceAll = $(this).closest('.cart').prev().find('.price').find('.newPrice').find('a').text();
		    var pAll = parseInt(priceAll);
			var numAll = this.num
			var tempArr = [{
				index,
				priceAll:pAll,
				numAll
			}]
			This.props.price(tempArr);
			This.props.count(1);
			$(this).parent().prev('.clickCount').text(this.num);
				
		})
	}
	short(index,ev){
		ev.stopPropagation();
		var This = this;
		$('.cart').off().on('click','.short i',function(ev){
			if(!this.num){
				this.num = $(this).parent().next().text() -1;
			}else{
				this.num = this.num - 1;			   
			}
			$(this).parent().next('.clickCount').text(this.num);
			if($(this).parent().next().text() <= 0){
				$(this).parent().next().hide();
				 $(this).parent().hide();
			}else{}
			var fuPrice = $(this).closest('.cart').prev().find('.price').find('.newPrice').find('a').text();
			var manjian = [parseInt(-fuPrice)]

			This.props.lowPricer(manjian)
			This.props.count(-1);

		})
	}
	position(index,ev){
		ev.stopPropagation();
		
		if( Math.abs(this.isMove - ev.changedTouches[0].pageY) > 1 ){
			this.isMove = false;
		}else{

		var indexOuter = index;
		var This = this;
		$('.ulALL').off().on('click','.foot-item',function(){
			var index = $(this).index();
			var detaileDate = This.state.goods[indexOuter].foods[index];
			var detaile = {
				detaileDate
			}
		var jsonStr = JSON.stringify(detaile);
		This.setState({
			data : jsonStr
		})
		})
		var detai = $('.detaileWrap');
		 detai.animate({left:'0px'});

		 var detaileLeft = $('.slideLeft');
		 detaileLeft.on('click',function(){
		 	detai.animate({
		 		left : "375px"
		 	})
		 })
		}
	}
	listmove(ev){
		ev.stopPropagation();
		
		this.isMove = ev.changedTouches[0].pageY;

	 }


	componentWillMount(){

		axios.get('/VueDemo_Sell_Eleme/static/data.json').then((res)=>{
			
			if(res.status === 200){
				this.setState({
					goods : res.data.goods			
				})

			}
		new window.Swiper('#swiperRight',{
				direction : 'vertical',
		 	    freeMode : true	,
		 	    slidesPerView : 'auto'
		})
		})

	}
	// componentDidMount(){
	// 	new window.Swiper('#detaile',{
	// 			direction : 'vertical',
	// 	 	    freeMode : true	,
	// 	 	    slidesPerView : 'auto'
	// 	})
	// }
}

function mapStateToProps(state){
	return{
		tempData : state.tempData
	}

}
function mapDispatchToProps(dispatch){
	return{
		addData(data){
			dispatch({type:'ADD_DATA',payload:data});
		},
		price(arr){
			dispatch({
				type : "CHPRICE",
				payload : arr
				
			})
		},
		count(num){
			dispatch({type:"CHANGECOUNT",payload:num})
		},
		getDate(dataAll){
			dispatch({type : "CHANGEDATA",payload : dataAll})
		},

		lowPricer(num){
			dispatch({type : "PPRICE", payload : num})
		}
	
	}
}

var RightFood = connect(mapStateToProps,mapDispatchToProps)(RightFoodUI)


export default RightFood