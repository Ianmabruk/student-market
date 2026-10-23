import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto card p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" className="input" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" className="input" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="input" placeholder="Create a password" />
          </div>
          <div>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">I want to register as a seller</span>
            </label>
          </div>
          <button type="submit" className="btn-primary w-full">Sign Up</button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
