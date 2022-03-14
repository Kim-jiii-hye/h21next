import Link from "next/link"
import navStyles from '../../styles/Nav.module.css'
const Nav =() => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/"><a>H21 MAIN DATA</a></Link>
                </li>
                <li>
                    <Link href="/photos"><a>Photos</a></Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;