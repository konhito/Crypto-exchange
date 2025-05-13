import CryptoPurchaseCard from "@/components/crypto-purchase-card"
import CryptoChart from "@/components/crypto-chart"
import WhyChooseUs from "@/components/why-choose-us"
import HowItWorks from "@/components/how-it-works"
import FaqSection from "@/components/faq-section"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="crypto-theme">
      <div className="min-h-screen bg-dark-500 text-gray-100">
        <header className="border-b border-dark-100 py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-[#6a5aff] to-[#5f6fff] text-transparent bg-clip-text">
              CryptoExchange
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Exchange
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Buy & Sell
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Products
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Support
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Buy Cryptocurrency <span className="text-[#6a5aff]">Instantly</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Fast, secure, and hassle-free crypto purchases with the best rates on the market. No registration
                  required.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <CryptoPurchaseCard />
              </div>
            </div>
          </section>

          {/* Chart Section */}
          <section className="py-12 px-4 bg-dark-400">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Live Market <span className="text-[#6a5aff]">Trends</span>
              </h2>
              <CryptoChart />
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-12 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Why Choose <span className="text-[#6a5aff]">Us</span>
              </h2>
              <WhyChooseUs />
            </div>
          </section>

          {/* How It Works */}
          <section className="py-12 md:py-20 px-4 bg-dark-400">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                How It <span className="text-[#6a5aff]">Works</span>
              </h2>
              <HowItWorks />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Frequently Asked <span className="text-[#6a5aff]">Questions</span>
              </h2>
              <FaqSection />
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-12 md:py-20 px-4 bg-dark-400">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                What Our <span className="text-[#6a5aff]">Users Say</span>
              </h2>
              <Testimonials />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
