import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col md:justify-center p-4 md:p-8 md:mt-15 items-center">
      {/*--- KONTEN ANDA YANG SUDAH ADA --- */}
      {/*<div className="md:max-w-2xl md:text-justify mx-auto">
        <p>
          Do not hesitate to contact me if you need any marketing things, you
          can connect me on Linkedin. Or directly send me a message on email at
          {" "}
          <span className="text-orange-500 font-bold">
            rifairizqi.hao@gmail.com
          </span>{" "}
          or even DM through my social media.
        </p>
      </div>
      <div
        className="flex p-4 rounded-lg mt-7"
        style={{
          background: "#fefae0",
          boxShadow:
            "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
        }}
      >
        <div className="p-4">
          <div className="text-md md:text-xl">
            <h1 className="font-bold">From</h1>
            <p>Jimbaran, Kuta Selatan.</p>
            <p>Bali, Indonesia.</p>
            <p>UTC/GMT +8 hours</p>
          </div>
        </div>
        <div className="p-4">
          <div className="text-md md:text-xl">
            <h1 className="font-bold">Contact Me</h1>
            <p>
              <a
                className="text-gray-800 hover:bg-orange-500 hover:text-white"
                href="mailto:rifairizqi.hao@gmail.com"
              >
                Email
              </a>
            </p>
            <p>
              <a
                className="text-gray-800 hover:bg-orange-500 hover:text-white"
                href="https://www.linkedin.com/in/rizqinrifai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
ar         </p>
            <p>
              <a
                className="text-gray-800 hover:bg-orange-500 hover:text-white"
                href="https://www.instagram.com/rifainareswara"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>*/}
      {/* --- AKHIR KONTEN YANG SUDAH ADA --- */}

      {/* === BAGIAN BARU YANG DITAMBAHKAN === */}
      {/* Catatan: Kode ini menggunakan class HTML asli (seperti 'contact', 'mapbox', 'form-input').
        Anda perlu menambahkan file CSS yang sesuai untuk class-class ini, 
        atau mengubahnya agar menggunakan class Tailwind.
      */}
      <div className="mt-12 w-full md:max-w-2xl">
        {/* - #CONTACT - */}
        <article className="contact" data-page="contact">
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
                allowFullScreen // <-- DIPERBAIKI: Dihapus "" agar menjadi boolean true
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </figure>
          </section>

          <section className="contact-form mt-8">
            <h3 className="h3 form-title text-xl font-bold mb-4">
              Contact Form
            </h3>
            <form action="#" className="form" data-form>
              <div className="input-wrapper md:flex md:space-x-4">
                <input
                  type="text"
                  name="fullname"
                  className="form-input w-full p-2 border border-gray-300 rounded mb-4 md:mb-0" // Contoh styling Tailwind
                  placeholder="Full name"
                  required
                  data-form-input
                />
                <input
                  type="email"
                  name="email"
                  className="form-input w-full p-2 border border-gray-300 rounded" // Contoh styling Tailwind
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>
              <textarea
                name="message"
                className="form-input w-full p-2 border border-gray-300 rounded mt-4" // Contoh styling Tailwind
                placeholder="Your Message"
                required
                data-form-input
              ></textarea>
              <button
                className="form-btn flex items-center justify-center bg-orange-500 text-white p-2 rounded mt-4" // Contoh styling Tailwind
                type="submit"
                disabled
                data-form-btn
              >
                {/* Pastikan Anda telah mengimpor library ion-icon di proyek Anda,
                  atau ganti dengan ikon dari 'react-icons'
                */}
                <ion-icon name="paper-plane"></ion-icon>
                <span className="ml-2">Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
      {/* === AKHIR BAGIAN BARU === */}
    </div>
  );
}