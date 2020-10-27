import styled from "styled-components"

export const CateWrap=styled.div`
    height:100%;
    display:flex;
    .left{
        width:.9rem;
        ul{
            height:100%;
            overflow-y:scroll;
            li{
                height:.5rem;
                text-align:center;
                line-height:.5rem;
                background:#f3f3f3;
                &.active{
                    background:#fff;
                    span{
                        display:inline-block;
                        height:100%;
                        border-bottom:2px solid #ee742f;
                    }
                }
            }
        }
    }
    .right{
        flex:1;
        background:#fff;
        text-align:left;
        padding:.2rem .1rem;
        ul{
            list-style:none;
            display:flex;
            flex-wrap:wrap;
            overflow-y:scroll;
            height:100%;
            align-content:flex-start;
            li{
                width:33.3333%;
                text-align:center;
                height:.5rem;
                line-height:.5rem;
                color:#666;
            }
        }
    }
`