import React from "react";
import Link from "next/link";
import { InfiniteMovingCards } from "./components/floating-cards";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className=" z-10 bg-black bg-opacity-50 p-8 rounded-lg text-center flex items-center flex-col">
        <h1 className="text-4xl font-extrabold mb-6 font-[harmond] z-10">Barbershop Booking System</h1>
        <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg text-center flex flex-row gap-5">

        <Link href="/bookings/create">
          <div className="bg-neutral-200  text-black px-6 py-3 rounded-md hover:bg-neutral-700 hover:text-white">
            Create Booking
          </div>
        </Link>
        <Link href="/bookings/view">
          <div className="bg-neutral-200  text-black px-6 py-3 rounded-md hover:bg-neutral-700 hover:text-white">
            View Bookings
          </div>
        </Link>
        </div>
      </div>

      {/* Infinite Moving Cards */}
      <div className="relative z-10 mt-12">
        <InfiniteMovingCards
          items={[
            {
              name: "John Doe",
              title: "CEO",
              quote: "The best barbershop in town!",
            },
            {
              name: "Jane Doe",
              title: "CFO",
              quote: "I love the service!",
            },
            {
              name: "John Smith",
              title: "CTO",
              quote: "The barbers are very professional!",
            },
          ]}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 pointer-events-none"></div>
    </div>
  );
}
