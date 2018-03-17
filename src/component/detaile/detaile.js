import React , {Component} from 'react'
import {connect} from 'react-redux'
import Footer from './../footer/footer.js'
import './detaile.css'

class DetaileUI extends Component{

	render(){
		var stringer = this.props.dataA;
		var obj = JSON.parse(stringer);
		return(
	    <div id="detaile" >
		<div className="detaileWrap">
		<div className="pic">
			<img src={obj && obj.detaileDate.image} alt="1" className="img1" />
			<div className="back">
		    <span className="slideLeft"><i className="icon iconfont icon-xiangyou"></i> </span> 
			</div>
		</div>
		<div className="inffo">
				<div className="tit">{obj && obj.detaileDate.name}</div>
				<div className="des">
					<span>月售</span>
					<span>好评</span>
				</div>
				<div className="price"><span>￥{obj && obj.detaileDate.price}</span></div>
				<div className="shopcart"><span>加入购物车</span></div>
			</div>
		<div className="divider"></div>
		<div className="list-inner">
			<div className="title">商品介绍</div>
		</div>
		<div className="evaluation swiper-slide">
	     	<div className="classfify">
	     		<span className="item active">全部24</span>
	     		<span className="item">推荐18</span>
	     		<span className="item">吐槽6</span>
	     	</div>
	     	<div className="switch">
	     		<span><i className="iconfont  icon-star"></i></span>
	     		<span className="preview">只看有内容的评论</span>
	     	</div>
	     	</div>
	     <Footer></Footer>
		</div>
		
	</div>
)
	}
}
function mapStateToProps(state){
	return{
		
	}
}
function mapDispatchToProps(dispatch){
	return{}
}

var Detaile = connect(mapStateToProps,mapDispatchToProps)(DetaileUI)
export default Detaile