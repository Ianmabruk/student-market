import { Link } from 'react-router-dom'
import { Search, ShoppingCart, User } from 'lucide-react'
import Logo from '../common/Logo'

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <Logo />
            <span className="text-xl font-bold text-primary hidden sm:block">StudentMarket</span>
          </Link>
          
          <div className="flex-1 max-w-2xl flex items-center">
            <select className="px-3 py-2 border border-r-0 border-border rounded-l bg-background-secondary text-sm">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Books</option>
              <option>Home & Living</option>
              <option>Beauty & Health</option>
              <option>Sports & Outdoors</option>
              <option>Toys & Games</option>
              <option>Others</option>
            </select>
            <input
              type="text"
              placeholder="Search products, brands and sellers"
              className="flex-1 px-4 py-2 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-r flex items-center">
              <Search className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link to="/login" className="text-text-primary hover:text-primary hidden md:block">
              Sign In
            </Link>
            <Link to="/register" className="btn-primary hidden md:block">
              Sign Up
            </Link>
            <Link to="/cart" className="relative text-text-primary hover:text-primary">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
        
        <nav className="flex items-center gap-6 h-10 text-sm overflow-x-auto">
          <Link to="/catalog?category=all" className="flex items-center gap-1 text-text-primary hover:text-primary whitespace-nowrap">
            <span>All Categories</span>
          </Link>
          <Link to="/" className="text-primary font-medium border-b-2 border-primary whitespace-nowrap">Home</Link>
          <Link to="/catalog?sort=deals" className="text-text-primary hover:text-primary whitespace-nowrap">Best Deals</Link>
          <Link to="/catalog?sort=new" className="text-text-primary hover:text-primary whitespace-nowrap">New Arrivals</Link>
          <Link to="/catalog?sort=top" className="text-text-primary hover:text-primary whitespace-nowrap">Top Sellers</Link>
          <Link to="/seller/dashboard" className="text-text-primary hover:text-primary whitespace-nowrap">Become a Seller</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
