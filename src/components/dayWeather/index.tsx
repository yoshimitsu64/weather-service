import {StyledDayWeather} from "@components/dayWeather/styled";

interface IProps {
    temperature: number;
    icon: string;
}

const DayWeather = ({ temperature, icon }: IProps): JSX.Element => {
    return (
        <StyledDayWeather>
            <img src={icon} alt="didnt load" width={100} />
            {Math.round(temperature)}&#176;
        </StyledDayWeather>
    );
};

export default DayWeather;
