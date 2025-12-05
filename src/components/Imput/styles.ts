import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputField = styled(TextInput)`
flex:1;

min-height: 56px;
max-height: 56px;

background-color: ${({theme}) => theme.COLORS.GRAY_600};
color: ${({theme}) => theme.COLORS.WHITE};
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

border-radius:7px;
padding: 16px;
`