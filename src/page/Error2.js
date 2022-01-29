import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Error2() {
  return (
        <>
            
            
            <div class="brk-header-mobile"></div>
            <Header />
            <div class="brk-info-menu"></div>
            <div className="main-wrapper">
                <main className="main-container">
                    <section className="brk-backgrounds full-screen d-flex flex-column align-items-center justify-content-center" data-brk-library="component__backgrounds_css,component__backgrounds_js">
                    <div className="brk-backgrounds__before brk-bg-gradient--260deg-96" />
                    <canvas id="brk-metaballs" className="brk-backgrounds__canvas" />
                    <div className="brk-backgrounds__content">
                        <div className="container">
                        <div className="maxw-770 z-index-1 pt-80 pb-80">
                            <h2 className="font__family-montserrat font__weight-bold text-white brk-error-page-title">403</h2>
                            <hr className="brk-dashed-border-transparent mt-25 mb-50" />
                            <h3 className="font__family-montserrat font__size-48 line__height-52 text-white text-center mb-10">
                            <span className="font__weight-bold">Oops! </span>
                            <span className="font__weight-light">Forbidden Error.</span>
                            </h3>
                            <h4 className="font__family-montserrat font__size-21 line__height-24 font__weight-normal text-white opacity-60 text-center mb-50">
                            It looks like you don't have access to view this page.
                            </h4>
                        </div>
                        </div>
                    </div>
                    </section>
                </main>
            </div>
            <Footer />
  
        </>
  );
}
