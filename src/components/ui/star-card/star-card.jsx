import React from "react";
import Title, { TitleSize } from "../title/title";
import "./star-card.css"
import StarIcon from "../star-icon/star-icon";

function StarCard({name,image,about,feature}) {

  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src={image}
          className="star-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StarIcon feature={feature}/>
      </figure>
      <Title size={TitleSize.SMALL}>{name}</Title>
      <p className="star-card__text">
        {about}
      </p>
    </article>
  );
}

export default StarCard;