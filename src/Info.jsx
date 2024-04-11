import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowPointer,
  faLocationDot,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* Box 1 */}
      <div className="relative">
        <div className="h-30 w-40">
          <div className="flex flex-col bg-white rounded-2xl p-4 shadow-2xl hover:shadow-2xl h-full">
            <div className="">
              <FontAwesomeIcon
                icon={faArrowPointer}
                className="text-blue-500 text-2xl rounded-full border bg-blue-100 p-1"
              />
            </div>
            <div className="text-lg mt-4">25</div>
            <div className="font-mono font-bold mt-4">Today's Clicks</div>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="relative">
        <div className="h-30 w-40">
          <div className="flex flex-col bg-white rounded-2xl p-4 shadow-2xl hover:shadow-2xl h-full">
            <div className="">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-red-500 text-2xl rounded-full border bg-red-100 p-1"
              />
            </div>
            <div className="text-lg mt-4">5</div>
            <div className="font-mono font-bold mt-4">Top Location</div>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="relative">
        <div className="h-30 w-40">
          <div className="flex flex-col bg-white rounded-2xl p-4 shadow-2xl hover:shadow-2xl h-full">
            <div className="">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-green-500 text-2xl rounded-full border bg-green-100 p-1"
              />
            </div>
            <div className="text-lg mt-4">15</div>
            <div className="font-mono font-bold mt-4">Top Source</div>
          </div>
        </div>
      </div>

      {/* Box 4 */}
      <div className="relative">
        <div className="h-30 w-40">
          <div className="flex flex-col bg-white rounded-2xl p-4 shadow-2xl hover:shadow-2xl h-full">
            <div className="">
              <FontAwesomeIcon
                icon={faArrowPointer}
                className="text-blue-500 text-2xl rounded-full border bg-blue-100 p-1"
              />
            </div>
            <div className="text-lg mt-4">15</div>
            <div className="font-mono font-bold mt-4">Top Source</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
