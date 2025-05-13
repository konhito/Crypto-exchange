"use client";
import { useState } from "react";
import { ArrowRight, CreditCard, Ban, Wallet } from "lucide-react";

export default function CryptoPurchaseCard() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [amount, setAmount] = useState("1000");
  const [estimatedBtc, setEstimatedBtc] = useState(0.026);

  const handleAmountChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setAmount(value);
    // Simple estimation calculation - in a real app this would call an API
    setEstimatedBtc(value ? parseFloat(value) * 0.000026 : 0);
  };

  return (
    <div className="bg-[#1A1D26] border border-[#2B2F36] rounded-xl p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <label className="block text-sm text-[#9DA0A6] mb-2">You Pay</label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="w-full bg-[#272B36] border border-[#2B2F36] rounded-lg text-white p-4 pr-16 focus:outline-none focus:ring-2 focus:ring-[#00C26F] focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-blue-500">
                  <span className="text-white text-xs font-bold">$</span>
                </div>
                <span className="text-white font-medium">USD</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm text-[#9DA0A6] mb-2">You Get</label>
            <div className="relative">
              <input
                type="text"
                value={estimatedBtc.toFixed(6)}
                readOnly
                className="w-full bg-[#272B36] border border-[#2B2F36] rounded-lg text-white p-4 pr-16 focus:outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-[#F7931A]">
                  <span className="text-white text-xs font-bold">₿</span>
                </div>
                <span className="text-white font-medium">BTC</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-[#9DA0A6] mb-2">
            Payment Method
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setPaymentMethod("card")}
              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                paymentMethod === "card"
                  ? "border-[#00C26F] bg-[#0F1C17]"
                  : "border-[#2B2F36] bg-[#272B36]"
              } transition-all`}
            >
              <CreditCard
                size={20}
                className={
                  paymentMethod === "card" ? "text-[#00C26F]" : "text-[#9DA0A6]"
                }
              />
              <span
                className={`text-xs mt-1 ${
                  paymentMethod === "card" ? "text-[#00C26F]" : "text-[#9DA0A6]"
                }`}
              >
                Card
              </span>
            </button>
            <button
              onClick={() => setPaymentMethod("bank")}
              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                paymentMethod === "bank"
                  ? "border-[#00C26F] bg-[#0F1C17]"
                  : "border-[#2B2F36] bg-[#272B36]"
              } transition-all`}
            >
              <Ban
                size={20}
                className={
                  paymentMethod === "bank" ? "text-[#00C26F]" : "text-[#9DA0A6]"
                }
              />
              <span
                className={`text-xs mt-1 ${
                  paymentMethod === "bank" ? "text-[#00C26F]" : "text-[#9DA0A6]"
                }`}
              >
                Bank
              </span>
            </button>
            <button
              onClick={() => setPaymentMethod("crypto")}
              className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                paymentMethod === "crypto"
                  ? "border-[#00C26F] bg-[#0F1C17]"
                  : "border-[#2B2F36] bg-[#272B36]"
              } transition-all`}
            >
              <Wallet
                size={20}
                className={
                  paymentMethod === "crypto"
                    ? "text-[#00C26F]"
                    : "text-[#9DA0A6]"
                }
              />
              <span
                className={`text-xs mt-1 ${
                  paymentMethod === "crypto"
                    ? "text-[#00C26F]"
                    : "text-[#9DA0A6]"
                }`}
              >
                Crypto
              </span>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-[#9DA0A6] mb-2">
            Your BTC Address
          </label>
          <input
            type="text"
            placeholder="Enter your BTC address"
            className="w-full bg-[#272B36] border border-[#2B2F36] rounded-lg text-white p-4 focus:outline-none focus:ring-2 focus:ring-[#00C26F] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm text-[#9DA0A6] mb-2">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-[#272B36] border border-[#2B2F36] rounded-lg text-white p-4 focus:outline-none focus:ring-2 focus:ring-[#00C26F] focus:border-transparent"
          />
        </div>

        <div className="pt-2">
          <button className="w-full bg-[#00C26F] hover:bg-[#00B065] text-white rounded-lg p-4 flex items-center justify-center transition-colors">
            <span className="font-medium">Buy Bitcoin</span>
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>

        <div className="text-xs text-[#9DA0A6] text-center">
          By clicking "Buy Bitcoin", you agree to our{" "}
          <a href="#" className="text-[#00C26F] hover:text-[#00B065]">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#00C26F] hover:text-[#00B065]">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
