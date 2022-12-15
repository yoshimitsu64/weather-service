import { ChangeEvent, useState, useEffect, useRef, useCallback } from 'react';

import { useSearchCityQuery } from '@store/accuweather/accuweather.api';

import { IPlace } from '@interfaces/IPlace';

import { useDebounce } from '@hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';

import { requestWeather } from '@store/actions';
import { selectOpenCage } from '@store/selectors';

import Dropdown from '@components/searchBar/dropdown';

import { StyledInput, StyledInputContainer } from './styled';

const SearchBar = (): JSX.Element => {
  const cityStorage = useAppSelector(selectOpenCage);

  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const debounce = useDebounce(value, 1000);

  const dispatch = useAppDispatch();

  const { data: places } = useSearchCityQuery<IPlace>(debounce, { skip: !debounce });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = useCallback(
    (latitude: number, longitude: number, city: string) => () => {
      setValue(city);
      dispatch(requestWeather(latitude, longitude));
    },
    [],
  );

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const closeDropdown = (e: MouseEvent) => {
    if ((e.composedPath()[0] as HTMLInputElement) !== inputRef.current) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  useEffect(() => {
    if (isOpen && places?.length > 0) {
      places?.length > 0 && setIsOpen(true);
    }
  }, [places, isOpen]);

  useEffect(() => {
    cityStorage?.components.city
      ? setValue(cityStorage?.components.city)
      : setValue(cityStorage?.components.state);
  }, [cityStorage]);

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        spellCheck={false}
        onChange={handleChange}
        placeholder="Search for location"
        value={value}
        onClick={handleIsOpen}
        ref={inputRef}
        data-cy="searchBar"
      />
      <Dropdown isOpen={isOpen} places={places} onHandleClick={handleClick} />
    </StyledInputContainer>
  );
};

export default SearchBar;
