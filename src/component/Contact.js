import { useState } from "react";
import { Play } from "lucide-react";
import img from "../asserts/img 1.jpg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("https://commando-fitness-club-backend.onrender.com/send/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data)
      if (data.status==true) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-black py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <div className="absolute inset-0 border-[20px] border-[#22c55e] rounded-full" />
              <img src={img} alt="Training session" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-8" data-aos="fade-up">
            <div>
              <h3 className="text-[#22c55e] text-xl mb-4">CONTACT US</h3>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
                SEND US A MESSAGE
                <br />& JOIN OUR TEAM
              </h2>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#22c55e]"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-transparent border border-gray-700 text-white hover:bg-[#22c55e] hover:border-[#22c55e] group px-6 py-3 rounded-md flex items-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send now"}
                <span className="ml-2 w-6 h-6 rounded-full bg-[#22c55e] group-hover:bg-white flex items-center justify-center">
                  <Play className="w-3 h-3 text-white group-hover:text-[#22c55e]" />
                </span>
              </button>
            </form>

            {/* Response Message */}
            {responseMessage && (
              <p className="text-center text-white mt-4">{responseMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
