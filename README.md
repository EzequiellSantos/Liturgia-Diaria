# Site Liturgia-Diaria
 Site para consulta da [Liturgia Diaria](https://ezequiellsantos.github.io/Liturgia-Diaria/)

## Tecnologias Utilizadas

  - Node.js com a blibioteca  `axios`
  - Vercel
  - HTML & CSS

## APIs

  As APIs utilizadas foram utilizadas:

  - Externa [daily-liturgia-diaria](https://liturgia.up.railway.app/)

  - E a minha própria [API](https://intermediary-api.vercel.app/api) que utiliza Node.js, hospedada no vercel que funciona como proxy para contornar problemas de CORS no navegador

## Descrição

  O projeto foi criado com o intuito de proporcionar uma próximidade com a fé cristã diariamente de forma rápida, prática e intuitiva.

O site armazena as 4 leituras ou 3 dependendo das leituras diárias que podem variar, a consulta de cada leitura vai de acordo com o que o usuário deseja, podendo haver a alternância das mesmas.

O tema se adequa ao tempo litúrgico cristão atual, deixando assim a visita do usuário mais agradável e dinâmica.

Todas as leituras são armazenadas com apenas uma chamada à API para evitar muitas chamadas.
