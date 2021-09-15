import React, { Component } from 'react';
import database from '../firebase'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const dataProducts = [];
const dataIdProducts = [];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      obj_product : [],
      obj_id_product:[],
    };
    this.btnOffMaker = this.btnOffMaker.bind(this);
    this.btnOpenMaker = this.btnOpenMaker.bind(this);
  }
  getDataProduc = () =>{
    database.collection('maker').get()
    .then(response => {
        response.forEach(document => {
          dataIdProducts.push(document.id)
          dataProducts.push(document.data())
         
        })
        this.setState({obj_product:dataProducts})
        this.setState({obj_id_product:dataIdProducts})
      })
  }
  btnOffMaker(index,data) {
    console.log( this.state.obj_id_product[index])
    database.collection('maker').doc(this.state.obj_id_product[index]).update({
      status : 1
    })
    console.log("off")
    setTimeout(() => {
      window.location.reload(false);
    }, 200)
   
    console.log(data)
    console.log(index)
  }
  btnOpenMaker(index,data) {
    console.log( this.state.obj_id_product[index])
    database.collection('maker').doc(this.state.obj_id_product[index]).update({
      status : 0
    })
    console.log("open")
    setTimeout(() => {
      window.location.reload(false);
    }, 200)
   
    console.log(data)
    console.log(index)
  }
  componentDidMount() {
    this.getDataProduc();

    axios.post('https://itc.hubt.edu.vn/dang-nhap', {
            "username": 18103488,
            "password": "svhubt"
        })
      .then(function (response) {
        console.log(response);
      })
    }
    render() {
      console.log(this.state.obj_product)
        return (
          <div className="container">
  <div className="row">
    <div className="col-lg-3">
      <h1 className="my-4">Tất cả sản phẩm</h1>
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
      <div className="row">
      {this.state.obj_product.map((data,index) =>(
        <div className="col-lg-4 col-md-6 mb-4">
         
            <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
            <div className="card-body" style={{padding:"1rem"}}>
                            <li className="ellipsis">
                            <a href="#" >Sản phẩm:{data.name_product}  </a>
                            </li>
                            <li className="ellipsis">
                            Đơn giá:{data.price}.Đ
                            </li>
                            <li className="ellipsis">
                            Định lượng:{data.unit}
                            </li>
                            <li className="ellipsis">
                            Trạng thái:{data.status ==  0 ? "Đang bán": "Không bán"}
                            </li>
                            
                          </div>
            <div className="card-footer">
              {data.status == 0 ?  <small className="text-muted"><button onClick={() => this.btnOffMaker(index,data)} >Đóng </button> </small> : <small className="text-muted"><button onClick={() => this.btnOpenMaker(index,data)} >Mở bán </button> </small>}
              
            </div>
          </div>
          
        </div>
        ))}
      </div>
      {/* /.row */}
    </div>
    {/* /.col-lg-9 */}
  </div>
  {/* /.row */}
</div>

        );
    }
}

export default Home;