import { Twitter, Facebook, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-400 border-t border-dark-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold bg-gradient-to-r from-[#6a5aff] to-[#5f6fff] text-transparent bg-clip-text mb-4">
              CryptoExchange
            </div>
            <p className="text-gray-400 mb-4">
              Fast, secure, and hassle-free crypto purchases with the best rates on the market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Buy Crypto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Sell Crypto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Wallet
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6a5aff] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-100 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 CryptoExchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
