import styled from "styled-components";

type Props = {
  imgURL: string;
};
const Img = styled.div<Props>`
  width: 100%;
  height: 25vh;
  background-image: url(${(props) => props.imgURL});
  background-size: cover;
  background-position: center;
`;

export { Img };
