import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

import Home from "./pages/Home";
import Autores from "./pages/Autores";
import Editoras from './pages/Editoras';
import Alunos from './pages/Alunos'
import Categorias from './pages/Categorias'
import CreateLivro from './pages/CreateLivro';
import LivrosAutores from './pages/LivrosAutores';
import AlunosEmprestar from './pages/AlunosEmprestar';
import AtualizaEstoque from './pages/AtualizaEstoque';
import AlunosVerLivros from './pages/AlunosVerLivros';

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="InsereLivro" component={CreateLivro} options={{ title: 'Inserir livros' }} />
      <Stack.Screen name="LivrosAutores" component={LivrosAutores} options={{ title: 'Livros dos autores'}} />
      <Stack.Screen name="AlunosEmprestar" component={AlunosEmprestar} options={{ title: 'Emprestar Livro'}} />
      <Stack.Screen name="AlunosVerLivros" component={AlunosVerLivros} options={{ title: 'Livros wmprestados' }}/>
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen name="Home" component={Root}/>
        <Drawer.Screen name="Autores" component={Autores}/>
        <Drawer.Screen name="Editoras" component={Editoras} />
        <Drawer.Screen name="Alunos" component={Alunos} />
        <Drawer.Screen name="Categorias" component={Categorias} />
        <Drawer.Screen name="AtualizaEstoque" component={AtualizaEstoque} options={{ title: 'Atualizar estoque'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}