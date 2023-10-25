import React from 'react';
import { StyledSection, StyledTitle } from './styles';
import { TitleSize } from '../../ui/title/title';
import Gallery from '../../ui/gallery/galery';



function CafeGallery({ slides }) {

  return slides?.length ? (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  )
    : null;
}

export default CafeGallery