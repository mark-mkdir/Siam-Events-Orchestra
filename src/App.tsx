// App.tsx
import { FlowingBackground } from './components/FlowingBackground';
import { 
  Music, 
  Users, 
  Calendar, 
  Mail, 
  ChevronDown, 
  PlayCircle,
  FileText,
  Star,
  Globe,
  Radio,
  Share2,
  BookOpen
} from 'lucide-react';

import logoImage from './imports/image-3.png';
import weddingImg from './wedding_string.jpg';
import risingStarImg from './rising_star.jpg';
import sounderImg from './sounder_international_music.jpg';
import concertImg from './grand_event_concert.jpg';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Siam Events Orchestra Logo" className="h-16 md:h-20 w-auto object-contain" />
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">เพลงที่บรรเลง</a>
          <a href="#schedule" className="hover:text-primary transition-colors">ผลงาน</a>
          <a href="#about" className="hover:text-primary transition-colors">ติดต่อ</a>
        </nav>
        <a href="#contact" className="px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-sm hover:bg-accent transition-colors">
          Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6">
          Siam Events Orchestra
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8 max-w-4xl">
          Siam Events Orchestra <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Classical Excellence</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 font-light leading-relaxed">
          วงออเคสตราที่รับการแสดงคอนเสิร์ตทุกรูปแบบ ด้วยนักดนตรีที่จบเอกดนตรีโดยตรง ฝีมือคุณภาพสูง สามารถรับงาน Events ดนตรีบรรเลงในห้างและโรงแรม งานแต่งงาน งานคอนเสิร์ตขนาดใหญ่
        </p>
        <p className="text-base text-muted-foreground max-w-3xl mb-12 italic">
          เคยร่วมบรรเลงกับศิลปินระดับแนวหน้าเช่น คุณเจนนิเฟอร์ คิ้ม (Jennifer Kim), คุณอ๊อฟ ปองศักดิ์ (Aof Pongsak), วง Season Five, คุณนัท มีเรีย (Nat Myria), คุณแก้ม วิชญาณี (Gam The Star) และ คุณกัน นภัทร (Gun The Star)
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#services" className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-accent transition-all text-center">
            รูปแบบวงดนตรี
          </a>
          <a href="#portfolio" className="px-8 py-4 bg-transparent border border-primary text-primary font-medium rounded-sm hover:bg-primary/10 transition-all text-center flex items-center justify-center gap-2">
            <PlayCircle size={20} /> ชมผลงาน
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "วงออเคสตรา (Orchestra)",
      description: "วงดนตรีขนาดใหญ่ จำนวนผู้เล่น 30-60 คน เหมาะสำหรับงานคอนเสิร์ตขนาดใหญ่ หรืองานที่ต้องการความยิ่งใหญ่ตระการตา",
      icon: <Star className="text-primary mb-4" size={32} />
    },
    {
      title: "วงเครื่องสายคลาสสิค (String Ensemble)",
      description: "จำนวนผู้เล่น 2-20 คน ให้เสียงดนตรีที่ไพเราะ หรูหรา เหมาะกับงาน Events ในโรงแรม หรืองานสำคัญต่างๆ",
      icon: <Users className="text-primary mb-4" size={32} />
    },
    {
      title: "วง Duo & Trio",
      description: "วง Duo 2 คน / Trio 3 คน ขนาดกะทัดรัดแต่คงความไพเราะคลาสสิค เหมาะสำหรับงานพื้นที่จำกัด หรืองานที่ต้องการบรรยากาศสบายๆ",
      icon: <Music className="text-primary mb-4" size={32} />
    },
    {
      title: "วงสตริงควอเตท (String Quartet)",
      description: "วงเครื่องสาย 4 ชิ้น รูปแบบยอดนิยมที่ให้ความสมดุลของเสียงได้อย่างสมบูรณ์แบบ ขาดไม่ได้สำหรับงานแต่งงาน (Wedding String Quartet)",
      icon: <Users className="text-primary mb-4" size={32} />
    },
    {
      title: "วงสตริงควินเตท (String Quintet)",
      description: "วงเครื่องสาย 5 ชิ้น เพิ่มมิติและความหนักแน่นของเสียงให้มากขึ้น เหมาะกับงานที่ต้องการดนตรีเป็นจุดเด่น",
      icon: <Star className="text-primary mb-4" size={32} />
    },
    {
      title: "จัดหาครูผู้สอนดนตรี",
      description: "บริการจัดหาครูผู้สอน Violin / Viola / Cello / Double Bass รวมถึงเครื่องดนตรีในออเคสตราทุกชนิด สำหรับผู้ที่สนใจเรียนดนตรี",
      icon: <BookOpen className="text-primary mb-4" size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">รูปแบบวงดนตรีและบริการ</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-border/50 bg-card/50 backdrop-blur-sm rounded-sm hover:border-primary/50 transition-colors group">
              {service.icon}
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Past Performances</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          <a href="#" className="text-primary hover:text-accent font-medium mt-4 md:mt-0 flex items-center gap-2 transition-colors">
            View All <ChevronDown className="-rotate-90" size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video Placeholder 1 */}
          <div className="relative group overflow-hidden rounded-sm aspect-video bg-muted border border-border">
            <img 
              src={weddingImg} 
              alt="String Quartet Performance" 
              className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-serif font-bold text-white">Wedding String Quartet</h3>
              <p className="text-primary text-sm mt-1">วงสตริงควอเตทงานแต่งงาน</p>
            </div>
          </div>
          
          {/* Video Placeholder 2 */}
          <div className="relative group overflow-hidden rounded-sm aspect-video bg-muted border border-border">
            <img 
              src={concertImg} 
              alt="Full Orchestra Concert" 
              className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-serif font-bold text-white">Grand Concert Event</h3>
              <p className="text-primary text-sm mt-1">Orchestra in Bangkok, Thailand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const events = [
    { 
      date: "14", 
      month: "NOV", 
      year: "2026",
      title: "Rising Star Concert by Siam Events Orchestra", 
      location: "Siam Ratchada Auditorium", 
      type: "Ticket 750฿",
      image: risingStarImg
    },
    { 
      date: "24", 
      month: "NOV", 
      year: "2026",
      title: "Sounder International Concert ", 
      location: "Thao Suranaree Monument (Ya Mo) / Korat", 
      type: "Public Event",
      image: sounderImg
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Upcoming Events</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {events.map((event, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 p-6 border border-border bg-background hover:border-primary/50 transition-colors rounded-sm group items-center md:items-stretch shadow-sm">
              
              {/* โซนรูปโปสเตอร์ */}
              <div className="w-full md:w-100 flex-shrink-0 overflow-hidden rounded-sm border border-border/30 bg-muted/30 flex items-center justify-center">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* โซนวันที่ */}
              <div className="flex-shrink-0 text-center md:text-left md:border-r md:border-border md:pr-6 md:min-w-[120px] flex flex-col justify-center py-4 md:py-0">
                <div className="text-primary font-bold text-5xl">{event.date}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider font-medium mt-1">{event.month} {event.year}</div>
              </div>
              
              {/* โซนรายละเอียดงานและปุ่ม */}
              <div className="flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors leading-tight">{event.title}</h3>
                </div>
                <div className="flex items-center text-muted-foreground gap-2 mb-4">
                  <Calendar size={16} className="flex-shrink-0" />
                  <span className="text-sm md:text-base">{event.location}</span>
                </div>
                <div className="mb-6">
                  <span className="text-xs px-3 py-1.5 rounded-sm border border-primary/30 text-primary bg-primary/5 font-medium inline-block">
                    {event.type}
                  </span>
                </div>
                
                {/* ย้ายโซนปุ่มมาไว้ตรงนี้ (ใต้ Type) */}
                <div>
                  <button className="w-full md:w-auto px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm text-sm font-medium whitespace-nowrap">
                    More Info
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/4] relative z-10 border border-border p-2 bg-card/50">
              <img 
                src="https://images.unsplash.com/photo-1555446050-4824b228b368?w=800&h=1067&fit=crop" 
                alt="Music Director" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 border border-primary/30 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 blur-2xl -z-10"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-6">เกี่ยวกับเรา</h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Siam Events Orchestra คือวงดนตรีคลาสสิคและออเคสตราที่รวบรวมนักดนตรีคุณภาพซึ่งจบเอกดนตรีโดยตรง เพื่อสร้างสรรค์เสียงเพลงที่สมบูรณ์แบบให้กับทุกงานสำคัญของคุณ
              </p>
              <p>
                ด้วยประสบการณ์ในการแสดงร่วมกับศิลปินระดับแนวหน้าของเมืองไทย เรามั่นใจในการมอบบริการดนตรีที่ได้มาตรฐานสูงสุด ไม่ว่าจะเป็นงานแต่งงานที่ต้องการความโรแมนติก ไปจนถึงงานคอนเสิร์ตที่ต้องการความยิ่งใหญ่
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-primary">High</div>
                <div className="text-sm text-muted-foreground leading-tight">Quality<br/>Performance</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-primary">100%</div>
                <div className="text-sm text-muted-foreground leading-tight">Professional<br/>Musicians</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-bold mb-10">Trusted By Premium Brands & Artists</h2>
        
        {/* Logos Placeholder (Using text for now, would be SVGs) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-90 mb-16 items-center">
          <div className="text-xl font-bold tracking-widest">JENNIFER KIM</div>
          <div className="text-xl font-bold tracking-widest">AOF PONGSAK</div>
          <div className="text-xl font-bold tracking-widest">SEASON FIVE</div>
          <div className="text-xl font-bold tracking-widest">NAT MYRIA</div>
          <div className="text-xl font-bold tracking-widest">GAM THE STAR</div>
          <div className="text-xl font-bold tracking-widest">GUN THE STAR</div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            <p className="text-muted-foreground mb-8">
              ติดต่องานแสดงคอนเสิร์ต วงดนตรีงานแต่งงาน หรืองาน Events ทั่วไป พร้อมให้คำปรึกษาเพื่อจัดรูปแบบวงดนตรีให้เหมาะสมกับงานของคุณ
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a href="mailto:contact@siameventsorchestra.com" className="text-muted-foreground hover:text-primary transition-colors">contact@siameventsorchestra.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="font-medium mb-4">Follow Us</div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center rounded-sm hover:border-primary hover:text-primary transition-colors">
                  <Globe size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center rounded-sm hover:border-primary hover:text-primary transition-colors">
                  <Radio size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-border flex items-center justify-center rounded-sm hover:border-primary hover:text-primary transition-colors">
                  <Share2 size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <form className="space-y-4 bg-card/50 p-8 border border-border/50 rounded-sm backdrop-blur-sm">
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                <input type="text" className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Email / Phone</label>
                <input type="text" className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground" placeholder="your@email.com หรือ เบอร์โทรศัพท์" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Inquiry Type</label>
                <select className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground appearance-none">
                  <option>จ้างวงดนตรีงานแต่งงาน (Wedding)</option>
                  <option>งาน Events / คอนเสิร์ต (Events/Concert)</option>
                  <option>จัดหาครูสอนดนตรี</option>
                  <option>อื่นๆ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                <textarea rows={4} className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none" placeholder="รายละเอียดงาน วันที่ และสถานที่..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-accent transition-colors mt-2">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background/90">
      <div className="container mx-auto px-6">
        {/* SEO Keywords Section - ซ่อนให้ไม่เกะกะสายตาแต่ Search Engine ยังมองเห็นได้ง่าย */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground/60 mb-8 max-w-4xl mx-auto text-center">
          <span>วงออเคสตราในไทย</span>
          <span>วงดนตรีคลาสสิค</span>
          <span>วงดนตรีงานแต่งงาน</span>
          <span>วงเครื่องสาย</span>
          <span>วงออเคสตราคาถูก</span>
          <span>Wedding String Quartet</span>
          <span>Classical Musicians in Bangkok</span>
          <span>Thailand Strings Player</span>
          <span>Orchestra in Thailand</span>
          <span>Orchestra in Bangkok, Thailand</span>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Siam Events Orchestra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen text-foreground relative selection:bg-primary/30 selection:text-primary">
      <FlowingBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Schedule />
        <About />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;