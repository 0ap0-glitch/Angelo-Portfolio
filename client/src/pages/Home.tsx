/* Design Philosophy: Classy Sleek (Modern Luxury) - Minimalist, high-contrast, elegant typography - Rich black and white palette - Floating portrait element - Focus on clarity and sophistication */ 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, ArrowUpRight, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // All uploaded images for the comprehensive gallery
  const allWorkImages = [
    "288F0174-9585-4289-B3DC-4748B1502CE3.PNG",
    "B4EEC9F0-D2A9-4D40-AC29-15BFB73A1DC9.png",
    "ChatGPTImageNov3,2025at03_57_08PM.png",
    "ChatGPTImageOct31,2025at02_24_28PM.png",
    "GrideLogoandMobileAppDisplay.png",
    "IMG_6994.jpg",
    "IMG_6995.jpg",
    "IMG_6998.jpg",
    "IMG_6999.PNG",
    "Image12-19-25at3_edited_edited_edited_edited_edited_edited_edited.jpg",
    "Screenshot2025-12-20at2.24.54PM.png",
    "Screenshot2025-12-20at2.34.54PM.png",
    "Screenshot2025-12-20at2.36.06PM.png",
    "Screenshot2025-12-20at2.39.18PM.png",
    "Screenshot2025-12-20at2.39.34PM.png",
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
    "gridescreenshot.png",
    "gridesprinter.jpg"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-display font-bold tracking-tight"
          >
            ANGELO PARKER
          </motion.a>
          <div className="hidden md:flex gap-10 items-center">
            {['Expertise', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
            <Button variant="outline" size="sm" className="rounded-full px-6 border-white/20 hover:bg-white hover:text-black transition-all">
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-8 leading-[1.1]">
                Strategic<br/>
                <span className="text-foreground/40 italic">Impact.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-xl leading-relaxed font-light">
                Communications Expert delivering comprehensive brand growth. Proven track record including <strong>200K+ organic impressions</strong> and <strong>18.7K+ profile visits</strong> for key technology partners.
              </p>
              <div className="flex gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 text-sm font-medium transition-all hover:scale-105"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Portfolio
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-foreground hover:bg-white/5 rounded-full px-8 text-sm font-medium"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Connect <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:h-[80vh] flex items-center justify-center"
            >
              {/* Floating Portrait */}
              <div className="relative w-full max-w-md aspect-[3/4] animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] transform rotate-3"></div>
                <div className="absolute inset-0 bg-background rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                  <img 
                    src="/images/portrait.jpg" 
                    alt="Angelo Parker" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 border-t border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-medium">Strategic Communications</h3>
              <p className="text-foreground/50 leading-relaxed">
                Developing and executing comprehensive communication strategies that align with organizational goals and drive significant brand awareness.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-medium">Brand Management</h3>
              <p className="text-foreground/50 leading-relaxed">
                Overseeing brand identity and narrative across multiple channels to ensure consistency, resonance, and sustained market relevance.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-medium">Digital Growth</h3>
              <p className="text-foreground/50 leading-relaxed">
                Leveraging digital platforms and data insights to expand audience reach, enhance engagement, and achieve measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white/[0.02]">
        <div className="container">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Selected Work</h2>
            <p className="text-foreground/50 leading-relaxed">
              A visual archive of strategic campaigns, digital assets, and brand initiatives. Featuring high-impact work for <strong>Gride Technology</strong> (200K+ impressions, 18.7K profile visits) and other confidential partners.
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {allWorkImages.map((img, index) => (
              <div key={index} className="break-inside-avoid group relative rounded-lg overflow-hidden bg-white/5 hover:shadow-2xl transition-all duration-500">
                <img 
                  src={`/images/portfolio/${img}`} 
                  alt={`Portfolio Item ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-display font-medium mb-12">Let's build something<br/>remarkable.</h2>
          <p className="text-xl text-foreground/50 mb-16 max-w-2xl mx-auto font-light">
            Open for opportunities in Strategic Communications, PR, and Marketing Leadership.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:Angeloparkeruwg@gmail.com" 
              className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Angeloparkeruwg@gmail.com
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 bg-white/5 text-foreground px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all border border-white/10"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/40">© 2025 Angelo Parker. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-foreground/40 hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-sm text-foreground/40 hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="text-sm text-foreground/40 hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
