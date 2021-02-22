import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

//Custom Link

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="#page-top" style={{color: "#FF9900",fontSize:"30px"}}>MORNING FOOD</a>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> Menu
                            <svg className="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>{/* <i class="fas fa-bars"></i> Font Awesome fontawesome.com */}
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" style={{color: "#FF9900",fontSize:"20px"}} href="/">Trang chủ</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" style={{color: "#FF9900",fontSize:"20px"}} href="/about">Thống kê</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" style={{color: "#FF9900",fontSize:"20px"}} href="/contact">Quản lí</a></li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    {/* { this.showMenus(menus) } */}
                </ul>
            </nav>
        );
    }
}

export default Menu;