import React, {useState, createRef} from 'react';

import {
  Container,
  DescriptionView,
  FadeDescriptionView,
  DescriptionListItem,
  Description,
  DescriptionSpace,
  DescriptionScrollView,
} from './styles';

const id = createRef();
export default function OpeningViewer({visibility, text, close}) {
  let height = 0.0;
  let timer;

  function loader() {
    id.current.scrollTo({y: height});
    height += 2;
  }

  return (
    <Container
      visible={visibility}
      onRequestClose={() => {
        clearInterval(timer);
        close();
      }}
      onShow={() => {
        timer = setInterval(loader, 30);
      }}>
      <DescriptionView>
        <FadeDescriptionView>
          <DescriptionScrollView
            ref={id}
            onTouchStart={() => clearInterval(timer)}>
            <DescriptionSpace />
            {text.split('\r').map(item => (
              <DescriptionListItem>
                <Description>{item}</Description>
              </DescriptionListItem>
            ))}
            <DescriptionSpace />
          </DescriptionScrollView>
        </FadeDescriptionView>
      </DescriptionView>
    </Container>
  );
}
