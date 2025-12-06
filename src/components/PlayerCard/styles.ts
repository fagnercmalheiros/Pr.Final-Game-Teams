import styled from "styled-components/native";

export const Container = styled.View`
 width: 100%;
 height: 56px;

background-color: ${({theme}) => theme.COLORS.GRAY_500};
border-radius:7px;

flex-direction: row;
align-items: center;

margin-botton: 16px;
`
    
export const Name = styled.Text`
    flex: 1;
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.GRAY_200};
`
