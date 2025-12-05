import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoGame from '@assets/Logo.png'

type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoGame} />
        </Container>
    )
}