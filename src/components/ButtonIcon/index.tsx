import { TouchableOpacityProps } from "react-native";
import { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import {Container} from "./styles";


type Props = TouchableOpacityProps &{
    icon: React.ComponentType<IconProps>
    type?: 'PRIMARY' | 'SECONDARY'
}

export function ButtonIcon({icon: Icon, type = 'PRIMARY', ...rest} : Props){
    const { COLORS } = useTheme()
    return (
        <Container>
           <Icon 
           size={24}
           color={ type == 'PRIMARY' ? COLORS.GREEN_700 : COLORS.RED}
           />
        </Container>
    )
}