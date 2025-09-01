export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-gray-100 py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get in Touch with Saud Solutions
        </h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          We’d love to hear from you! Reach out for website development,
          e-commerce solutions, WooCommerce, WordPress, Shopify, AI automation,
          agentic AI, or graphic design services. Let’s build something amazing
          together.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Details
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> info@saudsolutions.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +92-123-4567890
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 123 Tech Street, Karachi, Pakistan
            </p>
            <div className="mt-6">
              <a
                href="https://www.facebook.com/saudsolutions"
                target="_blank"
                className="text-blue-600 hover:underline mr-4"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com/saudsolutions"
                target="_blank"
                className="text-blue-600 hover:underline mr-4"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/saudsolutions"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
