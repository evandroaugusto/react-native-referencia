# ADR 001: Escolha do ambiente de desenvolvimento

- **Proposta**: Em análise

## Contexto

Estamos iniciando o desenvolvimento de um aplicativo móvel em React Native e precisamos decidir entre **React Native CLI** e **Expo** como a base para o desenvolvimento. Ambas as ferramentas oferecem características e vantagens distintas que impactam diretamente o fluxo de desenvolvimento, a manutenção e a flexibilidade do projeto.

## Opções Avaliadas

### **React Native CLI**
- **Vantagens**:
  - Maior controle sobre o processo de build e personalização do aplicativo.
  - Capacidade de adicionar dependências nativas que não são suportadas pelo Expo.
  - Flexibilidade para configurar manualmente o ambiente e otimizar o aplicativo de acordo com necessidades específicas.
  - Mais adequado para projetos maiores ou que exigem funcionalidades nativas complexas.

- **Desvantagens**:
  - Curva de aprendizado mais íngreme, especialmente para quem não tem experiência com configuração nativa de builds.
  - Maior complexidade na manutenção do código, como lidar com versões de dependências e configuração de ambientes nativos.
  - Requer configuração adicional para ferramentas como emuladores, Xcode e Android Studio.

### **Expo**
- **Vantagens**:
  - Setup inicial muito mais simples, sem a necessidade de configuração de build nativo.
  - Desenvolvimento mais rápido, com recursos de hot-reload e deploy instantâneo.
  - Acesso fácil a várias bibliotecas nativas com suporte integrado, sem necessidade de configuração adicional.
  - Ideal para protótipos rápidos ou aplicativos pequenos que não exigem muitas funcionalidades nativas complexas.

- **Desvantagens**:
  - Menos controle sobre o processo de build e customização de código nativo.
  - Limitações quanto ao uso de algumas bibliotecas nativas não integradas ao Expo (por exemplo, SDKs não suportados pelo Expo).
  - Não adequado para aplicativos grandes que exigem modificações significativas no código nativo.

## Critérios de Avaliação

A escolha entre **React Native CLI** e **Expo** foi avaliada com base nos seguintes critérios:

- **Complexidade do Aplicativo**: Se o aplicativo for simples ou um protótipo, o Expo é mais adequado devido à sua facilidade de uso e agilidade. Caso o aplicativo precise de funcionalidades mais complexas ou dependa de bibliotecas nativas específicas, o React Native CLI é a melhor escolha.
  
- **Experiência da Equipe**: A equipe tem experiência em trabalhar com configurações nativas e no gerenciamento de builds, o que pode tornar o React Native CLI mais prático em casos de maior controle e personalização.

- **Requisitos Nativos**: Se o aplicativo precisar de funcionalidades nativas avançadas, como integração com hardware específico ou bibliotecas nativas não suportadas pelo Expo, o React Native CLI seria a escolha preferida.

- **Velocidade de Desenvolvimento**: Para o desenvolvimento rápido de um MVP (Minimum Viable Product) ou quando o foco é mais na implementação de funcionalidades de UI do que em integração nativa, o Expo oferece um tempo de desenvolvimento significativamente mais rápido.

## Decisão

[em andamento]

## Consequências

- Caso optemos pelo **React Native CLI**, a equipe precisará configurar manualmente os ambientes de desenvolvimento e gerenciar as dependências nativas com mais cuidado, o que pode aumentar o tempo de setup inicial e a manutenção a longo prazo.
- Caso optemos pelo **Expo**, a equipe será capaz de iniciar o desenvolvimento mais rapidamente, mas ficará limitada a dependências suportadas e precisará planejar uma possível migração para o React Native CLI caso as necessidades do aplicativo se expandam para funcionalidades nativas avançadas.

## Referências

- [Documentação do React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Documentação do Expo](https://docs.expo.dev/)