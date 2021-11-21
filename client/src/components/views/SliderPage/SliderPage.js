import { useState } from "react";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../../../data";
import { useSpring, config } from "react-spring";

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  width: fit-content;
  height: 70%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 79vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  flex: 1;
  z-index: 2;
`;

const Image = styled.img`
  width: 100vw;
  height: 100%;
  size: "cover";
  z-index: -1;
`;

const InfoContainer = styled.div`
  width: 40vw;
  height: 56vh;
  margin-left: 52%;
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 2px;
  z-index: 5;
  position: relative;
  backdrop-filter: blur(5px);
  border: 2px solid transparent;
  /* background-clip: border-box; */
`;

const Title = styled.h1`
  font-size: 45px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 25px;
  font-weight: 547;
  letter-spacing: 3px;
`;

const Button = styled.a`
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  color: #3b5998;
  font-weight: bold;
  text-shadow: #999999 1px 1px 2px;
  /* box-shadow: 0 -6px rgba(0, 255, 72, 0.3) inset; */
  /* background-color: transparent;
  background: linear-gradient(to left, raba(255, 255, 255, 0.15), transparent); */
  cursor: pointer;
  border: 2px solid #3b5998;
  border-radius: 10%;
  overflow: hidden;
  &:hover {
    letter-spacing: 3px;
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const SliderPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosRounded />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                  transform: props.xys.interpolate(trans),
                }}
              >
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button href="/about">더보기</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowForwardIosRounded />
        </Arrow>
      </Container>
    </>
  );
};

export default SliderPage;
