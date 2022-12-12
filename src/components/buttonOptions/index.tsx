import { useState } from 'react';

import { services } from '@constants/services';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setSelectedService } from '@store/selectedService/selectedService.slice';
import { ISelectedServices } from '@interfaces/ISelectedServices';
import { selectSelectedService } from '@store/selectors/storeSelectors';
import {
  StyledButton,
  StyledOptions,
  StyledOption,
  StyledButtonContainer,
  StyledOptionsContainer,
} from '@components/buttonOptions/styled';

const ButtonOptions = (): JSX.Element => {
  const selectedService = useAppSelector(selectSelectedService);

  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenOptions = () => (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (service: ISelectedServices['service']) => (): void => {
    dispatch(setSelectedService(service));
  };

  return (
    <StyledButtonContainer>
      <StyledButton onClick={handleOpenOptions()} data-cy="options">
        Services <span>{isOpen ? '∧' : '∨'}</span>
      </StyledButton>
      {isOpen && (
        <StyledOptionsContainer>
          <StyledOptions>
            {services.map(({ service, id }) => (
              <StyledOption onClick={handleOptionClick(service)} key={id} data-cy={service}>
                {service} {service === selectedService && '✓'}
              </StyledOption>
            ))}
          </StyledOptions>
        </StyledOptionsContainer>
      )}
    </StyledButtonContainer>
  );
};

export default ButtonOptions;
