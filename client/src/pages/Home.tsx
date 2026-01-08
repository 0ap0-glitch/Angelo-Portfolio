import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, ExternalLink, Download, Play, Instagram, Facebook, BarChart3, LayoutGrid, FileText } from "lucide-react";
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

// Social Media Assets Data
const socialAssets = [
  // Videos
  { type: "video", src: "/images/social/Untitledvideo-2.mp4", title: "Event Highlight Reel", platform: "Instagram Reels", views: "12.2K Views" },
  { type: "video", src: "/images/social/ServiceRequestApp-2.mp4", title: "App Walkthrough", platform: "TikTok", views: "Viral Content" },
  { type: "video", src: "/images/social/hSJF2a01JEsPyryLo9EbhuBqfiC7gAkAQfz69yq31rhQ.mp4", title: "Brand Story", platform: "Instagram Reels", views: "High Engagement" },

  
  // High Impact Images
  { type: "image", src: "/images/social/gridesprinter.jpg", title: "VIP Experience", platform: "Instagram Post", views: "Campaign Launch" },
  { type: "image", src: "/images/social/IMG_6994.jpg", title: "Lifestyle Content", platform: "Instagram Feed", views: "Brand Aesthetic" },
  { type: "image", src: "/images/social/IMG_6995.jpg", title: "Community Event", platform: "Facebook", views: "Event Coverage" },
  { type: "image", src: "/images/social/IMG_6998.jpg", title: "Visual Grid Strategy", platform: "Content Planning", views: "Grid Layout" },
  
  // Strategy Slides (Screenshots)
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.24.54PM.png", title: "Campaign Positioning", platform: "Strategy Deck", views: "Internal Doc" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.34.54PM.png", title: "Landing Page Strategy", platform: "Web Optimization", views: "Conversion Rate" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.36.06PM.png", title: "Audience Analysis", platform: "Market Research", views: "Targeting" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.39.18PM.png", title: "Content Pillars", platform: "Social Strategy", views: "Planning" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.39.34PM.png", title: "Engagement Metrics", platform: "Analytics", views: "KPIs" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.41.29PM.png", title: "Growth Trajectory", platform: "Performance", views: "Q4 Report" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.42.33PM.png", title: "Competitor Analysis", platform: "Market Intel", views: "Benchmarking" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.43.24PM.png", title: "Brand Voice", platform: "Identity", views: "Messaging" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.44.09PM.png", title: "Visual Guidelines", platform: "Brand Book", views: "Design System" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.44.36PM.png", title: "Social Calendar", platform: "Planning", views: "Schedule" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.45.27PM.png", title: "Influencer Strategy", platform: "Partnerships", views: "Outreach" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.46.37PM.png", title: "Paid Media Plan", platform: "Ad Strategy", views: "Budgeting" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.49.21PM.png", title: "Email Marketing", platform: "Retention", views: "CRM" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.50.47PM.png", title: "Event Activation", platform: "Experiential", views: "Live Ops" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.51.11PM.png", title: "PR Roadmap", platform: "Communications", views: "Timeline" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.52.18PM.png", title: "Crisis Management", platform: "PR Protocol", views: "Risk Mitigation" },
  { type: "image", src: "/images/social/Screenshot2025-12-20at2.52.41PM.png", title: "Stakeholder Comms", platform: "Corporate PR", views: "Internal" },
  { type: "image", src: "/images/social/Screenshot2025-12-21at8.01.10AM.png", title: "Meta Business Suite", platform: "Tools", views: "Dashboard" },
  

];

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-[#02040a] text-white">
      {/* Hero Section */}
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-4 md:px-8 bg-white/5">
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

      {/* Brand Transformation */}
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


            </div>

            <div className="relative">
              {/* Before/After Visuals */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-96 rounded-[2rem] overflow-hidden relative group max-w-xs mx-auto bg-white/5 border border-white/10">
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
                <div className="space-y-4">
                  <div className="h-96 rounded-[2rem] overflow-hidden relative group border-2 border-accent/20 shadow-[0_0_30px_rgba(0,255,255,0.1)] max-w-xs mx-auto bg-white/5">
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold z-10">
                      AFTER
                    </div>
                    <img 
                      src="/images/portfolio/288F0174-9585-4289-B3DC-4748B1502CE3.PNG" 
                      alt="Brand After" 
                      className="w-full h-full object-contain bg-black/50 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Content Strategy - Comprehensive Masonry Grid */}
      <section id="social-media" className="py-24 px-4 md:px-8 relative overflow-hidden bg-white/5">
        <div className="max-w-[1600px] mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="rounded-full px-4 py-1 border-primary/30 text-primary tracking-widest text-xs uppercase">
              Comprehensive Portfolio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Social Media & Strategy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A complete archive of campaign assets, strategic documentation, and high-performance content.
            </p>
          </div>

          {/* Featured Videos - Full Visibility */}
          <div className="space-y-16 mb-16">
            {/* Event Highlight Reel */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-black/40 rounded-[2rem] border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center text-white font-bold text-xs">IG</div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Event Highlight Reel</h4>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">Instagram Reels</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs h-6 px-3 bg-white/10 hover:bg-white/20 text-white/80">12.2K Views</Badge>
                </div>
                <div className="relative bg-black w-full flex justify-center">
                  <video src="/images/social/Untitledvideo-2.mp4" className="w-full max-h-[80vh] object-contain" controls playsInline preload="metadata" />
                </div>
              </div>
            </div>

            {/* App Walkthrough */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-black/40 rounded-[2rem] border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white font-bold text-xs">TT</div>
                    <div>
                      <h4 className="font-bold text-lg text-white">App Walkthrough</h4>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">TikTok</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs h-6 px-3 bg-white/10 hover:bg-white/20 text-white/80">Viral Content</Badge>
                </div>
                <div className="relative bg-black w-full flex justify-center">
                  <video src="/images/social/ServiceRequestApp-2.mp4" className="w-full max-h-[80vh] object-contain" controls playsInline preload="metadata" />
                </div>
              </div>
            </div>

          </div>

          {/* Masonry Grid for Social Media Assets Only */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 mb-24">
            {socialAssets.filter(asset => 
              !["Event Highlight Reel", "App Walkthrough"].includes(asset.title) && 
              !asset.src.includes("Screenshot")
            ).map((asset, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="bg-black/40 rounded-[2rem] border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                  {/* Context Header - ALWAYS ABOVE ASSET */}
                  <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[10px] ${
                        asset.platform.includes("Instagram") ? "bg-gradient-to-br from-purple-500 to-orange-500" :
                        asset.platform.includes("Facebook") ? "bg-blue-600" :
                        asset.platform.includes("TikTok") ? "bg-black border border-white/20" :
                        "bg-primary/20 text-primary"
                      }`}>
                        {asset.platform.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-white">{asset.title}</h4>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{asset.platform}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-[10px] h-5 px-2 bg-white/10 hover:bg-white/20 text-white/80">
                      {asset.views}
                    </Badge>
                  </div>

                  {/* Asset Content */}
                  <div className="relative">
                    {asset.type === "video" ? (
                      <div className="aspect-[9/16] bg-black relative group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <video 
                          src={asset.src} 
                          className="w-full h-full object-cover"
                          controls
                          playsInline
                          preload="metadata"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Play className="w-5 h-5 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative group-hover:opacity-90 transition-opacity">
                        <img 
                          src={asset.src} 
                          alt={asset.title} 
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy & Documentation Archive - Compact Grid */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/10"></div>
              <h3 className="text-2xl font-serif font-bold text-white/80">Strategy Archive</h3>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {socialAssets.filter(asset => asset.src.includes("Screenshot")).map((asset, index) => (
                <div key={index} className="group relative bg-black/40 rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300">
                  {/* Compact Header */}
                  <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-[10px] font-bold text-white truncate">{asset.title}</p>
                  </div>
                  
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={asset.src} 
                      alt={asset.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Footer Label */}
                  <div className="p-2 bg-white/5 border-t border-white/5">
                    <p className="text-[10px] text-muted-foreground truncate">{asset.platform}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Impact & Analytics Section */}
      <section id="analytics" className="py-24 px-4 md:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="rounded-full px-4 py-1 border-accent/30 text-accent tracking-widest text-xs uppercase">
                Performance Report
              </Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                Strategic Impact <br />
                <span className="text-gradient-gold">& Analytics</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A comprehensive breakdown of marketing performance, highlighting key growth metrics, audience engagement trends, and the tangible ROI of strategic campaigns.
              </p>
              
              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-4xl font-bold text-white mb-2">40%</h4>
                  <p className="text-sm text-muted-foreground">Engagement Increase</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-4xl font-bold text-white mb-2">200K+</h4>
                  <p className="text-sm text-muted-foreground">Total Impressions</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-4xl font-bold text-white mb-2">18.7K</h4>
                  <p className="text-sm text-muted-foreground">Profile Visits</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-4xl font-bold text-white mb-2">Top 1%</h4>
                  <p className="text-sm text-muted-foreground">Industry Standard</p>
                </div>
              </div>
            </div>

            {/* New Marketing Plan Section */}
            <div className="relative">
              <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/10 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">2026 Marketing Plan</h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    Executive summary and strategic roadmap for the upcoming fiscal year.
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-12 text-base w-full md:w-auto"
                  onClick={() => window.open("/PROJECT2026-GRIDEMARKETINGPLANExecutiveSummaryGri.pdf", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> View Strategy
                </Button>
              </div>
            </div>
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
