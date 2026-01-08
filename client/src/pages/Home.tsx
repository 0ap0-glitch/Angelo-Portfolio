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
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl px-4 py-3 flex items-center justify-between w-full max-w-md transition-all duration-300">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E69536] to-[#D48C44] flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm tracking-wider">AP</span>
          </div>

          <div className="flex items-center gap-3">
            {/* LinkedIn Icon */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-[#F5EFE6] text-[#D48C44] flex items-center justify-center hover:bg-[#E69536] hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            
            {/* CTA Button */}
            <Button className="bg-[#D48C44] hover:bg-[#C27B33] text-white rounded-full px-6 font-medium text-xs tracking-wide shadow-md h-10">
              LET'S TALK
            </Button>
          </div>
        </div>
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-[#D48C44] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Strategic Communications Expert
            </h2>
            <h1 className="text-5xl font-display font-bold text-[#2A2520] leading-[1.1] mb-6">
              That Drive <br/>
              <span className="text-[#D48C44]">Growth</span>
            </h1>
            
            <p className="text-[#6A6055] text-lg leading-relaxed mb-8 font-light">
              I transform brands through strategic PR, authentic social media engagement, and data-driven marketing analytics.
              <br/><br/>
              Specializing in growth strategy, audience building, and sustainable revenue engines.
            </p>

            <div className="flex flex-col gap-4 w-full">
              <Button className="w-full bg-[#D48C44] hover:bg-[#C27B33] text-white rounded-full h-14 text-base font-medium shadow-lg shadow-[#D48C44]/20">
                Connect on LinkedIn <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full border-[#D48C44]/30 text-[#D48C44] hover:bg-[#D48C44]/5 rounded-full h-14 text-base font-medium">
                <Mail className="mr-2 w-4 h-4" /> Email Me
              </Button>
            </div>
          </div>

          {/* Floating Portrait */}
          <div className="relative w-64 h-64 mx-auto mb-24">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#F5EFE6] to-transparent blur-2xl opacity-60 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/images/portfolio/Image12-19-25at3_edited_edited_edited_edited_edited_edited_edited.jpg" 
                alt="Angelo Parker" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Core Expertise Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold text-[#2A2520] mb-4">Core Expertise</h2>
              <div className="w-16 h-1 bg-[#D48C44] mx-auto rounded-full mb-6"></div>
              <p className="text-[#6A6055]">
                Strategic communications, authentic engagement, and data-driven growth
              </p>
            </div>

            <div className="space-y-6">
              {/* Card 1: PR & Communications */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#D48C44]/5 border border-[#F5EFE6]">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#D48C44] mb-6">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#2A2520] mb-3">PR & Communications</h3>
                <p className="text-[#6A6055] leading-relaxed">
                  Architecting high-value brand narratives, managing strategic partnerships with influencers and organizations, and building sustainable reputation engines.
                </p>
              </div>

              {/* Card 2: Social Media Strategy */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#D48C44]/5 border border-[#F5EFE6]">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#D48C44] mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-[#2A2520] mb-3">Social Media Strategy</h3>
                <p className="text-[#6A6055] leading-relaxed">
                  Building authentic communities, creating viral-worthy content, and driving meaningful engagement across platforms. 200K+ impressions, 18.7K profile visits.
                </p>
              </div>

              {/* Card 3: Marketing Analytics */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#D48C44]/5 border border-[#F5EFE6]">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#D48C44] mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-[#2A2520] mb-3">Marketing Analytics</h3>
                <p className="text-[#6A6055] leading-relaxed mb-6">
                  Data-driven decision making, conversion optimization, and ROI maximization. Turning metrics into actionable insights for sustainable growth.
                </p>
                <a href="/marketing-plan.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#D48C44] font-medium hover:underline text-sm">
                  View 2026 Marketing Plan <ArrowUpRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Brand Transformation Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold text-[#2A2520] mb-4">Brand Transformation</h2>
              <div className="w-16 h-1 bg-[#D48C44] mx-auto rounded-full mb-6"></div>
              <p className="text-[#6A6055]">
                From concept to market leader: Visualizing the impact of strategic branding.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                  <img src="/images/portfolio/IMG_6999.PNG" alt="Before Transformation" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">Before</div>
                </div>
                <p className="text-center text-[#6A6055] text-sm font-medium">Initial Launch Phase</p>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] border-2 border-[#D48C44]">
                  <img src="/images/portfolio/IMG_6995.jpg" alt="After Transformation" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#D48C44] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">After</div>
                </div>
                <p className="text-center text-[#D48C44] text-sm font-bold">Metro Atlanta's #1 Brand</p>
              </div>
            </div>
          </div>

          {/* Selected Work Gallery (Masonry) */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold text-[#2A2520] mb-4">Selected Work</h2>
              <div className="w-16 h-1 bg-[#D48C44] mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="columns-2 gap-4 space-y-4">
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
                "gridesprinter.jpg",
                "classy-toolkit.png",
                "elegant-about.png",
                "futuristic-hero.png"
              ].map((img, i) => (
                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <img 
                    src={img.startsWith("http") ? img : `/images/${img.includes("hero") || img.includes("about") || img.includes("toolkit") ? "" : "portfolio/"}${img}`} 
                    alt="Portfolio Work" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
