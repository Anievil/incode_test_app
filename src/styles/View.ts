import { FC } from 'react';
import { ViewProps } from 'react-native';
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

const Styled: FC<StyledViewType> = styled.View`
  ${flexMixin}
  ${borderMixin}
  ${paddingMixin}
  ${marginMixin}
  ${sizesMixin}
  ${shadowMixin}
  ${positionMixin}
  ${viewBoxMixin}
`;

export type StyledViewType = ViewProps & ViewBoxType & {};

export default Styled;
