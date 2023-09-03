import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import StarCard from "../../ui/star-card/star-card";
import "./stars-list.css"

function StarsList({stars}) {
    
  return (
    <section className="stars-list">
      {stars?.length ? (
      <>
      <Title>Наши звёзды</Title>
      <ul className="stars-list__list">
        {stars.map((star) => (
          <li className="stars-list__item" key={star.id}>
            <StarCard  {...star}/>
          </li> 
          ))}
      </ul>
      <Button minWidth={353}>Купить билет</Button>
      </>
      )
      :null} 
    </section>
  );
}

export default StarsList;