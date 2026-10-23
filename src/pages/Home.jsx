import { Link } from 'react-router-dom'
import { Shield, Users, Truck, Laptop, Shirt, Book, Home as HomeIcon, Heart, Dumbbell, Gamepad2, Package } from 'lucide-react'

const Home = () => {
  const categories = [
    { name: 'Electronics', icon: Laptop, desc: 'Gadgets & Tech' },
    { name: 'Fashion', icon: Shirt, desc: 'Clothing & Accessories' },
    { name: 'Books', icon: Book, desc: 'Textbooks & More' },
    { name: 'Home & Living', icon: HomeIcon, desc: 'Essentials' },
    { name: 'Beauty & Health', icon: Heart, desc: 'Personal Care' },
    { name: 'Sports & Outdoors', icon: Dumbbell, desc: 'Fitness & Gear' },
    { name: 'Toys & Games', icon: Gamepad2, desc: 'Fun & Entertainment' },
    { name: 'Others', icon: Package, desc: 'More Items' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
              Buy & Sell<br />
              From Students,<br />
              For Students
            </h1>
            <p className="text-lg text-text-secondary mb-6">
              Discover amazing products, support fellow students, and grow your own online business.
            </p>
            <div className="flex gap-4">
              <Link to="/catalog" className="btn-primary">Shop Now</Link>
              <Link to="/seller/dashboard" className="btn-outline">Start Selling</Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Students working together"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-3 rounded shadow-lg">
              <p className="font-semibold text-primary">Real Students<br />Real Products<br />Real Opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-background-secondary py-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Payments</h3>
                <p className="text-sm text-text-secondary">100% safe & trusted</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Multiple Sellers</h3>
                <p className="text-sm text-text-secondary">Independent student vendors</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-sm text-text-secondary">Across Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Categories</h2>
          <Link to="/catalog" className="text-primary hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/catalog?category=${category.name.toLowerCase().replace(/ & /g, '-')}`}
              className="card p-4 text-center hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center mx-auto mb-2">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-sm mb-1">{category.name}</h3>
              <p className="text-xs text-text-secondary">{category.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Seller Recruitment Banner */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Start Selling on StudentMarket</h2>
          <p className="mb-4">Join hundreds of student entrepreneurs and grow your business</p>
          <Link to="/seller/dashboard" className="bg-white text-primary px-6 py-2 rounded font-medium hover:bg-gray-100 inline-block">
            Become a Seller
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
