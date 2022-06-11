import styled from "styled-components";

type Props = {
  large?: boolean;
};
const Img = styled.img<Props>`
  width: 100%;
  height: 35vh;
  object-fit: ${(props) => (props.large ? "contain" : "fill")};
`;

export { Img };
