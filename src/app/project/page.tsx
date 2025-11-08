import React from "react";

export default function page() {
  return (
    <>
      {/* This main container centers the card on the page, 
        using a light gray background to make the card pop.
      */}
      <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        
        {/* This is the "Under Construction" card, 
          styled using the colors and shadow from your example.
        */}
        <div
          className="flex flex-col items-center p-8 md:p-12 rounded-lg text-center"
          style={{
            background: "#fefae0",
            boxShadow:
              "0px 4.2px 3.4px rgba(0, 0, 0, 0.028), 0px 14.1px 11.4px rgba(0, 0, 0, 0.042), 0px 63px 51px rgba(0, 0, 0, 0.07)",
          }}
        >
          {/* Heading uses the orange-500 color from your example */}
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            🚧 Coming Soon 🚧
          </h1>

          {/* Paragraph uses the gray-800 color from your example */}
          <p className="text-lg md:text-xl text-gray-800">
            This page is currently under construction.
            <br />
            We'll be back soon!
          </p>
        </div>

      </main>
    </>
  );
}