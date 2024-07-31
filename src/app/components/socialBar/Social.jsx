import React from "react";
import Linkedin from "../../../ui/icons/Linkedin";
import Gmail from "../../../ui/icons/Gmail";
import Github from "../../../ui/icons/GitHub";

export default function SocialBar() {
  return (
    <div class="text-white w-full h-auto flex justify-center  p-2 ">
        <div class=" w-[200px] sm:w-[300px] h-16 sm:h-24 bg-zinc-200  flex justify-around items-center rounded-3xl">
          <a href="">
            <div class=" w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-slate-950 items-center flex justify-center transition-all duration-200 [box-shadow:5px_5px_rgb(27_38_49)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">
              <Linkedin />
            </div>
          </a>
          <a href="">
            <div class=" w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-slate-950 items-center flex justify-center transition-all duration-200 [box-shadow:5px_5px_rgb(27_38_49)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">
              <Gmail />
            </div>
          </a>
          <a href="/home">
            <div class=" w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-slate-950 items-center flex justify-center transition-all duration-200 [box-shadow:5px_5px_rgb(27_38_49)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">
              <Github />
            </div>
          </a>
        </div>
    </div>
  );
}
