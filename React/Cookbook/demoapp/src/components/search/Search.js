import React, { Component } from 'react'
import searchImg from "assets/search.png"
import {SearchWarp} from "./styledSearch"

export default class Search extends Component {
    render() {
        return (
            <SearchWarp width="0">
                <div>
                    <img src={searchImg}/>
                    <span>想吃什么搜这里，如川菜</span>
                </div>
            </SearchWarp>
        )
    }
}
