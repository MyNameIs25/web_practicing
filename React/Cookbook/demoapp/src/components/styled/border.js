import styled from "styled-components"
const border=({Comp}) => {
    const BorderComp=styled(Comp)`
        border-width:${props=>props.width||"1px"};
        border-color:${props=>props.color||"red"};
        border-style:${props=>props.style||"solid"};
        border-radius:${props=>props.radius||0};
    `
    return BorderComp
}

export default border