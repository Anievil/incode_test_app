import { FC } from 'react';
import { TouchableOpacityProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { ViewBoxType } from '../types/mixinTypes';
import {
  borderMixin,
  flexMixin,
  marginMixin,
  paddingMixin,
  positionMixin,
  shadowMixin,
  sizesMixin,
  viewBoxMixin,
} from './stylesMixins/Mixins';

const Styled: FC<StyledTouchableOpacityType> = styled.TouchableOpacity`
  ${flexMixin}
  ${borderMixin}
  ${paddingMixin}
  ${marginMixin}
  ${sizesMixin}
  ${shadowMixin}
  ${positionMixin}
  ${viewBoxMixin}
`;

export type StyledTouchableOpacityType = TouchableOpacityProps &
  ViewProps &
  ViewBoxType & {};

export default Styled;
