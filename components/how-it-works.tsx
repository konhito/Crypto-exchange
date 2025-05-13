import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Choose Crypto & Amount",
    description: "Select the cryptocurrency you want to buy and enter the amount in your preferred fiat currency.",
  },
  {
    number: "02",
    title: "Select Payment Method",
    description: "Choose from multiple payment options including credit cards, bank transfers, and digital wallets.",
  },
  {
    number: "03",
    title: "Receive Crypto in Wallet",
    description: "Enter your wallet address and receive your cryptocurrency within minutes.",
  },
]

export default function HowItWorks() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-dark-100 -translate-y-1/2 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-dark-300 border-2 border-[#6a5aff] rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-dark-glow">
              <span className="text-xl font-bold text-[#6a5aff]">{step.number}</span>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
            <p className="text-gray-400 mb-6">{step.description}</p>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2">
                <ArrowRight className="text-[#6a5aff] h-8 w-8" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
