"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface UserCredentials {
    email: string;
    password: string;
}

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const[credentials, setCredentials] = useState<UserCredentials>({
    email: '',
    password: ''
  });

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (username === "buildambit" && password === "build@ambit") {
//       setError("");
//       router.push("/");
//       return;
//     }
//     setError("Invalid credentials");
//   }

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // 'setCredentials' state ko update karta hai
    setCredentials(prevState => ({
      ...prevState, // Pehle ki state ko copy karein
      [name]: value,  // 'name' attribute ke basis par (username ya password) value update karein
    }));
  }

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Page ko reload hone se rokta hai
    const { email, password } = credentials;
    alert(`Email :${email}`)
    // Jaisa aapne kaha tha: state ko console mein dikhayein
    console.log('Form Data (Interface ke saath):', credentials);
  };

  return (
    <div className="min-h-[calc(100vh-56px)] grid place-items-center bg-[#f7f8fc] px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[440px] sm:max-w-[480px] md:max-w-[520px] rounded-[10px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 select-none">
            {/* <Image src="/logo.svg" alt="logo" width={150} height={100} /> */}
             <h1 className="text-4xl font-extrabold tracking-tight text-[#14a44d]">
              SUVICO
            </h1>
          </div>
        </div>

        <h1 className="text-center text-[24px] sm:text-[28px] md:text-[30px] font-extrabold text-[#111827]">
          Welcome ,Super Admin!
        </h1>
        <p className="mt-2 text-center text-[13px] sm:text-[14px] text-gray-500">
          Enter your credentials to access the Suvico  Super Admin Panel.
        </p>

        <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[13px] sm:text-[14px] font-medium text-[#111827] mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="email" // Yeh 'interface' ki key se match hona chahiye
              value={credentials.email} // State se value ko link karein
              onChange={handleChange} // Typing par 'handleChange' call karein
              className="w-full h-[41px] rounded-[6px] border border-[#DEE1E6] px-[12px] text-[14px] outline-none focus:ring-0 focus:border-[#DEE1E6] hover:border-[#DEE1E6] text-[#111827] hover:text-[#565D6D] focus:text-[#565D6D] bg-white"
            />
          </div>

          <div>
            <label className="block text-[13px] sm:text-[14px] font-medium text-[#111827] mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password" // Yeh 'interface' ki key se match hona chahiye
              value={credentials.password} // State se value ko link karein
              onChange={handleChange}
              className="w-full h-[41px] rounded-[6px] border border-[#DEE1E6] px-[12px] text-[14px] outline-none focus:ring-0 focus:border-[#DEE1E6] hover:border-[#DEE1E6] text-[#111827] hover:text-[#565D6D] focus:text-[#565D6D] bg-white"
            />
          </div>

          <div className="flex justify-end">
            <Link href="#" className="text-[13px] sm:text-[14px] font-bold text-[#14a44d] hover:underline">
              Forgot Password?
            </Link>
          </div>

          {error ? (
            <p className="text-[13px] text-red-600">{error}</p>
          ) : null}

          <button
            type="submit"
            className="w-full h-10 rounded-md bg-[#14a44d] text-white text-[14px] font-semibold hover:opacity-95 active:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}