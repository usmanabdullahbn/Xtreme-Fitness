import { Play } from "lucide-react"

const ContactSection = () => {
  return (
    <section className="bg-black py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative" data-aos="fade-up">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <div className="absolute inset-0 border-[20px] border-[#22c55e] rounded-full" />
              <img
                src="/placeholder.svg?height=800&width=800"
                alt="Training session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-up">
            <div>
              <h3 className="text-[#22c55e] text-xl mb-4">CONTACT US</h3>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
                SEND US A MESSAGE
                <br />& JOIN OUR TEAM
              </h2>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" data-aos="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-transparent border border-gray-700 text-white hover:bg-[#22c55e] hover:border-[#22c55e] group px-6 py-3 rounded-md flex items-center"
              >
                Send now
                <span className="ml-2 w-6 h-6 rounded-full bg-[#22c55e] group-hover:bg-white flex items-center justify-center">
                  <Play className="w-3 h-3 text-white group-hover:text-[#22c55e]" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
