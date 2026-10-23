import { useState } from 'react'
import { Upload } from 'lucide-react'

const AddProduct = () => {
  const [images, setImages] = useState([])
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
        <div className="card p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Product Name</label>
              <input type="text" className="input" placeholder="Enter product name" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select className="input">
                  <option>Select Category</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Books</option>
                  <option>Home & Living</option>
                  <option>Beauty & Health</option>
                  <option>Sports & Outdoors</option>
                  <option>Toys & Games</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Product Condition</label>
                <select className="input">
                  <option>New</option>
                  <option>Used</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Price in KSh</label>
                <input type="number" className="input" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Stock Quantity</label>
                <input type="number" className="input" placeholder="0" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Product Description</label>
              <textarea className="input h-32" placeholder="Describe your product"></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Product Images</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-text-secondary" />
                <p className="text-sm text-text-secondary mb-2">Drag and drop images here or click to browse</p>
                <button type="button" className="btn-outline">Select Files</button>
              </div>
            </div>
            
            <button type="submit" className="btn-primary w-full">Create Product</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
