const {Client} = require('whatsapp-web.js')
// const qrcode = require('qrcode-terminal')



// const client = new Client()
const client = new Client({ puppeteer: { headless: true,args: ['--no-sandbox', '--disable-setuid-sandbox']}});

client.on('qr', (qr) => {
	console.log("qr code recieved : ", qr)
	qrcode.generate(qr, {small: true})
})

client.on('ready', () => {
	console.log(' client is ready ')
})

// client.on('message', (msg) => {
// 	console.log('message : ', msg)
// })

client.initialize()