"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let data = { success: false };

      // Prevent parsing error if empty response
      if (res.headers.get("content-type")?.includes("application/json")) {
        data = await res.json();
      }

      if (data.success) {
        router.push("/blog");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 rounded-xl shadow-lg bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Login
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
        onClick={handleLogin}
        className="w-full bg-primary text-white hover:bg-purple-700 transition dark:bg-purple-600 dark:hover:bg-purple-700"
      >
        Login
      </Button>
      <p className="text-sm mt-4 text-center text-gray-600 dark:text-gray-300">
        Don’t have an account?{" "}
        <a
          href="/signup"
          className="text-blue-500 underline hover:text-blue-700 dark:text-blue-400"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
