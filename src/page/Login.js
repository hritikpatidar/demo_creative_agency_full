import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Login() {
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
            <div className="brk-info-menu">
                <div className="brk-info-menu__bar">
                <button className="brk-info-menu__close" />
                <h3 className="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">More info</h3>
                <div className="brk-categories mb-20" data-brk-library="component__widgets">
                    <div className="brk-categories__list font__family-open-sans font__size-14 font__weight-normal">
                    <a href="#" className="brk-categories__item">
                        <span className="brk-categories__item-name">General</span>
                        <span className="brk-categories__item-count">12</span>
                    </a>
                    <a href="#" className="brk-categories__item active">
                        <span className="brk-categories__item-name">Mockups</span>
                        <span className="brk-categories__item-count">14</span>
                    </a>
                    <a href="#" className="brk-categories__item">
                        <span className="brk-categories__item-name">HTML &amp; CSS</span>
                        <span className="brk-categories__item-count">18</span>
                    </a>
                    <a href="#" className="brk-categories__item">
                        <span className="brk-categories__item-name">Logo</span>
                        <span className="brk-categories__item-count">21</span>
                    </a>
                    <a href="#" className="brk-categories__item">
                        <span className="brk-categories__item-name">Web Design</span>
                        <span className="brk-categories__item-count">6</span>
                    </a>
                    </div>
                </div>
                <h3 className="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">Our instagram</h3>
                <div className="default-slider dots-base-skin dots-base-color slick-loading mt-15" data-slick="{&quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1, &quot;dots&quot;: true, &quot;autoplay&quot;: false, &quot;autoplaySpeed&quot;: 4000}" data-brk-library="slider__slick">
                    <div>
                    <div className="brk-header-slider">
                        <div className="brk-header-slider__img">
                        <img src="img/309x206_1.jpg" alt="alt" />
                        </div>
                        <div className="brk-header-slider__content">
                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt" />
                        <div className="brk-header-slider__content--title">
                            <h4 className="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
                            <span className="font__size-14">17 Hours ago</span>
                        </div>
                        </div>
                        <p className="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante, dapibus in, viverra</p>
                    </div>
                    </div>
                    <div>
                    <div className="brk-header-slider">
                        <div className="brk-header-slider__img">
                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_2.jpg" alt="alt" />
                        </div>
                        <div className="brk-header-slider__content">
                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt" />
                        <div className="brk-header-slider__content--title">
                            <h4 className="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
                            <span className="font__size-14">17 Hours ago</span>
                        </div>
                        </div>
                        <p className="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante, dapibus in, viverra</p>
                    </div>
                    </div>
                    <div>
                    <div className="brk-header-slider">
                        <div className="brk-header-slider__img">
                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_3.jpg" alt="alt" />
                        </div>
                        <div className="brk-header-slider__content">
                        <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt" />
                        <div className="brk-header-slider__content--title">
                            <h4 className="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
                            <span className="font__size-14">17 Hours ago</span>
                        </div>
                        </div>
                        <p className="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante, dapibus in, viverra</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <main className="main-container">
                <section>
                    <div className="row no-gutters">
                    <div className="col-12 col-lg-5 d-lg-block d-none">
                        <div className="full-screen position-relative d-flex flex-column justify-content-center align-items-center z-index-2">
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
                    <div className="col-12 col-lg-7">
                        <div className="full-screen d-flex align-items-center pt-30 pb-30 pt-lg-0 pb-lg-0">
                        <div className="container-fluid">
                            <div className="row justify-content-lg-start justify-content-center">
                            <div className="col-lg-2 d-none d-lg-block" />
                            <div className="col-12 col-lg-10">
                                <h1 className="font__family-montserrat font__weight-bold font__size-42 line__height-42 mt-0 mb-45 text-center text-lg-left">LOGIN</h1>
                                <form action="#" className="brk-form brk-form-strict maxw-570 mx-auto mx-lg-0" data-brk-library="component__form">
                                <input type="text" placeholder="Username or Email Address" />
                                <input type="password" placeholder="Password" />
                                <div className="no-margin pl-10 pr-10 mb-30 mt-40 d-flex flex-wrap justify-content-between align-items-center">
                                    <div>
                                    <input id="checkbox-strict-1" name="checkbox" type="checkbox" defaultValue={1} defaultChecked="checked" />
                                    <label className="brk-form-checkbox-label" htmlFor="checkbox-strict-1">Remember Me</label>
                                    </div>
                                    <div>
                                    <a className="font__size-14 line__height-24 brk-base-font-color text-decoration_underline" href="#">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between align-items-center flex-column flex-lg-row">
                                    <button className="btn-backgrounds btn-backgrounds btn-backgrounds_280 btn-backgrounds_white btn-backgrounds_left-icon font__family-montserrat font__weight-bold text-uppercase font__size-13 z-index-2 text-center letter-spacing-20 mt-10" data-brk-library="component__button">
                                    <span className="text">Login Now</span>
                                    <span className="before"><i className="far fa-hand-point-right" /></span>
                                    </button>
                                    <a href="#" className="btn-backgrounds btn-backgrounds btn-backgrounds_280 btn-backgrounds_white font__family-montserrat font__weight-bold text-uppercase font__size-13 z-index-2 text-center letter-spacing-20 mt-10" data-brk-library="component__button">
                                    <span className="text">Sign up</span>
                                    <span className="before"><i className="fas fa-user" /></span>
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
