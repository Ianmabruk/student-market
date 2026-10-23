import { useState } from 'react'
import { ShoppingCart, Heart } from 'lucide-react'

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1)
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop"
            alt="Product"
            className="w-full h-96 object-cover rounded border border-border mb-4"
          />
          <div className="grid grid-cols-4 gap-2">
            {[1,2,3,4].map((i) => (
              <img 
                key={i}
                src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop"
                alt="Thumbnail"
                className="w-full h-20 object-cover rounded border border-border cursor-pointer"
              />
            ))}
          </div>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold mb-2">Laptop Stand - Adjustable Aluminum</h1>
          <p className="text-text-secondary mb-4">Sold by TechStore</p>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-primary">KSh 2,500</span>
            <span className="text-text-secondary line-through">KSh 3,000</span>
            <span className="bg-error/10 text-error px-2 py-1 rounded text-sm">Save 17%</span>
          </div>
          
          <p className="text-sm mb-4"><span className="text-success font-medium">In Stock</span> (15 items available)</p>
          <p className="text-sm mb-4">Condition: <span className="font-medium">New</span></p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center gap-3">
              <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="px-3 py-1 border border-border rounded">-</button>
              <span className="px-4">{quantity}</span>
              <button onClick={() => setQuantity(quantity+1)} className="px-3 py-1 border border-border rounded">+</button>
            </div>
          </div>
          
          <div className="flex gap-3 mb-6">
            <button className="btn-primary flex-1 flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="btn-outline flex-1">Buy Now</button>
            <button className="p-2 border border-border rounded hover:bg-surface-light">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          
          <div className="border-t border-border pt-4">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-text-secondary text-sm">
              Adjustable aluminum laptop stand with ergonomic design. Perfect for students and professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
