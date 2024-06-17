import { StyledContainer, s } from "./AdvancedWeatherInfo.style";
import { Txt } from "../../components/Txt/Txt";
import { View } from "react-native";

export function AdvancedWeatherInfo({sunrise, sunset, windspeed}) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <Txt style={s.value}>text{sunrise}</Txt>
        <Txt style={s.label}>Sunrise</Txt>
      </StyledContainer>
      <StyledContainer>
        <Txt style={s.value}>text{sunset}</Txt>
        <Txt style={s.label}>Sunset</Txt>
      </StyledContainer>
      <StyledContainer>
        <Txt style={s.value}>text{windspeed}</Txt>
        <Txt style={s.label}>Windspeed</Txt>
      </StyledContainer>
    </View>
  );
}
