import React,{Component} from 'react'
import "./header.css"

class Header extends Component{
	render(){
		return(
		<div id="header">
		<div className="container-wrap">
			<div className="img">
				<img src="./img/5.jpg" alt="1" />
			</div>
			<div className="content">
				<div className="title">
					<span className="logo"></span>
					<span className="name">粥品香坊(回龙观)</span>
				</div>
				<div className="discribe">蜂鸟专送 / 38分钟送达</div>
				<div className="support">
				<span className="jian"></span>
				<span className="text">在线支付满25减5</span>
			</div>
			</div>
			<div className="supportCount">
				<span className="num">5个</span>
				<span><i className="iconfont icon-xiangyou"></i></span> 
			</div>		
		</div>
		<div className="gonggao">
				<span className="gaotitle"></span>
				<span className="ph">
					粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和
				</span>
				<i className="iconfont icon-xiangyou"></i>
			</div>
			<div className="background">
				<img src="./img/5.jpg" alt="" />
			</div>
	</div>
	)

	}
}

export default Header