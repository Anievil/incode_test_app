import React, {FC, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyledText, StyledTouchableOpacity} from '../../../styles';
import {CharacterItemProps} from '../../../types/componentsTypes';
import ICLike from '../../../../assets/svg/like.svg';
import {NavigationProps} from '../../../types/navigationTypes';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  incrementGenderCount,
  toggleFavoriteInList,
  decrementGenderCount,
} from '../../../redux/slices/favoritesSlice';
import { colors } from '../../../constants/colors';

const CharacterItem: FC<CharacterItemProps> = ({item}) => {
  const navigation = useNavigation<NavigationProps<'Home'>>();
  const {name, gender, birth_year} = item;
  const {favoritesList} = useAppSelector(state => state.favoritesInfo);
  const dispatch = useAppDispatch();

  const isInFavoriteList = useMemo(
    () => favoritesList.includes(name),
    [name, favoritesList],
  );

  const addToFavorite = () => {
    if (isInFavoriteList) {
      dispatch(decrementGenderCount(gender));
    } else {
      dispatch(incrementGenderCount(gender));
    }
    dispatch(toggleFavoriteInList(name));
  };

  const openCharacterScreen = () => {
    navigation.navigate('CharacterScreen', item);
  };

  return (
    <StyledTouchableOpacity
      onPress={openCharacterScreen}
      position="relative"
      borderBottom='1px'
      borderColor='lightgrey'
      backgroundColor={colors.white}
      padding="16px">
      <StyledTouchableOpacity
        onPress={addToFavorite}
        position="absolute"
        right="16px"
        top="16px"
        zIndex={1}>
        <ICLike
          fill={isInFavoriteList ? 'red' : '#fff'}
          width={30}
          height={30}
        />
      </StyledTouchableOpacity>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Birth Year: {birth_year}</StyledText>
      <StyledText>Gender: {gender}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default CharacterItem;
