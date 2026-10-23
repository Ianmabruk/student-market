import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto card p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" className="input" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="input" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn-primary w-full">Sign In</button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <Link to="/register" className="text-primary hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
