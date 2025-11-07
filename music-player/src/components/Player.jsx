import { Play } from "lucide-react";
import React from "react";

const Player = () => {
  return (
    <div className="flex w-[73%] bottom-15 bg-orange-200 fixed py-4 px-10 border border-gray-300 shadow-lg rounded-xl items-center justify-between">
      <div className="flex items-center gap-15">
        <div>animations</div>

        <div className="h-20 w-20 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://media.istockphoto.com/id/1083599488/vector/golden-musical-key.jpg?s=612x612&w=0&k=20&c=Z2AlE23JNSs1t7cWr-MTrDG-V-vvRzh9FBRoeZ_Ff2E="
            alt="url"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Name</h1>
        </div>
      </div>
      <div className="h-15 w-15 cursor-pointer rounded-full border border-gray-200 shadow-lg flex items-center justify-center">
        <Play size={25} />
      </div>
    </div>
  );
};

export default Player;
