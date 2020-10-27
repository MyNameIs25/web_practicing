import React, { Component } from 'react'
import { Carousel } from "antd-mobile"
import { SwiperWrap } from "./StyledCookbook"
import { connect } from "react-redux"
import { get } from "../../../utils/http"
import {GETLIST} from "../action-types"


// import swiper1 from "assets/swiper-1.jpg"
// import swiper2 from "assets/swiper-2.jpg"
// import swiper3 from "assets/swiper-3.jpg"

// const mapState=state=>({
//     list:state.home.list
// })

// const mapDispatch=dispatch=>({
//     loadData(){
//         dispatch({
//             type:GETLIST,
//             url:"/api/list"
//         })
//     }
// })

// @connect(mapState,mapDispatch)
 
class Swiper extends Component {
    state={
        swiperList:[]
    }

    async componentDidMount(){
        let result=await get({
            url:"/api/list"
        })
        let data = result.map((value)=>({
            key:value.id,
            title:value.title,
            img:value.img
        }))
        this.setState({
            swiperList:data
        })
        console.log(result)
    }

    render() {
        return (
            <SwiperWrap>
                {
                    this.state.swiperList.length&&(
                        <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                            {/* <img src={swiper1}/>
                            <img src={swiper2}/>
                            <img src={swiper3}/> */}
                            {
                                this.state.swiperList.slice(0,5).map((value)=><img key={value.id} src={value.img} alt=""/>)
                            }
                        </Carousel>
                    )
                }
            </SwiperWrap>
        )
    }
}

export default Swiper