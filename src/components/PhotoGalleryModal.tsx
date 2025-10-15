import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import nature1 from "@/assets/nature-photos/nature1.jpg";
import nature2 from "@/assets/nature-photos/nature2.jpg";
import nature3 from "@/assets/nature-photos/nature3.jpg";
import nature4 from "@/assets/nature-photos/nature4.jpg";
import nature5 from "@/assets/nature-photos/nature5.jpg";
import nature6 from "@/assets/nature-photos/nature6.jpg";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotoGalleryModal = ({ isOpen, onClose }: PhotoGalleryModalProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [nature1, nature2, nature3, nature4, nature5, nature6];

  if (!isOpen) return null;

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (selectedImage !== null) {
        setSelectedImage(null);
      } else {
        onClose();
      }
    } else if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: "rgba(0, 0, 0, 0.95)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          if (selectedImage !== null) {
            setSelectedImage(null);
          } else {
            onClose();
          }
        }
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Lightbox View */}
      {selectedImage !== null ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
            style={{ background: "rgba(255, 255, 255, 0.1)" }}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" style={{ color: "white" }} />
          </button>

          {selectedImage > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" style={{ color: "white" }} />
            </button>
          )}

          {selectedImage < images.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" style={{ color: "white" }} />
            </button>
          )}

          <img
            src={images[selectedImage]}
            alt={`Photo ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
        </div>
      ) : (
        /* Gallery Grid View */
        <div
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl p-8 animate-scale-in"
          style={{ background: "var(--card-bg)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
            style={{ background: "rgba(255, 255, 255, 0.1)" }}
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" style={{ color: "var(--text-primary)" }} />
          </button>

          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--accent-green)",
            }}
          >
            Photography Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(0, 0, 0, 0.5)" }}
                >
                  <span
                    className="text-lg font-medium"
                    style={{ color: "white" }}
                  >
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGalleryModal;
