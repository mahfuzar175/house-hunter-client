import { useEffect, useState } from "react";
import House from "./House";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetch("https://house-hunter-server-mu-two.vercel.app/houses")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

  return (
    <div className="flex justify-center items-center mb-8 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {houses.map((item) => (
          <House key={item.id} item={item}></House>
        ))}
      </div>
    </div>
  );
};

export default Houses;
