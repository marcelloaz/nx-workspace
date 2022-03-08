import styled, { keyframes, ThemeProvider } from 'styled-components';
import NxWelcome from './nx-welcome';
import React, { useEffect, useRef, useState } from 'react';
import useMouse from '@react-hook/mouse-position';
import { gsap } from 'gsap';
import { readdir } from 'fs';
const StapOne = styled.div`
  background-color: '#0df388';
  padding: '250px';

  /* display: flex;
 margin-top: 380px;
 align-items: flex-end; */
`;

const color = {
  spectrum1: '#ff598a',
  spectrum2: '#f8b388',
  spectrum3: '#f8ad58',
  spectrum4: '#5b56e8',
  spectrum5: '#5e9fff',
};

const theme = {
  header: {
    fg: '#ff598a',
  },
  input: {
    color: '#fff',
    background: '#070222',
    textAlign: 'center',
  },
  inputFocus: {
    outline: '2px solid #5e9fff',
  },
};

const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: 10,
}))`
  border-radius: 10px;
  border: 3px solid palevioletred;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;

  width: 90%;
  ::placeholder {
    color: #f00956;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Navigation = styled(FlexContainer)`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: -60px;
  margin-left: -60px;
  width: calc(100% - 20px);
  justify-content: center;
  z-index: 88888;
`;

const LeftSideNav = styled(FlexContainer)`
  justify-content: space-evenly;
  order: 1;
  padding-top: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    order: 2;
    flex-wrap: nowrap;
  }
`;

const NavItem = styled.button`
  border: 4px solid #6200ac;
  color: #d4d3d4;
  font-size: 20px;
  margin: 0 2px 2px 0;
  background-color: #6200ac;
  padding: 0px;
  // width: 350px;
  flex-wrap: wrap;
  align-items: center;
  align-content: stretch;
  flex-grow: 0;
  align-self: auto;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;
  &:hover {
    opacity: 0.6;
    background-color: orange;
    color: #ac0000;
  }
`;

const SectionFlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const SectionNavigation = styled(SectionFlexContainer)`
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 20px);
  justify-content: center;
  z-index: 99999999;
`;

const SectionLeftSideNav = styled(SectionFlexContainer)`
  justify-content: space-evenly;
  order: 1;
  flex-wrap: wrap;
  margin-top: "225px";
  @media (max-width: 768px) {
    order: 2;
    flex-wrap: nowrap;
  }
`;

const SectionCardFlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionCardNavigation = styled(SectionCardFlexContainer)`
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 20px);
  justify-content: center;

`;

const SectionCardLeftSideNav = styled(SectionCardFlexContainer)`
  justify-content: space-evenly;
  order: 1;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    order: 2;
    flex-wrap: nowrap;
  }
`;

const SectionAnime = styled.button`
  border: 4px solid #6200ac;
  color: #d4d3d4;
  font-size: 20px;
  margin: 0 2px 2px 0;
  background-color: #6200ac;
  padding: 0px;
  // width: 350px;
  flex-wrap: wrap;
  align-items: center;
  align-content: stretch;
  flex-grow: 0;
  align-self: auto;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;
  &:hover {
    opacity: 0.6;
    background-color: orange;
    color: #ac0000;
  }
`;

const FrontEnd = styled.div`
background-color: "#ffffff0" ;
`;
const BackEnd = styled.div`
  height: 50px;
  flex-direction: row;
  border: 5px solid blue;
  background-color: #ff1100;
`;

const Dunas = styled.div`
  background: url('./../../assets/dunas.png') repeat 0 0 transparent;
  height: 50px;
  display: flex;
  margin-top: -92px;
  background-position: 20% 20%;
`;

const Background = styled.div`
  background: url('./../../assets/bg-clouds.png') repeat 0 0 transparent;
  width: 100%;
  display: flex;
  background-position: 20% 20%;
`;

const Content = styled.div`
  width: 100%;
  min-height: 453px;
  display: flex;
  flex-direction: column;
  background-color: #cac7c7;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
`;

const jitter = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0.9);
  }
`;

type PropTypeBg = {
  active: boolean;
};

const Bar = styled.div`
  height: ${(props: PropTypeBg) => (props.active ? '100%' : '10em')};
  z-index: 90000000;
  animation: ${jitter} 350ms ease-out infinite alternate;
  transform-origin: bottom;
  transition: all 5s;
  //margin-left: 800px;
  //margin-top: ${(props: PropTypeBg) => (props.active ? '100px' : '170px')};

  &:nth-child(1n) {
    //background: "${color.spectrum1};"
    animation-delay: 0;
  }
  &:nth-child(2n) {
    //background: ${color.spectrum2};
    animation-delay: 50ms;
  }
  &:nth-child(3n) {
    //background: ${color.spectrum3};
    animation-delay: 100ms;
  }
  &:nth-child(4n) {
   // background: ${color.spectrum4};
    animation-delay: 150ms;
  }
  &:nth-child(5n) {
   // background: ${color.spectrum5};
    animation-delay: 200ms;
  }<PropTypeBg>
`;

const BoxAnimate = styled.div`
  height: ${(props: PropTypeBg) => (props.active ? '100%' : '0.5em')};
  width: 30%;
  animation: ${jitter} 350ms ease-out infinite alternate;
  transform-origin: bottom;
  transition: all 1s;


  &:hover {
    opacity: 0.6;
    background-color: #949494;
  }

  &:nth-child(1n) {
    background: ${color.spectrum1};
    animation-delay: 0;
  }
  &:nth-child(2n) {
    background: ${color.spectrum2};
    animation-delay: 50ms;
  }
  &:nth-child(3n) {
    background: ${color.spectrum3};
    animation-delay: 100ms;
  }
  &:nth-child(4n) {
    background: ${color.spectrum4};
    animation-delay: 150ms;
  }
  &:nth-child(5n) {
    background: ${color.spectrum5};
    animation-delay: 200ms;
  }<PropTypeBg>
`;

const BlocAnimate = styled.button`
  height: ${(props: PropTypeBg) => (props.active ? '100px' : '0.5em')};
  animation: ${jitter} 900ms ease-out infinite alternate;
  transform-origin: center right 100%;
  transition: all 1s;
  border-radius: 3px;
  border: none;
  color: white;
  margin-top: 28px;
  margin-left: 5px;
  cursor: pointer ;
  min-width: 80px;
z-index: 9999999;
  @media (max-width: 761px) {
    height: ${(props: PropTypeBg) => (props.active ? '190px' : '0.5em')};
    min-width: 440px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
  }


  &:nth-child(1n) {
    background: #7e0273;
    animation-delay: 0;
  }
  &:nth-child(2n) {
    background: ${color.spectrum2};
    animation-delay: 50ms;
  }
  &:nth-child(3n) {
    background: ${color.spectrum3};
    animation-delay: 100ms;
  }
  &:nth-child(4n) {
    background: ${color.spectrum4};
    animation-delay: 150ms;
  }
  &:nth-child(5n) {
    background: ${color.spectrum5};
    animation-delay: 200ms;
  }<PropTypeBg>
`;

const Home = styled.div`
  height: 23px;
  width: ${(props: PropTypeBg) => (props.active ? '100%' : '100%')};
  animation: ${jitter} 850ms ease-out infinite alternate;
  transform-origin: bottom;
  transition: all 1s;
  flex-wrap: nowrap;
  margin-top: -5px;
  flex-direction: column;

  display: inline-flex;
  &:nth-child(1n) {
    background: "${color.spectrum1};"
    animation-delay: 0;
  }
  &:nth-child(2n) {
    background: ${color.spectrum2};
    animation-delay: 50ms;
  }
  &:nth-child(3n) {
    background: ${color.spectrum3};
    animation-delay: 100ms;
  }
  &:nth-child(4n) {
   background: ${color.spectrum4};
    animation-delay: 150ms;
  }
  &:nth-child(5n) {
   background: ${color.spectrum5};
    animation-delay: 200ms;
  }<PropTypeBg>
`;

const invertTheme = (fg: any, bg: any) => ({
  fg: bg,
  bg: fg,
});

export function App() {
  const [cxDef, setCxDef] = useState('');
  const [cyDef, setCyDef] = useState('');
  const [barActive, setBarActive] = useState(false);

  const [data, setData] = useState([
    'D',
    'E',
    'V',
    'E',
    'L',
    'O',
    'P',
    'E',
    'R',
  ]);

  const [barActiveSec, setBarActiveSec] = useState(5);

  const [loadRef, setLoadRef] = useState(true);
  const ref = React.useRef(null);
  const boxRef = useRef(null);
  const carRef = useRef(null);
  const bol2Ref = useRef(null);
  const buttonNameRef = useRef(null);
  const refArray = React.useRef<any>([]);
  const backgraundndRef = useRef(null);
  const dunasRef = useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  useEffect(() => {
    setCxDef('178');
    setCyDef('380');

    gsap.to(boxRef?.current, { rotation: '+=90' });
    gsap.to(bol2Ref?.current, { rotation: '+=90' });

    gsap.to(backgraundndRef?.current, 90, {
      repeat: -1,
      backgroundPosition: '-2247px 0px',
      ease: 'none',
    });

    gsap.to(dunasRef?.current, 40, {
      repeat: -1,
      delay: 0.3,
      backgroundPosition: '-2947px 0px',
      ease: 'none',
    });

    setLoadRef(false);

    // if(mouse != null && mouse.x != null){

    //   if(boxRef?.current){

    //     if(mouse.x < 350){
    //
    //     }

    //     if(mouse.x > 350){
    //       setLoadRef(true);
    //     }

    //    }

    // }
  });

  function goCar(condinate: any) {
    gsap.to(boxRef?.current, { rotation: '+=90', x: condinate });
    gsap.to(bol2Ref?.current, { rotation: '+=90', x: condinate });
    gsap.to(carRef?.current, { x: condinate });
  }

  function Carro() {
    return (
      <>
        <svg
          ref={carRef}
          style={{
            zIndex: -20,
            marginLeft: 50,
            marginTop: 130,
            marginBottom: 20,
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="62"
          viewBox="85 129 804 462"
          preserveAspectRatio="none"
        >
          <g>
            <defs>
              <path
                id="s-Path_31-d1224"
                d="M98.17887878417974 499.81440622972093 C104.5799526806237 488.7624918883839 57.638870863076136 222.43608046722892 196.32803374432194 157.35885788449042 C335.01719662556775 92.28163530175192 553.719338092148 161.62621674237494 553.719338092148 161.62621674237494 C553.719338092148 161.62621674237494 632.6654769630109 229.90395846852664 708.4110966904607 376.06099935107045 C739.3494484101234 394.19727449707966 750.0178455548344 378.19467878001285 811.8945489941595 415.5340687865021 C829.6401970090305 429.05456251211797 848.7245225047532 501.4768653952097 855.8931470976129 531.0073514488496 C857.774811429404 538.7586936467573 858.835496430889 543.5548345230368 858.835496430889 543.5548345230368 L883.3728098637248 567.0253082414015 L875.904931862427 590.4957819597662 L668.9380272550293 590.4957819597662 C668.9380272550293 590.4957819597662 679.6064243997405 437.9377027903955 584.6576898118105 430.46982478909774 C489.7089552238806 423.00194678779997 454.50324464633377 478.4776119402984 448.1022063595069 499.8144062297208 C441.70116807268005 521.1512005191432 438.50064892926673 576.6268656716416 438.50064892926673 576.6268656716416 L368.0892277741726 576.6268656716416 C368.0892277741726 576.6268656716416 385.1586632057108 561.6911096690458 384.09182349123955 530.7527579493833 C383.0249837767683 499.8144062297208 381.9581440622975 437.93770279039563 322.2151200519145 415.5340687865021 C262.4720960415315 393.1304347826085 188.86015574302405 401.66515249837744 154.72128487994814 443.27190136275124 C120.58241401687224 484.87865022712504 119.51557430240109 576.6268656716416 119.51557430240109 576.6268656716416 L98.17887878417969 576.6268656716416 L98.17887878417972 576.6268656716416 C98.17887878417972 576.6268656716416 91.77780488773578 510.86632057105794 98.17887878417974 499.81440622972093 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_31-d1224"
                fill="#B054D9"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_32-d1224"
                d="M656.0 388.0 C656.0 388.0 663.4555875588609 388.51620577043775 670.3598325326279 385.7679255349934 C676.8053619933863 383.20224003407594 682.7703771185535 377.7914408659535 681.7401953962697 366.4594419208304 C679.6065159673276 342.9889682024658 630.5318891016558 237.3718369785334 550.5189105163216 168.02725502920163 C534.5163147992548 157.3588573757816 351.01990425857423 122.15314679823467 278.47480367453795 146.6904602310704 C205.92970309050168 171.22777366390613 285.942651153307 370.72680077871496 312.613644015085 378.19467878001285 C339.28463687686303 385.66255678131074 656.0 388.0 656.0 388.0 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_32-d1224"
                fill="#1BDAF1"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_38-d1224"
                d="M638.0 352.00000000000006 L660.9991528004596 388.59571706683965 L635.697503697478 388.5957170668397 L621.9971612117108 363.25892277741724 L569.7220152026257 384.59571706683965 L559.0536180579145 384.59571706683965 L638.0000000000002 308.85009733939 L654.0023526458444 324.85269305645687 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_38-d1224"
                fill="#575353"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_33-d1224"
                d="M249.0 147.0 C237.93486400210645 169.09409474367288 203.79599313903077 195.76508760545107 234.73434485869313 277.9117456197274 C215.53122999821278 262.9759896171317 203.51611750886556 229.64881346197063 205.92967256797272 207.5003244646333 C208.3432276270799 185.35183546729596 236.59466227952885 139.84166125892284 249.0 147.0 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_33-d1224"
                fill="#6F2098"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_34-d1224"
                d="M210.0 161.0 C210.0 161.0 181.39235913513699 205.36664503569096 198.46179456667494 255.50811161583374 C183.52603856407927 243.7728747566514 179.2586797061947 190.43088903309524 179.2586797061947 190.43088903309524 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_34-d1224"
                fill="#6F2098"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_39-d1224"
                d="M890.0 556.0 L890.0 590.3340876876 L865.6253986165545 590.3340876876 L661.2197263591495 590.3340876876 L661.2197263591495 539.2326696232487 L865.6253986165548 539.2326696232487 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_39-d1224"
                fill="#C4FFD5"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <ellipse
                cx="146.2791499257266"
                cy="317.84285714285716"
                rx="23.5"
                ry="17.842857142857156"
                id="s-Ellipse_5-d1224-path"
              ></ellipse>
            </defs>
            <g transform="rotate(24.189324276528428 146.2791499257266 317.84285714285716)">
              <use
                xlinkHref="#s-Ellipse_5-d1224-path"
                fill="#D9D9D9"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <ellipse
                cx="145.2241456529312"
                cy="318.5069489350098"
                rx="21.0000000000001"
                ry="14.768693009118607"
                id="s-Ellipse_6-d1224-path"
              ></ellipse>
            </defs>
            <g transform="rotate(24.189324276528428 145.2241456529312 318.50694893500975)">
              <use
                xlinkHref="#s-Ellipse_6-d1224-path"
                fill="#E8AB1C"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_35-d1224"
                d="M114.76089851284789 313.3800385338207 C114.41429736305801 294.1792598187006 139.55631564397845 288.4925628686682 156.2791499257266 288.49489901402825 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_35-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#6F2098"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_41-d1224"
                d="M130.10805179828301 545.8808073000266 L135.51825141287875 580.2148949876267 L126.29021442063595 580.2148949876267 C126.29021442063595 580.2148949876267 93.15950999690938 586.3937758144609 88.60253955552673 580.2148949876267 C84.04556911414409 574.0360141607924 83.78782294322048 543.1435651362792 88.60253955552673 529.1134769232754 C107.64388405681444 528.4670934414112 126.29021442063598 529.1134769232754 126.29021442063598 529.1134769232754 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_41-d1224"
                fill="#C4FFD5"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_40-d1224"
                d="M449.906349880945 554.0000000000006 L460.3352886682543 588.3340876876007 L442.54691859416477 588.3340876876007 L369.89849853515636 588.3340876876007 L369.89849853515636 537.2326696232492 L442.5469185941648 537.2326696232492 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_40-d1224"
                fill="#C4FFD5"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_36-d1224"
                d="M120.6735885788449 582.9610642439973 L156.8550457023012 582.9610642439972 C156.8550457023012 582.9610642439972 134.4514116984074 544.5548345230368 146.18664855758982 485.8786502271251 C176.05816056278127 411.1998702141466 234.44709089211113 413.4085271556515 263.53901714941344 412.0661907852044 C361.97552484733865 418.1917324160551 369.3566680254679 491.2128487994806 371.4903474544102 505.0817650876053 C372.5571871688814 540.2874756651523 356.3540723084008 582.9610642439969 356.3540723084008 582.9610642439969 L383.02506517017923 582.9610642439969 C383.02506517017923 582.9610642439969 392.62662260041935 531.7527579493833 392.62662260041935 505.0817650876052 C393.69346231489044 492.27968851395167 387.29242402806364 446.4055807916934 346.7525148781611 416.5340687865021 C325.41572058873874 398.3977936404931 269.94005543624024 380.261518494484 190.9939165653771 400.5314730694353 C119.51565569581186 425.06878650227117 105.82892574481102 476.27709279688474 106.80467229072028 497.6138870863074 C106.71357912215842 525.3517196625568 120.6735885788449 582.9610642439973 120.6735885788449 582.9610642439973 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_36-d1224"
                fill="#6F2098"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_37-d1224"
                d="M439.7569709735878 582.4957819597664 L467.5484442731147 582.4957819597661 C467.5484442731147 582.4957819597661 447.5733864063 558.7159511659393 458.0365119555838 506.4003234195203 C484.66992244466985 439.8167971968053 540.0636334116248 446.1249845605489 566.0019660207774 444.92815878345624 C645.2331409781108 451.45652534310614 650.6136417746211 516.6957597460686 652.5160282381273 529.0612717588587 C653.4672214698803 560.45064840671 636.8608395251615 592.097339390006 636.8608395251615 592.097339390006 L677.7621484905436 592.0973393900061 C677.7621484905436 592.0973393900061 677.7621484905436 536.8385068356187 677.7621484905436 513.0586760417917 C678.7133417222966 501.64435726075476 665.5383043304803 469.5615692725423 629.3929615238636 442.9281587834563 C610.3690968888022 426.7578738436541 567.3080871244691 414.5711445003358 496.9197879747418 432.6438159036441 C455.5934754511796 443.85286308925356 432.7220034512377 510.03740712379704 433.59197810421114 529.0612717588588 C433.5107595254315 553.7922957844388 439.7569709735878 582.4957819597664 439.7569709735878 582.4957819597664 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_37-d1224"
                fill="#6F2098"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_42-d1224"
                d="M855.5593463760258 537.7326696232493 L677.8098528275798 537.7326696232493 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_42-d1224"
                fill="none"
                stroke-width="7.0"
                stroke="#6F2098"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_43-d1224"
                d="M437.86184580527515 537.7326696232493 L385.43249655750003 537.7326696232493 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_43-d1224"
                fill="none"
                stroke-width="7.0"
                stroke="#6F2098"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_44-d1224"
                d="M115.71967797226318 530.0723646321509 L90.05773818676744 530.0723646321509 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_44-d1224"
                fill="none"
                stroke-width="7.0"
                stroke="#6F2098"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_46-d1224"
                d="M787.4650622170406 404.5624518316907 C767.4995989647268 415.0086720014948 744.2254214947894 427.116502249996 760.4498576598783 444.1073257491563 C776.6742938249671 461.09814924831664 831.2803971850913 478.82168815868465 840.2200021382324 476.78198632446487 C839.6953526617383 449.90954245301043 833.1192160640786 416.3350008530964 787.4650622170406 404.5624518316907 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_46-d1224"
                fill="#D6872E"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_45-d1224"
                d="M792.7457177150967 404.56245183169074 C774.7787541947903 414.28705214105264 753.834271600877 425.5584793047866 768.43467676212 441.3755848961333 C783.0350819233631 457.19269048748004 832.175232325019 473.6918958621628 840.2200021382325 471.7930956487233 C839.7478689407208 446.7769872633153 833.8299894073716 415.5217588340901 792.7457177150967 404.56245183169074 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_45-d1224"
                fill="#D6C62E"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_47-d1224"
                d="M785.3913057391317 404.0 C743.9178775697696 427.1072216586132 747.1634266042017 438.7650061780602 771.0652746429273 452.8099195993842 C781.2575046093009 458.8777399946579 802.2713819513338 471.50124736998384 839.2200021382322 477.6384585582189 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_47-d1224"
                fill="none"
                stroke-width="5.0"
                stroke="#6F2098"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
        </svg>
      </>
    );
  }

  function RodaTraseira() {
    return (
      <>
        <svg
          ref={boxRef}
          style={{ zIndex: -100, marginLeft: -98, marginBottom: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="53px"
          viewBox="133 411 240 217"
        >
          <g>
            <defs>
              <path
                id="s-Path_1-d1224"
                d="M374.14287680140166 541.7453284624651 C377.3413203811681 503.36400550526673 373.5301108440728 427.62027263718926 298.7214839433677 414.1997952504605 C285.51569701058054 412.0339157871361 223.69208316627515 403.65138559915795 185.18205724074642 427.4695536144414 C150.35274764141198 446.09441569038614 134.9755013049052 492.27476032938716 134.12334293545425 520.3020893523885 C131.72650818460727 553.9860495117903 163.9914664850994 617.954921107121 254.5900593707485 627.8307743492471 C338.8157403046006 632.0953657889359 372.1548382009268 556.6314398218152 374.14287680140166 541.7453284624651 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_1-d1224"
                fill="#2D2B2B"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_2-d1224"
                d="M186.0 441.0 C197.40965297351786 449.6975867566205 196.1895426120223 454.88149846742414 202.7895426120223 465.58310729634377 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_2-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_3-d1224"
                d="M204.0 430.0 C209.39758675662054 440.3008044144598 210.1814984674241 442.6790852240447 216.7814984674241 453.3806940529643 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_3-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_4-d1224"
                d="M335.0 473.0 C346.40965297351784 481.6975867566205 345.1895426120223 486.88149846742414 351.7895426120223 497.58310729634377 "
              ></path>
            </defs>
            <g transform="rotate(113.35629412523093 343.39477130601114 485.2915536481719)">
              <use
                xlinkHref="#s-Path_4-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_5-d1224"
                d="M344.0 490.0 C349.3975867566205 500.3008044144598 350.1814984674241 502.6790852240447 356.78149846742406 513.3806940529644 "
              ></path>
            </defs>
            <g transform="rotate(96.69398425690783 350.39074923371203 501.6903470264822)">
              <use
                xlinkHref="#s-Path_5-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_6-d1224"
                d="M177.0 568.0 C188.40965297351786 576.6975867566205 187.1895426120223 581.8814984674241 193.7895426120223 592.5831072963438 "
              ></path>
            </defs>
            <g transform="rotate(258.6339539927604 185.39477130601114 580.2915536481719)">
              <use
                xlinkHref="#s-Path_6-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_7-d1224"
                d="M170.0 551.0 C175.39758675662054 561.3008044144598 176.1814984674241 563.6790852240447 182.7814984674241 574.3806940529644 "
              ></path>
            </defs>
            <g transform="rotate(258.6339539927604 176.39074923371203 562.6903470264822)">
              <use
                xlinkHref="#s-Path_7-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_8-d1224"
                d="M294.0 582.0 C305.40965297351784 590.6975867566205 304.1895426120223 595.8814984674241 310.7895426120223 606.5831072963438 "
              ></path>
            </defs>
            <g transform="rotate(191.60361279685682 302.39477130601114 594.2915536481719)">
              <use
                xlinkHref="#s-Path_8-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_9-d1224"
                d="M280.0 591.0 C285.3975867566205 601.3008044144598 286.1814984674241 603.6790852240447 292.78149846742406 614.3806940529644 "
              ></path>
            </defs>
            <g transform="rotate(191.60361279685682 286.39074923371203 602.6903470264822)">
              <use
                xlinkHref="#s-Path_9-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <ellipse
                cx="255.05564627058254"
                cy="519.6457768240859"
                rx="66.05564627058253"
                ry="63.645776824086"
                id="s-Ellipse_1-d1224-path"
              ></ellipse>
            </defs>
            <g>
              <use
                xlinkHref="#s-Ellipse_1-d1224-path"
                fill="#999696"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <ellipse
                cx="256.45155040110114"
                cy="519.1041752773176"
                rx="53.45155040110116"
                ry="52.10417527731761"
                id="s-Ellipse_2-d1224-path"
              ></ellipse>
            </defs>
            <g>
              <use
                xlinkHref="#s-Ellipse_2-d1224-path"
                fill="#D9D9D9"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_10-d1224"
                d="M234.38779809307297 471.0 C234.38779809307297 471.0 206.9651625734364 476.3530373027 203.0 508.7691873640463 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_10-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_11-d1224"
                d="M202.0 525.0 C204.74183434358318 547.4137798292498 218.5473225684519 568.2787733911593 255.42132869875545 569.8819910489987 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_11-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_12-d1224"
                d="M246.0 469.78590586986024 C251.9154235376301 465.4107499738579 264.6298678808724 466.7960074677867 267.83936616591967 469.7859058698603 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_12-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>

          <g>
            <defs>
              <path
                id="s-Path_14-d1224"
                d="M309.6461282318238 521.0 C309.6461282318238 521.0 310.6099621783951 562.2368509229282 263.0 569.8490718282959 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_14-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_15-d1224"
                d="M256.2895826159882 506.11618221153697 C251.0599818112599 507.552664635455 242.25094759162454 509.15266463545504 243.0509475916245 521.952664635455 C244.6464304818067 532.3662159649083 253.4509475916243 534.0475239416278 260.32547990361735 532.0226798376302 C271.9729095567037 526.8159041729036 271.1954951057926 522.7978357336326 271.15935822725055 517.9752501845438 C269.53225556834406 511.1639574099994 264.70111498144547 505.07744123271 256.2895826159882 506.11618221153697 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_15-d1224"
                fill="none"
                stroke-width="6.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
        </svg>
      </>
    );
  }

  function RodaDianteira() {
    return (
      <>
        <svg
          style={{ zIndex: -10, marginBottom: 0, marginLeft: 12 }}
          ref={bol2Ref}
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="50px"
          viewBox="133 411 240 217"
        >
          <g>
            <defs>
              <path
                id="s-Path_1-d1224"
                d="M374.14287680140166 541.7453284624651 C377.3413203811681 503.36400550526673 373.5301108440728 427.62027263718926 298.7214839433677 414.1997952504605 C285.51569701058054 412.0339157871361 223.69208316627515 403.65138559915795 185.18205724074642 427.4695536144414 C150.35274764141198 446.09441569038614 134.9755013049052 492.27476032938716 134.12334293545425 520.3020893523885 C131.72650818460727 553.9860495117903 163.9914664850994 617.954921107121 254.5900593707485 627.8307743492471 C338.8157403046006 632.0953657889359 372.1548382009268 556.6314398218152 374.14287680140166 541.7453284624651 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_1-d1224"
                fill="#2D2B2B"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_2-d1224"
                d="M186.0 441.0 C197.40965297351786 449.6975867566205 196.1895426120223 454.88149846742414 202.7895426120223 465.58310729634377 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_2-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_3-d1224"
                d="M204.0 430.0 C209.39758675662054 440.3008044144598 210.1814984674241 442.6790852240447 216.7814984674241 453.3806940529643 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_3-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_4-d1224"
                d="M335.0 473.0 C346.40965297351784 481.6975867566205 345.1895426120223 486.88149846742414 351.7895426120223 497.58310729634377 "
              ></path>
            </defs>
            <g transform="rotate(113.35629412523093 343.39477130601114 485.2915536481719)">
              <use
                xlinkHref="#s-Path_4-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_5-d1224"
                d="M344.0 490.0 C349.3975867566205 500.3008044144598 350.1814984674241 502.6790852240447 356.78149846742406 513.3806940529644 "
              ></path>
            </defs>
            <g transform="rotate(96.69398425690783 350.39074923371203 501.6903470264822)">
              <use
                xlinkHref="#s-Path_5-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_6-d1224"
                d="M177.0 568.0 C188.40965297351786 576.6975867566205 187.1895426120223 581.8814984674241 193.7895426120223 592.5831072963438 "
              ></path>
            </defs>
            <g transform="rotate(258.6339539927604 185.39477130601114 580.2915536481719)">
              <use
                xlinkHref="#s-Path_6-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_7-d1224"
                d="M170.0 551.0 C175.39758675662054 561.3008044144598 176.1814984674241 563.6790852240447 182.7814984674241 574.3806940529644 "
              ></path>
            </defs>
            <g transform="rotate(258.6339539927604 176.39074923371203 562.6903470264822)">
              <use
                xlinkHref="#s-Path_7-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_8-d1224"
                d="M294.0 582.0 C305.40965297351784 590.6975867566205 304.1895426120223 595.8814984674241 310.7895426120223 606.5831072963438 "
              ></path>
            </defs>
            <g transform="rotate(191.60361279685682 302.39477130601114 594.2915536481719)">
              <use
                xlinkHref="#s-Path_8-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_9-d1224"
                d="M280.0 591.0 C285.3975867566205 601.3008044144598 286.1814984674241 603.6790852240447 292.78149846742406 614.3806940529644 "
              ></path>
            </defs>
            <g transform="rotate(191.60361279685682 286.39074923371203 602.6903470264822)">
              <use
                xlinkHref="#s-Path_9-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#817E7E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <ellipse
                cx="255.05564627058254"
                cy="519.6457768240859"
                rx="66.05564627058253"
                ry="63.645776824086"
                id="s-Ellipse_1-d1224-path"
              ></ellipse>
            </defs>
            <g>
              <use
                xlinkHref="#s-Ellipse_1-d1224-path"
                fill="#999696"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <ellipse
                cx="256.45155040110114"
                cy="519.1041752773176"
                rx="53.45155040110116"
                ry="52.10417527731761"
                id="s-Ellipse_2-d1224-path"
              ></ellipse>
            </defs>
            <g>
              <use
                xlinkHref="#s-Ellipse_2-d1224-path"
                fill="#D9D9D9"
                fill-opacity="1.0"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_10-d1224"
                d="M234.38779809307297 471.0 C234.38779809307297 471.0 206.9651625734364 476.3530373027 203.0 508.7691873640463 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_10-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_11-d1224"
                d="M202.0 525.0 C204.74183434358318 547.4137798292498 218.5473225684519 568.2787733911593 255.42132869875545 569.8819910489987 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_11-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_12-d1224"
                d="M246.0 469.78590586986024 C251.9154235376301 465.4107499738579 264.6298678808724 466.7960074677867 267.83936616591967 469.7859058698603 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_12-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>

          <g>
            <defs>
              <path
                id="s-Path_14-d1224"
                d="M309.6461282318238 521.0 C309.6461282318238 521.0 310.6099621783951 562.2368509229282 263.0 569.8490718282959 "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_14-d1224"
                fill="none"
                stroke-width="4.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
          <g>
            <defs>
              <path
                id="s-Path_15-d1224"
                d="M256.2895826159882 506.11618221153697 C251.0599818112599 507.552664635455 242.25094759162454 509.15266463545504 243.0509475916245 521.952664635455 C244.6464304818067 532.3662159649083 253.4509475916243 534.0475239416278 260.32547990361735 532.0226798376302 C271.9729095567037 526.8159041729036 271.1954951057926 522.7978357336326 271.15935822725055 517.9752501845438 C269.53225556834406 511.1639574099994 264.70111498144547 505.07744123271 256.2895826159882 506.11618221153697 Z "
              ></path>
            </defs>
            <g>
              <use
                xlinkHref="#s-Path_15-d1224"
                fill="none"
                stroke-width="6.0"
                stroke="#404040"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></use>
            </g>
          </g>
        </svg>
      </>
    );
  }

  function AnimateOneTop() {
    return (
      <>
        <Navigation>
          <LeftSideNav>
            {Array.from(data).map((_, i) => (
              <NavItem
                key={i}


                onMouseMove={() => {        goCar(mouse.pageX);
                  gsap.to(refArray.current[i], {
                    y: 'random(-100, 100, 5)',
                    x: 'random(-100, 100, 5)',
                    rotate: '-840',
                    duration: 0.6,
                    stagger: { each: 0.1 },
                  });
                  gsap.to(refArray.current[i], {
                    y: 0,
                    x: 0,
                    delay: 2,
                    duration: 0.5,
                    opacity: 0,
                    stagger: { each: 0.5 },
                  });
                  //gsap.to(refArray.current[i], { y: 0, x: 0, duration: 0.3, stagger: { each: 0.1}});
                }}
              >
                {' '}
                {_}
              </NavItem>
            ))}
          </LeftSideNav>
        </Navigation>
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Content ref={ref}>
          <button
            style={{ margin: 0, padding: 0, border: 'none' }}
            onClick={() => {
              goCar(mouse.pageX);
            }}
          >
            <Background ref={backgraundndRef}>
              {
                <>
                  <Bar active={true}>
                    {Carro()}
                    {RodaTraseira()}
                    {RodaDianteira()}
                  </Bar>

                  <SectionNavigation>
                    <SectionLeftSideNav>
                      {Array.from(data).map((_, i) => (
                        <>
                          <BoxAnimate key={i} active={true}>
                            {_}
                          </BoxAnimate>
                        </>
                      ))}{' '}
                    </SectionLeftSideNav>
                  </SectionNavigation>
                </>
              }
            </Background>
            <Dunas ref={dunasRef}></Dunas>
          </button>
          <Home active={true}></Home>

          <SectionCardNavigation>
            <SectionCardLeftSideNav>
              {Array.from(data).map((_, i) => (<>

                <FrontEnd  ref={(ref) => {
                  refArray.current[i] = ref; // took this from your guide's example.
                }}>


                <BlocAnimate key={i}
                onClick={() => {
                  console.log('blur');
                }}
                onMouseOut={() => {
                  goCar(mouse.pageX);
                  gsap.to(refArray.current[i], {
                    y: 0,
                    duration: 0.6,
                    stagger: { each: 0.1 },
                  });}}
                  onMouseEnter={() => {
                  goCar(mouse.pageX);
                  gsap.to(refArray.current[i], {
                    y: 50,
                    duration: 0.6,
                    stagger: { each: 0.1 },
                  });}}
                active={true}
              >
                asdas
              </BlocAnimate>
                </FrontEnd>

                </>
              ))}
            </SectionCardLeftSideNav>
          </SectionCardNavigation>
        </Content>
      </ThemeProvider>
      {/* <StapOne>{RenderSVG('#2ca3e5')}</StapOne>
<StapTwo>{RenderSVG('#0c70a7')}</StapTwo> */}

      {/* <StapTwo>{RenderSVG('#0c70a7')}</StapTwo>
<StapTree>{RenderSVG('#2ca3e5')}</StapTree> */}
    </>
  );
}

export default App;
