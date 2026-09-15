// PortfolioPage.tsx
import { useState } from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PortfolioItem {
  id: number;
  title: string;
  youtubeId: string;
  description: string;
}

// Mock data - แทนที่ด้วยข้อมูลจริงของคุณ
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Never Gonna Give You Up",
    youtubeId: "dQw4w9WgXcQ",
    description: "Performance at Grand Concert Event"
  },
  {
    id: 2,
    title: "Wedding String Quartet Performance",
    youtubeId: "dQw4w9WgXcQ",
    description: "Classical wedding ceremony"
  },
  {
    id: 3,
    title: "Sounder International Concert",
    youtubeId: "dQw4w9WgXcQ",
    description: "International music festival performance"
  },
  {
    id: 4,
    title: "Rising Star Orchestra Concert",
    youtubeId: "dQw4w9WgXcQ",
    description: "Full orchestra performance"
  },
];

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  return (
    // เอา pt-20 md:pt-24 ออก เพื่อลบช่องว่างด้านบนทิ้งให้หมด
    <div className="min-h-screen text-foreground bg-background">
      
      {/* Header - Solid Background */}
      {/* เปลี่ยนเป็น top-0 เพื่อให้เกาะติดขอบบนสุดของจอแบบแนบสนิท */}
      <div className="border-b border-border/50 bg-card sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6 md:py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors mb-4 focus:outline-none"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">ผลงานของเรา</h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            ดูคลิปผลงานการแสดงและการบรรเลงดนตรีของวงออเคสตรา
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        {selectedVideo ? (
          // Video Player View
          <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
            <button
              onClick={() => setSelectedVideo(null)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 focus:outline-none"
            >
              <ArrowLeft size={18} />
              <span>กลับไปดูรายการทั้งหมด</span>
            </button>

            <div className="bg-black rounded-sm overflow-hidden mb-8 shadow-lg">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="bg-card/50 p-6 md:p-8 border border-border/50 rounded-sm shadow-sm">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-4">{selectedVideo.title}</h2>
              <p className="text-muted-foreground text-base md:text-lg">{selectedVideo.description}</p>
            </div>
          </div>
        ) : (
          // Grid View
          <div className="animate-in fade-in duration-500">
            <p className="text-muted-foreground mb-8 md:mb-12 text-center md:text-left">
              คลิกเลือกวิดีโอเพื่อดูการแสดงของเรา
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {portfolioData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedVideo(item)}
                  className="group cursor-pointer rounded-sm overflow-hidden border border-border/50 hover:border-primary/50 transition-all bg-card/30 hover:bg-card/60 shadow-sm hover:shadow-md"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-black/30 overflow-hidden group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
                    />
                    <Play
                      size={56}
                      className="absolute text-white opacity-70 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg group-hover:scale-110"
                      fill="white"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}