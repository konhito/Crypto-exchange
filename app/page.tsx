import CryptoPurchaseCard from "@/components/crypto-purchase-card";
import CryptoChart from "@/components/crypto-chart";
import WhyChooseUs from "@/components/why-choose-us";
import HowItWorks from "@/components/how-it-works";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="crypto-theme">
      <div className="min-h-screen bg-[#2B2B37] text-gray-100">
        <header className="sticky top-0 z-50 border-b border-[#1C2127] py-4 bg-[#2B2B37]">
          <div className="max-w-[1140px] mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-white flex items-center">
                <div className="mr-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0Z"
                      fill="#00C26F"
                    />
                    <path
                      d="M20.5 12.5L15.5 7.5L10.5 12.5L15.5 17.5L20.5 12.5Z"
                      fill="white"
                    />
                    <path
                      d="M15.5 17.5L10.5 22.5L15.5 27.5L20.5 22.5L15.5 17.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="font-medium">ChangeNow</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#"
                  className="text-[#8B929A] hover:text-white transition-colors text-sm"
                >
                  Exchange
                </a>
                <a
                  href="#"
                  className="text-white border-b-2 border-[#00C26F] pb-1 text-sm"
                >
                  Buy Crypto
                </a>
                <a
                  href="#"
                  className="text-[#8B929A] hover:text-white transition-colors text-sm"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="text-[#8B929A] hover:text-white transition-colors text-sm"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-[#8B929A] hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-[#8B929A] hover:text-white transition-colors text-sm"
                >
                  Help Center
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-[#00C26F] text-white px-4 py-2 rounded text-sm hover:bg-[#00B065] transition-colors">
                Sign In
              </button>
              <button className="border border-[#2B2F36] text-white px-4 py-2 rounded text-sm hover:border-[#00C26F] transition-colors">
                Create Account
              </button>
            </div>
          </div>
        </header>

        <main>
          <div className="bg-[#2B2B37] py-8 px-4">
            <div className="max-w-[1140px] mx-auto">
              {/* Hero Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col justify-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-medium text-white mb-3">
                      Buy Bitcoin (BTC) with Credit Card or Debit Card Instantly
                    </h1>
                    <p className="text-[#8B929A] text-base mb-8 max-w-[600px]">
                      Looking to buy Bitcoin (BTC) instantly using your credit
                      or debit card? You are at the right place.
                    </p>
                  </div>
                </div>
                <div>
                  <CryptoPurchaseCard />
                </div>
              </div>

              {/* Chart Section */}
              <div className="mb-12">
                <CryptoChart />
              </div>

              {/* Why Choose Us Section */}
              <div className="mt-12">
                <h2 className="text-xl font-medium text-white mb-6">
                  Why buy Bitcoin with ChangeNow
                </h2>
                <WhyChooseUs />
              </div>
            </div>
          </div>

          <div className="px-4 bg-[#2B2B37]">
            <div className="max-w-[1140px] mx-auto">
              <section className="py-12 border-t border-[#1C2127]">
                <h2 className="text-xl font-medium text-white mb-8">
                  How to buy Bitcoin
                </h2>
                <HowItWorks />
              </section>

              <section className="py-12 border-t border-[#1C2127]">
                <h2 className="text-xl font-medium text-white mb-8">
                  Frequently Asked Questions
                </h2>
                <FaqSection />
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
