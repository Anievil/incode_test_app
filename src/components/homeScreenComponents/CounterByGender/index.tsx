import React, {FC} from 'react';
import {StyledView, StyledText, StyledTouchableOpacity} from '../../../styles';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {resetFavorites} from '../../../redux/slices/favoritesSlice';
import { colors } from '../../../constants/colors';

const CounterByGender: FC = () => {
  const {favoritesFemaleCount, favoritesMaleCount, favoritesOtherCount} =
    useAppSelector(state => state.favoritesInfo);
  const dispatch = useAppDispatch();

  const onPressResetFavorites = () => {
    dispatch(resetFavorites());
  };

  return (
    <StyledView flexDirection="row" justifyContent="space-between">
      <StyledView
        alignItems="center"
        backgroundColor={colors.white}
        borderRadius="10px"
        ph="15px"
        pv="5px"
        justifyContent="space-between">
        <StyledText>Female Fans</StyledText>
        <StyledText>{favoritesFemaleCount}</StyledText>
      </StyledView>
      <StyledView
        alignItems="center"
        backgroundColor={colors.white}
        borderRadius="10px"
        ph="15px"
        pv="5px"
        justifyContent="space-between">
        <StyledText>Male Fans</StyledText>
        <StyledText>{favoritesMaleCount}</StyledText>
      </StyledView>
      <StyledView
        alignItems="center"
        backgroundColor={colors.white}
        borderRadius="10px"
        ph="15px"
        pv="5px"
        justifyContent="space-between">
        <StyledText>Others</StyledText>
        <StyledText>{favoritesOtherCount}</StyledText>
      </StyledView>
      <StyledTouchableOpacity
        onPress={onPressResetFavorites}
        alignItems="center"
        backgroundColor={colors.red}
        borderRadius="10px"
        ph="15px"
        justifyContent="center">
        <StyledText color={colors.white}>RESET</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default CounterByGender;
