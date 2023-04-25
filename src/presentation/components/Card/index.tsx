import React, { ReactElement } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface CardProps {
  name: string;
}

export function Card({ name }: CardProps): ReactElement {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
}
