/**
 * @author wency0
 * @description 菜单测试1
 */
import React from 'react';
import {Icon } from 'antd';
import { connect } from 'dva';


class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTest: null
    };
  }
  changePropsState = ()=>{

    this.props.dispatch({
      type:'test1/changeState',
      payload:{
        state1:this.props.test1.state1?false:true
      }
    });
  }
  render() {

    return (
      <div >
        <div
          style={{height:100,width:100,backgroundColor:'darkgreen',color:'#fff',margin:'200px 200px'}}
          onClick={this.changePropsState} hidden={this.props.test1.state1?'':'hidden'}>
          <Icon type = 'user'/>
          testUser1
        </div>
        <div
          style={{height:100,width:100,backgroundColor:'darkred',color:'#fff',margin:'200px 200px'}}
          onClick={this.changePropsState} hidden={this.props.test1.state1?'hidden':''}>
          <Icon type = 'user'/>
          testUser2
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { test1: state.test1 };
}

export default connect(mapStateToProps)(Test1);
