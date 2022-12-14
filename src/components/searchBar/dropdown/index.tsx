import { memo } from 'react';

import { IDate } from '@interfaces/IPlace';

import { StyledDropDown, StyledDropDownContainer, StyledListItem } from './styled';

interface IProps {
  isOpen: boolean;
  places: IDate[];
  onHandleClick: (latitude: number, longitude: number, city: string) => () => void;
}

const Dropdown = ({ isOpen, places, onHandleClick }: IProps): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledDropDownContainer>
      <StyledDropDown>
        {places?.map(({ id, latitude, longitude, city, name, country }) => (
          <StyledListItem
            key={id}
            onClick={onHandleClick(latitude, longitude, city)}
            data-cy={name}
          >
            {name}, {country}
          </StyledListItem>
        ))}
      </StyledDropDown>
    </StyledDropDownContainer>
  );
};

export default memo(Dropdown);
