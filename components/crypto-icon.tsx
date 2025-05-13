export default function CryptoIcon({ cryptoId }: { cryptoId: string }) {
  

  const colors: Record<string, string> = {
    btc: "bg-orange-500",
    eth: "bg-purple-600",
    sol: "bg-green-500",
    doge: "bg-yellow-500",
    xrp: "bg-blue-500",
  }

  const symbols: Record<string, string> = {
    btc: "₿",
    eth: "Ξ",
    sol: "◎",
    doge: "Ð",
    xrp: "✕",
  }

  return (
    <div
      className={`w-6 h-6 rounded-full ${colors[cryptoId] || "bg-gray-500"} flex items-center justify-center text-white font-bold text-xs`}
    >
      {symbols[cryptoId] || "?"}
    </div>
  )
}
