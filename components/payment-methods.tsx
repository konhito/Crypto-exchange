"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

// Payment method options
const paymentMethods = [
  { id: "visa", name: "Visa" },
  { id: "mastercard", name: "Mastercard" },
  { id: "googlepay", name: "Google Pay" },
  { id: "applepay", name: "Apple Pay" },
  { id: "paypal", name: "PayPal" },
  { id: "skrill", name: "Skrill" },
  { id: "neteller", name: "Neteller" },
  { id: "openbanking", name: "Open Banking" },
  { id: "revolut", name: "Revolut" },
  { id: "sepa", name: "SEPA" },
  { id: "ideal", name: "iDEAL" },
  { id: "multibanco", name: "Multibanco" },
  { id: "eps", name: "EPS" },
]

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("visa")

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
      {paymentMethods.map((method) => (
        <button
          key={method.id}
          onClick={() => setSelectedMethod(method.id)}
          className={cn(
            "flex flex-col items-center justify-center p-2 rounded-lg border border-dark-100 bg-dark-400 hover:border-[#6a5aff] transition-all",
            selectedMethod === method.id ? "border-[#6a5aff] bg-[#6a5aff]/10" : "",
          )}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <PaymentIcon id={method.id} />
          </div>
          <span className="text-xs mt-1 text-gray-300">{method.name}</span>
        </button>
      ))}
    </div>
  )
}

function PaymentIcon({ id }: { id: string }) {
  // In a real app, you would use actual SVG icons or images for each payment method
  // For this example, we'll use a simple representation

  return (
    <div className="w-6 h-6 flex items-center justify-center">
      {id === "visa" && <span className="text-blue-400 font-bold text-xs">VISA</span>}
      {id === "mastercard" && <span className="text-red-400 font-bold text-xs">MC</span>}
      {id === "googlepay" && <span className="text-gray-300 font-bold text-xs">G Pay</span>}
      {id === "applepay" && <span className="text-gray-300 font-bold text-xs">A Pay</span>}
      {id === "paypal" && <span className="text-blue-400 font-bold text-xs">PP</span>}
      {id === "skrill" && <span className="text-purple-400 font-bold text-xs">SK</span>}
      {id === "neteller" && <span className="text-green-400 font-bold text-xs">NE</span>}
      {id === "openbanking" && <span className="text-green-400 font-bold text-xs">OB</span>}
      {id === "revolut" && <span className="text-blue-400 font-bold text-xs">REV</span>}
      {id === "sepa" && <span className="text-blue-400 font-bold text-xs">SEPA</span>}
      {id === "ideal" && <span className="text-green-400 font-bold text-xs">iDEAL</span>}
      {id === "multibanco" && <span className="text-orange-400 font-bold text-xs">MB</span>}
      {id === "eps" && <span className="text-red-400 font-bold text-xs">EPS</span>}
    </div>
  )
}
