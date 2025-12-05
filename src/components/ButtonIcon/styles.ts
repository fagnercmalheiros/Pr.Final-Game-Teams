import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type : ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
    whidth: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;

`