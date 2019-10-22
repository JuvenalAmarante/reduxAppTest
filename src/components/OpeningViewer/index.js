import React from 'react';

import {
  Container,
  Description,
  DescriptionScrollView,
  DescriptionView,
  FadeDescriptionView,
} from './styles';

export default function OpeningViewer({visibility, text, close}) {
  return (
    <Container visible={visibility} onRequestClose={close}>
      <DescriptionView>
        <FadeDescriptionView>
          <DescriptionScrollView>
            <Description>{text}</Description>
          </DescriptionScrollView>
        </FadeDescriptionView>
      </DescriptionView>
    </Container>
  );
}
