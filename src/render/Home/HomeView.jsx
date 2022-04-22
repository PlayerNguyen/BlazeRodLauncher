import React from "react";
import { BsPlay } from "react-icons/bs";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

function HomeView() {
  return (
    <div className="flex flex-row w-full bg-zinc-200">
      <div className="flex flex-col gap-2 p-3">
        <div>
          <span>Username</span>
        </div>
        <div className="flex flex-row">
          <TextInput placeholder={`notch`} />
          <Button
            text={
              <span className="flex align-middle items-center justify-center">
                <span className="text-xl">
                  <BsPlay />
                </span>
                {/* <span className="ml-2">Play</span> */}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HomeView;
