import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Laptop Stand - Adjustable Aluminum', price: 2500, quantity: 1, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop' }
  ]
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="card p-4 mb-4 flex gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-medium mb-1">{item.name}</h3>
                <p className="text-primary font-semibold mb-2">KSh {item.price.toLocaleString()}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 border border-border rounded">-</button>
                    <span className="px-3">{item.quantity}</span>
                    <button className="px-2 py-1 border border-border rounded">+</button>
                  </div>
                  <button className="text-error hover:text-red-700">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <div className="card p-4">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>KSh 200</span>
            </div>
            <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>KSh {(subtotal + 200).toLocaleString()}</span>
            </div>
            <a href="/checkout" className="btn-primary w-full mt-4 text-center block">Proceed to Checkout</a>
            <Link to="/catalog" className="btn-outline w-full mt-2 text-center block">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
