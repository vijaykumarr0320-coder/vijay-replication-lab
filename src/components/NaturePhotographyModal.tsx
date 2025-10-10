import { X } from "lucide-react";
import nature1 from "@/assets/nature-photos/nature1.jpg";
import nature2 from "@/assets/nature-photos/nature2.jpg";
import nature3 from "@/assets/nature-photos/nature3.jpg";
import nature4 from "@/assets/nature-photos/nature4.jpg";
import nature5 from "@/assets/nature-photos/nature5.jpg";
import nature6 from "@/assets/nature-photos/nature6.jpg";

interface NaturePhotographyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NaturePhotographyModal = ({ isOpen, onClose }: NaturePhotographyModalProps) => {
  if (!isOpen) return null;

  const photos = [
    {
      src: nature1,
      title: "Misty Mountain Dawn",
      location: "Mountain Range",
      description: "Early morning fog rolling over the peaks",
    },
    {
      src: nature2,
      title: "Lake Reflections",
      location: "Tranquil Lake",
      description: "Perfect mirror reflections during golden hour",
    },
    {
      src: nature3,
      title: "Wildflower Meadow",
      location: "Local Meadow",
      description: "Vibrant wildflowers in full bloom",
    },
    {
      src: nature4,
      title: "Forest Sunbeams",
      location: "Forest Trail",
      description: "Magical light filtering through the canopy",
    },
    {
      src: nature5,
      title: "Cascading Waters",
      location: "Hidden Waterfall",
      description: "Serene waterfall surrounded by lush greenery",
    },
    {
      src: nature6,
      title: "Starry Night",
      location: "Mountain Summit",
      description: "Milky Way stretching across the night sky",
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
