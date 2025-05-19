import Image from "next/image";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to CodeRush</h1>
      <p className="mb-8 text-lg text-gray-700">Instant, real-time coding matches. Practice Leetcode-style interview questions with strangers!</p>
      <a
        href="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition"
      >
        Login
      </a>
    </div>
  );
}
