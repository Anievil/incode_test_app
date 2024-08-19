import React, {FC, useCallback, useMemo} from 'react';
import {ActivityIndicator, ListRenderItem, RefreshControl} from 'react-native';

import {StyledFlatList, StyledView} from '../../styles';
import {CharacterItem, CounterByGender, ScreenWrapper} from '../../components';
import {RootStackScreenProps} from '../../types/navigationTypes';
import useGetApiData from '../../hooks/useGetApiData';
import {PeopleDataType} from '../../types/apiDataTypes';

const Home: FC<RootStackScreenProps<'Home'>> = () => {
  const {fetchedData, fetchData, isRefreshing, uploadNewData, isLoadingMore} =
    useGetApiData();

  const fletListData = useMemo(() => [...fetchedData], [fetchedData]);

  const renderCharacterItem: ListRenderItem<PeopleDataType> = useCallback(
    ({item}) => <CharacterItem item={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: PeopleDataType, index: number) => item.name + index,
    [],
  );

  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return (
      <StyledView style={{padding: 10}}>
        <ActivityIndicator size="large" />
      </StyledView>
    );
  };

  return (
    <ScreenWrapper flex={1}>
      <CounterByGender />
      <StyledFlatList
        mt="20px"
        flex={1}
        data={fletListData}
        renderItem={renderCharacterItem}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={fetchData} />
        }
        onEndReached={uploadNewData}
        onEndReachedThreshold={0.6}
        ListFooterComponent={renderFooter}
      />
    </ScreenWrapper>
  );
};

export default Home;
