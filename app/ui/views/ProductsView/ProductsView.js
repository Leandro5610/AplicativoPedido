import React from "react";
import { red100 } from "react-native-paper/lib/typescript/styles/colors";
import styled from "styled-components/native";
import { Appbar,Avatar, Button, Card, Title, Paragraph  } from "react-native-paper";
import { ScrollView } from "react-native";

const ViewContainer = styled.SafeAreaView`
flex:1

`
const ProductCart = styled(Card)`
    margin:8px;
`


const MyText = styled.Text`
    fontSize : 100
    fontWeigth: 500
`
const TesteInput = styled.TextInput`
height: 40
borderWidth: 1
`
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />   

export default function ProductsView(props){
    return(
        <ViewContainer>
           <Appbar.Header>
           
           <Appbar.Content title="Sexo" subtitle={'Sem Parar'} />
           <Appbar.Action icon="magnify" onPress={() => {}} />
           <Appbar.Action icon={MORE_ICON} onPress={() => {}} />

           </Appbar.Header>
           <ScrollView>
            <ProductCart>
           <Card>
           <Card.Cover source={{ uri: 'https://www.alemanhaeamusica.com.br/images/sampledata/asimages/content/CURIOSIDADES/hamburger.jpg' }} />
                 <Card.Title title="Hamburguer"  right={(props) => <Button>Selecionar</Button>} />
                 <Card.Content>
                <Paragraph>R$ 14,00</Paragraph>
                </Card.Content>
            </Card>
            </ProductCart>
            <ProductCart>
            <Card>

           <Card.Cover source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg' }} />
                 <Card.Title title="Chips"  right={(props) => <Button>Selecionar</Button>} />
                 <Card.Content>
                <Paragraph>R$ 12,00</Paragraph>
                </Card.Content>
            </Card>
            </ProductCart>

            <ProductCart>
            <Card>
           <Card.Cover source={{ uri: 'https://ogimg.infoglobo.com.br/in/22917651-62f-2f9/FT1086A/xcoca-cola-plus.jpg.pagespeed.ic.D_DQLEh2rp.jpg' }} />
                 <Card.Title title="Refrigerante"  right={(props) => <Button>Selecionar</Button>} />
                 <Card.Content>
                <Paragraph>R$ 5,00</Paragraph>
                </Card.Content>
            </Card>
            </ProductCart>
            

           
            </ScrollView> 
        </ViewContainer>
    )
}