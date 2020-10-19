### Hello 👋, 
Vou listar aqui o caminho que percorri para desenvolver esta aplicação, mas antes, como executa-la:

> Esta aplicação é desenvolvida em REACTJS, então é necessário sua máquina estar configurada para rodar esse tipo de aplicação. Além das dependências GIT.

OU, simplesmente acesse este [link](http://54.234.174.216:3000/) para acessar a aplicação.

## Executar a aplicação:
 - Clone a aplicação com `git clone`;
 - Execute um `yarn` ou `npm install` na pasta do projeto;
 - Execute `yarn start` ou `npm start` para finalmente rodar a aplicação.

Após isso sua aplicação já deve estar rodando no seu [navegador](http://localhost:3000/)


# Fase de Desenvolvimento:
## 1º Passo - Entender sobre Pathfinding:
Não tem como desenvolver um Pathfinding sem antes saber como funciona. Neste momento fui pesquisar mais a fundo sobre técnicas de Pathfinding.

## 2º Passo - Criar projeto em ReactJS:
Como disse antes, este projeto em construido em JS "Onde ficará toda a funcionalidade" + ReactJS "Que será a interface gráfica". Então criei um projeto base com `yarn create-react-app pathfinding`.
Por falta de tempo, não me atentei em limpar o projeto e realizar demais configurações base que estou acostumado, e também não me atentei muito no visual da aplicação.

## 3º Passo - Criar grid:
Agora que o desafio começa, decidi criar 2 funções. Uma para criar o "node", que seria cada casa do grid, e uma função que cria, através de 2 estrutura de repetição, o grid completo em si. Depois de dar uma leve estilizada, também coloquei o ponto inicial, e final.

## 4º Passo - Implementar o algoritmo de Dijkstra:
Gastei umas boas horas pra entender o funcionamento desse algoritmo e me baseei em um projeto deste dev da google [link](https://github.com/clementmihailescu/Pathfinding-Visualizer).

 > A ideia chave desse algoritmo é a distância. É um pouco confuso mas vamos lá! Deve ser considera como infinito a distância entre os nodes, exceto o node inicial, que é 0,e ao mapear os nodes vizinhos, soma + 1 no seu valor atual.

Made with 💜 by [Guilherme Bafica](https://github.com/guibafica) 👋 