import { ChangeEvent, useState, memo } from 'react';

import { useSearchCityQuery } from '@store/accuweather/accuweather.api';
import { useDebounce } from '@hooks/useDebounce';
import { IDate, IPlace } from '@interfaces/IPlace';
import { useAppDispatch } from '@hooks/store';

import {
  StyledInput,
  StyledInputContainer,
  StyledDropDown,
  StyledListItem,
  StyledDropDownContainer,
} from './styled';
import { requestWeather } from '@store/sagaActions';

const Input = (): JSX.Element => {
  const [city, setCity] = useState<string>('');
  const debounce = useDebounce(city, 1000);
  const dispatch = useAppDispatch();

  const { data: places } = useSearchCityQuery<IPlace>(debounce, { skip: !debounce });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleClick = (latitude: number, longitude: number) => () => {
    dispatch(requestWeather(latitude, longitude));
  };

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
                <StyledListItem key={item.id} onClick={handleClick(item.latitude, item.longitude)}>
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
