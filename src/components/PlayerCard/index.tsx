
import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Name } from "./styles";
import { UserIcon, UsersThreeIcon, X } from "phosphor-react-native";

type Props = {
    name: string
}
export function PlayerCard({name} : Props) {
    return (
        <Container>
            <ButtonIcon icon={UserIcon} />
            <Name> {name} </Name>
            <ButtonIcon icon={X} type="SECONDARY"/>
        </Container>
    )
}