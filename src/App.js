import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/MainContent/Content";
import Actions from "./components/Actions/Actions";
import data from './data.json';
import Rewards from "./components/MainContent/Rewards";
import {connect} from 'react-redux';

function App({active}) {

  return (
    <div className="App">
      <div className="Inner">
      <Header 
      length={data.length}/>
      
      <div className="ContentBox">
        <Content 
        data = { data[active] }
      />
      <Rewards 
       data = { data[active].rewards }  />
       </div>
      <Actions
        data = { data[active].actions }
      />
      </div>


    </div>
  );
}

const mapStateToProps = (store) =>({
  active: store
})

export default connect(mapStateToProps)(App);

