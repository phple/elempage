import React,{Component} from 'react'
import "./score.css"

class Score extends Component{
	render(){
		return(
		<div className="swiper-slide" id="hauto">
		   <div className="info">
			<div className="mark">
				<div className="num">4.2</div>
				<div className="texer">综合评分</div>
				<div className="contrast">高于周边商家69.2</div>
			</div>
			<div className="start">
				<div className="serverStore">
					<span className="attitude">服务态度</span>
					<span className="on"> <i className="iconfont icon-star"></i></span>
					<span className="on"> <i className="iconfont icon-star"></i></span>
					<span className="on"> <i className="iconfont icon-star"></i></span>
					<span className="on"> <i className="iconfont icon-star"></i></span>
					<span className="off"> <i className="iconfont icon-star"></i></span>
					<div className="on">4.1</div>
				</div>
				<div className="serverStore">
					<span className="attitude">服务态度</span>
					<span className="on"> <i className="iconfont icon-star"></i></span>
					<span className="on"> <i className="iconfont icon-star"></i></span>
					<span className="on"> <i className="iconfont icon-star"></i></span>
					<span className="on"> <i className="iconfont icon-star"></i></span>
					<span className="off"> <i className="iconfont icon-star"></i></span>
					<div className="on">4.1</div>
				</div>
				<div className="serverStore">
					<span className="texer">送达时间</span>
					<span className="time">38分钟</span>
			</div>
		</div>
	</div>
     <div className="divider"></div>	
	</div>	     
	)
	}
}

export default Score