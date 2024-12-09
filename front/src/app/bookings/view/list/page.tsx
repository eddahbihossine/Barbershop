"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Booking = {
  ID: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
};

export default function ViewBookings() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
      return;
    }

    // Fetch bookings from API
    fetch("https://book-a-barber-1.onrender.com/bookings")
      .then((response) => response.json())
      .then((data: Booking[]) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://book-a-barber-1.onrender.com/bookings/${id}`, {
        method: "DELETE",
      });
      setBookings((prev) => prev.filter((booking) => booking.ID !== id));
    } catch (error) {
      console.error("Failed to delete booking", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bookings</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md h-96 overflow-y-auto">
        {bookings.length > 0 ? (
          <ul>
            {bookings.map((booking) => (
              <li
                key={booking.ID}
                className="border-b last:border-none py-4 flex flex-col gap-2"
              >
                <span>
                  <strong>Name:</strong> {booking.name}
                </span>
                <span>
                  <strong>Email:</strong> {booking.email}
                </span>
                <span>
                  <strong>Phone:</strong> {booking.phone}
                </span>
                <span>
                  <strong>Date:</strong> {booking.date}
                </span>
                <span>
                  <strong>Time:</strong> {booking.time}
                </span>
                <span>
                  <strong>Service:</strong> {booking.service}
                </span>
                <button
                  onClick={() => handleDelete(booking.ID)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
}
