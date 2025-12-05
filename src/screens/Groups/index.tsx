import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Headear";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups(){
  const [groups , setGroups] = useState(['Galera do CS'])

    return(
    <Container>
      <Header  />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <GroupCard title={item} />
        )}
        ListEmptyComponent={() =>(
          <ListEmpty message="Cadastre a primeira turma"/>
        )}
      />   
      <Button title="Criar nova turma"/>  
    </Container>
    )
}