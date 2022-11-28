import { ChangeEvent, useState, memo, useEffect } from 'react';

import { useSearchCityQuery } from '@store/accuweather/accuweather.api';
import { useDebounce } from '@hooks/useDebounce';
import { IDate } from '@interfaces/IPlace';
import { useAppDispatch } from '@hooks/store';
import { setCity as setCityState } from '@store/accuweather/accuweather.slice';

import {
    StyledInput,
    StyledInputContainer,
    StyledDropDown,
    StyledListItem,
    StyledDropDownContainer,
} from './styled';

const Input = () => {
  const [city, setCity] = useState<string>('');
  const debounce = useDebounce(city, 1500);
  const dispatch = useAppDispatch();
  const { data: places } = useSearchCityQuery(debounce, { skip: !debounce });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleClick = (city: string) => () => dispatch(setCityState(city));

  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        spellCheck={false}
        onChange={handleChange}
        placeholder="Search for location"
      />
      <StyledDropDownContainer>
        {places?.length! > 0 && (
          <StyledDropDown>
            {places?.map((item: IDate) => {
              return (
                <StyledListItem key={item.id} onClick={handleClick(item.name)}>
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
