import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log(`Nome: ${nome} | Senha: ${senha}`);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.postimg.cc/HW7MWNP7/temp-Imageqgq4-A6.avif' }}
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.08 }}>
      {/* Topo com seta no canto direito */}
      <View style={styles.topBar}>
        <View style={{ width: 28 }} />
        <View /> {/* Espaço vazio para manter o centro */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-forward" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Logo centralizada acima do texto ADMIN */}
      <View style={styles.logoContainer}>
        <Image source={require('./assets/Imagem2.png')} style={styles.logo} />
      </View>

      <View style={styles.container}>
        <Text style={styles.adminTitle}>ADMIN</Text>

        <Text style={styles.label}>NOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  topBar: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: -10, // Cola mais no "ADMIN"
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  adminTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    color: '#000',
  },
  input: {
    backgroundColor: '#ccc',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    color: '#000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#001400',
    padding: 15,
    borderRadius: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
