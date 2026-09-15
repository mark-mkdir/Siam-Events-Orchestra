// EventDetailsPage.tsx
import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Ticket, Users, Music } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

interface EventDetail {
  id: number;
  title: string;
  date: string;
  month: string;
  year: string;
  location: string;
  locationDetails: string;
  ticketPrice: string;
  ticketUrl: string;
  description: string;
  program: string[];
  image: string;
}

// Mock data
const eventsDatabase: Record<number, EventDetail> = {
  1: {
    id: 1,
    title: "Rising Star Concert by Siam Events Orchestra",
    date: "14",
    month: "NOV",
    year: "2026",
    location: "Siam Ratchada Auditorium",
    locationDetails: "Bangkok, Thailand",
    ticketPrice: "750 บาท",
    ticketUrl: "https://example.com/booking",
    description: "ร่วมสัมผัสบรรยากาศคอนเสิร์ตดนตรีคลาสสิคที่น่าดึงดูดใจ โดยวงออเคสตรา Siam Events Orchestra นำเสนอผลงานดนตรีที่สมบูรณ์แบบและสุดยอด ในการแสดงครั้งนี้เราจะบรรเลงเพลงคลาสสิกที่เลือกสรร เพื่อให้คุณได้สัมผัสเสียงดนตรีที่ไพเราะและโรแมนติก เหมาะสำหรับคนรักดนตรีทุกเพศทุกวัย",
    program: [
      "Overture from The Magic Flute - Mozart",
      "Violin Concerto in D Major - Tchaikovsky",
      "Swan from Carnival of the Animals - Saint-Saëns",
      "Waltz of the Flowers - Tchaikovsky",
      "Symphony No. 9 - Beethoven"
    ],
    image: "https://www.claudeusercontent.com/api/placeholder/800/450"
  },
  2: {
    id: 2,
    title: "Sounder International Concert",
    date: "24",
    month: "NOV",
    year: "2026",
    location: "Thao Suranaree Monument (Ya Mo)",
    locationDetails: "Korat, Thailand",
    ticketPrice: "Free Entry",
    ticketUrl: "https://example.com/register",
    description: "งานประชุมนานาชาติด้านศิลปะและดนตรี ขอเชิญชวนคุณเข้าร่วมฟังการแสดงดนตรีออเคสตราระดับสากล ภายใต้หัวข้อ 'เสียงเพลงเชื่อมใจชาติ' เป็นงานแสดงศิลปะและวัฒนธรรมสำหรับหนุ่มสาวไทยและชาวต่างชาติ จากหลายประเทศ",
    program: [
      "National Anthems Medley",
      "Symphony No. 5 - Beethoven",
      "Concierto de Aranjuez - Rodrigo",
      "Classical meets Contemporary",
      "Grand Finale - All Nations Symphony"
    ],
    image: "https://www.claudeusercontent.com/api/placeholder/800/450"
  }
};

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const id = parseInt(eventId || '1');
  const event = eventsDatabase[id];

  if (!event) {
    return (
      <div className="min-h-screen text-foreground bg-background pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">ไม่พบข้อมูลงานแสดง</h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:text-accent transition-colors flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={20} />
            <span>กลับไปหน้าแรก</span>
          </button>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    setIsLoading(true);
    window.open(event.ticketUrl, '_blank');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen text-foreground bg-background pt-32">
      {/* Back Button */}
      <div className="container mx-auto px-6 mb-8">
        <button
          onClick={() => navigate('/#schedule')}
          className="flex items-center gap-2 text-primary hover:text-accent transition-colors focus:outline-none"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">กลับไปดูงานแสดงอื่นๆ</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-card/30 border-b border-border/50 mb-12">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Image (800x450) */}
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-sm overflow-hidden border border-border/50 bg-muted/30 shadow-md">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Date & Booking Card */}
            <div className="flex flex-col gap-6">
              
              {/* Date Card */}
              <div className="p-6 border border-primary/30 bg-primary/5 rounded-sm text-center shadow-sm">
                <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">
                  {event.date}
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider font-medium text-muted-foreground mb-4">
                  {event.month} {event.year}
                </div>
                <div className="w-16 h-1 bg-primary mx-auto"></div>
              </div>

              {/* Pricing & Booking Card (ย้ายมาไว้ข้างรูปภาพตรงนี้) */}
              <div className="p-6 md:p-8 bg-card border border-border/50 rounded-sm shadow-sm flex flex-col gap-6">
                
                {/* Location & Price Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <div className="font-medium text-foreground text-lg">{event.location}</div>
                      <div className="text-sm text-muted-foreground mt-1">{event.locationDetails}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Ticket className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">ราคาบัตรเข้าชม</div>
                      <div className="font-serif font-bold text-primary text-3xl">{event.ticketPrice}</div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-border/60 my-2"></div>

                {/* Booking Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleBooking}
                    disabled={isLoading}
                    className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-accent transition-colors disabled:opacity-50 text-lg shadow-sm"
                  >
                    {isLoading ? "กำลังดำเนินการ..." : "จองตั๋วเลย"}
                  </button>

                  <button
                    onClick={() => {
                      const subject = `ติดต่อเกี่ยวกับงาน: ${event.title}`;
                      const body = `สวัสดี ฉันสนใจเกี่ยวกับงาน ${event.title} ในวันที่ ${event.date} ${event.month} ${event.year}`;
                      window.location.href = `mailto:contact@siameventsorchestra.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }}
                    className="w-full py-3 border-2 border-primary text-primary font-medium rounded-sm hover:bg-primary/5 transition-colors"
                  >
                    ติดต่อเพิ่มเติม
                  </button>
                </div>
                
                <div className="text-xs text-center text-muted-foreground mt-2">
                  <p>หากมีคำถาม สามารถติดต่อเราได้ที่</p>
                  <p className="font-semibold text-foreground mt-1">contact@siameventsorchestra.com</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Details Content */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                {event.title}
              </h1>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <Music className="text-primary" size={24} />
                รายละเอียดการแสดง
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                {event.description}
              </p>
            </div>

            {/* Program */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <Users className="text-primary" size={24} />
                โปรแกรมการบรรเลง
              </h2>
              <div className="space-y-3">
                {event.program.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-card/50 border border-border/50 rounded-sm hover:border-primary/50 transition-colors group"
                  >
                    <div className="text-primary font-serif text-lg font-bold flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <p className="text-foreground font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Info Box - Sticky position */}
              <div className="sticky top-32 p-8 bg-card/50 border border-border/50 rounded-sm space-y-4">
                <h4 className="font-serif font-bold text-foreground text-xl mb-4">ข้อมูลสำคัญที่ควรรู้</h4>
                <ul className="space-y-4 text-base text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    นักดนตรีอาชีพคุณภาพสูง 100%
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    ระบบเสียงมาตรฐานสากล
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    โปรแกรมเพลงที่คัดสรรมาอย่างดี
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    สร้างบรรยากาศสุดโรแมนติก
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}