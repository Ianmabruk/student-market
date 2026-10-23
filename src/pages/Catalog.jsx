import { Link } from 'react-router-dom'
import { Filter } from 'lucide-react'

const Catalog = () => {
  const products = [
    { id: 1, name: 'Laptop Stand', price: 2500, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop', seller: 'TechStore' },
    { id: 2, name: 'Wireless Mouse', price: 1500, originalPrice: 2000, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop', seller: 'GadgetHub' },
    { id: 3, name: 'Textbook - Chemistry', price: 800, image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop', seller: 'BookShop' },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        <aside className="w-64 flex-shrink-0 hidden lg:block">
          <div className="card p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </h3>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" /> Electronics</label>
                <label className="flex items-center gap-2"><input type="checkbox" /> Fashion</label>
                <label className="flex items-center gap-2"><input type="checkbox" /> Books</label>
                <label className="flex items-center gap-2"><input type="checkbox" /> Home & Living</label>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2"><input type="radio" name="price" /> Under KSh 1,000</label>
                <label className="flex items-center gap-2"><input type="radio" name="price" /> KSh 1,000–3,000</label>
                <label className="flex items-center gap-2"><input type="radio" name="price" /> KSh 3,000–5,000</label>
                <label className="flex items-center gap-2"><input type="radio" name="price" /> KSh 5,000+</label>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Condition</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" /> New</label>
                <label className="flex items-center gap-2"><input type="checkbox" /> Used</label>
              </div>
            </div>
          </div>
        </aside>
        
        <main className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">All Products</h1>
            <select className="px-3 py-2 border border-border rounded">
              <option>Most Popular</option>
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="card overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary font-semibold">KSh {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-text-secondary text-xs line-through">KSh {product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary">by {product.seller}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Catalog
