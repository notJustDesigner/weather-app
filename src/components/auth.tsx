import { useState } from "react";
import {
  auth,
  provider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "../firebase";

export const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "builder.html";
    } catch (err: unknown) {
      alert("Login failed: " + (err instanceof Error ? err.message : "Unknown error"));
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = "builder.html";
    } catch (err: unknown) {
      alert("Signup failed: " + (err instanceof Error ? err.message : "Unknown error"));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "./";
    } catch (err: unknown) {
      alert("Google sign-in failed: " + (err instanceof Error ? err.message : "Unknown error"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login or Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between mb-4">
          <button
            onClick={handleLogin}
            className="w-1/2 mr-2 bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={handleSignup}
            className="w-1/2 ml-2 bg-green-500 text-white p-3 rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
        <hr className="my-4" />
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};