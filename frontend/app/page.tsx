"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Telegram init
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }

    fetch(`${process.env.BASE_URL}/`)
      .then((res) => {
        console.log("status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("data:", data);

        // IMPORTANT
        setMessage(data.message);
      })
      .catch((err) => {
        console.error("fetch error:", err);

        setMessage("Fetch failed");
      });
  }, []);

  return (
    <main className="flex items-center justify-center h-screen text-xl">
      {message}
    </main>
  );
}