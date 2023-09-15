import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import StarCard from "../../ui/star-card/star-card";
import { StarItem, StarList, StyledStarsList } from "./styles.js";

function StarsList({ stars, level }) {

  return (
    <StyledStarsList>
      {stars?.length ? (
        <>
          <Title level={level}>Наши звёзды</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard  {...star} />
              </StarItem>
            ))}
          </StarList>
          <Button minWidth={353} link="/buy">Купить билет</Button>
        </>
      )
        : null}
    </StyledStarsList>
  );
}

export default StarsList;