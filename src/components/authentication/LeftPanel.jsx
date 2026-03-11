import React from 'react';


const FloatingOrbs = () => {
  const orbs = [
    { w: 320, h: 320, x: "-8%", y: "2%", c1: "#00e5ff", c2: "#9b5de5", delay: "0s", dur: "8s" },
    { w: 220, h: 220, x: "58%", y: "10%", c1: "#ff2d78", c2: "#9b5de5", delay: "2s", dur: "10s" },
    { w: 260, h: 260, x: "18%", y: "52%", c1: "#9b5de5", c2: "#00e5ff", delay: "4s", dur: "9s" },
    { w: 190, h: 190, x: "68%", y: "62%", c1: "#00ffa3", c2: "#00e5ff", delay: "1s", dur: "7s" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((o, i) => (
        <div key={i} className="absolute rounded-full animate-orbFloat" style={{
          width: o.w, height: o.h, left: o.x, top: o.y,
          background: `radial-gradient(circle,${o.c1}22,${o.c2}11,transparent 70%)`,
          filter: "blur(44px)",
          animationDelay: o.delay,
          animationDuration: o.dur
        }} />
      ))}
    </div>
  );
};

const GridTexture = () => (
  <div className="absolute inset-0 pointer-events-none" style={{
    backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.012) 1px,transparent 1px)",
    backgroundSize: "40px 40px",
  }} />
);

const ChatPreview = () => {
  const bubbles = [
    { me: false, text: "just pushed the design 🎨", av: "AR", grad: "linear-gradient(135deg,#f093fb,#f5576c)", delay: "0s" },
    { me: true, text: "omg it looks insane 🔥", delay: "0.4s" },
    { me: false, text: "shipping Friday? 🚀", av: "DS", grad: "linear-gradient(135deg,#4facfe,#00f2fe)", delay: "0.8s" },
    { me: true, text: "fingers crossed 🤞", delay: "1.2s" },
  ];
  return (
    <div className="flex flex-col gap-2 w-full max-w-[300px]">
      {bubbles.map((b, i) => (
        <div key={i} className={`flex items-end gap-2 animate-fadeSlideUp ${b.me ? "flex-row-reverse" : "flex-row"}`} style={{ animationDelay: b.delay }}>
          {!b.me && (
            <div className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px] rounded-lg flex items-center justify-center text-[8px] lg:text-[9px] font-bold text-white shrink-0" style={{ background: b.grad }}>{b.av}</div>
          )}
          <div className={`px-3 py-2 lg:px-3.5 lg:py-2.5 rounded-[16px] text-[12px] lg:text-[13px] leading-relaxed max-w-[220px] backdrop-blur-md text-[#eef2ff] ${b.me ? "text-right rounded-br-sm" : "text-left rounded-bl-sm"}`} 
               style={{
                 background: b.me ? "linear-gradient(135deg,rgba(0,229,255,0.18),rgba(155,93,229,0.18))" : "rgba(255,255,255,0.06)",
                 border: `1px solid ${b.me ? "rgba(0,229,255,0.25)" : "rgba(255,255,255,0.08)"}`
               }}>
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
};


// --- Main Left Panel --- //

export default function LeftPanel() {
  return (
    <div className="relative flex-1 flex flex-col h-full border-r border-white/10 font-outfit overflow-hidden"
         style={{ background: "linear-gradient(135deg,#050810 0%,#0d1224 60%,#050810 100%)" }}>
      
      {/* Background Effects */}
      <FloatingOrbs />
      <GridTexture />

      {/* Scrollable Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center overflow-y-auto w-full p-4 lg:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <div className="flex flex-col items-center gap-6 xl:gap-8 max-w-[440px] text-center py-8 my-auto">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 lg:gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center relative shadow-[0_0_24px_rgba(0,229,255,0.4)] text-lg lg:text-xl"
                 style={{ background: "linear-gradient(135deg,#00e5ff,#9b5de5)" }}>
              💬
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent)]" />
            </div>
            <span className="font-syncopate font-black tracking-[0.2em] text-[18px] lg:text-[22px] text-transparent bg-clip-text bg-gradient-to-br from-[#00e5ff] to-[#9b5de5]">
              TALKIFY
            </span>
          </div>

          {/* Hero Text */}
          <div>
            <h1 className="font-syncopate font-black text-[1.6rem] lg:text-[2rem] xl:text-[2.2rem] leading-tight tracking-wider mb-2 lg:mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#eef2ff] to-white/50">SMARTER</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#00e5ff] to-[#9b5de5]">CONVERSATIONS</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#eef2ff] to-white/50">START HERE</span>
            </h1>
            <p className="text-[12px] lg:text-[13px] text-white/50 leading-relaxed max-w-[280px] lg:max-w-[300px] mx-auto">
              Real-time messaging with end-to-end encryption, beautiful UI, and lightning-fast performance.
            </p>
          </div>

          <ChatPreview />

          {/* Stats */}
          <div className="flex gap-2.5 lg:gap-3">
            {[["2.4M+", "USERS"], ["99.9%", "UPTIME"], ["180+", "COUNTRIES"]].map(([val, label]) => (
              <div key={label} className="flex flex-col items-center px-3 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-lg lg:text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#00e5ff] to-[#9b5de5]">{val}</span>
                <span className="text-[9px] lg:text-[10px] font-semibold tracking-widest text-white/50 mt-1 uppercase">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}