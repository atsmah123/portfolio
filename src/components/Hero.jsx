

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#181c2b] via-[#1e2336] to-[#2a314d] text-white">
    <div className="relative flex flex-col items-center justify-center w-full">
      <h1 className="text-[7vw] font-black tracking-tight text-center leading-none mb-0 font-montserrat" style={{letterSpacing: '-0.04em'}}>
        Atharva Mahajan
      </h1>
      <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2">
        <img
          src="/profile.jpeg"
          alt="Atharva Mahajan"
          className="profile-orb border-4 border-[#4fd1c5] shadow-2xl"
          style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
    </div>
    <div className="mt-32 mb-8 text-center">
      <span className="text-lg font-manrope text-[#b3c2e6]">
        Fluid Mechanics × Machine Learning
      </span>
    </div>
    <div className="fixed bottom-8 right-8 flex gap-4">
      <a
        href="https://www.linkedin.com/in/atharva-mahajan-/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-[#232a3d] rounded-full text-[#b3c2e6] hover:text-[#4fd1c5] hover:bg-[#181c2b] transition-all duration-300 shadow-lg"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="mailto:atharvm@umich.edu"
        className="p-3 bg-[#232a3d] rounded-full text-[#b3c2e6] hover:text-[#4fd1c5] hover:bg-[#181c2b] transition-all duration-300 shadow-lg"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
  </section>
)

export default Hero
