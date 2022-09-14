<h1 align="center">Round - Desafio Técnico</h1>
<p>Micro-serviço que recebe requisições HTTP no formato REST com parâmetros sendo o nome de uma cidade ou uma combinação de latitude e longitude e
retorna o nome do local, sua temperatura e umidade atual ( buscados através da API <a href="https://openweathermap.org/current" target="_blank">OpenWeather API</a> ), 
além de um status de alerta que varia de acordo com as condições climáticas do local.</p>
<h1>Como iniciar o projeto<h1>
<h3>Com docker:</h3>
<p>Com o terminal da aplicação aberto, digite: <strong>docker-compose up</strong></p>
<p>Lembre-se: é necessário ter o docker instalado em seu computador</p>
<h3>Com npm:</h3>
<p>No terminal da aplicação, digite: <strong>npm install</strong> e depois <strong>npm start</strong></p>
<h1>Rotas da aplicação</h1>
<h3>Rota de busca por nome da cidade</h3>
<p>/cityname?name=(city name)</p>
<p>EXEMPLO:</p>
<img src="https://github.com/Mariano-SI/teste/blob/main/forReadMe/ByCity.png"></img>
<h3>Rota de busca por combianção entre latitude e longitude</h3>
<p>/geolocation?lat=(valor da latitude)&long=(valor da longitude)</p>
<p>EXEMPLO:</p>
<img src="https://github.com/Mariano-SI/teste/blob/main/forReadMe/ByLatLong.png"</img>
<h3>Rota para acessar a documentação da api</h3>
<p>/api-docs</p>
<p>EXEMPLO:</p>
<img src="https://github.com/Mariano-SI/teste/blob/main/forReadMe/ApiDoc.png"</img>
<h1>Exemplos de funcionamento</h1>
<p>Pesquisa por nome do local</p>
<img src="https://github.com/Mariano-SI/teste/blob/main/forReadMe/func2.png"></img>
<img src="https://github.com/Mariano-SI/teste/blob/main/forReadMe/func22.png"></img>
<p>Pesquisa por latitude e longitude</p>
<img src="https://github.com/Mariano-SI/teste/blob/main/forReadMe/func3.png"></img>
<img src="https://github.com/Mariano-SI/teste/blob/main/forReadMe/func4.png"></img>
<h1>Testes com JEST</h1>
<p>Para rodar a bateria de testes desenvolvida com jest, no terminal, digite: <strong>npm test</strong>
