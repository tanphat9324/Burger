import React, { Component } from 'react'
import {connect} from 'react-redux';

class CuaHang extends Component {
    render() {
        let renderCuaHang=()=>{
            let thanhPhan=Object.getOwnPropertyNames(this.props.spBurgera);
            let index=Object.values(this.props.spBurgera);
           return index.map((sp,index)=>{
               if(sp>=1){
                   return(
                       <div key={index} className={thanhPhan[index]}></div>
                   )
               }
           })
          
        }
        return (
            <div>
                {renderCuaHang()}               
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        spBurgera:state.ThanhToanBurger.burger
    }
}

export default connect(mapStateToProps,null)(CuaHang);