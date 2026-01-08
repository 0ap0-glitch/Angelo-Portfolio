/* Design Philosophy: Futuristic Elegance (Digital Archive) - High-end futuristic aesthetic with glassmorphism - Deep charcoal and midnight blue palette - Sophisticated typography and subtle glow effects - Focus on PR, Communications, and Growth Strategy */ 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tighter text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
          >
            ANGELO PARKER
          </motion.h1>
          <div className="hidden md:flex gap-8 items-center">
            {['Strategy', 'Experience', 'Archive', 'Connect'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-medium uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{
          backgroundImage: 'url(/images/futuristic-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6 backdrop-blur-sm">
                Strategic Communications & Growth
              </span>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.85]">
                Public Relations<br/>
                <span className="text-foreground/40">& Marketing.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl leading-relaxed font-light">
                A portfolio showcasing strategic communications, public relations, and marketing work centered on brand, reputation, and digital impact. Engineering growth through innovative storytelling and data-driven strategy.
              </p>
              <div className="flex gap-6 flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-primary text-midnight hover:bg-primary/90 rounded-none px-10 font-bold tracking-widest uppercase text-xs transition-all hover:scale-105"
                >
                  Explore Archive
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/10 bg-white/5 hover:bg-white/10 rounded-none px-10 font-bold tracking-widest uppercase text-xs backdrop-blur-sm transition-all"
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-[-10%] top-[20%] w-[40%] aspect-square bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-40 relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-panel aspect-square rounded-2xl overflow-hidden relative group border border-white/10 bg-white/5 backdrop-blur-sm">
                <img 
                  src="/images/elegant-about.png" 
                  alt="Strategy Visual" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/10"></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-10 -right-10 p-8 rounded-xl animate-float border border-white/10 bg-background/80 backdrop-blur-xl shadow-2xl">
                <p className="text-4xl font-display font-bold text-primary mb-1">200K+</p>
                <p className="text-[10px] uppercase tracking-widest text-foreground/40">Digital Impressions</p>
              </div>
            </motion.div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 tracking-tight">
                Strategic<br/>
                <span className="text-foreground/40">Communications.</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reputation Management</h3>
                    <p className="text-foreground/40 leading-relaxed">
                      Protecting and enhancing brand equity through proactive crisis management and strategic narrative control.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Positioning</h3>
                    <p className="text-foreground/40 leading-relaxed">
                      Aligning brand messaging with international market trends to maximize reach and resonance across borders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Career Trajectory</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
                Professional<br/>
                <span className="text-foreground/20">Milestones.</span>
              </h2>
            </div>
            <p className="text-foreground/40 max-w-md text-right md:text-left leading-relaxed">
              A timeline of impactful roles and strategic contributions across leading organizations.
            </p>
          </div>

          <div className="grid gap-px bg-white/5 border border-white/5">
            {[
              {
                role: 'Public Relations Specialist',
                org: 'Kennesaw State University',
                year: '2024',
                desc: 'Led comprehensive PR campaigns increasing media visibility by 40%. Managed crisis communications and stakeholder relations.'
              },
              {
                role: 'Marketing Coordinator',
                org: 'High Museum of Art',
                year: '2023',
                desc: 'Orchestrated digital marketing initiatives for major exhibitions. Collaborated with influencers and Emory University. Unified brand voice across 5 HubSpot hubs.'
              },
              {
                role: 'Growth Strategy',
                org: 'Gride Technology',
                year: '2025',
                desc: 'Engineered automated lead journeys and CRM integration. Developed AI-powered marketing stack for scalable operations.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-background p-10 hover:bg-white/[0.02] transition-all cursor-default"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{item.role}</h3>
                    <p className="text-xs uppercase tracking-widest text-primary/60 font-bold mb-6">{item.org}</p>
                    <p className="text-sm text-foreground/40 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-foreground/20">{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section (Toolkit) */}
      <section id="archive" className="py-40 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/classy-toolkit.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">Digital Stack.</h2>
            <p className="text-sm text-foreground/40 leading-relaxed font-light">
              A curated selection of high-performance tools and AI-powered platforms driving modern marketing operations and strategic communications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { name: 'HubSpot', cat: 'CRM & Ops' },
              { name: 'Surfer SEO', cat: 'Content Strategy' },
              { name: 'Ocoya', cat: 'Social Automation' },
              { name: 'Runway', cat: 'AI Video' },
              { name: 'Smartly.io', cat: 'Ad Automation' },
              { name: 'GA4', cat: 'Analytics' },
              { name: 'PopAI', cat: 'Intelligence' },
              { name: 'ManyChat', cat: 'Conversational' }
            ].map((tool, i) => (
              <div key={i} className="bg-background p-10 hover:bg-white/[0.02] transition-all group">
                <p className="text-[10px] uppercase tracking-widest text-foreground/30 mb-4 group-hover:text-primary/60 transition-colors">{tool.cat}</p>
                <h4 className="text-lg font-bold tracking-tight">{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-40">
        <div className="container">
          <div className="p-16 md:p-24 rounded-3xl relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px]"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tighter">
                  Initiate<br/>
                  <span className="text-foreground/40">Collaboration.</span>
                </h2>
                <p className="text-lg text-foreground/50 mb-12 font-light leading-relaxed">
                  Ready to discuss strategic growth, reputation management, or innovative marketing initiatives? Let's build the future of your brand together.
                </p>
                
                <div className="space-y-8">
                  <a href="mailto:Marketing@gridetech.com" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                      <Mail className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/30 mb-1">Direct Line</p>
                      <p className="text-lg font-medium">Marketing@gridetech.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-foreground/40" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/30 mb-1">Headquarters</p>
                      <p className="text-lg font-medium">Smyrna, GA 30080</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-8 bg-white/5 border-white/10 rounded-2xl hover:border-primary/30 transition-all">
                  <h3 className="text-xl font-display font-bold mb-4">Strategic Inquiry</h3>
                  <p className="text-sm text-foreground/40 mb-8 leading-relaxed">
                    For partnership opportunities or detailed strategic insights, please reach out via our direct channel.
                  </p>
                  <Button className="w-full bg-white text-midnight hover:bg-white/90 rounded-none font-bold uppercase tracking-widest text-[10px] py-6">
                    Send Message
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/20 mb-2">© 2025 ANGELO PARKER</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/10">Strategic Communications & Growth</p>
            </div>
            
            <div className="flex gap-8">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest text-foreground/30 hover:text-primary transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
