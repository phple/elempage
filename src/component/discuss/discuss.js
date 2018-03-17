import React,{Component} from 'react'
import axios from 'axios'
import "./discuss.css"

class Discuss extends Component{
     constructor(){
          super();
          this.state = {
               ratings : [],
               time : ''
          }
          this.timer = this.timer.bind(this)
     }
	render(){
		return(
		<div className="evaluation swiper-slide">
	     	<div className="classfify  swiper-wrapper">
	     		<span className="item active">全部24</span>
	     		<span className="item">推荐18</span>
	     		<span className="item">吐槽6</span>
	     	</div>
	     	<div className="switch">
	     		<span><i className="iconfont  icon-star"></i></span>
	     		<span className="preview">只看有内容的评论</span>
	     	</div>
     	<div className="evel-list">
     		<ul>
               {
                    this.state.ratings.map((item,index)=>{
                         return <li className="eve" key={index}>
                         <div className="picture">
                              <img src={item.avatar} alt="1" />
                         </div>
                         <div className="content">
                              <div className="user">
                                   <span className="name">{item.username}</span>
                                   <span className="rateTime">{this.timer(item.rateTime)}</span>
                              </div>
                              <div className="start-wrapper">
                                   <div className="start">
                                        <span className="on"> <i className="iconfont icon-star"></i></span>
                                        <span className="on"> <i className="iconfont icon-star"></i></span>
                                        <span className="on"> <i className="iconfont icon-star"></i></span>
                                        <span className="on"> <i className="iconfont icon-star"></i></span>
                                        <span className="on">
                                         <i className="iconfont icon-star"></i></span>                                       
                                   </div>
                                   <span className="min">{item.deliveryTime}分钟送达</span>
                              </div>
                              <div className="pre">
                                   {item.text}
                              </div>
                              <div className="recommed">
                                   <span><i className="iconfont icon-xin"></i></span>
                                   {this.state.ratings[index].recommend.map((item,index)=>{
                                        return <span className="dish" key={index}>{item}</span>
                                   })}                                 
                              </div>
                         </div>         
                    </li>
                    })
               }                  
     		</ul>
     	</div>
     </div>	
	)
	}
  
componentWillMount(){
          axios.get('/VueDemo_Sell_Eleme/static/data.json').then((res)=>{
               if(res.status === 200){
                    this.setState({
                         ratings : res.data.ratings
                    })
                    new window.Swiper('#con',{
                         direction : "vertical",
                         freeMode : true     ,
                         slidesPerView : 'auto'
                    })
               }              
          })
}

timer(data){
     var timer = "";  
     var date = new Date()
     date.setTime(data)
     timer = (date.getFullYear())+"年" + (date.getMonth()+1)+"月" + (date.getDay()) + "日" +(date.getHours()) + ":" + (date.getMinutes());
     return timer
}
  }
export default Discuss