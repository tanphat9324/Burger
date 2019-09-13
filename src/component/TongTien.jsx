import React, { Component } from 'react'
import {connect} from 'react-redux';

 class TongTien extends Component {
    render() {
        return (
            <tr>
                <td scope="row"></td>
                <td>
                <strong className="">Tổng Tiền</strong>
                </td>
                <td><strong>{this.props.tong}</strong></td>
        </tr>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        tong:state.ThanhToanBurger.total
    }
}

export default connect(mapStateToProps,null)(TongTien);