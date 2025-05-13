"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import PaymentMethods from "@/components/payment-methods"
import CryptoIcon from "@/components/crypto-icon"

const cryptoOptions = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", rate: 0.0000099 },
  { id: "eth", name: "Ethereum", symbol: "ETH", rate: 0.00033 },
  { id: "sol", name: "Solana", symbol: "SOL", rate: 0.0077 },
  { id: "doge", name: "Dogecoin", symbol: "DOGE", rate: 0.77 },
  { id: "xrp", name: "Ripple", symbol: "XRP", rate: 0.88 },
]

export default function CryptoPurchaseCard() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0])
  const [fiatAmount, setFiatAmount] = useState(100)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const cryptoAmount = fiatAmount * selectedCrypto.rate

  const formattedCryptoAmount = cryptoAmount.toFixed(
    selectedCrypto.id === "btc" ? 7 : selectedCrypto.id === "eth" ? 5 : 4,
  )

  return (
    <Card className="shadow-dark-lg border-dark-100 bg-dark-300 backdrop-blur-sm bg-opacity-80">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* You Get Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">You get</label>
            <div className="flex items-center gap-3 p-3 bg-dark-400 rounded-lg border border-dark-100">
              <Select
                value={selectedCrypto.id}
                onValueChange={(value) => {
                  const crypto = cryptoOptions.find((c) => c.id === value)
                  if (crypto) setSelectedCrypto(crypto)
                }}
              >
                <SelectTrigger className="w-[140px] border-0 bg-transparent focus:ring-0 p-0 h-auto text-white">
                  <div className="flex items-center gap-2">
                    <CryptoIcon cryptoId={selectedCrypto.id} />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-dark-300 border-dark-100">
                  {cryptoOptions.map((crypto) => (
                    <SelectItem
                      key={crypto.id}
                      value={crypto.id}
                      className="text-gray-200 focus:text-white focus:bg-dark-100"
                    >
                      <div className="flex items-center gap-2">
                        <CryptoIcon cryptoId={crypto.id} />
                        {crypto.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex-1 text-right font-mono text-lg text-white">≈ {formattedCryptoAmount}</div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">You pay</label>
            <div className="flex items-center gap-3 p-3 bg-dark-400 rounded-lg border border-dark-100">
              <Input
                type="number"
                value={fiatAmount}
                onChange={(e) => setFiatAmount(Number(e.target.value))}
                className="border-0 bg-transparent focus:ring-0 p-0 h-auto text-lg text-white"
              />
              <Select defaultValue="eur">
                <SelectTrigger className="w-[80px] border-0 bg-transparent focus:ring-0 p-0 h-auto text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-dark-300 border-dark-100">
                  <SelectItem value="eur" className="text-gray-200 focus:text-white focus:bg-dark-100">
                    EUR
                  </SelectItem>
                  <SelectItem value="usd" className="text-gray-200 focus:text-white focus:bg-dark-100">
                    USD
                  </SelectItem>
                  <SelectItem value="gbp" className="text-gray-200 focus:text-white focus:bg-dark-100">
                    GBP
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400">
            {fiatAmount} EUR → {formattedCryptoAmount} {selectedCrypto.symbol}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="px-1 h-auto text-gray-400 hover:text-gray-300">
                    <Info className="h-3 w-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-dark-300 border-dark-100 text-gray-200">
                  <p>
                    Exchange rate: 1 {selectedCrypto.symbol} = {(1 / selectedCrypto.rate).toFixed(2)} EUR
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Collapsible
            open={isDetailsOpen}
            onOpenChange={setIsDetailsOpen}
            className="border border-dark-100 rounded-lg bg-dark-400"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full justify-between p-3 text-sm font-medium text-gray-300 hover:text-white"
              >
                Details
                {isDetailsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 pt-0 text-sm space-y-2 border-t border-dark-100">
              <div className="flex justify-between">
                <span className="text-gray-400">Network fee</span>
                <span className="text-gray-200">0.00000500 {selectedCrypto.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Exchange fee</span>
                <span className="text-gray-200">0.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Estimated delivery</span>
                <span className="text-gray-200">5-30 minutes</span>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">Payment method</label>
            <PaymentMethods />
          </div>

          <Button className="w-full py-6 text-lg font-medium bg-gradient-to-r from-[#6a5aff] to-[#5f6fff] hover:from-[#5f6fff] hover:to-[#6a5aff] transition-all duration-300 shadow-dark-glow">
            Buy {selectedCrypto.symbol}
          </Button>

          <p className="text-xs text-center text-gray-400">
            By clicking the Buy button, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
