import { useState } from "react";

 function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent! (Check console for data)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-8 py-20 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white h-32"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
export default Contact;