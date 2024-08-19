import {PeopleDataType} from './apiDataTypes';

export type ScreenWrapperProps = {
  children: React.ReactNode;
  flex?: number;
};

export type CharacterItemProps = {
  item: PeopleDataType;
};

export type CharacterInfoRowProps = {
  title: string;
  value: string | string[];
};

export type useGetCharacterDataProps = {
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
};
