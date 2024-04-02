import Image from "next/image";

export default function Aside() {
  return (
    <aside className="hidden lg:block w-full h-fit md:col-span-4 lg:col-span-3 p-4 bg-black text-white space-y-5">
      <div className="flex justify-between gap-2 text-sm font-light">
        <span className="text-gray-400">Storage</span>
        <span className="text-gray-200">View Details</span>
      </div>

      <div className="w-full h-2 grid grid-cols-12 gap-2">
        <span className="col-span-3 bg-green-500 rounded-full"></span>
        <span className="col-span-2 bg-orange-500 rounded-full"></span>
        <span className="col-span-7 bg-gray-500 rounded-full"></span>
      </div>

      <div className="flex justify-between items-center gap-3 text-sm">
        <span>32 gb / 256 gb</span>
        <button className="border py-2 px-8">Optimize</button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-2 text-sm">
          <span className="text-gray-400">File Type</span>
          <span className="text-gray-200">Details</span>
        </div>
        <div className="divide-y divide-gray-700 p-2 bg-gray-800 rounded-lg">
          <div className="flex justify-between items-center gap-3 pb-3">
            <div className="flex gap-2 items-center text-sm font-extralight">
              <span className="w-8 h-8 flex justify-center items-center p-1 border border-purple-600 rounded-full">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.47746 9.8156H3.66412"
                    stroke="#6E47D5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.47746 7.02463H3.66412"
                    stroke="#6E47D5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.50091 4.24009H3.66425"
                    stroke="#6E47D5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.60576 0.833206C8.60576 0.833206 3.48776 0.835873 3.47976 0.835873C1.63976 0.847206 0.500427 2.05787 0.500427 3.90454V10.0352C0.500427 11.8912 1.64843 13.1065 3.50443 13.1065C3.50443 13.1065 8.62176 13.1045 8.63043 13.1045C10.4704 13.0932 11.6104 11.8819 11.6104 10.0352V3.90454C11.6104 2.04854 10.4618 0.833206 8.60576 0.833206Z"
                    stroke="#6E47D5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Documents
            </div>
            <span className="text-sm font-light">2.2 gb</span>
          </div>

          <div className="flex justify-between items-center gap-3 py-3">
            <div className="flex gap-2 items-center text-sm font-extralight">
              <span className="w-8 h-8 flex justify-center items-center p-1 border border-orange-600 rounded-full">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.86846 0.833191H4.10046C2.09246 0.833191 0.83313 2.25586 0.83313 4.26919V9.69986C0.83313 11.7132 2.08713 13.1359 4.10046 13.1359H9.86513C11.8818 13.1359 13.1351 11.7132 13.1351 9.69986V4.26919C13.1378 2.25586 11.8838 0.833191 9.86846 0.833191Z"
                    stroke="#DF6E49"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.13541 4.85666C6.13541 5.53666 5.58474 6.08733 4.90474 6.08733C4.22541 6.08733 3.67407 5.53666 3.67407 4.85666C3.67407 4.17666 4.22541 3.626 4.90474 3.626C5.58407 3.62666 6.13474 4.17733 6.13541 4.85666Z"
                    stroke="#DF6E49"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.138 8.96733C12.5227 8.334 11.3393 7.05467 10.0527 7.05467C8.76533 7.05467 8.02333 9.87667 6.78533 9.87667C5.54733 9.87667 4.42267 8.60067 3.43067 9.41867C2.43867 10.236 1.5 11.9073 1.5 11.9073"
                    stroke="#DF6E49"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Photos
            </div>
            <span className="text-sm font-light">2.2 gb</span>
          </div>

          <div className="flex justify-between items-center gap-3 py-3">
            <div className="flex gap-2 items-center text-sm font-extralight">
              <span className="w-8 h-8 flex justify-center items-center p-1 border border-gray-400 rounded-full">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.667923 6.00009C0.666063 6.81986 0.629483 7.93799 1.13665 8.35595C1.60971 8.7458 1.94265 8.64535 2.80632 8.70873C3.6706 8.77271 5.49466 11.3133 6.90083 10.5097C7.62623 9.93928 7.68017 8.74341 7.68017 6.00009C7.68017 3.25677 7.62623 2.0609 6.90083 1.49047C5.49466 0.686249 3.6706 3.22747 2.80632 3.29145C1.94265 3.35483 1.60971 3.25438 1.13665 3.64423C0.629483 4.06219 0.666063 5.18032 0.667923 6.00009Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0562 1.93601C13.7563 4.38336 13.7618 7.6116 12.0562 10.0637"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.3875 3.54295C11.2617 5.07007 11.2617 6.93503 10.3875 8.45737"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Audio
            </div>
            <span className="text-sm font-light">4.2 gb</span>
          </div>

          <div className="flex justify-between items-center gap-3 pt-3">
            <div className="flex gap-2 items-center text-sm font-extralight">
              <span className="w-8 h-8 flex justify-center items-center p-1 border border-green-600 rounded-full">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.86455 8.35888C9.91848 9.58025 8.93274 10.6131 7.66304 10.665C7.56951 10.6689 3.01017 10.6597 3.01017 10.6597C1.7466 10.7556 0.640725 9.84766 0.54106 8.63088C0.533551 8.54021 0.535599 3.64813 0.535599 3.64813C0.479623 2.42544 1.46399 1.38999 2.73438 1.33612C2.82927 1.33152 7.38247 1.34006 7.38247 1.34006C8.65218 1.24545 9.76147 2.16001 9.85977 3.3827C9.86659 3.47074 9.86455 8.35888 9.86455 8.35888Z"
                    stroke="#36978D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.86664 4.65325L12.062 2.85658C12.606 2.41125 13.422 2.79925 13.4213 3.50125L13.4133 8.40058C13.4126 9.10258 12.596 9.48724 12.0533 9.04191L9.86664 7.24524"
                    stroke="#36978D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Video
            </div>
            <span className="text-sm font-light">1.0 gb</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative bg-gray-800 mt-10 overflow-hidden">
        <div className="h-fit w-fit bg-black absolute -top-8 p-6 rounded-full">
          <Image src="/setting-file.png" height={50} width={50} alt="" />
        </div>

        <div className="space-y-3 text-white mt-14 p-4">
          <h4 className="font-medium text-3xl text-center">
            Get more space for files
          </h4>
          <p className="text-sm font-light">More than 200 Gb for your files</p>
          <button className="w-full py-2.5 bg-purple-600 text-white">
            Upgrade Storage
          </button>
        </div>
      </div>
    </aside>
  );
}
