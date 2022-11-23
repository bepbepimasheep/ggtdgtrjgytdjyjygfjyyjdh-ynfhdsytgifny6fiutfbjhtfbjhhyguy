var imags=["pepapa e irmao.webp","Peppa-pig.webp","familhiazinha.webp","mais irmaos.jpg","ovo.webp"];
 var names=["yeeeeeeeeeeeeey","tututuuuu","bep bep im a sheeep","ifsefguivreduhginrt","rey"];
  var i=0;
  function proximoEx (){
    i++;
    var number =4;
    if (i>number){
        i=0;
    }
    var imagem=imags[i];
    var nome=names[i];
    document.getElementById("family.member@efughueufv").src=imagem;
    document.getElementById("texto").innerHTML=nome;
  }