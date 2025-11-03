import { useEffect, useState } from "react";
import { API } from "../../utils/Axios"; 
import ReelCard from "../../components/ReelCard"; 

const ReelsFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await API.get("/food-item/all-foods");
        setVideos(res.data?.data || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [videos]);

  // ✅ Loading Screen
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white text-xl">
        Loading...
      </div>
    );
  }

  // ✅ No Videos UI
  if (!loading && videos.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <h1 className="text-white text-xl font-semibold">No Reels Available 📭</h1>
      </div>
    );
  }

  // ✅ Feed View
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      {videos.map((item) => (
        <div key={item._id} className="snap-start h-screen w-full">
          <ReelCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ReelsFeed;
