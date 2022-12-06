import { services } from '@constants/services';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { setSelectedService } from '@store/selectedService/selectedService.slice';
import { ISelectedServices } from '@interfaces/ISelectedServices';
import {
  StyledButton,
  StyledOptions,
  StyledOption,
  StyledButtonContainer,
  StyledOptionsContainer,
} from '@components/buttonOptions/styled';

const ButtonOptions = (): JSX.Element => {
  const selectedService = useAppSelector((state) => state.selectedService.service);
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
      <StyledButton onClick={handleOpenOptions()}>
        Services <span>{isOpen ? '∧' : '∨'}</span>
      </StyledButton>
      {isOpen && (
        <StyledOptionsContainer>
          <StyledOptions>
            {services.map(({ service, id }) => (
              <StyledOption onClick={handleOptionClick(service)} key={id}>
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
