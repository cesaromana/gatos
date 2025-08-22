import React from 'react';
import styled from 'styled-components';

const ChismosoScreen: React.FC = () => (
  <StyledWrapper>
    <div className="main_wrapper">
      <div className="main">
        <div className="antenna"></div>
        <div className="antenna_shadow"></div>
        <div className="a1"></div>
        <div className="a1d"></div>
        <div className="a2"></div>
        <div className="a2d"></div>
        <div className="tv">
          <div className="display_div">
            <div className="screen">chismoso</div>
            <div className="screenM">chismoso</div>
          </div>
        </div>
        <div className="bottom">
          <div className="base1"></div>
          <div className="base2"></div>
          <div className="base3"></div>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .main_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30em;
    height: 30em;
    max-width: 100vw;
    max-height: 100vh;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .antenna,
  .antenna_shadow,
  .a1,
  .a1d,
  .a2,
  .a2d,
  .tv,
  .bottom,
  .base1,
  .base2,
  .base3 {
    box-sizing: border-box;
  }

  .antenna {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #f27405;
    margin-bottom: -6em;
    margin-left: 0em;
    z-index: -1;
  }
  .antenna_shadow {
    position: absolute;
    background-color: transparent;
    width: 50px;
    height: 56px;
    margin-left: 1.68em;
    border-radius: 45%;
    transform: rotate(140deg);
    border: 4px solid transparent;
    box-shadow:
      inset 0px 16px #a85103,
      inset 0px 16px 1px 1px #a85103;
    -moz-box-shadow:
      inset 0px 16px #a85103,
      inset 0px 16px 1px 1px #a85103;
  }
  .antenna::after {
    content: "";
    position: absolute;
    margin-top: -9.4em;
    margin-left: 0.4em;
    transform: rotate(-25deg);
    width: 1em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f69e50;
  }
  .antenna::before {
    content: "";
    position: absolute;
    margin-top: 0.2em;
    margin-left: 1.25em;
    transform: rotate(-20deg);
    width: 1.5em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #f69e50;
  }
  .a1 {
    position: relative;
    top: -102%;
    left: -130%;
    width: 12em;
    height: 5.5em;
    border-radius: 50px;
    background-image: linear-gradient(
      #171717,
      #171717,
      #353535,
      #353535,
      #171717
    );
    transform: rotate(-29deg);
    clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
  }
  .a1d {
    position: relative;
    top: -211%;
    left: -35%;
    transform: rotate(45deg);
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
  }
  .a2 {
    position: relative;
    top: -210%;
    left: -10%;
    width: 12em;
    height: 4em;
    border-radius: 50px;
    background-color: #171717;
    background-image: linear-gradient(
      #171717,
      #171717,
      #353535,
      #353535,
      #171717
    );
    margin-right: 5em;
    clip-path: polygon(
      47% 0,
      47% 0,
      34% 34%,
      54% 25%,
      32% 100%,
      29% 96%,
      49% 32%,
      30% 38%
    );
    transform: rotate(-8deg);
  }
  .a2d {
    position: relative;
    top: -294%;
    left: 94%;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
  }

  .notfound_text {
    background-color: black;
    padding-left: 0.3em;
    padding-right: 0.3em;
    font-size: 0.75em;
    color: white;
    letter-spacing: 0;
    border-radius: 5px;
    z-index: 10;
  }
  .tv {
    width: 17em;
    height: 9em;
    margin-top: 3em;
    border-radius: 15px;
    background-color: #d36604;
    display: flex;
    justify-content: center;
    border: 2px solid #1d0e01;
    box-shadow: inset 0.2em 0.2em #e69635;
  }
  .tv::after {
    content: "";
    position: absolute;
    width: 17em;
    height: 9em;
    border-radius: 15px;
    background:
      repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px
        2500px,
      repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px
        2500px;
    background-blend-mode: difference;
    opacity: 0.09;
  }
  .curve_svg {
    position: absolute;
    margin-top: 0.25em;
    margin-left: -0.25em;
    height: 12px;
    width: 12px;
  }
  .display_div {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 3.5px 3.5px 0px #e69635;
  }
  .screen_out {
    width: auto;
    height: auto;
    border-radius: 10px;
  }
  .screen_out1 {
    width: 11em;
    height: 7.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  /* AJUSTE: mismos estilos para .screen y .screenM */
  .screen,
  .screenM {
    width: 13em;
    height: 7.85em;
    font-family: Montserrat;
    border: 2px solid #1d0e01;
    background:
      repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px
        2500px,
      repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px
        2500px;
    background-blend-mode: difference;
    animation: b 0.2s infinite alternate;
    border-radius: 10px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .screenM:before,
  .screenM:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
  }
  .screenM:before {
    top: 0;
    height: 68.4782608696%;
    background: linear-gradient(
      to right,
      white 0%,
      #fafafa 14.2857142857%,
      #ffe60a 14.2857142857%,
      #f5dc00 28.5714285714%,
      #0affd9 28.5714285714%,
      #00f5ce 42.8571428571%,
      #10ea00 42.8571428571%,
      #0ed600 57.1428571429%,
      #ff0afe 57.1428571429%,
      #f500f4 71.4285714286%,
      #ed0014 71.4285714286%,
      #d90012 85.7142857143%,
      #002fc6 85.7142857143%,
      #002bb2 100%
    );
  }
  .screenM:after {
    bottom: 0;
    height: 21.7391304348%;
    background: linear-gradient(
      to right,
      #006c6b 0%,
      #005857 16.6666666667%,
      white 16.6666666667%,
      #fafafa 33.3333333333%,
      #001b75 33.3333333333%,
      #001761 50%,
      #6c6c6c 50%,
      #626262 66.6666666667%,
      #929292 66.6666666667%,
      #888888 83.3333333333%,
      #3a3a3a 83.3333333333%,
      #303030 100%
    );
  }

  @keyframes b {
    100% {
      background-position:
        50% 0,
        60% 50%;
    }
  }

  .lines {
    display: flex;
    column-gap: 0.1em;
    align-self: flex-end;
  }
  .line1,
  .line3 {
    width: 2px;
    height: 0.5em;
    background-color: black;
    border-radius: 25px 25px 0px 0px;
    margin-top: 0.5em;
  }
  .line2 {
    flex-grow: 1;
    width: 2px;
    height: 1em;
    background-color: black;
    border-radius: 25px 25px 0px 0px;
  }

  .buttons_div {
    width: 4.25em;
    align-self: center;
    height: 8em;
    background-color: #e69635;
    border: 2px solid #1d0e01;
    padding: 0.6em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.75em;
    box-shadow: 3px 3px 0px #e69635;
  }
  .b1 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow:
      inset 2px 2px 1px #b49577,
      -2px 0px #513721,
      -2px 0px 0px 1px black;
  }
  .b1::before {
    content: "";
    position: absolute;
    margin-top: 1em;
    margin-left: 0.5em;
    transform: rotate(47deg);
    border-radius: 5px;
    width: 0.1em;
    height: 0.4em;
    background-color: #000000;
  }
  .b1::after {
    content: "";
    position: absolute;
    margin-top: 0.9em;
    margin-left: 0.8em;
    transform: rotate(47deg);
    border-radius: 5px;
    width: 0.1em;
    height: 0.55em;
    background-color: #000000;
  }
  .b1 div {
    content: "";
    position: absolute;
    margin-top: -0.1em;
    margin-left: 0.65em;
    transform: rotate(45deg);
    width: 0.15em;
    height: 1.5em;
    background-color: #000000;
  }
  .b2 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow:
      inset 2px 2px 1px #b49577,
      -2px 0px #513721,
      -2px 0px 0px 1px black;
  }
  .b2::before {
    content: "";
    position: absolute;
    margin-top: 1.05em;
    margin-left: 0.8em;
    transform: rotate(-45deg);
    border-radius: 5px;
    width: 0.15em;
    height: 0.4em;
    background-color: #000000;
  }
  .b2::after {
    content: "";
    position: absolute;
    margin-top: -0.1em;
    margin-left: 0.65em;
    transform: rotate(-45deg);
    width: 0.15em;
    height: 1.5em;
    background-color: #000000;
  }
  .speakers {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
  }
  .speakers .g1 {
    display: flex;
    column-gap: 0.25em;
  }
  .speakers .g1 .g11,
  .g12,
  .g13 {
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow: inset 1.25px 1.25px 1px #b49577;
  }
  .speakers .g {
    width: auto;
    height: 2px;
    background-color: #171717;
  }

  .bottom {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8.7em;
  }
  .base1 {
    height: 1em;
    width: 2em;
    border: 2px solid #171717;
    background-color: #4d4d4d;
    margin-top: -0.15em;
    z-index: -1;
  }
  .base2 {
    height: 1em;
    width: 2em;
    border: 2px solid #171717;
    background-color: #4d4d4d;
    margin-top: -0.15em;
    z-index: -1;
  }
  .base3 {
    position: absolute;
    height: 0.15em;
    width: 17.5em;
    background-color: #171717;
    margin-top: 0.8em;
  }

  .text_404 {
    position: absolute;
    display: flex;
    flex-direction: row;
    column-gap: 6em;
    z-index: -5;
    margin-bottom: 2em;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    font-family: Montserrat;
  }
  .text_4041 {
    transform: scaleY(24.5) scaleX(9);
  }
  .text_4042 {
    transform: scaleY(24.5) scaleX(9);
  }
  .text_4043 {
    transform: scaleY(24.5) scaleX(9);
  }

  @media only screen and (max-width: 495px) {
    .text_404 {
      column-gap: 6em;
    }
  }
  @media only screen and (max-width: 395px) {
    .text_404 {
      column-gap: 4em;
    }
    .text_4041 {
      transform: scaleY(25) scaleX(8);
    }
    .text_4042 {
      transform: scaleY(25) scaleX(8);
    }
    .text_4043 {
      transform: scaleY(25) scaleX(8);
    }
  }

  @media (max-width: 275px), (max-height: 520px) {
    .main {
      position: relative;
    }
  }

  @media only screen and (max-width: 1024px) {
    .screenM {
      display: flex;
    }
    .screen {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) {
    .screen {
      display: flex;
    }
    .screenM {
      display: none;
    }
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 600px) {
    .main_wrapper {
      width: 95vw;
      height: 95vw;
      min-width: 0;
      min-height: 0;
      max-width: 100vw;
      max-height: 100vw;
    }
    .tv {
      width: 90vw;
      height: 40vw;
      min-width: 0;
      min-height: 0;
      max-width: 100vw;
      max-height: 60vw;
    }
    .screen, .screenM {
      width: 70vw;
      height: 30vw;
      font-size: 1.1em;
    }
    .main {
      margin-top: 0;
    }
    .antenna {
      width: 15vw;
      height: 15vw;
      min-width: 40px;
      min-height: 40px;
      margin-bottom: -18vw;
    }
    .antenna_shadow {
      width: 15vw;
      height: 17vw;
      margin-left: 5vw;
    }
    .a1, .a2 {
      width: 35vw;
      height: 15vw;
    }
    .a1d, .a2d {
      width: 2vw;
      height: 2vw;
    }
    .bottom {
      column-gap: 20vw;
    }
    .base1, .base2 {
      width: 6vw;
      height: 3vw;
    }
    .base3 {
      width: 60vw;
      height: 0.5vw;
    }
  }

  @media (max-width: 400px) {
    .main_wrapper {
      width: 99vw;
      height: 99vw;
    }
    .tv {
      width: 98vw;
      height: 45vw;
    }
    .screen, .screenM {
      width: 85vw;
      height: 35vw;
      font-size: 1em;
    }
    .antenna {
      width: 18vw;
      height: 18vw;
      margin-bottom: -20vw;
    }
    .antenna_shadow {
      width: 18vw;
      height: 20vw;
      margin-left: 6vw;
    }
    .a1, .a2 {
      width: 40vw;
      height: 18vw;
    }
    .a1d, .a2d {
      width: 3vw;
      height: 3vw;
    }
    .bottom {
      column-gap: 10vw;
    }
    .base1, .base2 {
      width: 8vw;
      height: 4vw;
    }
    .base3 {
      width: 80vw;
      height: 1vw;
    }
  }
`;

export default ChismosoScreen;