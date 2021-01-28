import React, { Component } from 'react';
import { FcPlus } from 'react-icons/fc';
import Popup from 'reactjs-popup';
import database from '../../../firebase'

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
      value: '',
    };
    // this.handleChange = this.handleChange.bind(this);
    this.searchInputChange = this.searchInputChange.bind(this);
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
        })
      })
  }
  getData = () => {
   for(var i=0;i<this.state.objUserPhone.length;i++){
     console.log(this.state.objUserPhone)
   }
    const { obj } = this.state
  }
  searchInputChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
    this.filterArray();

  }
 
  // searchInputChange(event) { 
  //      this.setState({
  //       query: event.target.query,
  //       });
  //       console.log(this.state.query)
  // }
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
    this.setState({open: true});
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

    filterArray = () => {
      var searchString = this.state.value;
      var responseData = this.state.obj
      if(searchString.length > 0){
          // console.log(responseData[i].name);
          responseData = responseData.filter(l => {
              console.log( l.service_code.toLowerCase().indexOf(searchString, searchString).match(searchString));
          })
      }
    }
 
    render() {
    console.log(this.state.obj)
    console.log(this.state.objId[0])
    console.log(this.state.objUserPhone)
    console.log(this.state.objItemOder)
      return (
        this.state.isLoading  ? <div><h1>loading ....</h1></div> :  <div>
        <div className="card-body">
        {dataProducts == [] ? <h1>Loading</h1> : 
        <div className="datatable">
        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_length">
            </div></div><div className="col-sm-12 col-md-6"><div id="dataTable_filter" className="dataTables_filter">
            <label>Search:<input type="search"  value={this.state.value}
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
                  <tr role="row" className="odd" > 
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
                  
                    <Popup modal onOpen={()=>this.showService(i,data)} trigger={ <button  > Chi tiết</button>   } >
                    <div className="card mb-4 popup" style={{width: '100%', background: 'whitesmoke'}} >
                        <div className="card-header">Danh sách đơn hàng</div>
                        <div className="card-body">
                          <div className="datatable">
                            <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row">
                              <div className="col-sm-12 col-md-6">
                                <div className="dataTables_length" id="dataTable_length">
                                  </div></div><div className="col-sm-12 col-md-6"></div></div><div className="row"><div className="col-sm-12"><table className="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{width: '100%'}}>
                                    <thead>

                                    </thead>
          
                                      <tr><th rowSpan={1} colSpan={1}>Tên sản phẩm</th><th rowSpan={1} colSpan={1}>số lượng</th><th rowSpan={1} colSpan={1}>Đơn giá</th><th rowSpan={1} colSpan={1}>Thành tiền</th></tr>
                                    
                                    <tbody>
                                      {this.state.objItemOder.map((items,i) => (
                                        <tr role="row" className="odd">
                                          <td className="sorting_1">{items.name_maker}</td>
                                          <td>{items.qty}</td>
                                          <td>{items.price}</td>
                                          <td>{items.qty * items.price}.đ</td>
                                        </tr>
                                      ))}
                                      

                                      </tbody>
                                  </table></div></div>
                                  </div>
                          </div>
                        </div>
                      </div>

                    </Popup>
                
                      
                      
                    
                      {/* <button onClick={()=>this.showService(i,data)} className="btn btn-datatable btn-icon btn-transparent-dark"><FcPlus /></button> */}
                    </td>
                  </tr>
                    ))}
                  </tbody>
              
              </table></div></div></div>
    
              

      </div>
        
          }
          
        </div>
          </div>
           

        );
    }
}

export default Content;