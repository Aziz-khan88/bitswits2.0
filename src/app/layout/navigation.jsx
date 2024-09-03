import Link from "next/link"
import styles from "@/styles/layout/navigation.module.scss"
import { PhoneIcon, SubMenuIcon } from "@/src/app/app-constants"

const Navigation = ({ isGamePage }) => {
    return (
        <ul className={`${styles.mainNavigation} ${isGamePage ? 'whiteNav' : ''}`}  >
            <li>
                <Link href="#Services">Services</Link>
            </li>
            <li>
                <Link href="#Casestudies">Case Studies</Link>
            </li>
            <li>
                <Link href="#Process">Process</Link>
            </li>
            <li>
                <Link href="#Testimonials">Testimonials</Link>
            </li>
            <li>
                <Link href="#Contact">Contact Us</Link>
            </li>
            <li className={styles.btnHeader}>
                <a href="tel:+18335006007"><PhoneIcon />+1 833 500 6007</a>
            </li>
        </ul>
    )
}

export default Navigation