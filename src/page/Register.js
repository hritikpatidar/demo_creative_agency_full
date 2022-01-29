import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Register() {
  return (
        <>
            <div className="brk-header-mobile">
                <div className="brk-header-mobile__open brk-header-mobile__open_white">
                <span />
                </div>
                <div className="brk-header-mobile__logo">
                <a href="#">
                    <img className="brk-header-mobile__logo-1 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-2.png" alt="alt" />
                    <img className="brk-header-mobile__logo-2 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-dark-2.png" alt="alt" />
                </a>
                </div>
            </div>
            <Header />
            <main className="main-container">
                <section>
                    <div className="row no-gutters">
                    <div className="col-12 col-lg-5 order-2 order-lg-1">
                        <div className="full-screen position-relative d-flex flex-column justify-content-center align-items-center">
                        <div className="brk-backgrounds brk-base-bg-gradient-15 brk-abs-overlay" data-brk-library="component__backgrounds_css,component__backgrounds_js,assets_particleground">
                            <div className="brk-backgrounds__canvas brk-particles-standart" />
                        </div>
                        <a href="index.html" className="z-index-2 mb-60 pl-15 pr-15">
                            <img src="img/456x82_logo.png" alt="logo" className />
                        </a>
                        <NavLink to="/" className="btn-backgrounds btn-backgrounds_transparent btn-backgrounds_left-icon font__family-montserrat font__weight-normal text-uppercase font__size-13 z-index-2 text-center" style={{paddingLeft: 85, paddingRight: 60}} data-brk-library="component__button">
                            <span className="text">Back to the Homepage</span>
                            <span className="before"><i className="fas fa-arrow-left" /></span>
                        </NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 order-1 order-lg-2">
                        <div className="full-screen d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-lg-2 col-md-1" />
                            <div className="col-12 col-md-10">
                                <h1 className="font__family-montserrat font__weight-bold font__size-42 line__height-42 mt-0 mb-45">REGISTER</h1>
                                <form action="#" className="brk-form brk-form-strict maxw-570" data-brk-library="component__form">
                                <input type="email" placeholder="Email Address" />
                                <input type="password" placeholder="Password" />
                                <div className="mt-20 d-flex flex-wrap justify-content-between">
                                    <button className="btn-backgrounds btn-backgrounds btn-backgrounds_280 btn-backgrounds_white btn-backgrounds_left-icon font__family-montserrat font__weight-bold text-uppercase font__size-13 z-index-2 text-center letter-spacing-20 mt-10" data-brk-library="component__button">
                                    <span className="text">REGISTER</span>
                                    <span className="before"><i className="far fa-hand-point-right" /></span>
                                    </button>
                                    <a href="login.html" className="btn-backgrounds btn-backgrounds_no-icon btn-backgrounds btn-backgrounds_280 btn-backgrounds_white btn-backgrounds_left-icon font__family-montserrat font__weight-bold text-uppercase font__size-13 z-index-2 text-center letter-spacing-20 mt-10" data-brk-library="component__button">
                                    <span className="text">LOGIN</span>
                                    </a>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
  );
}
