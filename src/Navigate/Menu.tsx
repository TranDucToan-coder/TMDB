import { Link } from 'react-router-dom'
import { Input } from '../components/ui/input'
import { ModeToggle } from '../components/ui/mode-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"
import { useEffect } from 'react'

const Menu = () => (
  <NavigationMenu className='z-1000'>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href='/danh_sach_phim/movie' className='w-50'>Phim lẻ</NavigationMenuLink>
          <NavigationMenuLink href='/danh_sach_phim/tv'>Phim bộ</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

interface UserProps {
  handleLogOut : () => void
}
const MenuProfile = ({handleLogOut} : UserProps) => (
  <NavigationMenu className='z-1000'>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href='/' className='w-50'>Personal Information</NavigationMenuLink>
          <NavigationMenuLink href='/' onClick={handleLogOut}>Log out</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

const TopNavigate = () => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const handleLogOut = () => {
    localStorage.removeItem("user")
  }
  useEffect(() => {

  },[user])
  return (
    <div className="w-full flex flex-row justify-between flex-wrap gap-2 items-center m-auto p-4 mb-4 sm:w-2/4">
      <div className="w-auto">
        <Link to={'/'}>
          <img src="/logo.png" className="w-20 rounded" alt="Logo" />
        </Link>
      </div>
      <div className="sm:block w-auto">
        <Menu />
      </div>
      <div className="hidden sm:block w-2/4">
        <Input className="w-full" />
      </div>
      {user ? (
        <div><MenuProfile handleLogOut={handleLogOut}/></div>
      ) : (
        <div>
          <Link to={'/login'}>Sign in</Link>
        </div>
      )}
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
export default TopNavigate