import React, { Component } from 'react';
import firebase from 'firebase';
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
class Content extends Component {
  constructor(props) {
    super(props);
    
    this.state = { isLoading: true, obj :[] ,value: 0 }

  }
  getData = () => {
    const { obj } = this.state
    database.collection('products').doc('327966332').collection('datas').get()
  .then(response => {
    
    console.log(response)
    // console.log(response.)
  
    response.forEach(document => {
      dataProducts.push(document.data())
      console.log(dataProducts)
    })
    this.setState({obj: dataProducts})
  }
  
  )


  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

    
    handleClick = (index) => {
      
      // var x = document.getElementById("value").value;
// var tes = document.getElementsByClassName
// document.getElementById("inlineFormCustomSelect").value = 1
        // console.log(x);
        // console.log(index);
// database.collection('products').doc('327966332').collection('datas').doc('uZbt4H8mamYV4CC37EVE').update({
//     status : x*1
// })

      }
   
      componentDidMount() {
       
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
          <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_length"><label>Show 
            <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="dataTable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="dataTable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{width: '100%'}}>
                  <thead>
                  <tr><th rowSpan={1} colSpan={1}>Người đặt</th><th rowSpan={1} colSpan={1}>Địa chỉ</th><th rowSpan={1} colSpan={1}>Số điện thoại</th><th rowSpan={1} colSpan={1}>Giá đơn hàng</th><th rowSpan={1} colSpan={1}>Thời gian giao</th><th rowSpan={1} colSpan={1}>Thang toán</th><th rowSpan={1} colSpan={1}>Xác nhận đơn 
                  </th><th rowSpan={1} colSpan={1}>Status</th><th rowSpan={1} colSpan={1}> <button onClick={this.handleClick} className="btn btn-datatable btn-icon btn-transparent-dark"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg></button></th></tr>
                  </thead>
                  {/* <tfoot>
                    <tr><th rowSpan={1} colSpan={1}>Name</th><th rowSpan={1} colSpan={1}>Position</th><th rowSpan={1} colSpan={1}>Office</th><th rowSpan={1} colSpan={1}>Age</th><th rowSpan={1} colSpan={1}>Start date</th><th rowSpan={1} colSpan={1}>Salary</th><th rowSpan={1} colSpan={1}>Status</th><th rowSpan={1} colSpan={1}>Actions</th></tr>
                  </tfoot> */}
                  <tbody>
                  {this.state.obj.map((data,i) =>(
                    <tr role="row" className="odd">
                      <td className="sorting_1">{data.full_name}</td>
                  <td>{data.address}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.price}</td>
                  <td>{data.time_oder}</td>
                  <td>{data.paymentType}</td>
                  <td><select className="custom-select mr-sm-2"  value={this.state.value} onChange={this.handleChange} >
                    <option selected value={0}>Chưa xác Nhận </option>
                    <option value={1}>Đã thu tiền </option>
                    <option value={2}>Đang giao</option>
                    <option value={3}>Đã giao</option>
                    </select>
                  </td>
                  <td>{data.status == 0 ? "Chưa xác nhận" : data.status == 1 ? "Đã thu tiền" : data.status == 2 ? "Đang giao": data.status == 3 ? "Hoàn thành": ""}</td>
                      <td>
                        <button onClick={this.handleClick(i)} className="btn btn-datatable btn-icon btn-transparent-dark"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg></button>
                      </td>
                    </tr>
                     ))}
                    </tbody>
                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li><li className="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
        </div>
          }
          
        </div>
        
        
          {/* <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button onClick={this.handleClick}>
                Click me
              </button> */}
            {/* <table>
              <thead key="thead">
                <tr>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {dataProducts.map((data,i) =>(
                  <tr ><td key={i}>
                    {data.full_name}
                    </td></tr>
                ))}
              </tbody>
            </table>
               */}
          </div>
           

        );
    }
}

export default Content;