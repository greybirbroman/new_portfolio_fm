
import { Navigation, Logo, Sidebar } from '.'

const Header = () => {
  return (
    <header className='wrapper h-[100px]'>
      <Sidebar />
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
