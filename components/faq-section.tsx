"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How long do transactions take?",
    answer:
      "Most transactions are completed within 5-30 minutes. However, during periods of high network congestion, it may take longer. You can always check the status of your transaction in real-time on our platform.",
  },
  {
    question: "Is KYC required?",
    answer:
      "For small transactions (typically under €1000), no KYC is required. For larger amounts, we may require basic verification to comply with regulatory requirements. The exact threshold depends on your region and the payment method used.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support a wide range of payment methods including credit/debit cards (Visa, Mastercard), digital wallets (Apple Pay, Google Pay, PayPal), bank transfers (SEPA, SWIFT), and regional payment options like iDEAL, Multibanco, and more.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No, we don't have any hidden fees. The rate you see is the rate you get. Our fee is already included in the exchange rate we offer. You can see a detailed breakdown of the transaction before confirming your purchase.",
  },
  {
    question: "Which cryptocurrencies can I buy?",
    answer:
      "We support over 300 cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Ripple (XRP), Dogecoin (DOGE), and many more. Our list of supported cryptocurrencies is constantly expanding.",
  },
]

export default function FaqSection() {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-dark-300 border border-dark-100 rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 text-white hover:text-[#6a5aff] hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-400">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
