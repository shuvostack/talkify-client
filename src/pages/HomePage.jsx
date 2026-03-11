import { useState } from "react";
import LeftPanel from "../components/authentication/LeftPanel";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

const HomePage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="flex h-screen w-full bg-[#050810] font-outfit overflow-hidden">
      
      {/* Left Panel */}
      <div className="hidden lg:block lg:w-1/2 xl:w-[55%] h-full">
        <LeftPanel />
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 xl:w-[45%] h-full relative bg-[#090d1a]/95 backdrop-blur-3xl overflow-y-auto px-4 py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col">
        
        {/* Background Subtle Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.05),transparent_50%)]" />

        
        <div className="flex flex-col items-center w-full max-w-[420px] mx-auto my-auto relative z-10">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex flex-col items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)] text-lg"
                 style={{ background: "linear-gradient(135deg,#00e5ff,#9b5de5)" }}>
              💬
            </div>
            <span className="font-syncopate font-black tracking-widest text-[16px] text-transparent bg-clip-text bg-gradient-to-br from-[#00e5ff] to-[#9b5de5]">
              TALKIFY
            </span>
          </div>

          {/* Main Authentication Card */}
          <div className="w-full bg-white/[0.035] border border-white/10 rounded-[24px] p-6 sm:p-8 relative backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.04)]">
            
            {/* Top Glow Border */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/40 to-transparent" />

            {/* Tab Switcher */}
            <div className="flex p-1 rounded-2xl bg-white/5 border border-white/10 mb-6 relative">
              <button
                onClick={() => setMode("login")}
                className={`flex-1 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                  mode === "login" 
                  ? "bg-gradient-to-br from-[#00e5ff]/20 to-[#9b5de5]/20 border border-[#00e5ff]/20 text-[#00e5ff] shadow-[0_0_16px_rgba(0,229,255,0.1)]" 
                  : "text-white/30 hover:text-white/50 border border-transparent"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode("register")}
                className={`flex-1 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                  mode === "register" 
                  ? "bg-gradient-to-br from-[#00e5ff]/20 to-[#9b5de5]/20 border border-[#00e5ff]/20 text-[#00e5ff] shadow-[0_0_16px_rgba(0,229,255,0.1)]" 
                  : "text-white/30 hover:text-white/50 border border-transparent"
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Dynamic Form Render */}
            <div key={mode} className="animate-fadeSlideUp">
              {mode === "login" ? (
                <Login onSwitch={() => setMode("register")} />
              ) : (
                <Signup onSwitch={() => setMode("login")} />
              )}
            </div>

          </div>

          {/* Footer Links */}
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-8">
            {["Privacy", "Terms", "Help", "© 2026 Talkify"].map((link) => (
              <a key={link} href="#" className="text-[11px] text-white/30 hover:text-white/50 transition-colors">
                {link}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;