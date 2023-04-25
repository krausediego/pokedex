import React, { ReactElement } from 'react';
import { ScrollView, View } from 'react-native';

import { IGetPokemons } from 'src/domain/useCases/home/get-pokemons';
import { Card } from 'src/presentation/components/Card';
import { useGetPokemonsQuery } from 'src/presentation/hooks/useGetPokemonsQuery';

// import { Container, ScrollView } from './styles';

interface HomeScreenProps {
  service: IGetPokemons;
}

export function HomeScreen({
  service,
}: HomeScreenProps): ReactElement<any, any> {
  const { data } = useGetPokemonsQuery(service);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1, gap: 20 }}
        showsVerticalScrollIndicator={false}>
        {data?.data?.results?.map(({ name }) => {
          return <Card key={name} name={name} />;
        })}
      </ScrollView>
    </View>
  );
}
