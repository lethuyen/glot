import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function DefaultLayout({ children }) {
    return (
        <div className="wapper">
            <Header />
            <Sidebar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout;