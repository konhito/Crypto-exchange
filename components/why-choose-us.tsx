import { Shield, Zap, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-10 w-10 text-[#6a5aff]" />,
    title: "No Account Required",
    description: "Start trading instantly without registration or KYC for small amounts.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-[#6a5aff]" />,
    title: "Best Rates Guaranteed",
    description: "We compare rates across multiple exchanges to ensure you get the best deal.",
  },
  {
    icon: <Users className="h-10 w-10 text-[#6a5aff]" />,
    title: "Trusted by Millions",
    description: "Join over 2 million users who trust us with their cryptocurrency exchanges.",
  },
  {
    icon: <Zap className="h-10 w-10 text-[#6a5aff]" />,
    title: "Fast Transaction Speed",
    description: "Most transactions complete within 5-30 minutes, not hours or days.",
  },
]

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-dark-300 border border-dark-100 rounded-xl p-6 shadow-dark-md hover:shadow-dark-lg transition-shadow duration-300"
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
