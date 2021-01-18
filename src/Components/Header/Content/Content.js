import React, { Component } from 'react';
import firebase from 'firebase';
import { FcPlus } from 'react-icons/fc';
import Popup from 'reactjs-popup';
const firebaseConfig = {
    apiKey: "AIzaSyCSRz9lrw6UhwdfkZLxDbgLijEYPFKFW7c",
    authDomain: "housecleaning-48afb.firebaseapp.com",
    databaseURL: "https://housecleaning-48afb.firebaseio.com",
    projectId: "housecleaning-48afb",
    storageBucket: "housecleaning-48afb.appspot.com",
    messagingSenderId: "896399952076",
    appId: "1:896399952076:web:a37e46afa0223098a89a69",
    measurementId: "G-WY1HQ1G0GK"
  };
  firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
const dataProducts = [];
const dataId = [];
const itemOders =[];
const dataUserPhone =[];
class Content extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      isLoading: true, 
      obj :[] ,
      objId :[] ,
      objUserPhone:[],
      objItemOder:[],
      value: 0,
      query:"",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.searchInputChange = this.searchInputChange.bind(this);

  }
  getdatauser = () =>{
    database.collection('users').get()
    .then(response => {
    
        console.log(response)
        console.log("response")
        // // console.log(response.)
      
        response.forEach(document => {
          // const dataUserPhone = [];
          console.log(document.id)
          // dataUserPhone.push()
          database.collection('products').doc(document.id).collection('datas').get()
          .then(response => {
            
            console.log(response)
            // console.log(response.)
          
            response.forEach(document => {
              
              dataProducts.push(document.data())
              dataId.push(document.id)
              console.log(document.id)
            })
            this.setState({obj: dataProducts})
            this.setState({objId: dataId})
          }
          
          )
        //   dataId.push(document.id)
        //   console.log(document.id)
        })
        // this.setState({objUserPhone: dataUserPhone})
        // this.setState({objId: dataId})
      })
  }
  getData = () => {
   for(var i=0;i<this.state.objUserPhone.length;i++){
     console.log(this.state.objUserPhone)
   }
    const { obj } = this.state
    
  


  }
  // handleChange(event) {
  //   console.log(event)

  // }
  handleChange(event) {    this.setState({value: event.target.value});}
  handleClick(key,data){
    console.log(data.phoneNumber)
    database.collection('products').doc(data.phoneNumber).collection('datas').doc(this.state.objId[key]).update({
      status : this.state.value*1
    })
    console.log(key)
    console.log(this.state.value)
    this.getdatauser();
    
}

showService(key,data){

  this.setState({objItemOder: data.items_oder})
}
   
      componentDidMount() {
       this.getdatauser();
        this.getData();
        console.log(dataProducts)
        // setInterval(() => {
        //   this.getData();
        // }, 2000)
        // setInterval(this.getData(), 1000);
       
          setTimeout(() => {
            this.setState({isLoading: false,})
            this.setState({favoritecolor: "yellow"})
          }, 1000)
        }

 
    render() {
    console.log(this.state.obj)
    console.log(this.state.objId[0])
    console.log(this.state.objUserPhone)
    console.log(this.state.objItemOder)
        return (
          this.state.isLoading  ? <div><h1>loading ....</h1></div> :  <div>
              
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
            <div className="container">
              <a className="navbar-brand" href="#"></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Đã Bán</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Đơn hàng</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Thống kê</a>
                  </li>
                </ul>
              </div>
            </div>
                    </nav>
         
          <div className="card-body">
          {dataProducts == [] ? <h1>Loading</h1> : 
          <div className="datatable">
          <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_length">
              </div></div><div className="col-sm-12 col-md-6"><div id="dataTable_filter" className="dataTables_filter">
              <label>Search:<input type="search"  value={this.state.query}
            onChange={this.searchInputChange} className="form-control form-control-sm" placeholder aria-controls="dataTable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{width: '100%'}}>
                  <thead>
                  <tr><th rowSpan={1} colSpan={1}>Mã đơn hàng</th><th rowSpan={1} colSpan={1}>Người đặt</th><th rowSpan={1} colSpan={1}>Địa chỉ</th><th rowSpan={1} colSpan={1}>Số điện thoại</th><th rowSpan={1} colSpan={1}>Giá đơn hàng</th><th rowSpan={1} colSpan={1}>Thời gian giao</th><th rowSpan={1} colSpan={1}>Thang toán</th><th rowSpan={1} colSpan={1}>Xác nhận đơn 
                  </th><th rowSpan={1} colSpan={1}>Status</th><th rowSpan={1} colSpan={1}>Cập nhật</th><th rowSpan={1} colSpan={1}>Đơn hàng	</th></tr>
                  </thead>
                  {/* <tfoot>
                    <tr><th rowSpan={1} colSpan={1}>Name</th><th rowSpan={1} colSpan={1}>Position</th><th rowSpan={1} colSpan={1}>Office</th><th rowSpan={1} colSpan={1}>Age</th><th rowSpan={1} colSpan={1}>Start date</th><th rowSpan={1} colSpan={1}>Salary</th><th rowSpan={1} colSpan={1}>Status</th><th rowSpan={1} colSpan={1}>Actions</th></tr>
                  </tfoot> */}
                  <tbody>
                  {this.state.obj.map((data,i) =>(
                    <tr role="row" className="odd" key={i}> 
                  <td>{data.service_code}</td>
                  <td className="sorting_1">{data.full_name}</td>
                  <td>{data.address}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.price}</td>
                  <td>{data.time_oder}</td>
                  <td>{data.paymentType}</td>
                  <td><select className="custom-select mr-sm-2" value={this.state.value.id} onChange={this.handleChange}  >
                    <option selected value={0}>Chưa xác Nhận </option>
                    <option value={1}>Đã thu tiền </option>
                    <option value={2}>Đang giao</option>
                    <option value={3}>Đã giao</option>
                    </select>
                  </td>
                  <td>{data.status == 0 ? "Chưa xác nhận" : data.status == 1 ? "Đã thu tiền" : data.status == 2 ? "Đang giao": data.status == 3 ? "Hoàn thành": ""}</td>
                      <td>
                        <button onClick={()=>this.handleClick(i,data)} className="btn btn-datatable btn-icon btn-transparent-dark"><FcPlus /></button>
                      </td>
                      <td>
                      <Popup modal trigger={<button>Click Me</button>}>
                          <div ></div>
                      </Popup>
                        {/* <button onClick={()=>this.showService(i,data)} className="btn btn-datatable btn-icon btn-transparent-dark"><FcPlus /></button> */}
                      </td>
                    </tr>
                     ))}
                      <tr role="row" className="odd" > 
                  <td>Ư</td>
                  <td className="sorting_1">Ư</td>
                  <td>Ư</td>
                  <td>Ư</td>
                  <td>Ư</td>
                  <td>Ư</td>
                  <td>Ư</td>
                  
                
                    </tr>
                    </tbody>
                
                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li><li className="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
               

        </div>
        
          }
          
        </div>
          </div>
           

        );
    }
}

export default Content;