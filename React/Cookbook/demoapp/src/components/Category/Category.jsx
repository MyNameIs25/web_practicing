import React, { Component } from 'react'
import {CateWrap} from "./styledgory"
import {get} from "../../utils/http"

export default class Category extends Component {
    state={
        datasource:null,
        currentItem:"",
        defaultItem:""
    }
    static getDerivedStateFromProps(props, state){
        if(props.defaultItem !== state.defaultItem){
            return{
                ...state,
                defaultItem:props.defaultItem,
                currentItem:props.defaultItem
            }
        }
        return null
    }

    async componentDidMount(){
        let result=await get({
            url:"/api/category"
        })
        this.setState({
            datasource:result.data,
            currentItem:"热门"
        })
    }
    handleItem=(item)=>{
        return ()=>{
            this.setState({
                currentItem:item
            })
        }
    }

    render() {
        let {type}=this.props
        let data=this.state.datasource?Object.keys(this.state.datasource[type]):[]
        let content=this.state.datasource?this.state.datasource[type][this.state.currentItem]:[]
        return (
            <CateWrap>
                <div className="left">
                    <ul>
                        {
                            data.map(value=>{
                                return(
                                    this.state.currentItem===value?
                                    <li key={value} className="active"><span>{value}</span></li>:<li key={value} onClick={this.handleItem(value)}><span>{value}</span></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        {
                            content.map(value=>{
                                return(
                                <li key={value}>{value}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </CateWrap>
        )
    }
}
