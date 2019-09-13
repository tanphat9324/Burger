import React, { Component } from 'react'
import '../style.css';
import CuaHang from './CuaHang';
import Menu from './Menu';

export default class BaiTap extends Component {
    render() {
   

        return (
            <div>
            <div className="container burger">
                <div className="burger_store">
                <h3 className="text-center">Cua hang burger Cybersoft</h3>
                    <div className="breadTop"></div>
                        <CuaHang/>
                    <div className="breadBottom"></div>
                </div>
                <Menu/>

            </div>
            </div>
        )
    }
}
