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

const TopNavigate = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="w-full flex flex-row justify-between flex-wrap gap-2 items-center m-auto p-4 mb-4
    sm:w-2/4 sm:">
      <div className='w-auto'><Link to={'/'}><img src='/logo.png' className="w-20 rounded" ></img></Link></div>
      <div className='w-auto'><Menu /></div>
      <div className='w-full sm:w-2/4'><Input className='w-full sm:w-full'></Input></div>
      {user ? (<div>{user.username}</div>) : (<div><Link to={'/login'}>Sign in</Link></div>)}
      <div><ModeToggle /></div>
    </div>
  )
}
export default TopNavigate