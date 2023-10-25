import React, { useState } from "react";
import Button from "../../ui/button/button";
import { TitleSize } from "../../ui/title/title";
import { AccordionText, FormItem, Price, RadioLabelForTime, RadioLabelForType, StyleTitle, StyledSection } from "./styles";

import RadioButton from "../../ui/radio-button/radio-button";
import { Accordion } from "../../ui/accordion/accordion"
import Form from './../../styled/form/form';
import Label from './../../styled/label/label';
import { Li, Ul } from "../../styled";


// страница покупки
function Buy({ buyOptions: { durationOptions = [], ticketOptions = [] } }) {
  const canBuy = durationOptions.length && ticketOptions.length;
  // const { durationOptions, ticketOptions } = buyOptions;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);
  const type = ticketOptions.find((option) => option.id === selectType);
  const price = duration * (type ? type.price : 0);

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
          Вы приобрели блилет класса : ${type.title}.
          Продолжительность посещения(часов): ${duration}.
          Цена билете ${price} руб.`
    );
  };

  const accordionContent =
    canBuy &&
    ticketOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(el) => {
            setSelectType(Number(el.target.value));
          }}
        />
      ),
      description: option.description
    }));

  return (
    <StyledSection>
      <StyleTitle level={1} size={TitleSize.BIG}>
        Купить билет
      </StyleTitle>
      {canBuy ? (
        <Form $width={540}>
          <FormItem>
            <Label $margin={12}>Продолжительность (часов)</Label>
            <Ul $isGridList $indent={12} $align="left">
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setDuration(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </FormItem>
          <FormItem $bottom={22}>
            <Label $margin={12}>Тип билета</Label>
            <Accordion
              textComponent={AccordionText}
              content={accordionContent}
              isHtml
            />
          </FormItem>
          <Label $small $margin={6}>
            Цена
          </Label>
          <Price>{price} руб.</Price>
          <Button minWidth={460} onClick={handleBuy}>Купить билет</Button>
        </Form>
      ) : (
        <p>Покупка билетов временно недоступна</p>
      )}
    </StyledSection>
  );
}

export default Buy;