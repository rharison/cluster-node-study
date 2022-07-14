* Cluster Node Study

* Este projeto foi criado para utilizar técnicas de clusterização no nodeJS, a ideia é ter uma lista grande de usuários e para cada um deles criar um cartão de visitas no formato PDF.

* No worker.js temos o projeto feito de forma simples, sem a utilização de cluster ocasionando a quebra da aplicação por conta dos vários processos abertos simultaneamente.

* No puppeteerCluster.js temos o projeto refatorado, utilizando a clusterização que resultou numa melhora significativa na gestão de recursos e entregando todas as requisições de serviço. 

* Técnologias Utilizadas

- NodeJS
- Puppeteer
- puppeteerCluster
