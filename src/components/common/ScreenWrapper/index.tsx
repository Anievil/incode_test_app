import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyledView} from '../../../styles';
import {ScreenWrapperProps} from '../../../types/componentsTypes';
import { colors } from '../../../constants/colors';

const ScreenWrapper: FC<ScreenWrapperProps> = ({children, flex}) => {
  return (
    <SafeAreaView style={{flex: flex || 0}}>
      <StyledView
        backgroundColor={colors.appBackground}
        mt="10px"
        ph="16px"
        flex={flex || 0}>
        {children}
      </StyledView>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
