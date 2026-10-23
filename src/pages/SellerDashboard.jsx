import { Link } from 'react-router-dom'
import { LayoutDashboard, Package, ShoppingBag, BarChart3, DollarSign, Settings, Plus } from 'lucide-react'

const SellerDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        <aside className="w-64 flex-shrink-0 hidden md:block">
          <div className="bg-primary-dark text-white rounded-lg p-4">
            <h2 className="font-bold mb-4">Seller Dashboard</h2>
            <nav className="space-y-2">
              <Link to="/seller/dashboard" className="flex items-center gap-2 px-3 py-2 bg-primary rounded">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
              <Link to="/seller/products" className="flex items-center gap-2 px-3 py-2 hover:bg-primary/50 rounded">
                <Package className="w-4 h-4" />
                Products
              </Link>
              <Link to="/seller/orders" className="flex items-center gap-2 px-3 py-2 hover:bg-primary/50 rounded">
                <ShoppingBag className="w-4 h-4" />
                Orders
              </Link>
              <Link to="/seller/analytics" className="flex items-center gap-2 px-3 py-2 hover:bg-primary/50 rounded">
                <BarChart3 className="w-4 h-4" />
                Sales Analytics
              </Link>
              <Link to="/seller/payouts" className="flex items-center gap-2 px-3 py-2 hover:bg-primary/50 rounded">
                <DollarSign className="w-4 h-4" />
                Payouts
              </Link>
              <Link to="/seller/settings" className="flex items-center gap-2 px-3 py-2 hover:bg-primary/50 rounded">
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </nav>
          </div>
        </aside>
        
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Seller Dashboard</h1>
            <Link to="/seller/products/add" className="btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Product
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="card p-4">
              <h3 className="text-text-secondary text-sm mb-1">Total Sales</h3>
              <p className="text-2xl font-bold text-primary">KSh 0</p>
            </div>
            <div className="card p-4">
              <h3 className="text-text-secondary text-sm mb-1">Total Orders</h3>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="card p-4">
              <h3 className="text-text-secondary text-sm mb-1">Pending Payouts</h3>
              <p className="text-2xl font-bold">KSh 0</p>
            </div>
          </div>
          
          <div className="card p-4">
            <h2 className="font-semibold mb-4">Recent Orders</h2>
            <p className="text-text-secondary text-center py-8">No orders yet</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SellerDashboard
