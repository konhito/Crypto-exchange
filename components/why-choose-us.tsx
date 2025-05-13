import {
  ShieldCheck,
  Lock,
  Globe,
  Clock,
  Trophy,
  BadgeCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="text-[#00C26F]" size={20} />,
      title: "Safe & Secure",
      description:
        "No registration required, industry-leading security protocols",
    },
    {
      icon: <Lock className="text-[#00C26F]" size={20} />,
      title: "No KYC",
      description: "Buy up to $500 without identification",
    },
    {
      icon: <Globe className="text-[#00C26F]" size={20} />,
      title: "Global Access",
      description: "Buy and sell crypto from anywhere in the world",
    },
    {
      icon: <Clock className="text-[#00C26F]" size={20} />,
      title: "Fast Transactions",
      description: "Get your crypto in as little as 5 minutes",
    },
    {
      icon: <Trophy className="text-[#00C26F]" size={20} />,
      title: "Best Rates",
      description: "Competitive rates updated in real-time",
    },
    {
      icon: <BadgeCheck className="text-[#00C26F]" size={20} />,
      title: "Trusted Platform",
      description: "Over 3 million users and 400,000+ positive reviews",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-start p-4 bg-[#1A1D26] border border-[#2B2F36] rounded-lg"
        >
          <div className="mr-3 mt-1">{feature.icon}</div>
          <div>
            <h3 className="text-[#F6F7F8] font-medium text-sm">
              {feature.title}
            </h3>
            <p className="text-[#9DA0A6] text-xs mt-1">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
