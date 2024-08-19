import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';
import {PeopleDataType} from './apiDataTypes';

export type RootNavigatorList = {
  Home: undefined;
  CharacterScreen: PeopleDataType;
};

export type RootStackScreenProps<T extends keyof RootNavigatorList> =
  StackScreenProps<RootNavigatorList, T>;

export type NavigationProps<T extends keyof RootNavigatorList> =
  StackNavigationProp<RootNavigatorList, T>;
