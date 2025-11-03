import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ReelCard = ({ item }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <video
        ref={videoRef}
        src={item.video}
        className="w-full h-full object-contain"
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="absolute bottom-10 left-4 right-4 text-white">
        <p className="text-lg font-semibold line-clamp-2 drop-shadow-lg">
          {item.description}
        </p>

        <button
          onClick={() => navigate(`/partner/${item.foodPartnerId._id}`)}
          className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg font-bold shadow-lg"
        >
          Visit Store
        </button>
      </div>
    </div>
  );
};

export default ReelCard;
