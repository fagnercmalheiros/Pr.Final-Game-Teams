import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleprops, Container, Title } from "./styles";

type Props = TouchableOpacityProps &{
    title: string
    type?: ButtonTypeStyleprops
}

export function Button({ title, type = 'SECONDARY', ...rest}: Props) {
    return (
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}