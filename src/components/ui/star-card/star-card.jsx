import React from "react";
import Title, { TitleSize } from "../title/title.jsx";
import StarIcon from "../star-icon/star-icon";
import { Figure, Image, Text, StyledStarCard } from "./styles.js";

function StarCard({ name, image, about, feature }) {

  return (
    <StyledStarCard>
      <Figure>
        <Image
          src={image}
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StarIcon feature={feature} />
      </Figure >
      <Title size={TitleSize.SMALL}>{name}</Title>
      <Text>
        {about}
      </Text>
    </StyledStarCard>
  );
}

export default StarCard;