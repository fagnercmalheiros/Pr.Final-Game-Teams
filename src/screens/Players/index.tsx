import { Header } from "@components/Headear";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlusIcon } from "phosphor-react-native";
import { Input } from "@components/Imput";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
    const [team, setTeam] = useState('')
    const [players, setPlayers] = useState(['Jogador 1', 'Jogador 2', 'Jogador 3', 'Jogador 4', 'Jogador 5'])
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

            <FlatList
            data={players}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                       <PlayerCard name={item}/>
                    )}
            ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nesse time"/>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                {paddingBottom: 150},
                players.length === 0 && {flex: 1}
            ]}
            />


            <Button title="Remover Turma" type="SECONDARY"/>
        </Container>
    )
}