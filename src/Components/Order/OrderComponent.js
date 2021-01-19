import React, { Component } from 'react';
import database from '../../firebase'

const dataMaker = [];
class OrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         objMaker:[]
        };
    }
    getdatauser = () =>{
    database.collection("maker").get().then(response => {
        response.forEach(document =>{
            dataMaker.push(document.data())
        }) 
        this.setState({objMaker: dataMaker})
    })
    
    
    }
    componentDidMount() {
         this.getdatauser();
            setTimeout(() => {
                this.setState({isLoading: false,})
                this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    render() {
        console.log(this.state.objMaker)
        return (
            <div className="card mb-4">
                <div className="card-header">Danh sách mặt hàng được bán</div>
                <div className="card-body">
                    <div className="datatable">
                    <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="dataTable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="dataTable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-bordered table-hover dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{width: '100%'}}>
                        <tr>
                            <th rowSpan={1} colSpan={1}>Tên sản phẩm</th>
                            <th rowSpan={1} colSpan={1}>Giá</th>
                            <th rowSpan={1} colSpan={1}>key giảm giá</th>
                            <th rowSpan={1} colSpan={1}>% giảm giá</th>
                            <th rowSpan={1} colSpan={1}>Đánh giá</th>
                            <th rowSpan={1} colSpan={1}>Đơn vị</th>
                            <th rowSpan={1} colSpan={1}>Số hỗ trợ</th>
                            <th rowSpan={1} colSpan={1}>Đại chỉ/chi nhánh</th>
                            <th rowSpan={1} colSpan={1}>Status</th>
                            <th rowSpan={1} colSpan={1}>Chỉnh sửa</th>
                        </tr>
                        <tbody>
                            {this.state.objMaker.map((data,i) => (
                                <tr role="row" className="odd">
                                    <td className="sorting_1">{data.name_product}</td>
                                    <td>{data.price}</td>
                                    <td>{data.name_sale}</td>
                                    <td>{data.sale_percent}</td>
                                    <td>{data.star}</td>
                                    <td>{data.unit}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.address}</td>
                                    <td>{data.status == 0 ?<div className="badge badge-primary badge-pill">Được bán</div> : <div className="badge badge-warning badge-pill">Không bán</div>} </td>
                                    <td>
                                        <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg></button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                     </div>
                            <div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li><li className="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
                    </div>
                </div>
                </div>

        );
    }
}

export default OrderComponent;

// "90 quán thánh , ba đình , hà nội"
// id
// 2
// id_product
// 3
// image
// "assets/images/raucu.jpg"
// images
// 0
// img
// "assets/images/giavi.jpg"
// name_product
// "Bánh giò"
// name_sale
// "THODZd"
// phone
// 8427966332
// price
// 20000
// sale_percent
// 50
// scales
// 1
// star
// 3
// unit
// "Cái"