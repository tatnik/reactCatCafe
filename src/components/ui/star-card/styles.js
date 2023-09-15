import styled from "styled-components";
import StarIcon from "../star-icon/star-icon";

export const StyledStarCard = styled.article`
  width: 353px;
  min-height: 525px;
  padding: ${(props) => props.theme.indent};
  border-radius: 12px;
  background-color: ${(props) => props.theme.colorWhite};
  box-sizing: border-box;
`

export const StarCardIcon = styled(StarIcon)`
position: absolute;
top: 0;
left: 0;
`

export const Figure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100 %;
height: 313px;
object-fit: contain;
border-radius: 8px;
`;

export const Text = styled.p`
  margin-top: 7px;
  margin-bottom: 0;
`;
