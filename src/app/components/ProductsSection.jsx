"use client";
import { Star } from "lucide-react";

export default function ProductsHighlights() {
  const highlights = {
    features: [
      "Wide range of high-quality products",
      "Secure payment gateway with Stripe",
      "Fast & reliable delivery across the country"
    ],
    advantages: [
      "Affordable prices compared to competitors",
      "24/7 customer support",
      "Easy returns & refunds policy"
    ],
    reviews: {
      rating: 4.6,
      totalReviews: 1200,
      feedback: [
        "Excellent quality and fast delivery!",
        "Customer support was super helpful.",
        "Very good value for the price."
      ]
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        🌟 Product Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Features */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-green-500 mb-4">✨ Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {highlights.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Advantages */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl text-green-500  font-semibold mb-4">💡 Advantages</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {highlights.advantages.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Ratings & Reviews */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl text-green-500  font-semibold mb-4">⭐ Reviews</h3>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(highlights.reviews.rating)
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-700">
              {highlights.reviews.rating} / 5
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Based on {highlights.reviews.totalReviews}+ reviews
          </p>

          {/* Some Feedback */}
          <ul className="text-gray-700 space-y-2 text-sm">
            {highlights.reviews.feedback.map((comment, i) => (
              <li key={i} className="italic">“{comment}”</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
