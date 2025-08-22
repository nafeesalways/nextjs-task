"use client";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-base-100 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          About Unicare
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          At <span className="font-semibold">Unicare</span>, we are committed to
          delivering high-quality products that improve everyday living. From
          healthcare essentials to lifestyle goods, our focus is on trust,
          quality, and innovation.
        </p>

        {/* Our Mission */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple: to create products that care for your health,
            comfort, and well-being. We strive to offer safe, reliable, and
            sustainable solutions that make life better for individuals and
            families alike.
          </p>
        </div>

        {/* Products Highlight */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
            Our Product Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="card bg-base-100 shadow-sm hover:shadow-lg transition rounded-xl">
              <figure className="px-6 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1567721913486-6585f069b332?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fHww"
                  alt="Healthcare Essentials"
                  className="rounded-xl h-40 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Healthcare Essentials</h3>
                <p className="text-sm text-gray-600">
                  Premium healthcare and hygiene products designed to protect
                  you and your family.
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="card bg-base-100 shadow-sm hover:shadow-lg transition rounded-xl">
              <figure className="px-6 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbmFsJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Personal Care"
                  className="rounded-xl h-40 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Personal Care</h3>
                <p className="text-sm text-gray-600">
                  Trusted products that support a healthier, more confident
                  lifestyle.
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="card bg-base-200 shadow-sm hover:shadow-lg transition rounded-xl">
              <figure className="px-6 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGlmZXN0eWxlfGVufDB8fDB8fHww"
                  alt="Lifestyle Products"
                  className="rounded-xl h-40 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Lifestyle Products</h3>
                <p className="text-sm text-gray-600">
                  Innovative lifestyle solutions crafted for convenience,
                  comfort, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-blue-300 shadow-inner rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Unicare, every product we create carries a promise — to care for
            you. We ensure our items are tested for quality and meet the highest
            safety standards. Your well-being is at the heart of everything we
            do.
          </p>
        </div>
      </div>
    </div>
  );
}
