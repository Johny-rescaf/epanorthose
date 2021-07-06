import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function PostsPage() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        <section className="col-md-12 bg-light px-md-5" style={{ height: '200px' }}>
          <div>

          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="btn" style={{ borderRadius: "15px" }}>Contact</button>
              <button className="btn ml-1" style={{ borderRadius: "15px" }}>Contact</button>
            </div>
            <div>
              <div className="bg-white" style={{ width: '250px', height: '120px' }}>
              </div>
            </div>
            <div>
              <button className="btn" style={{ borderRadius: "15px" }}>Contact</button>
              <button className="btn ml-1" style={{ borderRadius: "15px" }}>Contact</button>
            </div>
          </div>
        </section>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-info">Recherche</button>
      </div>
      <div className="row px-md-5 my-3">
        <div className="col-md-6">
          <img className="img-fluid"src="/images/big_img_1.jpg" />
          <p className="mt-2 pb-0" style={{textAlign: "center", fontSize: "1.1rem"}}>Breack through by xenos frudakis in philadelphia</p>  
        </div>
        <div className="col-md-6">
          <div className="" style={{border: "2px solid #333", height: "100%"}}>
          </div>  
        </div>
      </div>
      <div className="row px-md-5 my-3">
        <div className="col-md-6">
          <p className="mt-2 pb-0 py-2" style={{textAlign: "center", fontSize: "1rem"}}>Epanorthose est une <i>Non Profit Association (ASBL du droit belge)</i></p>  
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <Link href="/posts">
              <a className="btn py-3" style={{ borderRadius: "15px" }}>ACCES AU SITE</a>
            </Link>
          </div>  
        </div>
      </div>


    </div>
  )
}