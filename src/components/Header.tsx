import { FaBars, FaArrowLeft } from 'react-icons/fa'

type HeaderProps = {
  onMenuToggle: () => void
  menuOpen?: boolean
}

const Header = ({ onMenuToggle, menuOpen = false}: HeaderProps) => {

  return (
    <header className='header'>
      <button
      className='icon-button'
      onClick={onMenuToggle}
      > {menuOpen ? <FaArrowLeft /> : <FaBars  /> }</button>
    </header>
   
      
  )
}

export default Header
