import { CreditCard, ArrowRight, Wallet } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <CreditCard className="text-[#00C26F]" size={24} />,
      title: "Choose Your Payment Method",
      description:
        "Select your preferred payment method: credit/debit card, bank transfer, or crypto",
    },
    {
      number: "02",
      icon: <ArrowRight className="text-[#00C26F]" size={24} />,
      title: "Enter Your Bitcoin Address",
      description:
        "Provide your BTC wallet address where you want to receive your Bitcoin",
    },
    {
      number: "03",
      icon: <Wallet className="text-[#00C26F]" size={24} />,
      title: "Receive Your Bitcoin",
      description:
        "Complete payment and receive your Bitcoin in as little as 5 minutes",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-[#1A1D26] border border-[#2B2F36] rounded-lg"
        >
          <div className="w-12 h-12 rounded-full bg-[#272B36] flex items-center justify-center mb-4">
            {step.icon}
          </div>
          <div className="text-xs font-medium text-[#00C26F] mb-2">
            {step.number}
          </div>
          <h3 className="text-[#F6F7F8] font-medium text-base mb-2">
            {step.title}
          </h3>
          <p className="text-[#9DA0A6] text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
