"use client";
import React from 'react';
import { useRouter } from "next/navigation";


const SignUpPage: React.FC = () => {

    const router = useRouter();

    const handleSignUp = () => {
      console.log("Navigating to VerificationPage/SignIn"); // Add this line for debugging
      router.push("/VerificationPage/SignIn");
    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Cooking with Pallapate</h1>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;