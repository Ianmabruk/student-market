import { useState } from 'react'

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('stripe')
  
  const orderItems = [
    { name: 'Laptop Stand - Adjustable Aluminum', price: 2500, quantity: 1 }
  ]
  const subtotal = 2500
  const delivery = 200
  const total = subtotal + delivery
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="font-semibold mb-4">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input type="text" className="input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="input" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="tel" className="input" />
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="font-semibold mb-4">Delivery Address</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input type="text" className="input" placeholder="Street address" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input type="text" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">County/State</label>
                  <input type="text" className="input" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="font-semibold mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-border rounded cursor-pointer hover:bg-surface-light">
                <input 
                  type="radio" 
                  name="payment" 
                  value="stripe" 
                  checked={paymentMethod === 'stripe'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Credit/Debit Card (Stripe)</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-border rounded cursor-pointer hover:bg-surface-light">
                <input 
                  type="radio" 
                  name="payment" 
                  value="mpesa" 
                  checked={paymentMethod === 'mpesa'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>M-Pesa</span>
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card p-4">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            {orderItems.map((item, idx) => (
              <div key={idx} className="flex justify-between mb-2 text-sm">
                <span>{item.name} x {item.quantity}</span>
                <span>KSh {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-border pt-2 mt-2 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>KSh {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>KSh {delivery.toLocaleString()}</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>KSh {total.toLocaleString()}</span>
              </div>
            </div>
            <button className="btn-primary w-full mt-4">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
