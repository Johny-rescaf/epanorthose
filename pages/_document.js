import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=B612+Mono|Cabin:400,700&amp;display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="fonts/icomoon/style.css" />
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/jquery-ui.css" />
          <link rel="stylesheet" href="css/jquery.fancybox.min.css" />
          <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
          <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
          <link rel="stylesheet" href="css/aos.css" />
          <link rel="stylesheet" href="css/style.css" />
        </Head>
        <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
          <Main />
          <NextScript />

          <script src="js/jquery-3.3.1.min.js"></script>
          <script src="js/jquery-migrate-3.0.1.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/jquery.stellar.min.js"></script>
          <script src="js/jquery.countdown.min.js"></script>
          <script src="js/bootstrap-datepicker.min.js"></script>
          <script src="js/jquery.easing.1.3.js"></script>
          <script src="js/aos.js"></script>
          <script src="js/jquery.fancybox.min.js"></script>
          <script src="js/jquery.sticky.js"></script>
          <script src="js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
