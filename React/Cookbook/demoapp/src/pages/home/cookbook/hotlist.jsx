import React, { Component } from 'react'
import {HotListWrap} from "./StyledCookbook"
import {connect} from "react-redux"
import { get } from "../../../utils/http"


// @connect((state)=>({
//     hotlist:state.home.list
// }))
class HotList extends Component {
    state={
        hotList:[]
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
            hotList:data
        })
    }

    render() {
        return (
            <HotListWrap>
                <header>精品好菜</header>
                <div>
                    {
                        this.state.hotList.map(value=>(
                            <figure key={value.id}>
                                <img src={value.img} alt=""/>
                                <figcaption>
                                    <h3>{value.title}</h3>
                                </figcaption> 
                            </figure>
                        ))
                    }
                </div>
            </HotListWrap>
        )
    }
}

export default HotList