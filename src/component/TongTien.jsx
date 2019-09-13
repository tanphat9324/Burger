import React, { Component } from 'react'
import {connect} from 'react-redux';

 class TongTien extends Component {
    render() {
        return (
            <tr>
                <td scope="row"></td>
                <td>
                <p className="">Tong Tien</p>
                </td>
                <td>{this.props.tong}</td>
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