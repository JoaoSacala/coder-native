import Botao from "@/components/Botao";
import Styles from "@/constants/styles";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function TelaInicial () {
    return (
        <View style={[Styles.centralizado, {gap: 10}]}>
            <Text>Tela Inicial</Text>
            <Botao>
                <Link href="/stack/nova" style={{color: '#fff'}}>Ir para Tela Nova</Link>
            </Botao>
            <Botao>
                <Link href="/" style={{color: '#fff'}}>Ir para Inicio</Link>
            </Botao>
        </View>
    )
}