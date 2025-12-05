

import { Button } from "@components/Button"
import { Header } from "@components/Headear"
import { Highlight } from "@components/Highlight"
import { Input } from "@components/Imput"

import { Container, Content, Icon } from "./styles"

export function NewGroup(){
    
    return(
        <Container>
            <Header showBackButton />
            <Content>
                <Icon/>
                <Highlight
                    title="Nova turma"
                    subtitle="Crie uma turma para adiconar pessoas"
                />
                <Input placeholder="Cadastre uma turma" />
            </Content>
            <Button title="Criar" style={{marginTop: 15}}/>
        </Container>
    )
}