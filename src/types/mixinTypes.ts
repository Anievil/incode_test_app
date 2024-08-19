export type FlexMixType = {
  flex?: number;
  justifyContent?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
    | 'flex-start'
    | 'space-evenly'
    | 'stretch';
  alignItems?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'flex-end'
    | 'flex-start';
  alignSelf?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
    | 'flex-start'
    | 'space-evenly'
    | 'stretch';
  justifySelf?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
    | 'flex-start'
    | 'space-evenly'
    | 'stretch';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexGrow?: string | number | 'auto';
  flexShrink?: string | number | 'auto';
  flexBasis?: string | number | 'auto';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

export type PaddingMixType = {
  padding?: number | string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  pv?: string;
  ph?: string;
};

export type MarginMixType = {
  margin?: number | string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  mv?: string;
  mh?: string;
};

export type BorderMixType = {
  br?: string;
  border?: string;
  borderWidth?: string;
  borderColor?: string;
  borderBottom?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottomColor?: string;
  borderBottomWidth?: string;
  borderTopColor?: string;
  borderTopWidth?: string;
  borderRightColor?: string;
  borderRightWidth?: string;
  borderLeftColor?: string;
  borderLeftWidth?: string;
  borderRadius?: string;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderTopRightRadius?: string;
  borderTopLeftRadius?: string;
};

export type SizeMixType = {
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
};

type ShadowOffsetType = {
  width: string | number;
  height: string | number;
};

export type ShadowMixType = {
  boxShadow?: string;
  elevation?: string | number;
  shadowColor?: string;
  shadow?: string;
  shadowOffset?: ShadowOffsetType;
  shadowOpacity?: string | number;
  shadowRadius?: string | number;
};

export type TextMixType = {
  textDecoration?: 'underline';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
  fontWeight?: string | number;
  fontSize?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  fontStyle?: 'normal' | 'italic';
};

export type PostionMixType = {
  position?: 'absolute' | 'relative';
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
  zIndex?: string | number;
};

export type ViewBoxType = FlexMixType &
  BorderMixType &
  PaddingMixType &
  MarginMixType &
  SizeMixType &
  ShadowMixType &
  PostionMixType & {
    opacity?: number | string;
    backgroundColor?: string;
    overflow?: 'hidden' | 'visible' | 'scroll';
    transform?: [{[key: string]: string}] | {};
  };
