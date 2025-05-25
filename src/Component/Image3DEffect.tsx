import { useState, useEffect, useRef } from "react";

interface ImageType {
  src: string;
  alt: string;
  placeholder?: string;
}

interface Auto3DImageGalleryProps {
  images: ImageType[];
  interval?: number;
  staggerDelay?: number;
  className?: string;
}

const Auto3DImageGallery = ({
  images,
  interval = 5000,
  staggerDelay = 150,
  className = "",
}: Auto3DImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Auto-rotate images
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // 3D animation effect
  useEffect(() => {
    const img = imgRefs.current[currentIndex];
    if (!img) return;

    img.style.opacity = "0";
    img.style.transform = "translateX(-100px) rotateY(90deg)";

    setTimeout(() => {
      img.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;
      img.style.opacity = "1";
      img.style.transform = "translateX(0) rotateY(0)";
    }, staggerDelay);

    return () => {
      img.style.transition = "none";
    };
  }, [currentIndex, staggerDelay]);

  return (
    <div className={`auto-gallery-container ${className}`}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`gallery-image-wrapper ${index === currentIndex ? "active" : "hidden"}`}
        >
          <img
            ref={(el) => {
              imgRefs.current[index] = el; // Assign the element to the ref
            }}
            src={index === currentIndex ? image.src : ""}
            alt={image.alt}
            className="h-full gallery-image-card"
            loading={index === currentIndex ? "eager" : "lazy"}
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default Auto3DImageGallery;
