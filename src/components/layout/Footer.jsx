import { Link } from 'react-router-dom'
import Logo from '../common/Logo'

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-lg font-bold text-primary">StudentMarket</span>
            </div>
            <p className="text-text-secondary text-sm">Empowering Students. Building Dreams.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="#" className="hover:text-primary">About Us</Link></li>
              <li><Link to="#" className="hover:text-primary">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Sell</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/seller/dashboard" className="hover:text-primary">Become a Seller</Link></li>
              <li><Link to="#" className="hover:text-primary">Seller Guidelines</Link></li>
              <li><Link to="#" className="hover:text-primary">Seller Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Help</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="#" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-primary">FAQ</Link></li>
              <li><Link to="#" className="hover:text-primary">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-text-secondary">
          <p>&copy; 2026 StudentMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
