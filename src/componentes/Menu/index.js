import MenuLink from '../MenuLink/MenuLink';
import styles from './Menu.module.css'

const Menu = () => {  
  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to='/'>
                Início
            </MenuLink>
            <MenuLink to='/sobremim'>
                SobreMim
            </MenuLink>
        </nav>
    </header>
  )
}

export default Menu