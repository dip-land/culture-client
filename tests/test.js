const culture_client = require('culture-client');

//basehandler accepts any json or xml file
//must be a json file if options.XML is false or unspecified
new culture_client.baseHandler().get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data));
//must be an xml file is options.XML is true
new culture_client.baseHandler().get('https://www.w3schools.com/xml/note.xml', { XML: true }).then(data => console.log(data));

//https://danbooru.donmai.us
new culture_client.danbooru().post.then(post => console.log(post));

//https://e621.net
new culture_client.e621({ userAgent: 'culture-client 0.0.1_beta01 NPM Test Command' }).post.then(post => console.log(post));

//https://konachan.com
new culture_client.konachan().post.then(post => console.log(post));

//https://rule34.xxx
new culture_client.rule34().post.then(post => console.log(post));

//https://yande.re
new culture_client.yandere().post.then(post => console.log(post));