import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Split Layout (Template 3531 Structure + 3700 Typography) */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 relative">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] -z-10" />

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Typography */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/30 text-primary tracking-widest text-xs uppercase">
                Strategic Communications Expert
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Strategies <br />
              <span className="text-gradient-gold">That Drive Growth</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              I transform brands through strategic PR, authentic social media engagement, and data-driven marketing analytics. Specializing in growth strategy, audience building, and sustainable revenue engines.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base"
                onClick={() => window.open("https://www.linkedin.com/in/angelo-parker-1002", "_blank")}
              >
                Connect on LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-white/10 hover:bg-white/5 px-8 h-12 text-base"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Visual (Floating Portrait) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
              {/* Circle Frame */}
              <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
              <div className="absolute inset-4 rounded-full border border-white/5 bg-white/5" />
              
              {/* Portrait Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/portrait.jpg" 
                  alt="Angelo Parker" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-panel rounded-2xl p-4 max-w-[200px]"
              >
                <p className="text-sm font-medium text-primary">200K+ Impressions</p>
                <p className="text-xs text-muted-foreground">Generated for Gride Tech</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section - 3-Column Grid (Template 3531) with Rounded Cards (Template 3700) */}
      <section id="expertise" className="py-24 px-4 md:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Core Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Blending creative storytelling with analytical precision to build resilient brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Communications",
                desc: "Crafting compelling narratives that resonate with target audiences and drive brand authority.",
                tags: ["PR Strategy", "Crisis Comms", "Media Relations"]
              },
              {
                title: "Digital Marketing",
                desc: "Data-driven campaigns across social, email, and web channels to maximize ROI and engagement.",
                tags: ["Social Media", "SEO/SEM", "Content Strategy"]
              },
              {
                title: "Brand Development",
                desc: "Building cohesive visual and verbal identities that stand out in crowded markets.",
                tags: ["Identity Design", "Positioning", "Voice & Tone"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full glass-panel border-white/5 hover:border-primary/30 transition-colors duration-300 rounded-[2rem] overflow-hidden group">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <span className="text-xl font-serif font-bold">{i + 1}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Transformation - Before/After */}
      <section id="transformation" className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="rounded-full px-4 py-1 border-accent/30 text-accent tracking-widest text-xs uppercase">
                Case Study: Gride Technology
              </Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                Brand <span className="text-gradient-cyan">Transformation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Revitalized Gride Technology's market presence through a comprehensive visual overhaul and strategic messaging pivot. The result was a cohesive brand identity that resonated with urban demographics and drove a 40% increase in app engagement.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">18.7K</h4>
                  <p className="text-sm text-muted-foreground">Profile Visits</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">200K+</h4>
                  <p className="text-sm text-muted-foreground">Total Impressions</p>
                </div>
              </div>

              <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 mt-8" onClick={() => window.open("/marketing-plan.pdf", "_blank")}>
                <Download className="mr-2 h-4 w-4" /> View Marketing Plan
              </Button>
            </div>

            <div className="relative">
              {/* Before/After Visuals */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative group max-w-xs mx-auto">
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white z-10">
                      BEFORE
                    </div>
                    <img 
                      src="/images/portfolio/IMG_6999.PNG" 
                      alt="Brand Before" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-12">
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative group border-2 border-accent/20 shadow-[0_0_30px_rgba(0,255,255,0.1)] max-w-xs mx-auto">
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold z-10">
                      AFTER
                    </div>
                    <img 
                      src="/images/portfolio/288F0174-9585-4289-B3DC-4748B1502CE3.PNG" 
                      alt="Brand After" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Brand Identity - Gallery */}
      <section id="identity" className="py-24 px-4 md:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Digital Brand Identity</h2>
              <p className="text-muted-foreground max-w-xl">
                A collection of visual assets, 3D renderings, and UI/UX designs created to establish a distinct digital footprint.
              </p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-transparent p-0 group">
              View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/images/portfolio/ChatGPTImageNov3,2025at03_57_08PM.png", title: "3D Brand Assets", category: "Visual Design" },
              { img: "/images/portfolio/GrideLogoandMobileAppDisplay.png", title: "App Interface", category: "UI/UX" },
              { img: "/images/portfolio/B4EEC9F0-D2A9-4D40-AC29-15BFB73A1DC9.png", title: "Brand Pattern", category: "Identity" },
              { img: "/images/portfolio/ChatGPTImageOct31,2025at02_24_28PM.png", title: "Iconography", category: "3D Design" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{item.category}</p>
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-8 bg-black/20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Ready to Elevate Your Brand?</h2>
          <p className="text-lg text-muted-foreground">
            I'm currently available for opportunities and select consulting projects.
          </p>
          
          <div className="glass-panel p-8 rounded-[2.5rem] max-w-xl mx-auto mt-12">
            <form className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-2">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-2">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-2">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 min-h-[120px] focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..." />
              </div>
              <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-bold mt-4">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground pt-8">
            © 2026 Angelo Parker. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
