import Head from "next/head";

export default function AuthLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="signup-assets/css/style.css" />
        <link rel="stylesheet" href="signup-assets/css/set1.css" />
      </Head>
      <main>
        <div id="main-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 left-side">
                <header>
                  <h3>
                    Epanorthose                    
                  </h3>
                </header>
              </div>
              <div className="col-md-6 right-side">
                {children}
              </div>
            </div>
          </div>
        </div>
        <script src="signup-assets/js/scripts.js"></script>
        <script src="signup-assets/js/classie.js"></script>
      </main>
      <style jsx>{`
        .right-side {
          overflow: auto;
        }
      `}</style>
    </>
  );
}
