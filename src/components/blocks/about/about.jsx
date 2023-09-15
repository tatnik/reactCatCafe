import React from "react";
import Title, { TitleSize, TitleLevel } from '../../ui/title/title';
import { Address, StyledSection, Text, TextWrapper, WorkTime } from "./styles";




function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>
          Первое в России котокафе
        </Title>
        <Text>
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </Text>
        <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
        <Address>Санкт-Петербург, Большая Конюшенная улица, 27</Address>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;