import React, {FC, useCallback, useEffect, useMemo} from 'react';
import {ListRenderItem} from 'react-native';
import {StyledView, StyledText, StyledFlatList} from '../../styles';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {CharacterInfoRow, ScreenWrapper} from '../../components';
import {PeopleDataType} from '../../types/apiDataTypes';
import {CharacterInfoRowProps} from '../../types/componentsTypes';
import useGetCharacterData from '../../hooks/useGetCharacterData';

const CharacterScreen: FC<RootStackScreenProps<'CharacterScreen'>> = ({
  route,
  navigation,
}) => {
  const {
    name,
    hair_color,
    height,
    homeworld,
    mass,
    skin_color,
    eye_color,
    birth_year,
    gender,
    vehicles,
    films,
    species,
    starships,
  } = route.params;

  const {
    fetchedHomeworld,
    fetchedFilms,
    fetchedSpecies,
    fetchedVehicles,
    fetchedStarships,
  } = useGetCharacterData({homeworld, films, species, vehicles, starships});
  useEffect(() => {
    navigation.setOptions({headerTitle: name, headerShown: true});
  }, []);

  return (
    <ScreenWrapper>
      <CharacterInfoRow title="Name" value={name} />
      <CharacterInfoRow title="Height" value={height} />
      <CharacterInfoRow title="Mass" value={mass} />
      <CharacterInfoRow title="Hair color" value={hair_color} />
      <CharacterInfoRow title="Skin color" value={skin_color} />
      <CharacterInfoRow title="Eye color" value={eye_color} />
      <CharacterInfoRow title="Birth year" value={birth_year} />
      <CharacterInfoRow title="Gender" value={gender} />
      <CharacterInfoRow title="Homeworld" value={fetchedHomeworld} />
      <CharacterInfoRow title="Films" value={fetchedFilms} />
      <CharacterInfoRow title="Species" value={fetchedSpecies} />
      <CharacterInfoRow title="Vehicles" value={fetchedVehicles} />
      <CharacterInfoRow title="Starships" value={fetchedStarships} />
    </ScreenWrapper>
  );
};

export default CharacterScreen;
