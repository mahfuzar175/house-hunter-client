import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const House = ({ item }) => {
  const {
    name,
    address,
    city,
    bedrooms,
    bathrooms,
    room_size,
    picture,
    availability_date,
    rent_per_month,
  } = item;

  const { user } = useContext(AuthContext);
  const isHouseOwner = user.role === "House Owner";



  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[210px] object-cover w-full"
            src={picture}
            alt="house"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase font-bold">{item?.name}</h2>
          <div className="w-full flex items-center justify-between">
            <h2 className="bg-pink-700 text-white rounded-xl p-[2px] px-2">
              Tk: {item?.rent_per_month}/-
            </h2>
            <h2 className="bg-pink-700 text-white rounded-xl p-[2px] px-2 flex justify-between items-center gap-1">
              <MdOutlineBed />
              {item?.bedrooms}
            </h2>
            <h2 className="bg-pink-700 text-white rounded-xl p-[2px] px-2 flex justify-between items-center gap-1">
              <FaBath /> {item?.bathrooms}
            </h2>
            <h2 className="bg-pink-700 text-white rounded-xl p-[2px] px-2">
              {item?.room_size}
            </h2>
          </div>
          <p className="text-lg flex justify-left items-center font-semibold text-gray-600">
            <CiLocationOn /> {item?.address}, {item.city}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-[18px] text-left">
              <mark className="bg-pink-700 text-white rounded-xl p-[2px] px-2">
                TO:{" "}
                {item.availability_date ? (
                  item.availability_date
                ) : (
                  <span className="text-[12px]">No date found</span>
                )}
              </mark>
            </p>
            {isHouseOwner ? (
              <button
                className="btn btn-primary btn-sm border-none bg-pink-700"
                disabled
              >
                <FaRegBookmark />
                Book House
              </button>
            ) : (
              <button className="btn btn-primary btn-sm border-none bg-pink-700">
                <FaRegBookmark />
                Book House
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
