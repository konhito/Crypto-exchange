import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Thompson",
    location: "United Kingdom",
    rating: 5,
    text: "I've been using this platform for over a year now and it's by far the easiest way to buy crypto. The rates are competitive and transactions are always fast.",
  },
  {
    name: "Maria Rodriguez",
    location: "Spain",
    rating: 5,
    text: "As a newcomer to crypto, I was looking for a simple solution. This platform made it incredibly easy to make my first Bitcoin purchase. Great customer support too!",
  },
  {
    name: "Hiroshi Tanaka",
    location: "Japan",
    rating: 4,
    text: "Very reliable service with good rates. I appreciate the transparency about fees and the quick transaction times. Would recommend to anyone looking to buy crypto.",
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-dark-300 border-dark-100 shadow-dark-md hover:shadow-dark-lg transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-500"}`}
                />
              ))}
            </div>

            <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6a5aff] to-[#5f6fff] flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
