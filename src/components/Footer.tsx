export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Saud Solutions</h3>
          <p className="text-gray-400 text-sm">
            Empowering businesses with innovative website development,
            e-commerce solutions, WooCommerce, WordPress, Shopify, AI
            automation, agentic AI, and graphic design services. Your success is
            our mission.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-400 text-sm mb-2">
            Email: info@saudsolutions.com
          </p>
          <p className="text-gray-400 text-sm mb-2">Phone: +92-123-4567890</p>
          <p className="text-gray-400 text-sm">
            Address: 123 Tech Street, Karachi, Pakistan
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4">
            Stay updated with our latest services and offers.
          </p>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-2 rounded-lg text-gray-900"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Saud Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
