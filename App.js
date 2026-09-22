import { useState } from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { useAudioPlayer } from "expo-audio";

export default function App() {
  const frases = [
    "Grandes coisas começam com pequenos passos.",
    "Hoje pode ser o começo de algo incrível.",
    "Confie mais no seu processo.",
    "Persistência vence o talento quando o talento desiste.",
    "Uma boa oportunidade está mais perto do que parece.",
    "Seu esforço de hoje será resultado amanhã.",
    "Nem todo bug é um problema. Às vezes é uma feature.",
    "Continue. Até o código perfeito começou com erro.",
    "A sorte ajuda quem também faz commit.",
    "Respire. Salve. Teste de novo.",
  ];

  const [frase, setFrase] = useState("");
  const [aberto, setAberto] = useState(false);

  const som = useAudioPlayer(require("./assets/som.mp3"));

  function tocarSom() {
    som.seekTo(0);
    som.play();
  }

  function abrirBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    const fraseSorteada = frases[indice];

    tocarSom();
    setFrase(fraseSorteada);
    setAberto(true);
  }

  function voltarBiscoito() {
    setFrase("");
    setAberto(false);
  }

  function outroBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    const fraseSorteada = frases[indice];

    tocarSom();
    setFrase(fraseSorteada);
    setAberto(true);
  }

  return (
  <ImageBackground 
      source={require("./assets/sakura.jpg")} 
      style={styles.container}
      resizeMode="contain"
    >
      <Text style={styles.titulo}>Biscoito da Sorte</Text>

      {!aberto ? (
        <>
          <Pressable onPress={abrirBiscoito}>
            <Image
              source={require("./assets/biscoito.svg")}
              style={styles.imagem}
              resizeMode="contain"
            />
          </Pressable>

          <Text style={styles.instrucao}>Toque no biscoito para quebrar</Text>
        </> 
      ) : (
        <>
          <Image
            source={require("./assets/biscoito-quebrado.svg")}
            style={styles.imagem}
            resizeMode="contain"
          />

          <View style={styles.caixaFrase}>
            <Text style={styles.frase}>"{frase}"</Text>
          </View>

          <Pressable style={styles.botao} onPress={voltarBiscoito}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </Pressable>

          <Pressable style={styles.outroBotao} onPress={outroBiscoito}>
            <Text style={styles.outroTexto}>Quebrar outro</Text>
          </Pressable>
        </>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  titulo: {
    fontSize: 33,
    fontWeight: "bold",
    fontFamily: "georgia",
    color: "#a94357",
    marginBottom: 30,
  },

  imagem: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  instrucao: {
    fontSize: 16,
    fontFamily: "georgia",
    color: "#8C3A4A",
    marginBottom: 20,
  },

  caixaFrase: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 3,
    borderColor: "#bc4e64",
  },

  frase: {
    fontSize: 18,
    fontFamily: "georgia",
    textAlign: "center",
    color: "#813544",
    fontStyle: "italic",
  },

  botao: {
    backgroundColor: "#bc4e64",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "georgia",
  },

  outroBotao: {
    backgroundColor: "#e65f76",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    marginTop: 20
  },

  outroTexto: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "georgia",
  },

});
