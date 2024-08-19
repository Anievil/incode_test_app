import React, {FC} from 'react';
import {CharacterInfoRowProps} from '../../../types/componentsTypes';
import {StyledText} from '../../../styles';

const CharacterInfoRow: FC<CharacterInfoRowProps> = ({title, value}) => {
  return (
    <StyledText fontSize="16px" fontWeight={'bold'}>
      {title}:
      <StyledText fontWeight={'400'}>
        {' ' + (value.length !== 0 ? value : '-')}
      </StyledText>
    </StyledText>
  );
};

export default CharacterInfoRow;
