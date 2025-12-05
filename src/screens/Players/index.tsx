import { Header } from "@components/Headear";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlusIcon } from "phosphor-react-native";
import { Input } from "@components/Imput";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
    const [team, setTeam] = useState('')
    const [players, setPlayers] = useState([])
    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title="Nome da turma"
                subtitle="Adicione a galera e separe os times"
            />

            <Form>
                <Input placeholder="Nome do participante" />
                <ButtonIcon icon={PlusIcon} />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers> {players.length} </NumberOfPlayers>
            </HeaderList>
        </Container>
    )
}