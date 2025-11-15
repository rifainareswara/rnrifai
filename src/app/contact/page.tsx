// WAJIB: Menjadikan ini Client Component agar bisa interaktif
"use client";

// WAJIB: Import useState untuk mengelola data form
import React, { useState } from "react";
// Impor ikon 'IoSync' untuk spinner
import { IoPaperPlane, IoSync } from "react-icons/io5";

export default function Page() {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  // State untuk mengelola status pengiriman (loading)
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State untuk menampilkan pesan sukses atau error
  const [statusMessage, setStatusMessage] = useState("");
  
  // Ambil access key Anda
  const YOUR_ACCESS_KEY = "0d0ba72b-95d2-4444-a5c3-1c9173d4f208";

  // ======================================================
  // PERUBAHAN TIPE (TYPE) UNTUK MENGATASI ERROR
  // ======================================================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ======================================================
  // PERUBAHAN TIPE (TYPE) UNTUK MENGATASI ERROR
  // ======================================================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    const dataToSend = {
      ...formData,
      access_key: YOUR_ACCESS_KEY,
      subject: `New message from ${formData.fullname} (Portfolio)`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Message sent successfully!");
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error from Web3Forms:", result);
        setStatusMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatusMessage("Error: Could not send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col md:justify-center p-4 md:p-8 md:mt-15 items-center">
      <div className="mt-12 w-full md:max-w-2xl">
        <article className="contact" data-page="contact">
          {/* ... header dan mapbox ... */}
          <header>
            <h2 className="h2 article-title text-2xl font-bold mb-4">
              Contact
            </h2>
          </header>

          <section className="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://maps.google.com/maps?q=Mampang%20Jakarta%20Selatan&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                className="rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </figure>
          </section>

          <section className="contact-form mt-8">
            <h3 className="h3 form-title text-xl font-bold mb-4">
              Contact Form
            </h3>
            
            <form onSubmit={handleSubmit} className="form" data-form>
              {/* ... input dan textarea ... */}
              <div className="input-wrapper md:flex md:space-x-4">
                <input
                  type="text"
                  name="fullname"
                  className="form-input w-full p-2 border border-gray-300 rounded mb-4 md:mb-0"
                  placeholder="Full name"
                  required
                  data-form-input
                  value={formData.fullname}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  className="form-input w-full p-2 border border-gray-300 rounded"
                  placeholder="Email address"
                  required
                  data-form-input
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                className="form-input w-full p-2 border border-gray-300 rounded mt-4"
                placeholder="Your Message"
                required
                data-form-input
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              
              {/* ... Tombol ... */}
              <button
                className="form-btn flex items-center justify-center bg-orange-500 text-white p-2 rounded mt-4 w-full md:w-auto disabled:bg-gray-400 
                           transition-all duration-300 ease-in-out
                           hover:bg-orange-600 
                           active:scale-95
                           disabled:scale-100" // <-- Animasi transisi, hover, dan click
                type="submit"
                disabled={isSubmitting} 
                data-form-btn
              >
                {/* Logic untuk ganti ikon saat loading */}
                {isSubmitting ? (
                  <IoSync className="animate-spin" /> // Ikon spinner berputar
                ) : (
                  <IoPaperPlane /> // Ikon normal
                )}
                
                <span className="ml-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>

            {/* Menampilkan pesan status */}
            {statusMessage && (
              <p className="mt-4 text-center font-medium">{statusMessage}</p>
            )}
          </section>
        </article>
      </div>
    </div>
  );
}