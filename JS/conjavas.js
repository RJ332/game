var statuIn = sessionStorage.getItem("StatuInte");
var textIn = statuIn;
var statuInn = Number(textIn);

var statuSo = sessionStorage.getItem("StatuSor");
var textSo = statuSo;
var statuSon = Number(textSo);

var statuEne = sessionStorage.getItem("StatuEner");
var textEne = statuEne;
var statuEnen = Number(textEne);

function printTime2() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.getElementById("demo").innerHTML = hours+":"+mins+":"+secs; 

        if(secs == 30 || secs == 0) {
            var energia = document.getElementById('qenergia');
            var text1 = energia.textContent;
            var venergian = Number(text1);
            venergia = venergian + 300;

            if(venergia <= 10000) {
                energia = document.getElementById('qenergia');
                text2 = energia.textContent;
                var energian = Number(text2);
                energia = energian + 300;
                document.getElementById('qenergia').innerHTML = energia;  
                sessionStorage.setItem("QEnergia", energia); 
            } else {
                energia = document.getElementById('qenergia');
                text3 = energia.textContent;
                energian = Number(text3);
                if (energian <= 10000) {
                var fenergia = 10000 - energian;
                energian = energian + fenergia;
                energia = energian; 
                document.getElementById('qenergia').innerHTML = energia; 
                sessionStorage.setItem("QEnergia", energia);    
                }  
            }
        }     
}
setInterval(printTime2, 1000);

function voltar() {
    window.location = "index.html";
}

function casad1nv2() {
    //imagensCasa1
    var nalt1 = sessionStorage.getItem("ImgCasa1");

    if (nalt1 == "casa1") {
     if (confirm('Tem acerteza que quer agastar esta quantidade: 2000 energia, 34 madeiras, 20 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 2000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 34;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 20;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da ciêntifica está agora a nível 2!")
    nalt1 = "casa1nv2";
    sessionStorage.setItem("ImgCasa1", nalt1); 
    } else {
        alert("Não tem a quantidade necessária");
    }
    }    
    }
}

function casad1nv3() {
    //imagensCasa1
    var nalt1 = sessionStorage.getItem("ImgCasa1");

    if (nalt1 == "casa1nv2") {
     if (confirm('Tem acerteza que quer agastar esta quantidade: 3000 energia, 68 madeiras, 40 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 3000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 68;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 40;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da ciêntifica está agora a nível 3!")
    nalt1 = "casa1nv3";
    sessionStorage.setItem("ImgCasa1", nalt1); 
    } else {
        alert("Não tem a quantidade necessária");
    }
    }
    }  
}

function casad1nvespescola() {
       //imagensCasa1
       var nalt1 = sessionStorage.getItem("ImgCasa1");

       if ((nalt1 == "casa1nv3") || (nalt3 == "casa1espigreja") || (nalt3 == "casa1espginasio")) {
        if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
       //Energia
       var energia = document.getElementById('qenergia');
       var text1 = energia.textContent;
       var energian = Number(text1);
       energia = energian - 4000;
       //Madeira
       var madeiras = document.getElementById('qmadeira');
       var text2 = madeiras.textContent;
       var madeirasn = Number(text2);
       madeiras = madeirasn - 136;
       //Madeira
       var pedras = document.getElementById('qpedra');
       var text3 = pedras.textContent;
       var pedrasn = Number(text3);
       pedras = pedrasn - 80;
       if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
       document.getElementById('qenergia').innerHTML = energia;
       //Mandar quantidade para a página index
       sessionStorage.setItem("QEnergia", energia); 
   
       document.getElementById('qmadeira').innerHTML = madeiras;
       //Mandar quantidade para a página index
       sessionStorage.setItem("QMadeiras", madeiras); 
   
       document.getElementById('qpedra').innerHTML = pedras;
       //Mandar quantidade para a página index
       sessionStorage.setItem("QPedras", pedras); 
       alert("Parabéns a cidade da ciêntifica está agora a nível Especial(Escola)!!!")
       nalt1 = "casa1espescola";
       sessionStorage.setItem("ImgCasa1", nalt1); 
       statuIn = statuInn + 10;
       sessionStorage.setItem("StatuInte", statuIn);
       } else {
           alert("Não tem a quantidade necessária");
       }
       }
       } 
}

function casad1nvespigreja() {
    //imagensCasa1
    var nalt1 = sessionStorage.getItem("ImgCasa1");

    if ((nalt1 == "casa1nv3") || (nalt1 == "casa1espescola") || (nalt1 == "casa1espginasio")) {
     if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 4000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 136;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 80;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da ciêntifica está agora a nível Especial(Igreja)!!!")
    nalt1 = "casa1espigreja";
    sessionStorage.setItem("ImgCasa1", nalt1); 
    statuSo = statuSon + 10;
    sessionStorage.setItem("StatuSor", statuSo);
    } else {
        alert("Não tem a quantidade necessária");
    }
    }
    } 
}

function casad1nvespginasio() {
    //imagensCasa1
    var nalt1 = sessionStorage.getItem("ImgCasa1");

    if ((nalt1 == "casa1nv3") || (nalt1 == "casa1espigreja") || (nalt1 == "casa1espescola")) {
     if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 4000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 136;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 80;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da ciêntifica está agora a nível Especial(Ginásio)!!!")
    nalt1 = "casa1espginasio";
    sessionStorage.setItem("ImgCasa1", nalt1); 
    statuEne = statuEnen + 10;
    sessionStorage.setItem("StatuEner", statuEne);
    } else {
        alert("Não tem a quantidade necessária");
    }
    }
    } 
}

//Casa2

function casad2nv2() {
    //imagensCasa2
    var nalt2 = sessionStorage.getItem("ImgCasa2");

    if (nalt2 == "casa2") {
       if (confirm('Tem acerteza que quer agastar esta quantidade: 2000 energia, 22 madeiras, 23 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 2000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 22;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 23;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da histórica está agora a nível 2!")
    nalt2 = "casa2nv2";
    sessionStorage.setItem("ImgCasa2", nalt2); 
    } else {
        alert("Não tem a quantidade necessária");
    }
    }  
    }
}

function casad2nv3() {
    //imagensCasa2
    var nalt2 = sessionStorage.getItem("ImgCasa2");

    if (nalt2 == "casa2nv2") {
     if (confirm('Tem acerteza que quer agastar esta quantidade: 3000 energia, 44 madeiras, 46 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 3000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 44;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 46;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da histórica está agora a nível 2!")
    var nalt2 = "casa2nv3";
    sessionStorage.setItem("ImgCasa2", nalt2); 
    } else {
        alert("Não tem a quantidade necessária");
    }
    }
    }
    
}

function casad2nvespescola() {
    //imagensCasa2
    var nalt2 = sessionStorage.getItem("ImgCasa2");

    if ((nalt2 == "casa2nv3") || (nalt2 == "casa2espigreja") || (nalt2 == "casa2espginasio")) {
     if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 4000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 136;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 80;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da histórica está agora a nível Especial(Escola)!!!")
    nalt2 = "casa2espescola";
    sessionStorage.setItem("ImgCasa2", nalt2); 
    statuIn = statuInn + 10;
       sessionStorage.setItem("StatuInte", statuIn);
    } else {
        alert("Não tem a quantidade necessária");
    }
    }
    } 
}

function casad2nvespigreja() {
 //imagensCasa2
 var nalt2 = sessionStorage.getItem("ImgCasa2");

 if ((nalt2 == "casa2nv3") || (nalt2 == "casa2espescola") || (nalt2 == "casa2espginasio")) {
  if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
 //Energia
 var energia = document.getElementById('qenergia');
 var text1 = energia.textContent;
 var energian = Number(text1);
 energia = energian - 4000;
 //Madeira
 var madeiras = document.getElementById('qmadeira');
 var text2 = madeiras.textContent;
 var madeirasn = Number(text2);
 madeiras = madeirasn - 136;
 //Madeira
 var pedras = document.getElementById('qpedra');
 var text3 = pedras.textContent;
 var pedrasn = Number(text3);
 pedras = pedrasn - 80;
 if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
 document.getElementById('qenergia').innerHTML = energia;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QEnergia", energia); 

 document.getElementById('qmadeira').innerHTML = madeiras;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QMadeiras", madeiras); 

 document.getElementById('qpedra').innerHTML = pedras;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QPedras", pedras); 
 alert("Parabéns a cidade da histórica está agora a nível Especial(Igreja)!!!")
 nalt2 = "casa2espigreja";
 sessionStorage.setItem("ImgCasa2", nalt2); 
 statuSo = statuSon + 10;
 sessionStorage.setItem("StatuSor", statuSo);
 } else {
     alert("Não tem a quantidade necessária");
 }
 }
 } 
}

function casad2nvespginasio() {
 //imagensCasa2
 var nalt2 = sessionStorage.getItem("ImgCasa2");

 if ((nalt2 == "casa2nv3") || (nalt2 == "casa2espigreja") || (nalt2 == "casa2espescola")) {
  if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
 //Energia
 var energia = document.getElementById('qenergia');
 var text1 = energia.textContent;
 var energian = Number(text1);
 energia = energian - 4000;
 //Madeira
 var madeiras = document.getElementById('qmadeira');
 var text2 = madeiras.textContent;
 var madeirasn = Number(text2);
 madeiras = madeirasn - 136;
 //Madeira
 var pedras = document.getElementById('qpedra');
 var text3 = pedras.textContent;
 var pedrasn = Number(text3);
 pedras = pedrasn - 80;
 if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
 document.getElementById('qenergia').innerHTML = energia;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QEnergia", energia); 

 document.getElementById('qmadeira').innerHTML = madeiras;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QMadeiras", madeiras); 

 document.getElementById('qpedra').innerHTML = pedras;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QPedras", pedras); 
 alert("Parabéns a cidade da histórica está agora a nível Especial(Ginásio)!!!")
 nalt2 = "casa2espginasio";
 sessionStorage.setItem("ImgCasa2", nalt2); 
 statuEne = statuEnen + 10;
 sessionStorage.setItem("StatuEner", statuEne);
 } else {
     alert("Não tem a quantidade necessária");
 }
 }
 } 
}

//Casa3

function casad3nv2() {
    //imagensCasa3
    var nalt3 = sessionStorage.getItem("ImgCasa3");

    if (nalt3 == "casa3") {
     if (confirm('Tem acerteza que quer agastar esta quantidade: 2000 energia, 20 madeiras, 32 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 2000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 20;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 32;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da geográfica está agora a nível 2!")
    var nalt3 = "casa3nv2";
    sessionStorage.setItem("ImgCasa3", nalt3); 
    } else {
        alert("Não tem a quantidade necessária");
    }
    }   
    }
    
}

function casad3nv3() {
    //imagensCasa3
    var nalt3 = sessionStorage.getItem("ImgCasa3");

    if (nalt3 == "casa3nv2") {
      if (confirm('Tem acerteza que quer agastar esta quantidade: 3000 energia, 40 madeiras, 64 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 3000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 40;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 64;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da geográfica está agora a nível 3!")
    var nalt3 = "casa3nv3";
    sessionStorage.setItem("ImgCasa3", nalt3); 
    } else {
        alert("Não tem a quantidade necessária");
    }
    }  
    }
    
}

function casad3nvespescola() {
    //imagensCasa1
    var nalt3 = sessionStorage.getItem("ImgCasa3");

    if ((nalt3 == "casa3nv3") || (nalt3 == "casa3espigreja") || (nalt3 == "casa3espginasio")) {
     if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
    //Energia
    var energia = document.getElementById('qenergia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 4000;
    //Madeira
    var madeiras = document.getElementById('qmadeira');
    var text2 = madeiras.textContent;
    var madeirasn = Number(text2);
    madeiras = madeirasn - 136;
    //Madeira
    var pedras = document.getElementById('qpedra');
    var text3 = pedras.textContent;
    var pedrasn = Number(text3);
    pedras = pedrasn - 80;
    if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
    document.getElementById('qenergia').innerHTML = energia;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QEnergia", energia); 

    document.getElementById('qmadeira').innerHTML = madeiras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QMadeiras", madeiras); 

    document.getElementById('qpedra').innerHTML = pedras;
    //Mandar quantidade para a página index
    sessionStorage.setItem("QPedras", pedras); 
    alert("Parabéns a cidade da geográfica está agora a nível Especial(Escola)!!!")
    nalt3 = "casa3espescola";
    sessionStorage.setItem("ImgCasa3", nalt3); 
    statuIn = statuInn + 10;
    sessionStorage.setItem("StatuInte", statuIn);
    } else {
        alert("Não tem a quantidade necessária");
    }
    }
    } 
}

function casad3nvespigreja() {
 //imagensCasa1
 var nalt3 = sessionStorage.getItem("ImgCasa3");

 if ((nalt3 == "casa3nv3") || (nalt3 == "casa3espescola") || (nalt3 == "casa3espginasio")) {
  if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
 //Energia
 var energia = document.getElementById('qenergia');
 var text1 = energia.textContent;
 var energian = Number(text1);
 energia = energian - 4000;
 //Madeira
 var madeiras = document.getElementById('qmadeira');
 var text2 = madeiras.textContent;
 var madeirasn = Number(text2);
 madeiras = madeirasn - 136;
 //Madeira
 var pedras = document.getElementById('qpedra');
 var text3 = pedras.textContent;
 var pedrasn = Number(text3);
 pedras = pedrasn - 80;
 if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
 document.getElementById('qenergia').innerHTML = energia;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QEnergia", energia); 

 document.getElementById('qmadeira').innerHTML = madeiras;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QMadeiras", madeiras); 

 document.getElementById('qpedra').innerHTML = pedras;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QPedras", pedras); 
 alert("Parabéns a cidade da geográfica está agora a nível Especial(Igreja)!!!")
 nalt3 = "casa3espigreja";
 sessionStorage.setItem("ImgCasa3", nalt3); 
 statuSo = statuSon + 10;
 sessionStorage.setItem("StatuSor", statuSo);
 } else {
     alert("Não tem a quantidade necessária");
 }
 }
 } 
}

function casad3nvespginasio() {
 //imagensCasa1
 var nalt3 = sessionStorage.getItem("ImgCasa3");

 if ((nalt3 == "casa3nv3") || (nalt3 == "casa3espigreja") || (nalt3 == "casa3espescola")) {
  if (confirm('Tem acerteza que quer agastar esta quantidade: 4000 energia, 136 madeiras, 80 pedras')) {
 //Energia
 var energia = document.getElementById('qenergia');
 var text1 = energia.textContent;
 var energian = Number(text1);
 energia = energian - 4000;
 //Madeira
 var madeiras = document.getElementById('qmadeira');
 var text2 = madeiras.textContent;
 var madeirasn = Number(text2);
 madeiras = madeirasn - 136;
 //Madeira
 var pedras = document.getElementById('qpedra');
 var text3 = pedras.textContent;
 var pedrasn = Number(text3);
 pedras = pedrasn - 80;
 if ((madeiras >= 0) && (pedras >= 0) && (energia >= 0)) {
 document.getElementById('qenergia').innerHTML = energia;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QEnergia", energia); 

 document.getElementById('qmadeira').innerHTML = madeiras;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QMadeiras", madeiras); 

 document.getElementById('qpedra').innerHTML = pedras;
 //Mandar quantidade para a página index
 sessionStorage.setItem("QPedras", pedras); 
 alert("Parabéns a cidade da geográfica está agora a nível Especial(Ginásio)!!!")
 nalt3 = "casa3espginasio";
 sessionStorage.setItem("ImgCasa3", nalt3); 
 statuEne = statuEnen + 10;
 sessionStorage.setItem("StatuEner", statuEne);
 } else {
     alert("Não tem a quantidade necessária");
 }
 }
 } 
}