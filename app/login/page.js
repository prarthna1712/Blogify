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
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.success) {
      router.push("/dashboard"); // Change to your landing page after login
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-gray-800">
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
        className="w-full border:solid border-gray-300 hover:bg-purple-600 hover:text-white"
      >
        Login
      </Button>
      <p className="text-sm mt-4 text-center dark:text-gray-800">
        Don’t have an account?{" "}
        <a
          href="/signup"
          className="text-blue-500 underline dark:text-gray-400"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
