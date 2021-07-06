function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                <p>
                  Copyright &copy;
                  {new Date().getFullYear()}
                  All rights reserved | Epanorthose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
