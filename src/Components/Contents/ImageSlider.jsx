import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1021/600/400",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-gray-100">
      <div className="relative w-[90%] max-w-5xl flex items-center justify-center overflow-hidden">
        <div className="flex gap-6 items-center justify-center">
          {images.map((img, index) => {
            // distance from current slide
            const distance = Math.abs(index - current);

            // make images smaller if farther from center
            let scale = 1 - distance * 0.2;
            if (scale < 0.6) scale = 0.6;

            let opacity = 1 - distance * 0.3;
            if (opacity < 0.3) opacity = 0.3;

            return (
              <motion.img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                animate={{
                  scale,
                  opacity,
                }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl shadow-lg object-cover"
                style={{
                  width: "250px",
                  height: "180px",
                  zIndex: index === current ? 10 : 1,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
