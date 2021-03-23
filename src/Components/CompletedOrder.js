import React, { Component } from 'react';
import database from '../firebase'
import ReactTooltip from 'react-tooltip';
import Popup from 'reactjs-popup';
const dataProducts = [];
const dataIdProducts = [];
class CompletedOder extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
          obj_product : [],
          obj_id_product:[],
          showPopup: false
        };
        this.btnConfirm = this.btnConfirm.bind(this);
      }
      
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
      getDataProduc = () =>{
            database.collection('users').get()
            .then(response => {
                response.forEach(document    => {
                    database.collection('products').doc(document.id).collection("datas").get()
        .then(response => {
            response.forEach(document => {
              if(document.data().status == 4){
                dataIdProducts.push(document.id)
                dataProducts.push(document.data())
              }
            })
            this.setState({obj_product:dataProducts})
            this.setState({obj_id_product:dataIdProducts})
          })
                })
            })
      }
      showService(){
        this.setState({open: true});
      }
      btnConfirm(index,data) {
        console.log( this.state.obj_id_product[index])
        database.collection('products').doc(data.phoneNumber).collection('datas').doc(this.state.obj_id_product[index]).update({
          status : 1
        })
        setTimeout(() => {
          window.location.reload(false);
        }, 200)
       
        console.log(data)
        console.log(index)
      }
      componentDidMount() {
        this.setState({obj_product:[]})
        this.getDataProduc();
          // setTimeout(() => {
          //   this.setState({isLoading: false,})
          //   this.setState({favoritecolor: "yellow"})
          // }, 1000)
        }
        render() {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <h1 className="my-4">Đơn hàng đã hoàn thành</h1>
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
                          <a href="#" onClick={this.togglePopup.bind(this)}> <img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                          <div className="card-body" style={{padding:"1rem"}}>
                            <li className="ellipsis">
                            <a href="#" >Mã đơn:{data.service_code}  </a>
                            </li>
                            <li className="ellipsis">
                            Số tiền:{data.allPriceService}.Đ
                            </li>
                            <li className="ellipsis">
                            Thanh toán:{data.paymentType}
                            </li>
                            <li className="ellipsis">
                            Số lượng: {data.items_oder.length} sản phẩm
                            </li>
                            <li className="ellipsis">
                            Thời gian: {data.time_oder}
                            </li>
                            <li className="ellipsis">
                            Đi giao: {data.updateby}
                            </li>
                            <li className="ellipsis">
                            Người giao: {data.user_ship['0'].name_ship}
                            </li>
                            <li className="ellipsis">
                            SDT người giao: {data.user_ship['0'].phone_ship}
                            </li>
                            <Popup modal onOpen={()=>this.showService(index,data)} trigger={ <button  > Chi tiết</button>   } >
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
                                                <tr>
                                                  <th rowSpan={1} colSpan={1}>Tên sản phẩm</th>
                                                  <th rowSpan={1} colSpan={1}>số lượng</th>
                                                  <th rowSpan={1} colSpan={1}>Đơn giá</th>
                                                  <th rowSpan={1} colSpan={1}>Thành tiền</th>
                                                </tr>
                                              <tbody>
                                                {data.items_oder.map((items,i) => (
                                                  <tr role="row" className="odd">
                                                    <td className="sorting_1">{items.name_maker}</td>
                                                    <td>{items.qty}</td>
                                                    <td>{items.price}</td>
                                                    <td>{items.qty * items.price}.đ</td>
                                                  </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            </div></div>
                                            </div>
                                    </div>
                                  </div>
                                </div>

                              </Popup>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted">Điện thoại + {data.phoneNumber}</small>
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
class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Our Company</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Team</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Our Portfolio</a>
        </li>
      </ul>
    )
  }
}
export default CompletedOder;
