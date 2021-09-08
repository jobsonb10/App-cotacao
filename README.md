# App-cotacao
Aplicação que consome a API da IEX, para fazer a requisição do último preço de cada ação.

Fiz em uma API, onde o simbolo de cada ação é passado como um parâmetro na requisição.

A cotação, assim como o nome da empresa, é retornado como um JSON, caso o simbolo passado seja válido.

O objeto retornado, também é guardado no banco de dados para que não haja requisições repetidas na API da IEX.

O objeto é verificado se tem no banco de dados antes de fazer a requisição na api deles.

Tive a ideia também de comparar a coluna UpdatedAt da ação salva no banco, para que se o tempo da ultima atualização for maior que 2 horas(por exemplo), ele faça uma nova, já que a gente não quer sempre o mesmo preço. Mas não tive tempo suficiente pra implementar isso.

-------------------------=-----------------------=--------------------------=------------------------=
Para usar a aplicação em seu ambiente é simples:
no terminal, na pasta raiz: npm i ---- para instalar as dependencias usadas
Mudar os dados do seu db Mysql no arquivo database.js na pasta src/config
Rodar a aplicação usando npm start
passando o simbolo da acao na url da app
Ex:
http://localhost:3333/price/aapl
-------------------------=-----------------------=--------------------------=------------------------=







