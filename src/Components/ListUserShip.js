import React, { Component } from 'react';
import database from '../firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const dataProducts = [];
class ListUserShip extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      obj_product : [],
    };
  }
  getDataUser = () =>{
    database.collection('account').get()
    .then(response => {
        response.forEach(document => {
          dataProducts.push(document.data())
         
        })
        this.setState({obj_product:dataProducts})
      
      })
  }
  componentDidMount() {
    this.getDataUser();
      // setTimeout(() => {
      //   this.setState({isLoading: false,})
      //   this.setState({favoritecolor: "yellow"})
      // }, 1000)
    }
    render() {
      console.log(this.state.obj_product)
        return (
          <div className="container">
  <div className="row">
    <div className="col-lg-3">
      <h1 className="my-4">Danh sách người ship</h1>
      <div className="list-group">
      <a href="/Home" className="list-group-item">Tất cả sản phẩm</a>
      <a href="/allservice" className="list-group-item">Sản phẩm đợi xác nhận</a>
      <a href="/aredelivered" className="list-group-item">Sẳn phẩm Đang giao</a>
      <a href="/delivered" className="list-group-item">Sản phẩm đã giao</a>
      <a href="/CompletedOder" className="list-group-item">Đơn hàng đã hoàn thành</a>
      <a href="/oderday" className="list-group-item">Đặt nhiều ngày</a>
      <a href="/ListUser" className="list-group-item">Danh sách người dùng</a>
      <a href="/ListUserShip" className="list-group-item">Danh sách người ship</a>
      </div>
    </div>
    {/* /.col-lg-3 */}
    <div className="col-lg-9">
    <div className="col-sm-12"><table className="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{width: '100%'}}>
    <thead>
    <tr><th rowSpan={1} colSpan={1}>Tên</th><th rowSpan={1} colSpan={1}>Giới tính</th><th rowSpan={1} colSpan={1}>Ngày sinh</th><th rowSpan={1} colSpan={1}>Số điện thoại</th><th rowSpan={1} colSpan={1}>Trạng thái</th></tr>
    </thead>
    
    <tbody>
        {this.state.obj_product.map((user,index) =>(
            <tr role="row" className="odd">
        <td className="sorting_1">{user.name_ship}</td>
        <td>{user.sex}</td>
        <td>{user.birthday}</td>
        <td>0 {user.phone_ship}</td>
        <td>{user.status == true ? "active": "inactive"}</td>
       
      </tr>
        ))}
     </tbody>
  </table></div>

      {/* /.row */}
    </div>
    {/* /.col-lg-9 */}
  </div>
  {/* /.row */}
</div>

        );
    }
}

export default ListUserShip;