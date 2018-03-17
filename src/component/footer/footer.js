import React , {Component} from 'react'
import {connect} from 'react-redux'
import './footer.css'

class FooterUI extends Component{

	render(){
		var allPrice = 0;
			for(var i = 0 ;i<this.props.price.length;i++){
				allPrice += Number(this.props.price[i].priceAll);
			}
			for(var j = 0 ; j < this.props.truePrice.length; j++){
				allPrice  +=  Number(this.props.truePrice[j])
			}
		return(
			
			<div id="foot">
				<div className="shop">
				{this.props.num !== 0 ? 
					<i className="iconfont icon-gouwuche1 changecolor temp"></i> :
					<i className="iconfont icon-gouwuche1 changecolor"></i>
					
				  }
				<div className="badge">
					{this.props.num}</div>
			     </div>
				
				<div className="pri">￥{allPrice}</div>
				<div className="desc">另需要配送费4元</div>
				{ allPrice !== 0 ?
					
					<div className="content-right enough">去结算</div> : 
					<div className="content-right">￥{allPrice}起送</div>

				}				
			</div>			
			)
	}}


function mapStateToProps(state){
	return{
		price : state.price,
		num : state.countAll,
		truePrice : state.lowPrice
	}
}

function mapDispatchToProps(dispatch){
	return{

	}

}



var Footer = connect(mapStateToProps,mapDispatchToProps)(FooterUI)
export default Footer