import { Button } from "@/components/ui/button";
import { ArrowUpRight, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3A3530] font-sans selection:bg-[#D48C44] selection:text-white overflow-x-hidden">
      {/* Textured Background Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Floating Navigation Bar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl transition-all duration-300">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E69536] to-[#D48C44] flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm tracking-wider">AP</span>
          </div>

          <div className="flex items-center gap-4">
            {/* LinkedIn Icon */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-[#F5EFE6] text-[#D48C44] flex items-center justify-center hover:bg-[#E69536] hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            
            {/* CTA Button */}
            <Button className="bg-[#D48C44] hover:bg-[#C27B33] text-white rounded-full px-8 font-medium text-sm tracking-wide shadow-md h-10">
              LET'S TALK
            </Button>
          </div>
        </div>
      </div>

      <main className="relative z-10 pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section - Desktop: Side-by-Side, Mobile: Stacked */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-32">
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-[#D48C44] text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Strategic Communications Expert
              </h2>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-[#2A2520] leading-[1.1] mb-8">
                That Drive <br/>
                <span className="text-[#D48C44]">Growth</span>
              </h1>
              
              <p className="text-[#6A6055] text-lg lg:text-xl leading-relaxed mb-10 font-light max-w-2xl">
                I transform brands through strategic PR, authentic social media engagement, and data-driven marketing analytics.
                <br/><br/>
                Specializing in growth strategy, audience building, and sustainable revenue engines.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button className="bg-[#D48C44] hover:bg-[#C27B33] text-white rounded-full h-14 px-8 text-base font-medium shadow-lg shadow-[#D48C44]/20">
                  Connect on LinkedIn <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-[#D48C44]/30 text-[#D48C44] hover:bg-[#D48C44]/5 rounded-full h-14 px-8 text-base font-medium">
                  <Mail className="mr-2 w-4 h-4" /> Email Me
                </Button>
              </div>
            </div>

            {/* Floating Portrait - Larger on Desktop */}
            <div className="relative w-72 h-72 lg:w-[500px] lg:h-[500px] flex-shrink-0 order-1 lg:order-2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#F5EFE6] to-transparent blur-3xl opacity-60 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/images/portfolio/Image12-19-25at3_edited_edited_edited_edited_edited_edited_edited.jpg" 
                  alt="Angelo Parker" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Expertise Section - 3 Column Grid */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-[#2A2520] mb-4">Core Expertise</h2>
              <div className="w-20 h-1 bg-[#D48C44] mx-auto rounded-full mb-6"></div>
              <p className="text-[#6A6055] text-lg max-w-2xl mx-auto">
                Strategic communications, authentic engagement, and data-driven growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: PR & Communications */}
              <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-[#D48C44]/5 border border-[#F5EFE6] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#F5EFE6] flex items-center justify-center text-[#D48C44] mb-8">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#2A2520] mb-4">PR & Communications</h3>
                <p className="text-[#6A6055] leading-relaxed">
                  Architecting high-value brand narratives, managing strategic partnerships with influencers and organizations, and building sustainable reputation engines.
                </p>
              </div>

              {/* Card 2: Social Media Strategy */}
              <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-[#D48C44]/5 border border-[#F5EFE6] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#F5EFE6] flex items-center justify-center text-[#D48C44] mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2A2520] mb-4">Social Media Strategy</h3>
                <p className="text-[#6A6055] leading-relaxed">
                  Building authentic communities, creating viral-worthy content, and driving meaningful engagement across platforms. 200K+ impressions, 18.7K profile visits.
                </p>
              </div>

              {/* Card 3: Marketing Analytics */}
              <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-[#D48C44]/5 border border-[#F5EFE6] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#F5EFE6] flex items-center justify-center text-[#D48C44] mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2A2520] mb-4">Marketing Analytics</h3>
                <p className="text-[#6A6055] leading-relaxed mb-8">
                  Data-driven decision making, conversion optimization, and ROI maximization. Turning metrics into actionable insights for sustainable growth.
                </p>
                <a href="/marketing-plan.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#D48C44] font-bold hover:underline text-base group">
                  View 2026 Marketing Plan <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Brand Transformation Section - Side by Side */}
          <div className="mb-32 bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl shadow-[#D48C44]/5 border border-[#F5EFE6]">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-[#2A2520] mb-4">Brand Transformation</h2>
              <div className="w-20 h-1 bg-[#D48C44] mx-auto rounded-full mb-6"></div>
              <p className="text-[#6A6055] text-lg">
                From concept to market leader: Visualizing the impact of strategic branding.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] group">
                  <img src="/images/portfolio/IMG_6999.PNG" alt="Before Transformation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-black/70 text-white px-6 py-2 rounded-full text-base font-medium backdrop-blur-md">Before</div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-[#2A2520]">Initial Launch Phase</h4>
                  <p className="text-[#6A6055]">Establishing market presence</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border-4 border-[#D48C44] group">
                  <img src="/images/portfolio/IMG_6995.jpg" alt="After Transformation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-[#D48C44] text-white px-6 py-2 rounded-full text-base font-medium shadow-lg">After</div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-[#D48C44]">Metro Atlanta's #1 Brand</h4>
                  <p className="text-[#6A6055]">Dominating market share & visibility</p>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Work Gallery (Masonry) */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-[#2A2520] mb-4">Selected Work</h2>
              <div className="w-20 h-1 bg-[#D48C44] mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {[
                "gridescreenshot.png",
                "GrideLogoandMobileAppDisplay.png",
                "Screenshot2025-12-20at2.34.54PM.png",
                "Screenshot2025-12-20at2.36.06PM.png",
                "Screenshot2025-12-20at2.39.18PM.png",
                "Screenshot2025-12-20at2.41.29PM.png",
                "Screenshot2025-12-20at2.42.33PM.png",
                "Screenshot2025-12-20at2.43.24PM.png",
                "Screenshot2025-12-20at2.44.09PM.png",
                "Screenshot2025-12-20at2.44.36PM.png",
                "Screenshot2025-12-20at2.45.27PM.png",
                "Screenshot2025-12-20at2.46.37PM.png",
                "Screenshot2025-12-20at2.49.21PM.png",
                "Screenshot2025-12-20at2.50.47PM.png",
                "Screenshot2025-12-20at2.51.11PM.png",
                "Screenshot2025-12-20at2.52.18PM.png",
                "Screenshot2025-12-20at2.52.41PM.png",
                "gridesprinter.jpg"
              ].map((img, i) => (
                <div key={i} className="break-inside-avoid rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                  <img 
                    src={img.startsWith("http") ? img : `/images/portfolio/${img}`} 
                    alt="Portfolio Work" 
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
