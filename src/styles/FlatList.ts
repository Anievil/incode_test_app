import { FC } from 'react';
import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import {
    BorderMixType,
    FlexMixType,
    MarginMixType,
    PaddingMixType,
    PostionMixType,
    ShadowMixType,
    SizeMixType,
} from '../types/mixinTypes';
import {
    borderMixin,
    flexMixin,
    marginMixin,
    paddingMixin,
    positionMixin,
    shadowMixin,
    sizesMixin,
} from './stylesMixins/Mixins';

const Styled: FC<StyledFlatListType> = styled.FlatList`
  ${flexMixin}
  ${borderMixin}
    ${paddingMixin}
    ${marginMixin}
    ${sizesMixin}
    ${shadowMixin}
    ${positionMixin}
`;

export interface StyledFlatListType
  extends FlatListProps<any>,
    FlexMixType,
    BorderMixType,
    PaddingMixType,
    MarginMixType,
    SizeMixType,
    ShadowMixType,
    PostionMixType {
  opacity?: number | string;
  backgroundColor?: string;
}

export default Styled;
