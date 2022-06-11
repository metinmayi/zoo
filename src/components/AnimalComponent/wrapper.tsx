import styled from "styled-components";

type Props = {
  large?: boolean;
};
const Wrapper = styled.div<Props>`
  width: ${(props) => (props.large ? "100%" : "30%")};
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export { Wrapper };
