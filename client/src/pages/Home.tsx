/* Design Philosophy: Classy Sleek (Modern Luxury) - Minimalist, high-contrast, elegant typography - Rich black and white palette - Floating portrait element - Focus on clarity and sophistication */ 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, ArrowUpRight, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
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
            {['Expertise', 'Work', 'About', 'Contact'].map((item) => (
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
                Crafting Stories<br/>
                <span className="text-foreground/40 italic">That Drive Growth.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-xl leading-relaxed font-light">
                Strategic Communications Expert transforming brands through authentic engagement, PR, and data-driven marketing analytics.
              </p>
              <div className="flex gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 text-sm font-medium transition-all hover:scale-105"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Selected Work
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-foreground hover:bg-white/5 rounded-full px-8 text-sm font-medium"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Talk <ArrowUpRight className="ml-2 w-4 h-4" />
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
              <h3 className="text-2xl font-display font-medium">PR & Communications</h3>
              <p className="text-foreground/50 leading-relaxed">
                Architecting high-value brand narratives and managing strategic partnerships. Building sustainable reputation engines that stand the test of time.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-medium">Social Media Strategy</h3>
              <p className="text-foreground/50 leading-relaxed">
                Building authentic communities and creating viral-worthy content. Driving meaningful engagement across platforms with over 200K+ impressions.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-medium">Marketing Analytics</h3>
              <p className="text-foreground/50 leading-relaxed">
                Data-driven decision making and conversion optimization. Turning complex metrics into actionable insights for sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 bg-white/[0.02]">
        <div className="container">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-medium">Featured Projects</h2>
            <span className="hidden md:block text-sm text-foreground/40">2023 — 2025</span>
          </div>

          <div className="space-y-32">
            {/* Project 1 */}
            <div className="group grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4 block">Growth Strategy</span>
                <h3 className="text-3xl font-display font-medium mb-6">Gride Technology</h3>
                <p className="text-foreground/60 mb-8 leading-relaxed">
                  Comprehensive brand launch and growth strategy resulting in 200K+ TikTok impressions and 18.7K profile visits. Spearheaded "Project 2026" focusing on cost-effective acquisition and operational excellence.
                </p>
                <ul className="space-y-4 mb-8 border-l border-white/10 pl-6">
                  <li className="text-sm text-foreground/70">
                    <span className="block text-xs text-foreground/30 uppercase tracking-wide mb-1">Impact</span>
                    +15% Conversion Rates
                  </li>
                  <li className="text-sm text-foreground/70">
                    <span className="block text-xs text-foreground/30 uppercase tracking-wide mb-1">Reach</span>
                    22K+ Social Media Growth
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative aspect-[4/3] overflow-hidden rounded-lg bg-white/5">
                <img 
                  src="/images/portfolio/gridescreenshot.png" 
                  alt="Gride Technology" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="group grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white/5">
                <img 
                  src="/images/portfolio/Screenshot2025-12-20at2.39.18PM.png" 
                  alt="Social Analytics" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4 block">Analytics & Insights</span>
                <h3 className="text-3xl font-display font-medium mb-6">Data-Driven Campaigns</h3>
                <p className="text-foreground/60 mb-8 leading-relaxed">
                  Executed 18 strategic campaigns showcasing growth metrics, engagement strategies, and conversion optimization. Leveraged GA4 and HubSpot to build automated lead journeys.
                </p>
                <ul className="space-y-4 mb-8 border-l border-white/10 pl-6">
                  <li className="text-sm text-foreground/70">
                    <span className="block text-xs text-foreground/30 uppercase tracking-wide mb-1">Engagement</span>
                    8.5% Average Engagement Rate
                  </li>
                  <li className="text-sm text-foreground/70">
                    <span className="block text-xs text-foreground/30 uppercase tracking-wide mb-1">Growth</span>
                    Consistent Month-over-Month User Acquisition
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Campaigns Section */}
      <section id="visuals" className="py-32 border-t border-white/5">
        <div className="container">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Visual Campaigns</h2>
            <p className="text-foreground/50 leading-relaxed">
              A curated gallery of creative direction, brand identity, and social media assets designed to drive engagement and build community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1: Gridesgiving */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-white/5">
              <img 
                src="/images/portfolio/IMG_6995.jpg" 
                alt="Gridesgiving Campaign" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Campaign</span>
                <h4 className="text-xl font-display font-medium text-white">Gridesgiving Special</h4>
              </div>
            </div>

            {/* Item 2: App Interface */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-white/5">
              <img 
                src="/images/portfolio/GrideLogoandMobileAppDisplay.png" 
                alt="App Interface Design" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Product Design</span>
                <h4 className="text-xl font-display font-medium text-white">Mobile Experience</h4>
              </div>
            </div>

            {/* Item 3: Social Content */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-white/5">
              <img 
                src="/images/portfolio/IMG_6998.jpg" 
                alt="Social Media Content" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Social Media</span>
                <h4 className="text-xl font-display font-medium text-white">Viral Content Strategy</h4>
              </div>
            </div>
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
