import { TabBar } from 'antd-mobile';
import React, { Component } from 'react'

import hot from "assets/hot.png"
import hotActive from "assets/hot-active.png"
import location from "assets/location.png"
import locationActive from "assets/location-active.png"
import menu from "assets/menu.png"
import menuActive from "assets/menu-active.png"
import more from "assets/more.png"
import moreActive from "assets/more-active.png"

import {CookBook,Category,Map,Profile} from "./index"

import {connect} from "react-redux"

@connect((state)=>({
  isShow:state.home.isShow
}))
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {[
            <TabBar.Item
            title="美食大全"
            key="CookBook"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${hot}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${hotActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            //badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              });
            }}
            //data-seed="logId"
          >
            {/*this.renderContent('Life')*/}
            <CookBook></CookBook>
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="分类"
            key="category"
            //badge={'new'}
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
            //data-seed="logId1"
          >
            {/*this.renderContent('Koubei')*/}
            <Category></Category>
          </TabBar.Item>,
          
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${location}) center center /  21px 21px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
                />
              }
              title="美食地图"
              key="map"
              //dot
              selected={this.state.selectedTab === 'map'}
              onPress={() => {
                this.setState({
                  selectedTab: 'map',
                });
              }}
            >
              {/*this.renderContent('Friend')*/}
              <Map></Map>
            </TabBar.Item>,
          
          <TabBar.Item
            icon={{ uri: more }}
            selectedIcon={{ uri: moreActive }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            {/*this.renderContent('My')*/}
            <Profile/>
          </TabBar.Item>
          ].filter((item,index)=>{
            return (index===2&&this.props.isShow)||index!==2
          })
          }
        </TabBar>
      </div>
    );
  }
}

export default Layout