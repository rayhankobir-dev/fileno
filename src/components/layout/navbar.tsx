import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <nav className="container flex gap-4 md:gap-10 mx-auto py-2.5">
        <span className="inline-flex items-center gap-3">
          <svg
            className="w-10 h-10"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="white" />
            <rect
              width="8"
              height="8"
              transform="matrix(0.707989 -0.706223 0.707989 0.706223 25 30)"
              fill="#060D01"
            />
            <rect
              width="8"
              height="8"
              transform="matrix(0.707989 -0.706223 0.707989 0.706223 13 30)"
              fill="#060D01"
            />
            <rect
              width="8"
              height="8"
              transform="matrix(0.707989 -0.706223 0.707989 0.706223 25 18)"
              fill="#060D01"
            />
            <rect
              width="8"
              height="8"
              transform="matrix(0.707989 -0.706223 0.707989 0.706223 13 18)"
              fill="#060D01"
            />
          </svg>
          <h3 className="hidden md:block font-black uppercase">Fileno</h3>
        </span>

        <ul className="flex items-center justify-between gap-4 md:gap-10">
          <Link href="/">
            <svg
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M14.0755 -6.10352e-05H17.4615C18.8637 -6.10352e-05 20 1.14579 20 2.5599V5.97446C20 7.38858 18.8637 8.53443 17.4615 8.53443H14.0755C12.6732 8.53443 11.537 7.38858 11.537 5.97446V2.5599C11.537 1.14579 12.6732 -6.10352e-05 14.0755 -6.10352e-05Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.53852 -6.10352e-05H5.92449C7.32676 -6.10352e-05 8.46301 1.14579 8.46301 2.5599V5.97446C8.46301 7.38858 7.32676 8.53443 5.92449 8.53443H2.53852C1.13626 8.53443 0 7.38858 0 5.97446V2.5599C0 1.14579 1.13626 -6.10352e-05 2.53852 -6.10352e-05ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6113 8.46301 14.0254V17.44C8.46301 18.8531 7.32676 19.9999 5.92449 19.9999H2.53852C1.13626 19.9999 0 18.8531 0 17.44V14.0254C0 12.6113 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6113 11.537 14.0254V17.44C11.537 18.8531 12.6732 19.9999 14.0755 19.9999H17.4615C18.8637 19.9999 20 18.8531 20 17.44V14.0254C20 12.6113 18.8637 11.4655 17.4615 11.4655Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link href="/folders" color="red">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2352 10.6772C19.6576 10.6772 20 10.3346 20 9.91199V8.89176C20 4.84603 18.1978 2.87594 14.5055 2.87594H11.7802C11.3366 2.87804 10.9173 2.67318 10.6462 2.32185L9.76703 1.1521C9.19911 0.423044 8.3261 -0.00228705 7.4022 -5.22725e-05H5.48571C1.84615 -5.22725e-05 0 2.10197 0 6.25324V13.7554C0 17.6077 2.39121 19.9999 6.25055 19.9999H13.7407C17.5912 19.9999 19.9912 17.6077 19.9912 13.7554C19.9491 13.3621 19.6174 13.0639 19.222 13.0639C18.8266 13.0639 18.4948 13.3621 18.4527 13.7554C18.4527 16.7897 16.7824 18.4696 13.7407 18.4696H6.24176C3.2 18.4696 1.52967 16.7985 1.52967 13.7554V13.0254H13.8374C14.2598 13.0254 14.6022 12.6829 14.6022 12.2603C14.6022 11.8377 14.2598 11.4951 13.8374 11.4951H1.52967V6.21806C1.52967 2.91112 2.70769 1.49511 5.47692 1.49511H7.41099C7.85461 1.50167 8.27147 1.70857 8.54506 2.05799L9.42418 3.21894C9.98217 3.95868 10.8539 4.39474 11.7802 4.39748H14.4967C17.3538 4.39748 18.4615 5.67277 18.4615 8.89176V9.91199C18.4615 10.1165 18.5433 10.3124 18.6887 10.4562C18.834 10.5999 19.0308 10.6795 19.2352 10.6772Z"
                fill="currentColor"
                fillOpacity="0.5"
              />
            </svg>
          </Link>

          <Link href="/search">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="9.99994"
                r="9"
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0183 16.4851L19.5423 20"
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link href="/trash">
            <svg
              className="w-4 h-4"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.04617 3.49689H17.286C17.6801 3.49689 18 3.82388 18 4.22788C18 4.63287 17.6801 4.95986 17.286 4.95986H0.712978C0.318938 4.95986 0 4.63287 0 4.22788C0 3.82388 0.318938 3.49689 0.712978 3.49689H3.90723C4.33248 3.49689 4.70214 3.18589 4.78504 2.7599L5.02303 1.53992C5.26394 0.61393 6.04422 -6.10352e-05 6.93178 -6.10352e-05H11.0682C11.9558 -6.10352e-05 12.7361 0.61393 12.9662 1.49392C13.0687 1.88491 12.8424 2.2859 12.462 2.3909C12.0826 2.4959 11.6905 2.26391 11.5881 1.87291C11.5247 1.63191 11.3111 1.46392 11.0682 1.46392H6.93178C6.68892 1.46392 6.47532 1.63191 6.41192 1.87291L6.18467 3.04589C6.15345 3.20389 6.10469 3.35189 6.04617 3.49689ZM5.1547 18.4967C4.23788 18.4767 3.71899 17.9667 3.61268 16.9797C3.30642 14.1567 2.78169 7.47183 2.77681 7.40483C2.7456 7.00183 2.4013 6.71484 2.00824 6.73284C1.61517 6.76584 1.32257 7.11883 1.35475 7.52083C1.35963 7.58882 1.88534 14.2967 2.19355 17.1427C2.37789 18.8457 3.50051 19.9246 5.12544 19.9596H5.14007C5.52728 19.9596 5.84525 19.6426 5.85402 19.2437C5.86183 18.8397 5.54874 18.5047 5.1547 18.4967ZM15.9916 6.73314C15.6034 6.71214 15.2542 7.00113 15.223 7.40413C15.2181 7.47113 14.6895 14.174 14.3862 16.975C14.2779 17.983 13.7522 18.482 12.7778 18.501L12.3905 18.5079C11.1533 18.5302 10.5775 18.5405 9.19536 18.536H9.19341C8.79937 18.536 8.48043 18.861 8.47946 19.264C8.47751 19.6689 8.79645 19.9969 9.19049 19.9989C9.43432 19.9999 9.67718 19.9999 9.92102 19.9999C10.9402 19.9999 11.3473 19.9918 12.1116 19.9765C12.3121 19.9724 12.5371 19.9679 12.8041 19.9629C14.4954 19.9319 15.618 18.875 15.8053 17.135C16.1106 14.314 16.6402 7.58913 16.6451 7.52213C16.6772 7.11913 16.3846 6.76614 15.9916 6.73314Z"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
          </Link>

          <Link href="/settings">
            <svg
              className="w-4 h-4"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8066 6.62352L18.1842 5.54343C17.6576 4.62951 16.4907 4.31423 15.5755 4.83863V4.83863C15.1399 5.09525 14.6201 5.16806 14.1307 5.041C13.6413 4.91393 13.2226 4.59743 12.9668 4.16128C12.8023 3.88406 12.7139 3.5683 12.7105 3.24595V3.24595C12.7254 2.72913 12.5304 2.22831 12.17 1.85758C11.8096 1.48685 11.3145 1.27777 10.7975 1.27798H9.54348C9.03695 1.27798 8.5513 1.47982 8.19398 1.83885C7.83667 2.19788 7.63716 2.6845 7.63959 3.19103V3.19103C7.62458 4.23683 6.77246 5.07672 5.72655 5.07661C5.4042 5.07326 5.08844 4.98485 4.81122 4.82032V4.82032C3.89605 4.29592 2.7291 4.6112 2.20252 5.52512L1.53433 6.62352C1.00839 7.5363 1.31938 8.70251 2.22998 9.23222V9.23222C2.82189 9.57395 3.18652 10.2055 3.18652 10.889C3.18652 11.5724 2.82189 12.204 2.22998 12.5457V12.5457C1.32054 13.0718 1.00921 14.2352 1.53433 15.1453V15.1453L2.16591 16.2345C2.41263 16.6797 2.82659 17.0082 3.31618 17.1473C3.80577 17.2865 4.33062 17.2248 4.77461 16.9759V16.9759C5.21106 16.7212 5.73117 16.6515 6.21932 16.7821C6.70748 16.9127 7.12322 17.233 7.37415 17.6716C7.53868 17.9488 7.62709 18.2646 7.63044 18.5869V18.5869C7.63044 19.6435 8.48694 20.5 9.54348 20.5H10.7975C11.8505 20.5 12.7055 19.649 12.7105 18.5961V18.5961C12.7081 18.0879 12.9089 17.5999 13.2681 17.2406C13.6274 16.8813 14.1155 16.6806 14.6236 16.683C14.9452 16.6916 15.2596 16.7797 15.5389 16.9393V16.9393C16.4517 17.4652 17.6179 17.1543 18.1476 16.2437V16.2437L18.8066 15.1453C19.0617 14.7074 19.1318 14.1859 19.0012 13.6963C18.8706 13.2066 18.5502 12.7893 18.111 12.5366V12.5366C17.6717 12.2839 17.3514 11.8665 17.2208 11.3769C17.0902 10.8872 17.1602 10.3657 17.4153 9.92787C17.5812 9.63824 17.8214 9.39811 18.111 9.23222V9.23222C19.0161 8.7028 19.3264 7.5434 18.8066 6.63268V6.63268V6.62352Z"
                stroke="white"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="10.1751"
                cy="10.889"
                r="2.63616"
                stroke="white"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link href="/share">
            <svg
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5039 0.077355C18.1889 -0.12192 18.931 0.0703099 19.434 0.582588C19.937 1.09386 20.123 1.83963 19.918 2.53005L18.669 6.73194C18.55 7.1315 18.1339 7.35795 17.7359 7.23919C17.3389 7.11942 17.1129 6.69873 17.2319 6.30018L18.481 2.09728C18.551 1.86178 18.4259 1.70276 18.3689 1.64539C18.3119 1.58702 18.1519 1.46021 17.9209 1.52764L1.82937 6.20658C1.57336 6.28106 1.51736 6.49543 1.50536 6.584C1.49436 6.67256 1.49036 6.89398 1.71837 7.03488L5.10449 9.11822C5.4575 9.33561 5.5695 9.80058 5.35249 10.1569C5.21149 10.3883 4.96548 10.5172 4.71247 10.5172C4.57947 10.5172 4.44446 10.4819 4.32246 10.4065L0.936341 8.32212C0.265318 7.90948 -0.0866946 7.16673 0.018309 6.38271C0.123313 5.59769 0.658331 4.9747 1.41336 4.75529L17.5039 0.077355ZM16.0282 10.3493C16.1482 9.94873 16.5652 9.72128 16.9622 9.84205C17.3592 9.96182 17.5852 10.3825 17.4662 10.7821L15.1441 18.5961C14.9191 19.3519 14.2971 19.8833 13.5201 19.983C13.4331 19.995 13.3471 20.0001 13.2611 20.0001C12.583 20.0001 11.963 19.6518 11.602 19.054L7.50187 12.2646C7.32286 11.9666 7.36786 11.5842 7.61287 11.3386L13.4341 5.48013C13.7271 5.18525 14.2011 5.18525 14.4941 5.48013C14.7871 5.77502 14.7871 6.25308 14.4941 6.54797L9.08992 11.9878L12.8841 18.27C13.0221 18.4984 13.2391 18.4964 13.3291 18.4864C13.4171 18.4743 13.6301 18.4199 13.7061 18.1643L16.0282 10.3493Z"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
          </Link>

          <Link href="/profile">
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.98478 13.3461C4.11716 13.3461 0.814301 13.9309 0.814301 16.2728C0.814301 18.6147 4.0962 19.2204 7.98478 19.2204C11.8524 19.2204 15.1543 18.6347 15.1543 16.2937C15.1543 13.9528 11.8733 13.3461 7.98478 13.3461Z"
                stroke="white"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.98477 10.0059C10.5229 10.0059 12.58 7.94776 12.58 5.40966C12.58 2.87157 10.5229 0.814423 7.98477 0.814423C5.44667 0.814423 3.38858 2.87157 3.38858 5.40966C3.38001 7.93918 5.42382 9.99728 7.95239 10.0059H7.98477Z"
                stroke="white"
                strokeOpacity="0.5"
                strokeWidth="1.42857"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
