var needle = require('needle');
var cheerio = require('cheerio');
var fs = require('fs');
const json2md = require("json2md");

var urls = ['https://howhttps.works/', 'https://howhttps.works/episodes/','https://howhttps.works/why-do-we-need-https/', 'https://howhttps.works/the-keys/', 'https://howhttps.works/the-handshake/', 'https://howhttps.works/https-ssl-tls-differences/','https://howhttps.works/certificate-authorities/'];


function parser(url ,index){
	const results = [];
	needle.get(url, function(err, res){
    if (err) throw err;
    
    const $ = cheerio.load(res.body);
  $('main *').each(function(i,elem){

  	   	if(checkTextElement(elem.name)){
   		if (elem.name==='span'||elem.name==='text') elem.name='p';
   		if (elem.children[0].data!==undefined) {results.push(getElementObj(elem.name, elem.children[0].data));}
  		
  		
   	}
  })

 const fileName = url.match(/\/([^\/]+)[\/]?$/)[1];


    write(results,`./${index}-${fileName}-en.md`);
});
}

urls.forEach(function(item,i) {
  parser(item,i);
});


function write(res,filePath){
    fs.writeFileSync(filePath, json2md(res));
};
function getElementObj(tagName, value){
	const elementObj={};
	elementObj[tagName]=value;
	// console.log(elementObj);
	return elementObj;
}
getElementObj('h1','episodes');

function checkTextElement(element){
	const tagNames=['h1','p','span','text'];
	return tagNames.some(function(tagName){
		return element===tagName;
	});
}
