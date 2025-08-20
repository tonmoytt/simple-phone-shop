import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // ✅ FIXED
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Post from './../Electronics/Post/Post'

// ---------- Dummy Data (Replace later) ----------
const metrics = [
  { label: "Free Shipping", desc: "Free shipping on order", icon: "🚚" },
  { label: "Support 24/7", desc: "Contact us 24 hours a day", icon: "🕑" },
  { label: "Payment Secure", desc: "Safe & secure payment", icon: "🔒" },
];

const topFeaturePosts = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 ? "Smart Track" : "Unic Track",
  price: i % 2 ? 45.99 : 59.99,
  oldPrice: i % 2 ? 59.99 : 79.99,
  image: `https://picsum.photos/seed/watch-${i}/600/460`, // ✅ FIXED
  features: ["Heart rate monitor", "Battery 10 days", "Alarm clock", "Smart watch"],
}));

const popularProducts = [
  { id: 1, name: "Wireless Headphone", price: 39.99, rating: 4.5, image: "https://picsum.photos/seed/headphone/400/300" },
  { id: 2, name: "Table as a Laptop", price: 129.0, rating: 4.2, image: "https://picsum.photos/seed/laptoptable/400/300" },
  { id: 3, name: "Smartphone Mini", price: 249.0, rating: 4.7, image: "https://picsum.photos/seed/phone/400/300" },
  { id: 4, name: "Smart Speaker", price: 59.0, rating: 4.3, image: "https://picsum.photos/seed/speaker/400/300" },
  { id: 5, name: "VR Headset", price: 299.0, rating: 4.6, image: "https://picsum.photos/seed/vr/400/300" },
  { id: 6, name: "Gaming Mouse", price: 29.0, rating: 4.4, image: "https://picsum.photos/seed/mouse/400/300" },
  { id: 7, name: "Portable SSD", price: 89.0, rating: 4.8, image: "https://picsum.photos/seed/ssd/400/300" },
];

const bestProductGallery = [
  "https://picsum.photos/seed/watch-hero-1/600/500",
  "https://picsum.photos/seed/watch-hero-2/600/500",
  "https://picsum.photos/seed/watch-hero-3/600/500",
];

const SaleCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="relative overflow-hidden rounded-2xl p-6 md:p-10 bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md shadow-sm border"
  >
    <div className="absolute -left-20 -top-20 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
    <div className="absolute -right-10 top-24 w-40 h-40 bg-amber-300/30 rounded-full blur-2xl" />
    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Sale up to <span className="text-orange-500">30% OFF</span>
        </h3>
        <p className="text-gray-600 mb-6">Compact Camera • Limited time offer</p>
        <button className="px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">
          Shop Now
        </button>
      </div>
      <motion.img
        whileHover={{ scale: 1.05 }}
        src="https://picsum.photos/seed/camera-sale/640/420"
        alt="camera"
        className="w-full rounded-xl"
      />
    </div>
  </motion.div>
);

const testimonials = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  name: `Customer ${i + 1}`, // ✅ FIXED
  review: "Amazing product, I really loved the quality and fast delivery!",
  rating: 5,
  avatar: `https://i.pravatar.cc/100?img=${i + 10}`, // ✅ FIXED
}));

const blogs = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  title: `Blog Title ${i + 1}`, // ✅ FIXED
  desc: "Some informative content about our product and offers.",
  image: `https://picsum.photos/seed/blog${i}/500/300`, // ✅ FIXED
}));

// ---------- Animation Variants ----------
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ---------- Main Component ----------
export default function GshopStyleLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* 1) Banner Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-10 md:py-16"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white via-orange-50 to-orange-100  p-6 md:p-10 shadow-sm border">
            <div className="absolute -right-24 -top-24 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl" />
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-orange-500" />
                   
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                  Our Best <br /> Collections <span className="text-gray-800">For You</span>
                </h1>
                <p className="text-gray-600 mb-8">
                  The stylish smartwatches available to consumers are endless and perfect for workouts.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">
                    Add to cart
                  </button>
                  <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md border font-semibold hover:bg-gray-50 transition">
                    More Info
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src="https://picsum.photos/seed/hero-watch/700/520"
                  alt="hero watch"
                  className="w-full rounded-xl"
                />
              </motion.div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md rounded-2xl p-5 shadow-sm border flex items-start gap-4"
              >
                <div className="text-2xl">{m.icon}</div>
                <div>
                  <p className="font-semibold">{m.label}</p>
                  <p className="text-gray-600 text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other sections remain same but wrapped with <motion.section> and animations (Top Features, Popular Products, Best Product, Testimonials, Blogs, Why Choose Us, Newsletter) */}




        {/* 2) Top features of the watch (Swiper with center image, info on both sides) */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Top features of the watch</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2800 }}
            className="pb-10"
          >
            {topFeaturePosts.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md rounded-2xl p-8 shadow-sm border grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-right">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                      {item.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                    <p className="text-gray-600 mb-3">Premium smartwatch with productivity features.</p>
                    <div className="flex justify-end gap-3 mb-5">
                      <span className="text-2xl font-extrabold">${item.price.toFixed(2)}</span>
                      <span className="text-gray-400 line-through">${item.oldPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={item.image} alt={item.title} className="w-60 h-60 object-cover rounded-xl" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-3">Stylish design with fitness features.</p>
                    <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                      {item.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                    <button className="px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">Buy Now</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <Post></Post>

        {/* 3) Popular products (Swiper with 7 cards) */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular products</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {popularProducts.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md rounded-2xl p-4 shadow-sm border hover:shadow-md transition grid gap-3">
                  <img src={p.image} alt={p.name} className="w-full rounded-lg aspect-video object-cover" />
                  <div>
                    <p className="text-sm text-gray-500">Gadgets</p>
                    <h3 className="font-semibold">{p.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold">${p.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-500">★ {p.rating}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* 4) Best product (image left, info right, Swiper for images) */}
        <section className="py-12">
          <div className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md rounded-2xl p-6 md:p-10 shadow-sm border grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={12} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 2600 }} className="rounded-xl overflow-hidden">
                {bestProductGallery.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={src} alt={`best product ${idx + 1}`} className="w-full h-[300px] md:h-[400px] object-cover rounded-xl" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The best product for your best time</h2>
              <p className="text-gray-600 mb-6">Premium sport watch featuring GPS, heart-rate monitor, and vivid AMOLED display. Replace the left gallery with your live product images.</p>
              <button className="px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">Explore Now</button>
            </div>
          </div>
        </section>

        {/* 5) Sale 30% Offer */}
        <section className="py-12">
          <SaleCard />
        </section>

        {/* Extra Sections */}


        {/* Testimonials */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 px-6 bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Customer Reviews</h2>
          <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3000 }}>
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 p-6 rounded-2xl shadow-md text-center max-w-lg mx-auto"
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-gray-600 mb-2">{t.review}</p>
                  <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 px-6 bg-gray-50"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md rounded-2xl shadow-md overflow-hidden"
              >
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-3">{blog.desc}</p>
                  <button className="text-pink-600 hover:underline">Read More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 px-6 bg-gradient-to-r from-white via-orange-50 to-orange-100 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Fast Delivery", desc: "Get your product quickly." },
              { title: "Premium Quality", desc: "Only the best products." },
              { title: "Secure Payment", desc: "We value your privacy." },
              { title: "24/7 Support", desc: "Always here to help." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-2xl shadow-md"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get updates about our latest products and offers.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-64 text-black"
            />
            <button className="px-6 py-2 bg-pink-600 rounded-r-lg hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </motion.section>

        <footer className="py-10 text-sm text-gray-600">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Gshop</h4>
              <p>High quality gadgets and wearables.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Find product</h4>
              <ul className="space-y-1">
                <li>Smart watch</li>
                <li>Headphone</li>
                <li>Camera</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Get help</h4>
              <ul className="space-y-1">
                <li>Order Status</li>
                <li>Shipping</li>
                <li>Returns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <ul className="space-y-1">
                <li>Contact</li>
                <li>Careers</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center">© {new Date().getFullYear()} Gshop. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
