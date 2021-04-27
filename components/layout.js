import "./layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import PreLoader from "./PreLoader";


export default function Layout({ children }) {
  return (
    // <div className={styles.container}>
    <>
      <div className="site-wrap">
        <Header />
        {children}
        <Footer />
      </div>
      {/* <PreLoader /> */}
    </>
  );
}
