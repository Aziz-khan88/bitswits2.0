import Link from "next/link"
import styles from "@/styles/layout/navigation.module.scss"
import { PhoneIcon, SubMenuIcon } from "@/src/app/app-constants"

const Navigation = ({ isWhiteLogo, scrolled }) => {
    // const HeaderChanges = isWhiteLogo
    //     ? scrolled
    //         ? `${styles.whiteNav} ${styles.NavScroll}`
    //         : styles.whiteNav
    //     : "";
    return (
        // <ul className={`${styles.mainNavigation} ${HeaderChanges}`}>
        <ul className={`${styles.mainNavigation} ${scrolled ? styles.NavScroll : ''}`}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="#">About</Link>
            </li>
            <li>
                <Link href="#">Services</Link>
            </li>
            <li>
                <Link href="#">Blog</Link>
            </li>
            <li>
                <Link href="#Contact">Portfolio</Link>
            </li>
            <li className={styles.btnHeader}>
                <Link href="#">Connect Now</Link>
            </li>
        </ul>
    )
}

export default Navigation