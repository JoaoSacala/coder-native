import Botao from "@/components/Botao";
import Styles from "@/constants/styles";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function TelaNova () {
    return (
        <View style={[Styles.centralizado, {gap: 10}]}>
            <Text>Tela Nova</Text>
            <Botao>
                <Link href="/stack" style={{color: '#fff'}}>Volar</Link>
            </Botao>
        </View>
    )
}