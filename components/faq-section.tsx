"use client";
import { SetStateAction, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How to buy Bitcoin on ChangeNow?",
      answer:
        "Buying Bitcoin on ChangeNow is quick and easy: choose your payment method (credit/debit card, bank transfer, or crypto), enter the amount you want to exchange, provide your Bitcoin wallet address, enter your email for transaction updates, and complete the payment. You'll receive your Bitcoin in minutes without registration or KYC for purchases under $500.",
    },
    {
      question: "What payment methods are available to buy BTC?",
      answer:
        "ChangeNow supports multiple payment methods for buying Bitcoin, including credit/debit cards (Visa, Mastercard), bank transfers (SEPA, wire transfer), and cryptocurrency exchanges from over 350 supported coins and tokens.",
    },
    {
      question: "Do I need to create an account to buy Bitcoin?",
      answer:
        "No, you don't need to create an account or register to buy Bitcoin on ChangeNow. Our service is designed to be quick and hassle-free, allowing you to purchase crypto without lengthy verification processes.",
    },
    {
      question: "Is KYC verification required to buy BTC?",
      answer:
        "For purchases under $500, no KYC verification is typically required. However, for larger amounts or in certain jurisdictions, KYC may be necessary to comply with regulatory requirements. Our system will notify you if verification is needed for your specific transaction.",
    },
    {
      question: "How long does it take to receive Bitcoin after purchase?",
      answer:
        "After completing payment, you'll typically receive your Bitcoin within 5-30 minutes. The exact time depends on network congestion and payment processing times. You can track your transaction status in real-time using the provided email updates.",
    },
    {
      question: "What are the fees for buying Bitcoin on ChangeNow?",
      answer:
        "ChangeNow offers competitive rates with all fees included in the exchange rate you see. There are no hidden fees or additional charges. The final amount of Bitcoin you receive is clearly displayed before you confirm your transaction.",
    },
  ];

  const toggleAccordion = (index: SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`bg-[#1A1D26] border ${
            openIndex === index ? "border-[#00C26F]" : "border-[#2B2F36]"
          } rounded-lg overflow-hidden transition-all`}
        >
          <button
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-[#F6F7F8] font-medium">{faq.question}</h3>
            {openIndex === index ? (
              <ChevronUp className="text-[#00C26F]" size={20} />
            ) : (
              <ChevronDown className="text-[#9DA0A6]" size={20} />
            )}
          </button>

          <div
            className={`px-4 pb-4 text-[#9DA0A6] text-sm transition-all overflow-hidden ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
