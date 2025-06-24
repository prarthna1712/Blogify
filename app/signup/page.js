"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let data = { success: false };

      // Safely parse JSON if response is valid
      if (res.headers.get("content-type")?.includes("application/json")) {
        data = await res.json();
      }

      if (data.success) {
        router.push("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 rounded-xl shadow-lg bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Sign Up
      </h2>
      <Input
        placeholder="Email"
        className="mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        className="mb-6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleSignup}
        className="w-full bg-primary text-white hover:bg-purple-700 transition dark:bg-purple-600 dark:hover:bg-purple-700"
      >
        Sign Up
      </Button>
      <p className="text-sm mt-4 text-center text-gray-600 dark:text-gray-300">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-blue-500 underline hover:text-blue-700 dark:text-blue-400"
        >
          Login
        </a>
      </p>
    </div>
  );
}
