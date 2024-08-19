import {useCallback, useEffect, useState} from 'react';
import Config from 'react-native-config';

import {getDataFromUrl} from '../api/getData';
import {PeopleDataType} from '../types/apiDataTypes';

const useGetApiData = () => {
  const [fetchedData, setFetchedData] = useState<PeopleDataType[] | []>([]);
  const [nextDataPage, setNextDataPage] = useState<string | null>(null);
  const [isRefreshing, setIsRefresh] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchData = async () => {
    if (Config.API_URL) {
      setIsRefresh(true);
      const res = await getDataFromUrl(Config.API_URL);
      setFetchedData(res.results);
      setNextDataPage(res.next);
      setIsRefresh(false);
    }
  };

  const uploadNewData = useCallback(async () => {
    if (nextDataPage && !isLoadingMore) {
      setIsLoadingMore(true);
      const res = await getDataFromUrl(nextDataPage);
      setNextDataPage(res.next);
      setFetchedData(currentData => [...currentData, ...res.results]);
      setIsLoadingMore(false);
    }
  }, [nextDataPage, isLoadingMore]);

  useEffect(() => {
    fetchData();
  }, []);

  return {fetchedData, fetchData, isRefreshing, uploadNewData, isLoadingMore};
};

export default useGetApiData;
