import {useEffect, useState} from 'react';
import {getDataFromUrl} from '../api/getData';
import {useGetCharacterDataProps} from '../types/componentsTypes';

const useGetCharacterData = ({
  homeworld,
  films,
  species,
  vehicles,
  starships,
}: useGetCharacterDataProps) => {
  const [fetchedHomeworld, setFetchedHomeworld] = useState<string>('');
  const [fetchedFilms, setFetchedFilms] = useState<string[]>([]);
  const [fetchedSpecies, setFetchedSpecies] = useState<string[]>([]);
  const [fetchedVehicles, setFetchedVehicles] = useState<string[]>([]);
  const [fetchedStarships, setFetchedStarships] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeworldPromise = getDataFromUrl(homeworld);
        const filmsPromise = Promise.all(
          films.map((url: string) => getDataFromUrl(url)),
        );
        const speciesPromise = Promise.all(
          species.map((url: string) => getDataFromUrl(url)),
        );
        const vehiclesPromise = Promise.all(
          vehicles.map((url: string) => getDataFromUrl(url)),
        );
        const starshipsPromise = Promise.all(
          starships.map((url: string) => getDataFromUrl(url)),
        );

        const [homeworldRes, filmsRes, speciesRes, vehiclesRes, starshipsRes] =
          await Promise.all([
            homeworldPromise,
            filmsPromise,
            speciesPromise,
            vehiclesPromise,
            starshipsPromise,
          ]);

        setFetchedHomeworld(homeworldRes.name);
        setFetchedFilms(filmsRes.map(film => film.title));
        setFetchedSpecies(speciesRes.map(species => species.name));
        setFetchedVehicles(vehiclesRes.map(vehicle => vehicle.name));
        setFetchedStarships(starshipsRes.map(starship => starship.name));
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };
    fetchData();
  }, []);

  return {
    fetchedHomeworld,
    fetchedFilms,
    fetchedSpecies,
    fetchedVehicles,
    fetchedStarships,
  };
};

export default useGetCharacterData;
