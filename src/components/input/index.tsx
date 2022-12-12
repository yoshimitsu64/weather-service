import { ChangeEvent, useState, memo, useEffect, useRef } from 'react';

import { useSearchCityQuery } from '@store/accuweather/accuweather.api';
import { useDebounce } from '@hooks/useDebounce';
import { IDate, IPlace } from '@interfaces/IPlace';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';

import { requestWeather } from '@store/actions';
import { selectOpenCage } from '@store/selectors/storeSelectors';
import {
  StyledInput,
  StyledInputContainer,
  StyledDropDown,
  StyledListItem,
  StyledDropDownContainer,
} from './styled';

const Input = (): JSX.Element => {
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

  useEffect(() => {
    cityStorage?.components.city
      ? setValue(cityStorage?.components.city)
      : setValue(cityStorage?.components.state);
  }, [cityStorage]);

  const handleClick = (latitude: number, longitude: number, city: string) => () => {
    setValue(city);
    dispatch(requestWeather(latitude, longitude));
  };

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if ((e.composedPath()[0] as HTMLInputElement) !== inputRef.current) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, []);

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
        data-cy="input"
      />
      <StyledDropDownContainer>
        {places?.length > 0 && isOpen && (
          <StyledDropDown>
            {places?.map((item: IDate) => {
              return (
                <StyledListItem
                  key={item.id}
                  onClick={handleClick(item.latitude, item.longitude, item.city)}
                  data-cy={item.name}
                >
                  {item.name}, {item.country}
                </StyledListItem>
              );
            })}
          </StyledDropDown>
        )}
      </StyledDropDownContainer>
    </StyledInputContainer>
  );
};

export default memo(Input);
