import styles from './Sidebar.module.scss'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <a href="/"><img src="./images/LOGO 2 1.png" alt="" /></a>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li className={styles.size15}><Link to="/">Trang chủ</Link></li>
                    <li className={styles.size15}><Link to="/">Về chúng tôi</Link></li>
                    <li className={styles.size15}><Link to="/products">Sản phẩm đầu tư</Link></li>
                    <li className={styles.size15}><Link to="/">Đội ngũ</Link></li>
                    <li className={styles.size15}><Link to="/news">Tin tức</Link></li>
                    <li className={styles.size15}><Link to="/">Liên hệ</Link></li>
                    <li className={styles.size15} style={{ cursor: 'pointer' }} >Đăng nhập</li>
                    <li className={styles.size15} style={{ cursor: 'pointer' }} >Đăng kí</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;