import { Twitter, Facebook, Instagram, Youtube, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1D26] border-t border-[#2B2F36] pt-12 pb-6 px-4">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-[#F6F7F8] font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Media Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F6F7F8] font-medium mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Exchange
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Buy Crypto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F6F7F8] font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F6F7F8] font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#9DA0A6] hover:text-[#00C26F] text-sm transition-colors"
                >
                  AML Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#2B2F36] pt-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            <span className="text-[#9DA0A6] text-sm">
              © 2025 ChangeNow. All rights reserved.
            </span>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-[#9DA0A6] hover:text-[#00C26F] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-[#9DA0A6] hover:text-[#00C26F] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-[#9DA0A6] hover:text-[#00C26F] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-[#9DA0A6] hover:text-[#00C26F] transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="text-[#9DA0A6] hover:text-[#00C26F] transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
