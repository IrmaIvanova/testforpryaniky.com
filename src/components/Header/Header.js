import React from 'react';
import "./Header.css";
import ArrowRight from './Arrows/ArrowRight';
import ArrowLeft from './Arrows/ArrowLeft';
import { connect } from 'react-redux';
function Header(props) {

  return (
    <div className="Header">
        <p>Мои Квесты</p>
        <div className="Arrows">
      <ArrowLeft onPrev={props.onPrev}/>
        {props.active}/{props.length}
        <ArrowRight onNext={props.onNext}/>
        </div>
    </div>
  );
}
const mapStateToProps = (store) =>({
    active: store + 1
  })
const mapDispatchToProps = dispatch => {
    return {
      onPrev:() =>
        dispatch({type:'DECREAMENT_PAGE'}),
      onNext:() => 
       dispatch({type:'INCREAMENT_PAGE'})
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header);

