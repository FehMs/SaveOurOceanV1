import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView,  } from 'react-native';
import { ProgressBar, Card, Title, Paragraph, List, Provider as PaperProvider, useTheme } from 'react-native-paper';

const App = () => {
  const theme = useTheme();

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
        <Image source={require("../assets/water.jpg")} style={styles.image} />
          <Text style={styles.title}>Save Our Sea</Text>
          <Text style={styles.titleMin}>por um oceano melhor</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.subtitle}>A Importância dos Oceanos Limpos</Text>
          <Text style={styles.text}>
            Nossos oceanos são vitais para a vida na Terra. Eles regulam o clima, fornecem alimento,
            e são o lar de milhões de espécies marinhas. Manter os oceanos limpos é essencial para
            preservar esses ecossistemas e garantir a saúde do nosso planeta.
          </Text>
          <Image source={require("../assets/water2.jpg")} style={styles.imagePlus}
          />
          <Text style={styles.subtitle}>Dados Impactantes</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Impacto da Poluição</Title>
              <Paragraph>Mais de 8 milhões de toneladas de plástico são descartadas nos oceanos todos os anos.</Paragraph>
              <Paragraph>80% da poluição marinha é causada por fontes terrestres.</Paragraph>
              <Paragraph>100 mil animais marinhos morrem anualmente devido à poluição plástica.</Paragraph>
              <ProgressBar progress={0.8} color={theme.colors.primary} style={styles.progressBar} />
            </Card.Content>
          </Card>
          <Image source={require("../assets/water3.jpg")} style={styles.image}
          />
          <Text style={styles.subtitle}>Como Você Pode Ajudar</Text>
          <List.Section>
            <List.Item
              title="Reduza o uso de plásticos descartáveis"
              left={props => <List.Icon {...props} icon="delete" />}
            />
            <List.Item
              title="Participe de limpezas de praia"
              left={props => <List.Icon {...props} icon="beach" />}
            />
            <List.Item
              title="Apoie organizações de preservação"
              left={props => <List.Icon {...props} icon="heart" />}
            />
          </List.Section>
          <Text style={styles.subtitle}>Organizações que Apoiam a Causa</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Organizações</Title>
              <Paragraph>Existem várias organizações dedicadas a manter nossos oceanos limpos:</Paragraph>
              <List.Section>
                <List.Item
                  title="Ocean Conservancy"
                  left={props => <List.Icon {...props} icon="fish" />}
                />
                <List.Item
                  title="The Ocean Cleanup"
                  left={props => <List.Icon {...props} icon="water" />}
                />
                <List.Item
                  title="Surfrider Foundation"
                  left={props => <List.Icon {...props} icon="surfing" />}
                />
              </List.Section>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  header: {
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    bottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 20,
    position: 'absolute',
    top: 100, 
  },
  titleMin: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 20,
    position: 'absolute',
    top: 140, 
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
  imagePlus: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d40',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#004d40',
    lineHeight: 24,
    marginBottom: 10,
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#00796b',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  card: {
    marginVertical: 10,
    marginBottom: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});

export default App;
