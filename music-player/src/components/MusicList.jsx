import React from "react";
import { Play } from "lucide-react";

const MusicList = ({ elem }) => {
  return (
    <div className="w-full border px-6 py-4 flex items-center justify-between border-gray-200 shadow-lg rounded-lg">
      <div className="flex items-center gap-15">
        <div className="h-15 w-15 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://media.istockphoto.com/id/1083599488/vector/golden-musical-key.jpg?s=612x612&w=0&k=20&c=Z2AlE23JNSs1t7cWr-MTrDG-V-vvRzh9FBRoeZ_Ff2E="
            alt="url"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{elem.name}</h1>
        </div>
      </div>
      <div className="h-15 w-15 cursor-pointer rounded-full border border-gray-200 shadow-lg flex items-center justify-center">
        <Play size={25} />
      </div>
    </div>
  );
};

export default MusicList;
