import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { get } from "../../../utils/http"
import { HotCateWrap } from './StyledCookbook'

// const data1 = Array.from(new Array(9)).map(() => ({
//     title:"xxx",
//   }));



export default class HotCate extends Component {
    state={
        hotList:[]
    }
    async componentDidMount(){
        let result=await get({
            url:"/api/hotcate"
        })
        let data = result.map((value)=>({
            key:value.id,
            title:value.title
        }))
        this.setState({
            hotList:data
        })
    }

    _renderItem=dataItem=>(
        <div className="item">
            <span>{dataItem.title}</span>
        </div>
    )

    render() {
        return (
            <HotCateWrap>
                <header>热门分类</header>
                <Grid data={this.state.hotList}
                columnNum={4}
                // hasLine={false}
                square={false}
                renderItem={this._renderItem}
                />
            </HotCateWrap>
        )
    }
}
