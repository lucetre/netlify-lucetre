import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="body-font">
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2022 lucetre
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="ml-3 text-gray-500"
                href="https://www.linkedin.com/in/lucetre/"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://github.com/lucetre"
              >
                <svg
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 172 172"
                >
                  <g transform="">
                    <g
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <path d="" fill="none"></path>
                      <g fill="currentColor">
                        <path d="M61.20104,161.11584c2.44584,-1.05264 4.15896,-3.48472 4.15896,-6.31584v-18.576c0,-0.67768 0.05504,-1.38288 0.14104,-2.0984c-0.04816,0.01376 -0.09288,0.02408 -0.14104,0.0344c0,0 -10.32,0 -12.384,0c-5.16,0 -9.632,-2.064 -11.696,-6.192c-2.408,-4.472 -3.44,-12.04 -9.632,-16.168c-1.032,-0.688 -0.344,-1.72 1.72,-1.72c2.064,0.344 6.536,3.096 9.288,6.88c3.096,3.784 6.192,6.88 11.696,6.88c8.55528,0 13.1408,-0.43 15.89968,-1.9092c3.21296,-4.77816 7.66088,-8.4108 12.30832,-8.4108v-0.086c-19.49792,-0.62608 -31.95416,-7.10704 -37.754,-17.114c-12.6076,0.14448 -23.58464,1.3932 -29.84888,2.43208c-0.19952,-1.12488 -0.37152,-2.25664 -0.51944,-3.39528c6.18168,-1.01824 16.65992,-2.22568 28.7068,-2.45616c-0.38528,-0.94944 -0.71896,-1.92296 -1.00104,-2.92056c-12.07784,-0.61232 -22.50104,-0.13416 -28.16328,0.33368c-0.0688,-1.14208 -0.16168,-2.28072 -0.17544,-3.43656c5.67256,-0.4644 15.81368,-0.9288 27.58192,-0.38184c-0.27176,-1.72 -0.4472,-3.47784 -0.4472,-5.30792c0,-5.848 2.064,-12.04 5.848,-17.2c-1.72,-5.848 -4.128,-18.232 0.688,-22.704c9.288,0 15.824,4.472 18.92,7.224c5.84456,-2.41144 12.38056,-3.78744 19.60456,-3.78744c7.224,0 13.76,1.376 19.264,3.784c3.096,-2.752 9.632,-7.224 18.92,-7.224c5.16,4.816 2.408,17.2 0.688,22.704c3.784,5.16 5.848,11.008 5.504,17.2c0,1.66496 -0.1548,3.27144 -0.3784,4.84696c12.03656,-0.59168 22.45288,-0.11696 28.22176,0.35088c-0.00688,1.15928 -0.11352,2.29104 -0.17544,3.43656c-5.74824,-0.47472 -16.426,-0.9632 -28.75496,-0.30616c-0.30616,1.15584 -0.67768,2.28072 -1.118,3.3712c12.19824,0.15824 22.9276,1.33816 29.40512,2.37016c-0.14792,1.14208 -0.31992,2.27384 -0.51944,3.39528c-6.57728,-1.05264 -17.78824,-2.28416 -30.54376,-2.34608c-5.7276,9.90032 -17.9568,16.3572 -37.07288,17.11056v0.10664c8.944,0 17.2,13.416 17.2,22.704v18.576c0,2.83112 1.71312,5.2632 4.15896,6.31584c31.51384,-10.43008 54.32104,-40.15168 54.32104,-75.11584c0,-43.62608 -35.49048,-79.12 -79.12,-79.12c-43.62952,0 -79.12,35.49392 -79.12,79.12c0,34.96416 22.8072,64.68576 54.32104,75.11584z"></path>
                      </g>
                      <path d="" fill="none"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://www.youtube.com/channel/UCKUdzN8hN6-IrJmkt8GMgMQ"
              >
                <svg
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 172 172"
                >
                  <g transform="">
                    <g
                      fill="none"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="currentColor">
                        <path d="M154.45063,49.88c-1.37063,-7.56531 -7.90125,-13.07469 -15.48,-14.79469c-11.34125,-2.40531 -32.33063,-4.12531 -55.04,-4.12531c-22.69594,0 -44.02125,1.72 -55.37594,4.12531c-7.56531,1.72 -14.10937,6.88 -15.48,14.79469c-1.38406,8.6 -2.75469,20.64 -2.75469,36.12c0,15.48 1.37063,27.52 3.09063,36.12c1.38406,7.56531 7.91469,13.07469 15.48,14.79469c12.04,2.40531 32.68,4.12531 55.38937,4.12531c22.70938,0 43.34938,-1.72 55.38938,-4.12531c7.56531,-1.72 14.09594,-6.88 15.48,-14.79469c1.37062,-8.6 3.09062,-20.98937 3.44,-36.12c-0.69875,-15.48 -2.41875,-27.52 -4.13875,-36.12zM65.36,110.08v-48.16l41.96531,24.08z"></path>
                      </g>
                      <path d="" fill="none"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://www.instagram.com/sangjun_son/"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
