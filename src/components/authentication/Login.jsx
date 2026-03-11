import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return setError("Please fill in all fields");
    
    setLoading(true);
    setError("");
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully:", userCredential.user);
      
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4.5 font-outfit">
      
      {/* Header */}
      <div>
        <h2 className="text-[22px] font-extrabold text-[#eef2ff] mb-1">Welcome back </h2>
        <p className="text-[13px] text-[#eef2ff]/50">Sign in to continue your conversations</p>
      </div>

      {/* Social Buttons (Updated with react-icons) */}
      <div className="flex w-full">
        <button type="button" className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#eef2ff]/70 hover:text-[#eef2ff] hover:bg-white/10 hover:-translate-y-[1px] hover:border-white/20 transition-all text-[13px] font-medium">
          <FcGoogle className="text-[18px]" />
          <span>Continue with Google</span>
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/30 text-[11px] tracking-widest uppercase">or continue with</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Error Message */}
      {error && <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs text-center">{error}</div>}

      {/* Inputs */}
      <div className="flex flex-col gap-3.5">
        
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold tracking-widest uppercase text-[#eef2ff]/50">Email Address</label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] text-[#eef2ff]/30"><HiOutlineMail /></span>
            <input 
              type="email" 
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 focus:border-[#00e5ff]/35 focus:ring-4 focus:ring-[#00e5ff]/10 rounded-xl py-3 pr-4 pl-11 text-[#eef2ff] text-[14px] outline-none transition-all placeholder:text-[#eef2ff]/30"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold tracking-widest uppercase text-[#eef2ff]/50">Password</label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] text-[#eef2ff]/30"><RiLockPasswordLine /></span>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••"
              className="w-full bg-white/5 border border-white/10 focus:border-[#00e5ff]/35 focus:ring-4 focus:ring-[#00e5ff]/10 rounded-xl py-3 pr-11 pl-11 text-[#eef2ff] text-[14px] outline-none transition-all placeholder:text-[#eef2ff]/30"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] text-[#eef2ff]/30 hover:text-[#00e5ff] transition-colors">
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>

      </div>

      {/* Options */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer group">
          <div className="w-4 h-4 rounded-[5px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00e5ff]/50 transition-colors">
            <span className="text-[8px] text-white/30">✓</span>
          </div>
          <span className="text-[12px] text-[#eef2ff]/50">Remember me</span>
        </label>
        <button type="button" className="text-[12px] text-[#00e5ff] opacity-80 font-medium hover:opacity-100 transition-opacity">
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#9b5de5] text-white text-[15px] font-bold tracking-wide hover:shadow-[0_8px_32px_rgba(0,229,255,0.45)] hover:-translate-y-0.5 transition-all disabled:opacity-75 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2">
        {loading ? "Processing..." : "Sign In →"}
      </button>

      {/* Switcher */}
      <p className="text-center text-[13px] text-[#eef2ff]/50 mt-1">
        Don't have an account?{" "}
        <button type="button" onClick={onSwitch} className="text-[#00e5ff] font-semibold opacity-85 hover:opacity-100 hover:underline">
          Create one
        </button>
      </p>

    </form>
  );
};

export default Login;