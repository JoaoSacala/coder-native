import Styles from "@/constants/styles";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Botao from "@/components/Botao";

export default function TelaFormulario () {
    const [usuario, setUsuario] = useState<any>({})
    const [erros, setErros] = useState<any>({})

    useEffect(() => {
        AsyncStorage.getItem('usuario').then(dados => {
            if(usuario) {
                setUsuario(JSON.parse(dados ?? '{}'))
            }
        })
    },[])

    function validar() {
        AsyncStorage.setItem('usuario', JSON.stringify(usuario))
    }
    return (
        <View style={Styles.centralizado}>
            <Text>Formulário</Text>
            <TextInput 
                placeholder="Nome"
                value={usuario.nome ?? ''}
                onChangeText={nome => setUsuario({...usuario, nome})} 
                style={[Styles.input, erros.nome && Styles.inputError]} />
                {erros.nome && <Text style={{color: 'red'}}>{erros.nome}</Text>}
                <Botao onPress={validar}><Text style={{color: '#fff'}}>Salvar</Text></Botao>
        </View>
    )
}