// pages/index.js
"use client";
import Image from "next/image";
import CakeCard from "./component/CakeCardComponent";
import ceoImg from "@/app/assets/images/jeff.jpg"

// Sample cake data
const cakesData = [
  {
    id: 1,
    name: "Chocolate Delight",
    description: "Rich chocolate cake with smooth ganache frosting",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    basePrice: 500,
    flavours: ["Chocolate", "Double Chocolate", "Chocolate Mint"],
  },
  {
    id: 2,
    name: "Vanilla Dream",
    description: "Classic vanilla sponge with buttercream frosting",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    basePrice: 600,
    flavours: ["Vanilla", "French Vanilla", "Vanilla Bean"],
  },
  {
    id: 3,
    name: "Red Velvet Supreme",
    description: "Luxurious red velvet with cream cheese frosting",
    image:
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
    basePrice: 900,
    flavours: ["Red Velvet", "Red Velvet Cream", "Classic Red Velvet"],
  },
  {
    id: 4,
    name: "Lemon Zest",
    description: "Fresh lemon cake with tangy lemon glaze",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
    basePrice: 800,
    flavours: ["Lemon", "Lemon Lime", "Lemon Poppy Seed"],
  },
  {
    id: 5,
    name: "Strawberry Bliss",
    description: "Light strawberry cake with fresh strawberry frosting",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop",
    basePrice: 500,
    flavours: ["Strawberry", "Strawberry Cream", "Wild Strawberry"],
  },
  {
    id: 6,
    name: "Carrot Cake Classic",
    description: "Moist carrot cake with cinnamon cream cheese frosting",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop",
    basePrice: 300,
    flavours: ["Carrot Spice", "Carrot Walnut", "Carrot Raisin"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br ">
      {/* Navigation */}

      <div className="">
        {/* Hero Section */}
        <section id="home" className="text-center py-20 px-4 bg-purple-900 ">
          <div className="mb-12">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-2 leading-tight">
              Welcome to <span className="">Novacore</span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl text-[12px] mx-auto">
              Where artistry meets flavor. We craft premium handcrafted cakes
              that turn your special moments into unforgettable celebrations.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-purple-100 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {/* Feature 1 */}
              <div className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  🎂
                </div>
                <h3 className="font-semibold text-purple-800 text-xl">
                  Fresh Daily
                </h3>
                <p className="text-gray-600 mt-2">
                  Baked fresh every morning with premium ingredients.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  🚚
                </div>
                <h3 className="font-semibold text-purple-800 text-xl">
                  Free Delivery
                </h3>
                <p className="text-gray-600 mt-2">
                  Complimentary delivery within Lagos metropolis.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  ⭐
                </div>
                <h3 className="font-semibold text-purple-800 text-xl">
                  Custom Orders
                </h3>
                <p className="text-gray-600 mt-2">
                  Personalized designs crafted just for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cakes Grid */}
        <section id="cakes" className="py-16">
          <div className="mb-8 text-center w-[80%] mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Our Signature Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium cakes, each
              one a masterpiece of flavor and design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  w-[80%] mx-auto lg:grid-cols-3 gap-8">
            {cakesData.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        </section>

        <section id="about" className="py-16 bg-white rounded-2xl  mb-4">
          <div className="px-8 md:w-[80%] mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-purple-900 mb-4 text-center">
              Meet the Master Baker
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <Image
                    src= {ceoImg}// or an external URL
                    alt="Business Owner"
                    width={228} // w-32 = 8rem = 128px
                    height={228} // h-32 = 8rem = 128px
                    className="rounded-full mx-auto lg:mx-0 object-cover border-4 grayscale-[100%] hover:grayscale-0 duration-300 transition border-purple-200 shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  Olotu Jeffery Great
                </h3>
                <p className="text-purple-600 font-semibold mb-4">
                  Founder & Head Baker
                </p>
                <div className="text-gray-600 space-y-3">
                  <p>
                    "With over 10 years of experience in the culinary arts, I
                    founded Novacore with a simple mission: to create
                    exceptional cakes that bring joy to every celebration."
                  </p>
                  <p>
                    "Each cake is crafted with passion, using only the finest
                    ingredients and time-honored techniques passed down through
                    generations."
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 md:p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-purple-900 mb-4">
                  Our Story
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Novacore began as a dream in [Year], born from a passion for
                    creating beautiful, delicious cakes that celebrate life's
                    precious moments.
                  </p>
                  <p>
                    What started in a small kitchen has grown into Lagos's
                    premier cake destination, trusted by families and businesses
                    alike for our commitment to quality and artistry.
                  </p>
                  <p>
                    Every cake tells a story, and we're honored to be part of
                    yours.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-900">
                      2000+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-900">
                      10+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl mb-16">
          <div className="px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-purple-900 mb-12 text-center">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Sarah M."
                    className="w-20 h-20 rounded-full mb-4 border-4 border-purple-200 object-cover"
                  />
                  <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-600 mb-4 italic">
                    "The best cake I've ever tasted! Absolutely perfect for our
                    wedding day."
                  </p>
                  <p className="font-semibold text-purple-900">Sarah M.</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="David O."
                    className="w-20 h-20 rounded-full mb-4 border-4 border-purple-200 object-cover"
                  />
                  <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-600 mb-4 italic">
                    "Professional service and incredible attention to detail.
                    Highly recommended!"
                  </p>
                  <p className="font-semibold text-purple-900">David O.</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/75.jpg"
                    alt="Jennifer A."
                    className="w-20 h-20 rounded-full mb-4 border-4 border-purple-200 object-cover"
                  />
                  <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-600 mb-4 italic">
                    "Made my daughter's birthday extra special. Thank you
                    Novacore!"
                  </p>
                  <p className="font-semibold text-purple-900">Jennifer A.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white  shadow-xl "
        >
          <div className="text-center px-8">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Create Something Special?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life. Contact us today to discuss your
              perfect cake and make your celebration unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
                📱 WhatsApp: +1 (226) 552-5489
              </div>
              <div className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
                📧 olotujeffopukeme@gmail.com
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-purple-100">
                📍 Located in Canada, Ontario | 🕒 Open Monday - Saturday, 8AM -
                6PM
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
    </div>
  );
}
