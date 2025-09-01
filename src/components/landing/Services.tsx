import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-white py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What We Offer
        </h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Explore our top-tier services designed to elevate your business with a
          blend of innovation and expertise.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Website Development */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/web-design.png"
                alt="Website Development Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Website Development
            </h3>
            <p className="text-gray-600 text-center">
              Crafting dynamic and responsive websites tailored to your business
              needs with cutting-edge technology.
            </p>
          </div>

          {/* E-commerce Website */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
                alt="E-commerce Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              E-commerce Website
            </h3>
            <p className="text-gray-600 text-center">
              Building robust online stores to boost your sales and enhance
              customer experience seamlessly.
            </p>
          </div>

          {/* WooCommerce */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/wordpress.png"
                alt="WooCommerce Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              WooCommerce
            </h3>
            <p className="text-gray-600 text-center">
              Custom WooCommerce solutions to create flexible and scalable
              e-commerce platforms.
            </p>
          </div>

          {/* WordPress Website */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/wordpress.png"
                alt="WordPress Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              WordPress Website
            </h3>
            <p className="text-gray-600 text-center">
              Designing user-friendly and SEO-optimized WordPress sites for your
              digital presence.
            </p>
          </div>

          {/* Shopify */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/shopping-bag.png"
                alt="Shopify Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Shopify</h3>
            <p className="text-gray-600 text-center">
              Expert Shopify development to launch and manage your online store
              with ease.
            </p>
          </div>

          {/* AI Automation */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png"
                alt="AI Automation Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              AI Automation
            </h3>
            <p className="text-gray-600 text-center">
              Streamlining your business processes with advanced AI automation
              solutions.
            </p>
          </div>

          {/* Agentic AI */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/robot.png"
                alt="Agentic AI Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Agentic AI</h3>
            <p className="text-gray-600 text-center">
              Leveraging agentic AI to provide intelligent and adaptive business
              solutions.
            </p>
          </div>

          {/* Graphic Design */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/paint-brush.png"
                alt="Graphic Design Icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Graphic Design
            </h3>
            <p className="text-gray-600 text-center">
              Creating stunning visuals and branding materials to make your
              business stand out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
