import React, { Component } from 'react'
import {connect} from 'react-redux';
import TongTien from './TongTien';
 
class Menu extends Component {
    render() {
        let renderMenu=()=>{  
            let thanhPhan=Object.getOwnPropertyNames(this.props.spBurgera);
            let soLuong=Object.values(this.props.spBurgera);
            let Gia=Object.values(this.props.Gia);            
            return thanhPhan.map((sp,index)=>{
                    return(
                        <tr key={index} >
                        <td  scope="row">{sp}</td>
                        <td>
                        <button className="btn btn-success" onClick={()=>this.props.tangGiamSoLuong(sp,true,soLuong)}>+</button>
                        <span className="soLuong">{soLuong[index]}</span>
                        <button className="btn btn-danger" onClick={()=>this.props.tangGiamSoLuong(sp,false,soLuong)}>-</button>
                        </td>
                        <td>{soLuong[index]*Gia[index]}</td>
                    </tr>
                    )
            })
         }
        
        return (
            <div className="burger_menu">
            <h3 className="text-center">Chọn thức ăn</h3>
             <table className="table">
                 <thead>
                     <tr>
                         <th>Thức ăn</th>
                         <th></th>
                         <th>Giá</th>
                     </tr>
                 </thead>
                 <tbody>
                {renderMenu()}
                {this.props.tongTien()}
                <TongTien/>
                     <tr>
                <td scope="row"></td>
                <td><div className="thanhToan"><button className="btn btn-success ">Thanh Toán</button></div></td>
                </tr>
                 </tbody>
             </table>
            </div>
           
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        spBurgera:state.ThanhToanBurger.burger,
        Gia:state.ThanhToanBurger.menu
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        tangGiamSoLuong:(loai,tangGiam,soLuong)=>{
            const action={
                type:'TANG_GIAM',
                loai,
                tangGiam,
                soLuong
            }
            dispatch(action);
        },
        tongTien:()=>{
            const action={
                type:'TONG',
            }
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);