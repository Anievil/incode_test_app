import {FC} from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import {
  BorderMixType,
  FlexMixType,
  MarginMixType,
  PaddingMixType,
  PostionMixType,
  TextMixType,
  ViewBoxType,
} from '../types/mixinTypes';
import {
  borderMixin,
  flexMixin,
  marginMixin,
  paddingMixin,
  positionMixin,
  textMixin,
  viewBoxMixin,
} from './stylesMixins/Mixins';
import {colors} from '../constants/colors';

const StyledText: FC<StyledTextType> = styled.Text`
  ${marginMixin}
  ${textMixin}
  ${positionMixin}
  ${borderMixin}
  ${flexMixin}
  ${paddingMixin}
  ${viewBoxMixin}
`;

export type StyledTextType = TextProps &
  MarginMixType &
  ViewBoxType &
  TextMixType &
  PostionMixType &
  BorderMixType &
  FlexMixType &
  PaddingMixType & {};

export default (props: StyledTextType) => (
  <StyledText
    color={colors.black}
    fontSize="14px"
    lineHeight="24px"
    {...props}
  />
);
