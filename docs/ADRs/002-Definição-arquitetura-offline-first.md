# ADR 002: Definição da Estratégia de Arquitetura Offline-First

- **Proposta**: Em análise


## Contexto

O aplicativo precisa funcionar de forma **offline-first**, garantindo alta disponibilidade e confiabilidade, mesmo quando o dispositivo estiver desconectado. A arquitetura deve assegurar a sincronização eficiente e consistente dos dados entre o cliente e o servidor assim que a conexão for restabelecida.

Escolher a estratégia correta para a arquitetura offline-first é fundamental para garantir que o aplicativo continue operando sem falhas durante períodos offline, sem comprometer desempenho e escalabilidade. A solução deve ser capaz de lidar com grandes volumes de dados, manter a integridade das informações e proporcionar uma sincronização eficaz com o backend.


## Opções Avaliadas
Considerando que um dos pontos mais sensíveis é o armazenamento e sincronização de dados, estão sendo consideradas as seguintes opções:

### **WatermelonDB**
- **Vantagens**:
  - **Desempenho otimizado**: WatermelonDB é uma solução altamente otimizada para gerenciamento de grandes volumes de dados no dispositivo, com foco em performance e operações em segundo plano. Ideal para aplicativos que precisam lidar com dados complexos enquanto permanecem rápidos e responsivos.
  - **Sincronização automática**: A biblioteca já oferece uma funcionalidade nativa de sincronização, o que facilita a implementação sem a necessidade de escrever a lógica de sincronização do zero.
  - **Contratos claros e integração simples**: WatermelonDB define uma arquitetura e contrato claro para dados e sincronização, facilitando a manutenção e a implementação de novas funcionalidades no futuro.
  - **Escalabilidade**: A arquitetura do WatermelonDB foi desenhada para escalar bem, lidando com grandes volumes de dados enquanto mantém o desempenho estável.
  - **Curva de aprendizado gerenciável**: Embora a equipe precise entender o contrato que o WatermelonDB define, a curva de aprendizado não é tão difícil quanto em uma implementação manual, já que a biblioteca abstrai muitas das complexidades envolvidas na sincronização.

- **Desvantagens**:
  - **Menos flexibilidade**: Por ser uma solução abstrata, pode não ser ideal para casos de uso altamente específicos que exigem personalização detalhada da lógica de sincronização ou consultas muito complexas.
  - **Necessidade de adaptação ao contrato**: Como o **WatermelonDB** define um contrato claro para a sincronização, é necessário garantir que a estrutura de dados e a lógica do aplicativo estejam em conformidade com esse contrato, o que pode exigir adaptações na arquitetura do aplicativo.

### **SQLite + Lógica Customizada**
- **Vantagens**:
  - **Controle total sobre dados e sincronização**: Usar **SQLite** com uma lógica customizada oferece controle completo sobre a estrutura dos dados, a forma como os dados são armazenados e como a sincronização será realizada. Isso é ideal para sistemas que exigem comportamentos de sincronização altamente personalizados.
  - **Flexibilidade**: A solução pode ser moldada de acordo com as necessidades do aplicativo, sem as limitações impostas por uma biblioteca de abstração como o **WatermelonDB**.
  - **Adaptação a regras de negócios complexas**: Caso o projeto tenha regras de negócios que exigem um comportamento de sincronização muito específico (como diferentes prioridades de sincronização ou regras de conflito), a implementação customizada permitirá resolver esses casos.

- **Desvantagens**:
  - **Curva de aprendizado mais íngreme**: A implementação da lógica de sincronização manualmente é significativamente mais complexa, exigindo que a equipe desenvolva tudo do zero, incluindo a gestão de conflitos, as consultas e o controle de sincronização. Esse processo é propenso a erros e pode ser demorado.
  - **Manutenção e evolução**: O desenvolvimento e a manutenção da lógica de sincronização personalizada podem ser demorados e propensos a erros, especialmente se as regras de sincronização mudarem ou se o aplicativo crescer em complexidade.
  - **Desempenho**: Embora **SQLite** seja rápido e eficiente para operações locais, a implementação de consultas personalizadas e lógica de sincronização pode afetar o desempenho, especialmente em cenários com grande volume de dados e manipulação de dados complexos.

## Critérios de Decisão

A escolha entre essas duas abordagens será influenciada pelos seguintes critérios:

- **Simplicidade e Rapidez de Implementação**: Se a equipe deseja uma solução que permita uma implementação mais rápida e simplificada, o **WatermelonDB** é mais adequado devido à sincronização automática e a abstração oferecida pela biblioteca.
  
- **Controle e Flexibilidade**: Se o projeto exige controle total sobre os dados e a sincronização, com capacidade de adaptar as regras de negócios e lidar com cenários complexos, o uso de **SQLite + Lógica Customizada** seria a escolha ideal.

- **Escalabilidade**: **WatermelonDB** oferece uma solução altamente escalável para grandes volumes de dados, enquanto **SQLite + Lógica Customizada** pode exigir mais esforço para garantir escalabilidade, especialmente se o número de dados crescer significativamente.

- **Facilidade de Manutenção**: **WatermelonDB** pode ser mais fácil de manter a longo prazo, uma vez que a sincronização e a lógica de dados já estão implementadas pela biblioteca. Com **SQLite + Lógica Customizada**, a manutenção exigirá mais trabalho, pois a sincronização e os dados precisam ser gerenciados manualmente.

## Decisão

[em andamento]

## Consequências

- Caso optemos por **WatermelonDB**, a equipe terá acesso a uma solução altamente otimizada e fácil de integrar, mas perderá alguma flexibilidade em relação à personalização da sincronização.
- Caso optemos por **SQLite + Lógica Customizada**, teremos controle total sobre a sincronização e as consultas, mas precisaremos investir mais tempo e esforço para desenvolver e manter a lógica personalizada.

## Referências

- [Documentação do WatermelonDB](https://nozbe.github.io/WatermelonDB/)
- [Documentação do SQLite](https://www.sqlite.org/)
