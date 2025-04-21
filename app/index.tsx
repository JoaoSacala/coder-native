import { Text, View } from "react-native";
import  Styles  from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import Botao from "@/components/Botao";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function TelaInicial() {
  const nav = useNavigation()
  return (
    <View style={[Styles.centralizado, {gap: 10}] }>
    <Ionicons name="logo-react" size={100}/>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 700}}>MasterClass React Native</Text>
        <Text style={{fontSize: 16}}>Esquenta Formação.Dev</Text>
        <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
          <Text style={{color: '#ffff'}}>Exercicios</Text>
        </Botao>
      </View>
    </View>
  );
}
