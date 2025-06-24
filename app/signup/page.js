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
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.success) {
      router.push("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-gray-800">
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
        className="w-full border:solid border-gray-300 hover:bg-purple-600 hover:text-white"
      >
        Sign Up
      </Button>
      <p className="text-sm mt-4 text-center dark:text-gray-800">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 underline">
          Login
        </a>
      </p>
    </div>
  );
}
