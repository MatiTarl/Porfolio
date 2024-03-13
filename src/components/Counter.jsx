import { useState } from "preact/hooks";

export default function Counter() {
  const [Counter, SetCounter] = useState(0);

  const suma = () => SetCounter((counter) => counter + 1);
  const resta = () => SetCounter((counter) => counter - 1);


  return (
    <div className="flex justify-around items-center">
      <button
        className="flex-row justify-center text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        onClick={() => suma()}
      >
        +
      </button>
      <p className="flex-row justify-center text-white ">{Counter}</p>
      <button
        className="flex-row justify-center text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        onClick={() => resta()}
      >
        -
      </button>
    </div>
  );
}
