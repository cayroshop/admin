import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';


const Admin404 = () => {
  return (
    <>
      <Sidebar />
      <main class="content">
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-12 text-center d-flex align-items-center justify-content-center">
              <div>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 684.7 417.6"
                  xmlSpace="preserve"
                  style={{ maxWidth: 500 }}
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9FB2D9;}\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#E1E8F6;}\n\t.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#B4C5E6;}\n\t.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#C0CDEA;}\n\t.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#00000F;}\n\t.st5{fill-rule:evenodd;clip-rule:evenodd;fill:#3B405F;}\n\t.st6{fill:#00000F;}\n\t.st7{fill:#3B405F;}\n\t.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#101537;}\n\t.st9{fill:#F8BD7A;}\n\t.st10{fill:#FFFFFF;}\n\t.st11{fill:#E4E1E8;}\n\t.st12{fill-rule:evenodd;clip-rule:evenodd;fill:#D64C47;}\n\t.st13{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}\n\t.st14{font-family:'ArialMT';}\n\t.st15{font-size:72px;}\n\t.st16{fill-rule:evenodd;clip-rule:evenodd;fill:#070725;}\n\t.st17{fill:#101537;}\n\t.st18{fill:#D58750;}\n\t.st19{fill:#B56B41;}\n\t.st20{fill-rule:evenodd;clip-rule:evenodd;fill:#E4E1E8;}\n\t.st21{fill:#070725;}\n\t.st22{fill:#AEABBA;}\n\t.st23{fill-rule:evenodd;clip-rule:evenodd;fill:#B56B41;}\n\t.st24{fill-rule:evenodd;clip-rule:evenodd;fill:#ED7862;}\n\t.st25{fill-rule:evenodd;clip-rule:evenodd;fill:#F5AC83;}\n\t.st26{fill-rule:evenodd;clip-rule:evenodd;fill:#181D3B;}\n\t.st27{fill-rule:evenodd;clip-rule:evenodd;fill:#F8BD7A;}\n\t.st28{fill:#EE5050;}\n\t.st29{fill:#D95050;}\n\t.st30{fill-rule:evenodd;clip-rule:evenodd;fill:#707386;}\n\t.st31{fill-rule:evenodd;clip-rule:evenodd;fill:#EE5050;}\n\t.st32{fill-rule:evenodd;clip-rule:evenodd;fill:#D95050;}\n\t.st33{fill-rule:evenodd;clip-rule:evenodd;fill:#05A677;}\n\t.st34{fill-rule:evenodd;clip-rule:evenodd;fill:#4A9075;}\n\t.st35{fill-rule:evenodd;clip-rule:evenodd;fill:#1B7154;}\n"
                    }}
                  />
                  <path
                    className="st0"
                    d="M373.4,37.2c0.1-0.5-0.3-1-0.8-1c-0.5-0.1-1,0.3-1,0.8c0,0.1,0,0.1,0,0.2v2.2h-2.1c-0.5,0.1-0.9,0.5-0.8,1
 c0,0.4,0.4,0.8,0.8,0.8h2.1v2.2c0.1,0.5,0.5,0.9,1,0.8c0.4,0,0.8-0.4,0.8-0.8v-2.2h2.1c0.5,0.1,1-0.3,1-0.8c0.1-0.5-0.3-1-0.8-1
 c-0.1,0-0.1,0-0.2,0h-2.1V37.2z"
                  />
                  <path
                    className="st1"
                    d="M142.3,291.7h-60c-32.4,0.1-58.6,26.3-58.7,58.7l0,0c0.1,32.4,26.3,58.6,58.7,58.7h507.4
 c52.3,0,95.1-42.8,95.1-95.1l0,0c0-52.3-42.8-95.1-95.1-95.1l0,0c-22.2-0.1-40.1-18-40.2-40.2l0,0c0.1-22.2,18-40.1,40.2-40.2H638
 c23.1-0.1,41.7-18.7,41.8-41.8l0,0C679.8,73.7,661.1,55.1,638,55h-61.2c-9,0-16.2-7.3-16.3-16.3l0,0c0-9,7.3-16.2,16.3-16.3h10.8
 c6.2,0,11.2-5,11.2-11.2l0,0c0-6.2-5-11.2-11.2-11.2h-70.8c-14.9,0-16.6,17.6-54.2,17.6h-87.3c-8.1,0-14.6,6.6-14.6,14.7l0,0
 c0,8.1,6.6,14.6,14.6,14.7h14.1c11.7,0,21.2,9.5,21.2,21.2l0,0c0,11.7-9.5,21.2-21.2,21.2h-42.4c-57.2,0-65.3,14.9-75.3,44.7
 s-62,32.1-62,32.1h-71.2c-17.7,0-32,14.3-32,32l0,0c0,17.7,14.3,32,32,32h3.7c17,0,30.7,13.8,30.8,30.8l0,0
 C173,277.9,159.3,291.7,142.3,291.7z M619.2,22.5c-6.2,0-11.2-5-11.2-11.2C607.9,5,613,0,619.2,0c6.2,0,11.2,5,11.2,11.2
 c0,0,0,0,0,0C630.4,17.4,625.4,22.5,619.2,22.5z"
                  />
                  <path
                    className="st0"
                    d="M214.2,351.8c0,0-21.7-11.2-17.7-38.6s-12.8-36.1-17.1-44.3s5.3-21.3,4.2-32.9s-14.4-14.6-8.2-30.4
 s1-21.8-7.2-38.8s3.9-42.8,9.7-42.7s-1.3,6.2,3.8,17.5s26.5,14.7,33.2,24.1s-5.1,21.9,2.6,34.6s30.4,8.8,36.5,21.1
 s-8.3,27.1-4.2,40.1c4.2,12.9,19.6,20.3,26,30.6s18.6,30.3-1.2,54S214.2,351.8,214.2,351.8z"
                  />
                  <path
                    className="st2"
                    d="M175.6,147.6c-0.2-0.7,0.2-1.5,0.9-1.8c0.7-0.2,1.4,0.1,1.7,0.8l89.7,232.9l-3.4-0.9L175.6,147.6z"
                  />
                  <path
                    className="st2"
                    d="M196.2,324c-0.1-1.1-0.2-2.2-0.2-3.4l58.9,33.1l-5.2-13.5c0-0.1,0-0.1-0.1-0.2l-2.7-7l-49.9-28
 c0-1.1,0-2.2-0.1-3.3l48.4,27.2l-4.7-12.2l-46.1-25.9c-0.6-1.5-1.2-3-2-4.4l46.5,26.1l-2.3-6.1c0-0.1-0.1-0.1-0.1-0.2l-10.2-26.6
 l-46.1-25.9c0.3-0.9,0.6-1.8,0.8-2.8l43.7,24.6l-5.1-13.3l-36.3-20.4c0.2-1,0.3-2,0.3-3.1l34.4,19.4l-3.8-10c0,0,0-0.1-0.1-0.1
 L203,219l-27-15.1c0.3-0.9,0.6-1.9,0.9-2.7l24.5,13.8l-9.8-25.3c0,0,0-0.1-0.1-0.1l-16.1-41.8c-0.2-0.7,0.2-1.5,0.9-1.8
 c0.7-0.2,1.4,0.1,1.7,0.8l14.6,38l8.4-28.5c0.9,0.4,1.7,0.9,2.6,1.3l-9.2,31.6l11,28.5c0,0,0,0.1,0,0.1l10.2,26.4l16-34.4
 c0.9,0.3,1.8,0.6,2.7,0.8L217,247.7l3.9,10.1l21.1-45c0.9,0.3,1.8,0.6,2.7,1l-22.1,47l0.3,0.2c0.7,0.4,0.9,1.2,0.5,1.9c0,0,0,0,0,0
 c-0.1,0.2-0.3,0.4-0.4,0.5l5.7,14.8c0,0,0,0.1,0.1,0.1l9.2,24l15.7-33.3c0.6,0.8,1.3,1.7,2,2.5L239.5,306l2.4,6.2l17.4-37
 c0.7,0.7,1.4,1.4,2.2,2l-18.2,38.5l6.1,15.8l0,0.1l1.7,4.4l22.2-47.3c0.7,0.8,1.3,1.6,1.9,2.5l-22.8,48.5l6.4,16.6c0,0,0,0.1,0,0.1
 v0c-1.1,0.4-2.2,0.6-3.4,0.9L196.2,324z"
                  />
                  <path
                    className="st3"
                    d="M204.1,409.3c-6-4.6-12.1-6.8-15.3-9.8c-6.5-6-2.1-20.9-6.8-30.9s-17.7-8.5-17.1-24.8s-6.2-19.9-19-32.5
 s-10.2-39.8-5-41.5s0.9,6,9,14.5s28.6,4.7,37.6,11s2.5,21.3,13.4,30.3s30.2-1.9,39.6,7.3s1.2,27.1,9.1,37.4s24.1,11.9,33.3,19.2
 c5.2,4.1,12.9,10.3,16.9,19.9L204.1,409.3z"
                  />
                  <path
                    className="st1"
                    d="M247.5,409.3l-13-15.1l-49.8-8.5c0-0.9-0.1-1.8-0.1-2.8l47.2,8l-8.9-10.3l-39.3-6.7c-0.2-1-0.4-1.9-0.7-2.9
 l37.2,6.3l-6.7-7.8l-0.1-0.1L194,347.1l-29.1-5c0-1,0-1.9-0.1-2.8l26.5,4.5l-17-19.6l-0.1-0.1l-27.9-32.4c-0.4-0.6-0.2-1.5,0.4-1.9
 c0.5-0.3,1.1-0.3,1.6,0.1l25.4,29.5l-1.7-28.4l2.7,0.4l1.9,31.4l19.1,22.2l0.1,0.1l17.6,20.5l3.4-36.1l2.7-0.1l-3.6,39.1l6.7,7.8
 l4.6-47.3c0.9,0,1.8,0,2.7,0l-4.8,49.4l0.4,0.1c0.7,0.1,1.2,0.8,1.1,1.5c0,0,0,0,0,0c0,0.2-0.1,0.4-0.2,0.6l9.9,11.5l0.1,0.1
 l14.8,17.2L247.5,409.3z M252.5,409.3l3.2-33.6c0.8,0.6,1.7,1.1,2.5,1.6l-3.1,32L252.5,409.3z M259.8,409.3l2.9-29.8
 c0.9,0.4,1.7,0.8,2.6,1.1l-2.8,28.6H259.8z M277.5,409.3l2.1-22.2c0.9,0.5,1.7,1.1,2.5,1.6l-2,20.5L277.5,409.3z"
                  />
                  <path
                    className="st4"
                    d="M22.9,417.6h-5.5c-2.3,0-4.2-1.8-4.2-4.1l0,0l0,0c0-2.3,1.9-4.1,4.1-4.1h5.5c2.3,0,4.1,1.9,4.1,4.1l0,0
 C27,415.7,25.2,417.6,22.9,417.6z"
                  />
                  <path
                    className="st4"
                    d="M36.2,417.6h599.3c2.3,0,4.1-1.9,4.1-4.1l0,0c0-2.3-1.9-4.1-4.1-4.1H36.2c-2.3,0-4.1,1.9-4.1,4.1l0,0
 C32,415.7,33.9,417.6,36.2,417.6z"
                  />
                  <path className="st3" d="M634.2,203.2" />
                  <path
                    className="st0"
                    d="M662.7,229.2c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1v2.7h-2.7c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1
 c0,0,0,0,0,0h2.7v2.7c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1v-2.7h2.7c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1h-2.7V229.2z"
                  />
                  <path
                    className="st4"
                    d="M416.3,215.3h-68c-2.5,0-4.5,2-4.5,4.5l0,0c0,2.5,2,4.5,4.5,4.5h68c2.5,0,4.5-2,4.5-4.5l0,0
 C420.8,217.3,418.8,215.3,416.3,215.3z"
                  />
                  <path
                    className="st5"
                    d="M414,183.3h-31.5c-0.3,0-0.5,0.2-0.5,0.5l-5.6,40c0,0.2,0.1,0.4,0.3,0.5c0,0,0.1,0,0.1,0h43
 c0.2,0,0.4-0.2,0.4-0.4c0,0,0-0.1,0-0.1l-5.6-40C414.4,183.5,414.2,183.3,414,183.3z"
                  />
                  <path
                    className="st5"
                    d="M432.8,215.3h-68c-2.5,0-4.5,2-4.5,4.5l0,0c0,2.5,2,4.5,4.5,4.5h68c2.5,0,4.5-2,4.5-4.5l0,0
 C437.3,217.3,435.3,215.3,432.8,215.3z"
                  />
                  <path
                    className="st6"
                    d="M316.3,95.1h150.8c1.3,0,2.3,1,2.3,2.3v100.8c0,1.3-1,2.3-2.3,2.3H316.3c-1.3,0-2.3-1-2.3-2.3v0V97.4
 C313.9,96.1,315,95.1,316.3,95.1C316.3,95.1,316.3,95.1,316.3,95.1z"
                  />
                  <path
                    className="st7"
                    d="M323.6,95.1h150.8c1.3,0,2.3,1,2.3,2.3v0v100.9c0,1.3-1,2.3-2.3,2.3H323.6c-1.3,0-2.3-1-2.3-2.3V97.4
 C321.3,96.1,322.4,95.1,323.6,95.1z"
                  />
                  <path
                    className="st8"
                    d="M473.2,96.6H324.9c-0.8,0-1.5,0.7-1.5,1.5V189c0,0.6,0.4,1,1,1h149.4c0.6,0,1-0.4,1-1V98.1
 C474.8,97.3,474.1,96.6,473.2,96.6C473.2,96.6,473.2,96.6,473.2,96.6z"
                  />
                  <rect
                    x="327.7"
                    y="100.9"
                    className="st9"
                    width="142.6"
                    height="84.7"
                  />
                  <path
                    className="st8"
                    d="M385.8,204.7l-1.5,10.6h-6.8l2.1-14.7h37.3l0.5,3.7h-31C386.1,204.2,385.9,204.4,385.8,204.7z"
                  />
                  <rect
                    x="327.7"
                    y="100.9"
                    className="st10"
                    width="143.1"
                    height="4.9"
                  />
                  <rect x="328.6" y={102} className="st11" width={36} height="2.8" />
                  <path
                    className="st12"
                    d="M362.8,104c0.3,0,0.6-0.3,0.6-0.6s-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6c0,0,0,0,0,0
 C362.2,103.7,362.5,104,362.8,104z"
                  />
                  <path
                    className="st12"
                    d="M361,104c0.3,0,0.6-0.3,0.6-0.6s-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6c0,0,0,0,0,0
 C360.4,103.7,360.6,104,361,104z"
                  />
                  <path
                    className="st12"
                    d="M359.1,104c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6c0,0,0,0,0,0
 C358.5,103.7,358.8,104,359.1,104z"
                  />
                  <rect x="366.3" y={102} className="st11" width={36} height="2.8" />
                  <path
                    className="st12"
                    d="M400.5,104c0.3,0,0.6-0.4,0.5-0.7c0-0.3-0.3-0.5-0.5-0.5c-0.3,0-0.7,0.2-0.7,0.5c0,0.3,0.2,0.7,0.5,0.7
 C400.4,104,400.4,104,400.5,104z"
                  />
                  <path
                    className="st12"
                    d="M398.6,104c0.3,0,0.6-0.4,0.5-0.7c0-0.3-0.3-0.5-0.5-0.5c-0.3,0-0.7,0.2-0.7,0.5c0,0.3,0.2,0.7,0.5,0.7
 C398.5,104,398.6,104,398.6,104z"
                  />
                  <path
                    className="st12"
                    d="M396.8,104c0.3,0,0.6-0.3,0.6-0.6s-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6c0,0,0,0,0,0
 C396.1,103.7,396.4,104,396.8,104z"
                  />
                  <path
                    className="st13"
                    d="M348.2,175.7h101.7c0.4,0,0.8,0.3,0.8,0.8l0,0c0,0.4-0.3,0.8-0.8,0.8H348.2c-0.4,0-0.8-0.3-0.8-0.8l0,0
 C347.4,176,347.8,175.7,348.2,175.7z"
                  />
                  <text
                    transform="matrix(1 0 0 1 342.72 167.96)"
                    className="st10 st14 st15"
                  >
                    404
                  </text>
                  <path
                    className="st8"
                    d="M398,210.8h88.4c5,0,9,4,9,9l0,0c0,5-4,9-9,9H398c-5,0-9-4-9-9l0,0C389,214.8,393,210.8,398,210.8z"
                  />
                  <path
                    className="st16"
                    d="M381.1,210.8h41c5,0,9,4,9,9l0,0c0,5-4,9-9,9h-41c-5,0-9-4-9-9l0,0C372.1,214.8,376.1,210.8,381.1,210.8z"
                  />
                  <path
                    className="st17"
                    d="M335.4,225.5h274.2c2.8,0,5,2.3,5,5V254c0,2.8-2.3,5-5,5H335.4c-2.8,0-5-2.3-5-5v-23.5
 C330.4,227.7,332.7,225.5,335.4,225.5z"
                  />
                  <path
                    className="st4"
                    d="M335.3,225.5h274.5c2.7,0.1,4.9,2.3,4.9,5v9.2c0,2.7-2.2,4.9-4.9,5H335.3c-2.7-0.1-4.9-2.3-4.9-5v-9.2
 C330.4,227.8,332.6,225.5,335.3,225.5z"
                  />
                  <path
                    className="st6"
                    d="M260.1,225.9H336c2.9,0,5.2,2.3,5.2,5.2v172.8c0,2.9-2.3,5.2-5.2,5.2h-75.9c-2.9,0-5.2-2.3-5.2-5.2V231.1
 C254.9,228.2,257.2,225.9,260.1,225.9z"
                  />
                  <path
                    className="st17"
                    d="M335,225.9h67.9c2.6,0,4.7,2.1,4.7,4.7v173.9c0,2.6-2.1,4.7-4.7,4.7H335c-2.6,0-4.7-2.1-4.7-4.7V230.6
 C330.4,228,332.4,225.9,335,225.9z"
                  />
                  <path
                    className="st18"
                    d="M332.1,219.8h294.3c0.9,0,1.7,0.8,1.7,1.7v8c0,0.9-0.8,1.7-1.7,1.7H332.1c-0.9,0-1.7-0.8-1.7-1.7v-8
 C330.4,220.5,331.2,219.8,332.1,219.8z"
                  />
                  <path
                    className="st19"
                    d="M247.7,219.8h84c0.9,0,1.7,0.8,1.7,1.7v8c0,0.9-0.8,1.7-1.7,1.7h-84c-0.9,0-1.7-0.8-1.7-1.7v-8
 C246,220.5,246.8,219.8,247.7,219.8z"
                  />
                  <path
                    className="st10"
                    d="M340,237h57.9c2.1,0,3.9,1.7,3.9,3.9v44.9c0,2.1-1.7,3.9-3.9,3.9H340c-2.1,0-3.9-1.7-3.9-3.9v-44.9
 C336.1,238.7,337.9,237,340,237z"
                  />
                  <path
                    className="st20"
                    d="M401.8,286.3h-57.1c-1.5,0-2.8-0.8-3.5-2.2c-0.3-0.5-0.4-1.1-0.4-1.7v-44.9c0-0.2,0-0.4,0-0.6H340
 c-2.1,0-3.9,1.7-3.9,3.9v44.9c0,2.1,1.7,3.9,3.9,3.9h57.9C399.8,289.6,401.5,288.2,401.8,286.3z"
                  />
                  <path
                    className="st21"
                    d="M355,240.1h28c0.8,0,1.5,0.7,1.5,1.5v0.5c0,0.8-0.7,1.5-1.5,1.5h-28c-0.8,0-1.5-0.7-1.5-1.5v-0.5
 C353.5,240.7,354.2,240.1,355,240.1z"
                  />
                  <path
                    className="st10"
                    d="M340,292.4h57.9c2.1,0,3.9,1.7,3.9,3.9v44.9c0,2.1-1.7,3.9-3.9,3.9H340c-2.1,0-3.9-1.7-3.9-3.9v-44.9
 C336.1,294.2,337.9,292.4,340,292.4z"
                  />
                  <path
                    className="st20"
                    d="M401.8,341.8h-57.1c-1.5,0-2.8-0.8-3.5-2.2c-0.3-0.5-0.4-1.1-0.4-1.7V293c0-0.2,0-0.4,0-0.6H340
 c-2.1,0-3.9,1.7-3.9,3.9v44.9c0,2.1,1.7,3.9,3.9,3.9h57.9C399.9,345.1,401.5,343.7,401.8,341.8z"
                  />
                  <path
                    className="st21"
                    d="M355,295.5h28c0.8,0,1.5,0.7,1.5,1.5v0.5c0,0.8-0.7,1.5-1.5,1.5h-28c-0.8,0-1.5-0.7-1.5-1.5V297
 C353.5,296.2,354.2,295.5,355,295.5z"
                  />
                  <path
                    className="st10"
                    d="M340,347.9h57.9c2.1,0,3.9,1.7,3.9,3.9v44.9c0,2.1-1.7,3.9-3.9,3.9H340c-2.1,0-3.9-1.7-3.9-3.9v-44.9
 C336.1,349.6,337.9,347.9,340,347.9z"
                  />
                  <path
                    className="st20"
                    d="M401.8,397.2h-57.1c-1.5,0-2.8-0.8-3.5-2.2c-0.3-0.5-0.4-1.1-0.4-1.7v-44.9c0-0.2,0-0.4,0-0.6H340
 c-2.1,0-3.9,1.8-3.9,3.9v44.9c0,2.1,1.7,3.9,3.9,3.9h57.9C399.9,400.5,401.5,399.1,401.8,397.2z"
                  />
                  <path
                    className="st21"
                    d="M355,351h28c0.8,0,1.5,0.7,1.5,1.5v0.5c0,0.8-0.7,1.5-1.5,1.5h-28c-0.8,0-1.5-0.7-1.5-1.5v-0.5
 C353.5,351.6,354.2,351,355,351z"
                  />
                  <path
                    className="st22"
                    d="M558.1,225.9h10.5c0.3,0,0.5,0.2,0.5,0.5v184.5c0,0.3-0.2,0.5-0.5,0.5h-10.5c-0.3,0-0.5-0.2-0.5-0.5V226.4
 C557.7,226.1,557.9,225.9,558.1,225.9z"
                  />
                  <path
                    className="st10"
                    d="M565.2,225.9h3.3c1.3,0,2.3,1,2.3,2.3V409c0,1.3-1,2.3-2.3,2.3h-3.3c-1.3,0-2.3-1-2.3-2.3V228.2
 C562.9,226.9,563.9,225.9,565.2,225.9z"
                  />
                  <path
                    className="st22"
                    d="M607.2,225.9h10.5c0.3,0,0.5,0.2,0.5,0.5v184.5c0,0.3-0.2,0.5-0.5,0.5h-10.5c-0.3,0-0.5-0.2-0.5-0.5V226.4
 C606.7,226.1,606.9,225.9,607.2,225.9z"
                  />
                  <path
                    className="st10"
                    d="M614.3,225.9h3.3c1.3,0,2.3,1,2.3,2.3V409c0,1.3-1,2.3-2.3,2.3h-3.3c-1.3,0-2.3-1-2.3-2.3V228.2
 C611.9,226.9,613,225.9,614.3,225.9z"
                  />
                  <path
                    className="st23"
                    d="M455.5,219.8h170.9c0.9,0,1.7,0.8,1.7,1.7v8c0,0.9-0.8,1.7-1.7,1.7H466.7C463.4,226.9,459.7,223.1,455.5,219.8
 z"
                  />
                  <path
                    className="st24"
                    d="M517.6,170.2l2.2,3.6c0,0,0.8,4.4-0.4,7.3s14.2,6.2,14.2,6.2l12-9.7l2.7-3.3c0,0-5.6-6.1-6-8.8
 S517.6,170.2,517.6,170.2z"
                  />
                  <path
                    className="st25"
                    d="M490.9,204.5c0,0-8.1,6.5-10.9,7s-15.1-5.2-17.6-5.8s-8-0.7-11.9-0.7s-8,1.5-10.1,5.8h8.3
 c2.2,0,9.8,6.1,17,11.1s13.1,9.1,17.9,8.6s21.4-12.9,21.4-12.9L490.9,204.5z"
                  />
                  <path
                    className="st24"
                    d="M465.6,221.9c7.3,5,13.1,9.1,17.9,8.6s21.4-12.9,21.4-12.9l-14-13.1c0,0-1.9,1.5-4.1,3.1
 c5.9,9.4,3.2,13.4-3.7,16.2c-5.5,2.2-19.6-5.5-28.5-9.8C457.7,216.2,461.7,219.2,465.6,221.9z"
                  />
                  <path
                    className="st16"
                    d="M557,280.9c0,0-41.9-0.4-47,0.1c-5.1,0.5-10.2,5.9-9.3,14.3s12.6,74,12.6,74c0.5,0.4,1.1,0.6,1.7,0.8
 c0.9,0.2,8.4,1.4,8.4,1.4l0.5-6.1l-4.4-63.8l38.6-7L557,280.9z"
                  />
                  <path
                    className="st12"
                    d="M523.9,365.4c0.6,0.2,1.1,0.7,1.3,1.4c0.6,3.1,1,6.2,1.1,9.4c-0.1,1-2.7,3-7.1,4.9s-21.2,6.8-21.2,6.8
 l-0.2-0.6c-0.5-0.3-0.9-0.8-1.1-1.4c-0.4-1.6-0.1-3.2,0.7-4.6c0.9-1.3,6.3-5,7.3-5.8s5.9-7.6,6.3-8.1c1.7-1.4,4.2-1.6,6.1-0.4
 C520.1,368.6,523.6,368,523.9,365.4z"
                  />
                  <path
                    className="st13"
                    d="M497.7,387.2c0,0,16.8-6.2,20.5-7.5c2.9-1.2,5.6-2.8,8-4.8c0.3,0.2,0.6,0.4,0.7,0.8c0.1,0.5,0.2,2.2,0.3,2.6
 c0,1.2-0.8,2.4-1.9,2.8c-1.8,0.8-25.3,9-26.4,9.4s-1.5-2.5-1.5-2.5S497.3,387.4,497.7,387.2z"
                  />
                  <path
                    className="st26"
                    d="M582.9,254.9c0,0-111.9,12.9-118,14.3s-11.3,8.6-8.9,18.5s27.4,89.7,27.4,89.7c0.7,0.4,1.4,0.6,2.1,0.7
 c1.1,0.1,10.3,0.4,10.3,0.4l3.6-3.7l-20-71.2l81.8-4.1C584.1,295.7,587.2,267.8,582.9,254.9z"
                  />
                  <path
                    className="st27"
                    d="M504.2,263.4c0,0,8.9,6.6,14.3,4.5s31.2-46.8,31.2-46.8l-12.4-44.7c-6.1,0.4-12.2,1.2-18.1,2.5l-1.9,1.7
 c0,0-7.3,1.2-11.4,5.9s-17.7,16.7-18.2,17.7s11.8,14.6,15,16.7c0.8,0.3,1.7,0.1,2.4-0.4l1.5-1.2c0,0,3.3,17.2,3.3,22.4v5.1
 c0,0-1.7,13.2-3.1,14.4S504.2,263.4,504.2,263.4z"
                  />
                  <path
                    className="st13"
                    d="M544.2,271.9c2.1,0,3.8-1.7,3.8-3.8s-1.7-3.8-3.8-3.8h-33.1c-7.7-0.1-14.3-5.4-16-12.9c-2.4,1-4.7,2.1-6.9,3.3
 c3.1,10.1,12.4,17,22.9,17.1H544.2z"
                  />
                  <rect
                    x="544.4"
                    y="301.6"
                    className="st21"
                    width="9.5"
                    height="78.2"
                  />
                  <rect x="531.7" y="275.4" className="st6" width="9.3" height="21.2" />
                  <rect x="595.8" y="275.4" className="st6" width="9.3" height="21.2" />
                  <path
                    className="st7"
                    d="M544.4,299.8h9.5c3,0,5.5,2.5,5.5,5.5c0,0,0,0,0,0v10.2c0,3-2.5,5.5-5.5,5.5l0,0h-9.5c-3,0-5.5-2.5-5.5-5.5
 c0,0,0,0,0,0v-10.2C538.9,302.3,541.3,299.8,544.4,299.8z"
                  />
                  <path
                    className="st21"
                    d="M536.8,298.1h24.6c0.9,0,1.6,0.7,1.6,1.6v12.8c0,0.9-0.7,1.6-1.6,1.6h-24.6c-0.9,0-1.6-0.7-1.6-1.6v-12.8
 C535.2,298.8,535.9,298.1,536.8,298.1z"
                  />
                  <path
                    className="st28"
                    d="M476.1,292.1h77.1c2.9,0,5.3,2.4,5.3,5.3v6c0,2.9-2.4,5.3-5.3,5.3h-77.1c-2.9,0-5.3-2.4-5.3-5.3v-6
 C470.8,294.4,473.2,292.1,476.1,292.1z"
                  />
                  <path
                    className="st29"
                    d="M532.2,292.1h77.1c2.9,0,5.3,2.4,5.3,5.3v6c0,2.9-2.4,5.3-5.3,5.3h-77.1c-2.9,0-5.3-2.4-5.3-5.3v-6
 C526.9,294.5,529.3,292.1,532.2,292.1z"
                  />
                  <path
                    className="st7"
                    d="M544.4,374.8h9.5c3,0,5.5,2.5,5.5,5.5c0,0,0,0,0,0v10.2c0,3-2.5,5.5-5.5,5.5l0,0h-9.5c-3,0-5.5-2.5-5.5-5.5l0,0
 v-10.2C538.9,377.3,541.3,374.8,544.4,374.8z"
                  />
                  <path
                    className="st21"
                    d="M537.5,384.9h23.2c1.3,0,2.3,1,2.3,2.3v18.5c0,1.3-1,2.3-2.3,2.3h-23.2c-1.3,0-2.3-1-2.3-2.3v-18.5
 C535.2,385.9,536.2,384.9,537.5,384.9z"
                  />
                  <path
                    className="st30"
                    d="M574.4,402.3L574.4,402.3c0,3.8-3.1,6.8-6.8,6.8h-36.8c-3.8,0-6.8-3.1-6.8-6.8l0,0c0-3.8,3.1-6.8,6.8-6.8h36.8
 C571.3,395.5,574.3,398.5,574.4,402.3z"
                  />
                  <path
                    className="st8"
                    d="M610.2,409.1L610.2,409.1c0,3.8-3.1,6.8-6.8,6.8h-93.6c-3.8,0-6.8-3.1-6.8-6.8l0,0c0-3.8,3.1-6.8,6.8-6.8h93.6
 C607.1,402.3,610.2,405.3,610.2,409.1z"
                  />
                  <path
                    className="st4"
                    d="M551.6,409.1L551.6,409.1c0,3.8-3.1,6.8-6.8,6.8h-49.9c-3.8,0-6.8-3.1-6.8-6.8l0,0c0-3.8,3.1-6.8,6.8-6.8h49.9
 C548.5,402.3,551.6,405.3,551.6,409.1z"
                  />
                  <path
                    className="st13"
                    d="M530.3,246.8c2.1-0.1,3.8,1.5,3.9,3.6c0.1,2.1-1.5,3.8-3.6,3.9c-0.1,0-0.3,0-0.4,0h-33.1
 c-9.1,0-16.4,7.4-16.4,16.4v29.8c0.1,2.1-1.5,3.8-3.6,3.9c-2.1,0.1-3.8-1.5-3.9-3.6c0-0.1,0-0.3,0-0.4v-29.8c0-13.2,10.7-23.9,24-24
 H530.3z"
                  />
                  <path
                    className="st31"
                    d="M603.7,206.8c-0.1-22.7-18.4-41.1-41.1-41.1h-5.5c-22.7,0.1-41.1,18.4-41.1,41.1v61.2
 c0,5.8,4.7,10.5,10.6,10.6h66.6c5.8,0,10.5-4.7,10.6-10.6V206.8z"
                  />
                  <path
                    className="st32"
                    d="M614.7,206.8c-0.1-22.7-18.4-41.1-41.1-41.1h-5.5c-22.7,0.1-41.1,18.4-41.1,41.1v61.2
 c0,5.8,4.7,10.6,10.6,10.6h66.6c5.8,0,10.5-4.7,10.6-10.6V206.8z"
                  />
                  <path
                    className="st12"
                    d="M498.5,371.9c0.9,0,1.8,0.5,2.3,1.2c0.9,1.2,4.1,9.5,4.3,10.7s-3.3,4.4-9.7,7.9s-31.2,14.5-31.2,14.5l-0.5-0.7
 c-0.8-0.1-1.6-0.6-2.1-1.3c-1-1.7-1.1-3.9-0.2-5.7c1.1-1.8,8.5-7.9,9.9-9.1s7.1-10.8,7.6-11.5s4.1-3.4,9.4-2.3
 S498.8,375,498.5,371.9z"
                  />
                  <path
                    className="st13"
                    d="M463.8,405.6c0,0,24.5-12.4,29.8-15c5.4-2.6,11.2-8.1,11.2-8.1s1,0.1,1.3,0.7c0.4,1,0.8,1.9,1.1,2.9
 c0.2,0.4,0.4,2.4-2.2,3.9s-36.9,18.3-38.5,19s-3-2.5-3-2.5S463.2,405.9,463.8,405.6z"
                  />
                  <path
                    className="st25"
                    d="M510.5,119.8l4-0.9c9.5-2.2,19,3.7,21.3,13.2l4.4,19c2.2,9.5-3.7,19-13.2,21.3l-4,0.9
 c-9.5,2.2-19-3.7-21.3-13.2l-4.4-19C495,131.6,500.9,122.1,510.5,119.8z"
                  />
                  <path
                    className="st24"
                    d="M536.3,134.3l3.9,16.8c2.2,9.5-3.7,19-13.2,21.3l-4,0.9c-3.8,0.9-7.8,0.5-11.3-1.1c0.5,0.2,3.8,1.5,4.6-1
 c0.8-2.7-3.8-11.2-3.8-11.2c-0.2-0.4-0.1-0.8,0.1-1.1c1.9-3.3,2.5-7.1,1.8-10.9c-1.1-5.7,6.2-9.7,6.2-9.7l-17.1,4.6v3.5
 c-1.2-2.3-3.5-3.9-6.1-4.3l-0.2-1c-1-4.3-0.4-8.8,1.8-12.7C504.7,129.1,523.3,131.5,536.3,134.3z"
                  />
                  <path
                    className="st8"
                    d="M504.7,151.7c0,0-1.5-0.2-2.1-2.4s-0.7-2.9-0.7-2.9c-1.3-1.9-2.2-4.1-2.6-6.4c0,0-10.1-1.4-12.1-10.8
 s6.7-19.2,8-20.2s6.7-2.8,13.4,0.2c0,0,1.2,0.7,3.4-0.2c2.2-0.9,14.6-4.4,20.6-4.6s9.8,6,12.7,13.5c0.3-1.8,1.6-3.3,3.4-3.7
 c3-0.6,1.4,5-0.8,7c0,0,5.1,2.7,6.1,8.1c1,5.5-0.9,29.8-5.5,34.6s-16.2,6.9-19.9,7.8s-11-3-14-13.1c0,0,1.5-5.1,0.2-9.2
 s-2.3-7.2-3.9-7.8c-1.6-0.5-5.4,3.5-5.7,5.3c-0.1,1.4,0,2.9,0.4,4.3C505.4,151.6,505,151.7,504.7,151.7z"
                  />
                  <path
                    className="st16"
                    d="M504.7,151.7c0,0-1.5-0.2-2.1-2.4s-0.7-2.9-0.7-2.9c-1.3-1.9-2.2-4.1-2.6-6.4c0,0-10.1-1.4-12.1-10.8
 s6.7-19.2,8-20.2c0,0-9.5,10.4,1,15.7c10.5,5.3,26,8.7,36.2,8.1s17.4-18.3,17.4-18.3c1.2,1.1-0.2,5.2-2,6.7c0,0,5.1,2.7,6.1,8.1
 c1,5.5-0.9,29.8-5.5,34.6s-16.2,6.9-19.9,7.8s-11-3-14-13.1c0,0,1.5-5.1,0.2-9.2s-2.3-7.2-3.9-7.8c-1.6-0.5-5.4,3.5-5.7,5.3
 c-0.1,1.4,0,2.9,0.4,4.3C505.4,151.6,505.1,151.7,504.7,151.7z"
                  />
                  <path
                    className="st0"
                    d="M644.6,306.8c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1v2.7h-2.7c-0.6,0.1-1.1,0.6-1,1.3c0.1,0.6,0.5,1,1,1h2.7
 v2.7c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1v-2.7h2.7c0.6,0.1,1.2-0.4,1.3-1c0.1-0.6-0.4-1.2-1-1.3c-0.1,0-0.1,0-0.2,0h-2.7V306.8z"
                  />
                  <path
                    className="st0"
                    d="M576.1,70.3c0.1-0.6-0.4-1.2-1-1.3c-0.6-0.1-1.2,0.4-1.3,1c0,0.1,0,0.1,0,0.2V73h-2.7c-0.6,0-1.1,0.5-1.1,1.1
 c0,0.6,0.5,1.1,1.1,1.1c0,0,0,0,0,0h2.7V78c0.1,0.6,0.6,1.1,1.3,1c0.6-0.1,1-0.5,1-1v-2.7h2.7c0.6,0,1.1-0.5,1.1-1.1
 c0-0.6-0.5-1.1-1.1-1.1h-2.7V70.3z"
                  />
                  <path
                    className="st0"
                    d="M446.9,27.6c0-0.6-0.5-1.1-1.1-1.1c-0.6,0-1.1,0.5-1.1,1.1v2.7h-2.7c-0.6,0-1.1,0.5-1.1,1.1
 c0,0.6,0.5,1.1,1.1,1.1c0,0,0,0,0,0h2.7v2.7c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1c0,0,0,0,0,0v-2.7h2.7
 c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1h-2.7V27.6z"
                  />
                  <path
                    className="st0"
                    d="M127.6,255.1c-0.1-0.6-0.6-1.1-1.3-1c-0.6,0.1-1,0.5-1,1v2.7h-2.7c-0.6,0.1-1.1,0.6-1,1.3c0.1,0.6,0.5,1,1,1
 h2.6v2.7c0.1,0.6,0.6,1.1,1.3,1c0.6-0.1,1-0.5,1-1v-2.7h2.7c0.6-0.1,1.1-0.6,1-1.3c-0.1-0.6-0.5-1-1-1h-2.7L127.6,255.1z"
                  />
                  <path
                    className="st0"
                    d="M238.8,107.8c0-0.6-0.5-1.1-1.1-1.1c-0.6,0-1.1,0.5-1.1,1.1c0,0,0,0,0,0v2.7h-2.7c-0.6,0-1.1,0.5-1.1,1.1
 c0,0.6,0.5,1.1,1.1,1.1c0,0,0,0,0,0h2.7v2.7c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1c0,0,0,0,0,0v-2.7h2.7
 c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1c0,0,0,0,0,0h-2.7L238.8,107.8z"
                  />
                  <path
                    className="st0"
                    d="M108.2,363.7c0-0.6-0.5-1.1-1.1-1.1c-0.6,0-1.1,0.5-1.1,1.1v2.7h-2.7c-0.6,0.1-1.1,0.6-1,1.3c0.1,0.6,0.5,1,1,1
 h2.7v2.7c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1v-2.7h2.7c0.6-0.1,1.1-0.6,1-1.3c-0.1-0.6-0.5-1-1-1h-2.7L108.2,363.7z"
                  />
                  <path
                    className="st0"
                    d="M6.1,281c0-0.6-0.5-1.1-1.1-1.1c-0.6,0-1.1,0.5-1.1,1.1v2.7H1.1c-0.6-0.1-1.2,0.4-1.3,1c-0.1,0.6,0.4,1.2,1,1.3
 c0.1,0,0.1,0,0.2,0h2.7v2.7c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1v-2.7h2.7c0.6-0.1,1.1-0.6,1-1.3c-0.1-0.6-0.5-1-1-1H6.1
 V281z"
                  />
                  <path
                    className="st33"
                    d="M282.8,276.6c16.2-8.6,20.3,10.1,14,25.6s-38.6,67.6-40.3,88.3c-0.6,8-2.1,7.1-3.4,1.5
 C246.8,364,260.6,288.4,282.8,276.6z"
                  />
                  <path
                    className="st34"
                    d="M248.6,205.6c-18.6-16.7-30.1,6.7-26.9,29.2c3.2,22.6,28.7,102.1,24.1,130c-1.8,10.8,0.5,10.1,4,3.1
 C267.4,333,274.1,228.6,248.6,205.6z"
                  />
                  <path
                    className="st35"
                    d="M245.4,372.6c0.4,1,1.3,0.5,2.5-1.2c19.3-64.4-10.8-160.6-10.9-160.9c-0.2-0.5-0.7-0.8-1.3-0.7
 c-0.5,0.2-0.8,0.7-0.7,1.3C235.1,211.3,265.6,308.9,245.4,372.6z"
                  />
                  <path
                    className="st33"
                    d="M208.1,259.1c-18-7.8-20.8,12.5-12.8,28.5s46.8,68.9,50.3,90.8c1.4,8.5,2.9,7.4,3.8,1.3
 C253.8,349.3,232.8,269.9,208.1,259.1z"
                  />
                  <polygon
                    className="st5"
                    points="233.4,372.6 267.9,372.6 276.9,380.7 269.5,409.1 250.6,409.1 231.7,409.1 224.4,380.7 "
                  />
                  <path
                    className="st7"
                    d="M224.4,362h52.6c1.6,0,2.9,1.3,2.9,2.9v13c0,1.6-1.3,2.9-2.9,2.9h-52.6c-1.6,0-2.9-1.3-2.9-2.9v-13
 C221.5,363.3,222.8,362,224.4,362z"
                  />
                  <polygon
                    className="st8"
                    points="276.9,380.7 275.4,386.6 225.9,386.6 224.4,380.7 "
                  />
                </svg>
                <h1 className="mt-5">
                  Page not <span className="fw-bolder text-primary">found</span>
                </h1>
                <p className="lead my-4">
                  Oops! Looks like you followed a bad link. If you think this is a
                  problem with us, please tell us.
                </p>
                <Link
                  to="/dashboard"
                  className="btn btn-gray-800 d-inline-flex align-items-center justify-content-center mb-4"
                  previewlistener="true"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Back to dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>




      </main>
    </>
  )
}

export default Admin404