const request = require('supertest');
const app = require('./server');

it('Deve testar se a rota retorna os campos que necessito caso o query param tenha letras maiusculas e acentuadas', async ()=>{
    const cidade = "FloRianóPoLis"
    const res = await request(app).get(`/cityname?name=${cidade}`)
    expect(res.body).toHaveProperty('cidade', 'temperatura', 'umidade', 'status')
    console.log(res.body)
})

it('Deve testar se a rota retorna um erro caso os parametros nao sejam passados', async ()=>{
    const cidade = ""
    const res = await request(app).get(`/cityname?name=${cidade}`)
    console.log(res.body)
    expect(res.body).toHaveProperty('error')
})

it('Deve apontar erro caso a cidade não exista', async ()=>{
    const cidade = "asfasfas"
    const res = await request(app).get(`/cityname?name=${cidade}`)
    console.log(res.body)
    expect(res.body).toHaveProperty('error')
})

it('Deve testar se a rota de latitude e longitude me retorna as propriedades esperadas caso os parametros sejam passados corretamente ', async ()=>{
    const lat = "-18.2381"
    const long = "-43.611"
    const res = await request(app).get(`/geolocation?lat=${lat}&long=${long}`)
    console.log(res.body)
    expect(res.body).toHaveProperty('cidade', 'temperatura', 'umidade', 'status')
})

it('Deve testar se a rota de latitude e longitude me retorna o erro esperado caso os parametros não sejam passados corretamente', async ()=>{
    const lat = ""
    const long = ""
    const res = await request(app).get(`/geolocation?lat=${lat}&long=${long}`)
    console.log(res.body)
    expect(res.body).toHaveProperty('error')
})

it('Deve apontar erro caso a combinação de latitude e longitude passada gere um local inexistente ', async ()=>{
    const lat = "13000"
    const long = "90000"
    const res = await request(app).get(`/geolocation?lat=${lat}&long=${long}`)
    console.log(res.body)
    expect(res.body).toHaveProperty('error')
})

it('Deve apontar erro caso a não passemos a latitude ', async ()=>{
    const lat = ""
    const long = "90000"
    const res = await request(app).get(`/geolocation?lat=${lat}&long=${long}`)
    console.log(res.body)
    expect(res.body).toHaveProperty('error')
})
it('Deve apontar erro caso a não passemos a longitude ', async ()=>{
    const lat = "13"
    const long = ""
    const res = await request(app).get(`/geolocation?lat=${lat}&long=${long}`)
    console.log(res.body)
    expect(res.body).toHaveProperty('error')
})