import { X } from "lucide-react";

interface NaturePhotographyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NaturePhotographyModal = ({ isOpen, onClose }: NaturePhotographyModalProps) => {
  if (!isOpen) return null;

  const photos = [
    {
      src: "https://drive.google.com/uc?export=view&id=1eUNSjwegxpJ9QwjAYGqJaa5bH-ev4CCD",
      title: "Golden Mountain Sunrise",
      location: "Himalayan Foothills",
      description: "The first light of dawn gently kissing the mountain peaks.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1sIjVIAvAxEHpIAOnjlWJxgEBWMdP5EPa",
      title: "Tranquil Lake Reflection",
      location: "Emerald Lake",
      description: "Crystal-clear waters reflecting the calm blue skies.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1XFSis7yzWOGY-0rOgFXrMb0-qbHYQ9Zn",
      title: "Blooming Valley",
      location: "Wildflower Plains",
      description: "A vibrant tapestry of wildflowers stretching across the valley.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1duhgKJxgCih5L19J42Z2F1QqVdWH10R_",
      title: "Mystic Waterfall",
      location: "Hidden Forest Trail",
      description: "A gentle cascade flowing through moss-covered rocks.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1QtEhPIGY7uc2pV15LjnlI1KD8igaTY_E",
      title: "Sunset Over Hills",
      location: "Western Ridge",
      description: "Golden hues of the setting sun painting the rolling hills.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1FFsxXpR-b9ne-9wP6s33UlqqUfrCnmQA",
      title: "Enchanted Forest Path",
      location: "Whispering Woods",
      description: "Soft light filtering through tall evergreens guiding the trail.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=15fMcPUelxGeHHSCHb24odj47YzgJJsSP",
      title: "Starry Skies",
      location: "Mountain Summit",
      description: "The Milky Way shining brightly in the still of night.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1k_u8P2Qgv6ZAqdft7FbbBMnDy3HB98rx",
      title: "Misty River Morning",
      location: "Riverside Grove",
      description: "Gentle morning fog rolling over calm river waters.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1oiPsofhagd9kvcJQNltp2WSwUgKXioEO",
      title: "Desert Dunes Glow",
      location: "Golden Sands",
      description: "Soft waves of sand glowing under the sunset’s warmth.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1Bw2qVoX724YSKb6yEvQYdW7nbmUNkPXC",
      title: "Serene Countryside",
      location: "Greenfield Valley",
      description: "A peaceful farmland landscape bathed in warm evening light.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1prIw3cPRotHEY7Ma_OmFSAvSPeo5Q73A",
      title: "Ocean Horizon",
      location: "Coastal Bay",
      description: "Waves crashing gently under a pastel sky.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1Dsi00CQq_0JsifuQ-YuapQD66y7qdW3F",
      title: "Autumn Leaves Trail",
      location: "Maple Forest",
      description: "A golden carpet of leaves lining the forest path.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=14ibbhTxtNVWZtbWrq7o5CwTH0hk1BM_I",
      title: "Lakeside Morning Mist",
      location: "Crystal Lake",
      description: "Soft fog rising from the water as sunlight breaks through.",
    },
    {
      src: "https://drive.google.com/uc?export=view&id=1USbqNz2HRsDIWVB9LTwb53dZ12tKdcPL",
      title: "Snow-Capped Peaks",
      location: "Northern Ranges",
      description: "Towering mountains blanketed in shimmering white snow.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: "rgba(0, 0, 0, 0.8)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden animate-scale-in"
        style={{
          background: "var(--card-bg)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 px-6 py-4 border-b"
          style={{
            background: "var(--card-bg)",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                📸 My Nature Photography
              </h2>
              <p style={{ color: "var(--text-secondary)" }} className="text-sm mt-1">
                Capturing the beauty of nature through my phone lens
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-all hover:bg-white/10"
              style={{ color: "var(--text-secondary)" }}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden transition-all hover:-translate-y-2"
                style={{
                  background: "var(--primary-bg)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--accent-blue)",
                    }}
                  >
                    {photo.title}
                  </h3>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    📍 {photo.location}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaturePhotographyModal;

