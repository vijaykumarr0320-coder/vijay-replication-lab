import { X, BookOpen, Calendar, Star } from "lucide-react";

interface Book {
  title: string;
  author: string;
  year: string;
  rating: number;
  summary: string;
  genre: string;
}

interface BooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BooksModal = ({ isOpen, onClose }: BooksModalProps) => {
  if (!isOpen) return null;

  const books: Book[] = [
  {
    title: "The Science of Self-Realization",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    year: "2024",
    rating: 4.5,
    summary: "A spiritual guide exploring the deeper meaning of life, consciousness, and self-realization through timeless Vedic wisdom.",
    genre: "Spirituality"
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    year: "2024",
    rating: 5,
    summary: "A practical guide to overcoming negativity, finding purpose, and training your mind for peace and success.",
    genre: "Self-Help"
  },
  {
    title: "Eat That Frog!",
    author: "Brian Tracy",
    year: "2023",
    rating: 5,
    summary: "21 great ways to stop procrastinating and get more done in less time.",
    genre: "Productivity"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    year: "2023",
    rating: 5,
    summary: "A powerful personal finance classic that contrasts two approaches to money, investing, and building wealth.",
    genre: "Finance"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: "2023",
    rating: 5,
    summary: "An easy and proven way to build good habits and break bad ones through small changes.",
    genre: "Self-Help"
  }
];


  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 animate-scale-in"
        style={{ 
          background: 'var(--card-bg)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6 sticky top-0 pb-4"
          style={{ background: 'var(--card-bg)' }}
        >
          <div className="flex items-center gap-3">
            <BookOpen 
              className="h-8 w-8" 
              style={{ color: 'var(--accent-blue)' }}
            />
            <h2 
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              My Book Collection
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" style={{ color: 'var(--text-primary)' }} />
          </button>
        </div>

        <div className="grid gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all hover:-translate-y-1"
              style={{ 
                background: 'var(--secondary-bg)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 
                      className="text-xl font-bold"
                      style={{ 
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--accent-blue)'
                      }}
                    >
                      {book.title}
                    </h3>
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        background: 'var(--accent-blue)',
                        color: 'var(--primary-bg)'
                      }}
                    >
                      {book.genre}
                    </span>
                  </div>
                  
                  <p 
                    className="text-sm mb-3"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    by {book.author}
                  </p>

                  <p 
                    className="leading-relaxed mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {book.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" style={{ color: 'var(--accent-blue)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{book.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4"
                          fill={i < book.rating ? 'var(--accent-blue)' : 'none'}
                          style={{ 
                            color: i < book.rating ? 'var(--accent-blue)' : 'var(--text-secondary)',
                            opacity: i < book.rating ? 1 : 0.3
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-6 p-4 rounded-lg text-center"
          style={{ background: 'var(--secondary-bg)' }}
        >
          <p style={{ color: 'var(--text-secondary)' }}>
            📚 Currently reading and exploring more books in technology, self-improvement, and software engineering
          </p>
        </div>
      </div>
    </div>
  );
};

export default BooksModal;
