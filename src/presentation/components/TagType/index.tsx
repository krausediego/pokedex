/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { ReactElement } from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import { Container } from './styles';

interface TagTypeProps {
  icon: string;
}

export function TagType({ icon }: TagTypeProps): ReactElement {
  const source = require(`./${icon}`);

  console.log(source);

  return (
    <Container>
      <Image source={source} />
    </Container>
  );
}
