import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Home extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h5 className="my-4">Quản lý đơn hàng</h5>
                <div className="list-group">
                  <a href="#" className="list-group-item">Tất đơn hàng</a>
                  <a href="#" className="list-group-item">Đang đợi xác nhận</a>
                  <a href="#" className="list-group-item">Đã thành công</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Home;