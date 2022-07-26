import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.wapper}>
            <div className={styles.left}>
                <p >Email: glotvn@gmail.com</p>
                <p >Hotline hỗ trợ khách hàng: 19006768</p>
            </div>
            <div className={styles.right}>
                <Link to="/">Về chúng tôi</Link>
                <Link to="/">Liên hệ</Link>
                <Link to="/">Hỏi đáp</Link>
            </div>
        </div>
    )
}

export default Header;