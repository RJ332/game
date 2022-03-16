function printTime3() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.getElementById("demo").innerHTML = hours+":"+mins+":"+secs; 


    if((hours == 0) && (mins == 0) && (secs == 0)){
    //EnergiaColuna1
    var rn1 = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem("random1", rn1); 
    //MadeiraColuna1
    var rn2 = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem("random2", rn2);
    //PedraColuna1
    var rn3 = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem("random3", rn3);
    //RubisColuna1
    var rn4 = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem("random4", rn4);
    //EnergiaColuna2
    var rn5 = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem("random5", rn5);
    //MadeiraColuna2
    var rn6 = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem("random6", rn6);
    //PedraColuna2
    var rn7 = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem("random7", rn7);
    //RubisColuna1
    var rn8 = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem("random8", rn8);
    }
    
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

//EnergiaColuna1
if(rn1 < 32) {
    document.getElementById('preco1').innerHTML =  "Custo: 100";  
    document.getElementById('img1').innerHTML =  "<img src=\"Imagens/madeira.png\" id=\"image1\" width=\"5%\" alt=\"madeira\"/>";
  } else if((rn1 >= 32) && (rn1 < 64)) {
    document.getElementById('preco1').innerHTML =  "Custo: 100";
    document.getElementById('img1').innerHTML =  "<img src=\"Imagens/pedra.png\" id=\"image1\" width=\"10%\" alt=\"pedra\"/>";  
  } else if(rn1 >= 64) {
    document.getElementById('preco1').innerHTML =  "Custo: 5"; 
    document.getElementById('img1').innerHTML =  "<img src=\"Imagens/rubi.png\" id=\"image1\" width=\"3%\" alt=\"rubi\"/>";
    document.getElementById("img1").style.top = "38%";
    document.getElementById("img1").style.left = "15%";
  }
  
//MadeiraColuna1
  if(rn2 < 50) {
    document.getElementById('preco2').innerHTML =  "Custo: 5";  
    document.getElementById('img2').innerHTML =  "<img src=\"Imagens/rubi.png\" id=\"image2\" width=\"4%\" alt=\"rubi\"/>";
    document.getElementById("img2").style.top = "38%";
    document.getElementById("img2").style.left = "39%";
  } else if(rn2 >= 50) {
    document.getElementById('preco2').innerHTML =  "Custo: 100";  
    document.getElementById('img2').innerHTML =  "<img src=\"Imagens/pedra.png\" id=\"image2\" width=\"10.5%\" alt=\"pedra\"/>";
  }
  
//PedraColuna1
  if(rn3 < 50) {
    document.getElementById('preco3').innerHTML =  "Custo: 5";
    document.getElementById('img3').innerHTML =  "<img src=\"Imagens/rubi.png\" id=\"image3\" width=\"6.5%\" alt=\"rubi\"/>";
    document.getElementById("img3").style.top = "38%";
    document.getElementById("img3").style.left = "63%";  
  } else if(rn3 >= 50) {
    document.getElementById('preco3').innerHTML =  "Custo: 100";
    document.getElementById('img3').innerHTML =  "<img src=\"Imagens/madeira.png\" id=\"image3\" width=\"13%\" alt=\"madeira\"/>";
  }
  
//RubisColuna1
  if(rn4 < 50) {
    document.getElementById('preco4').innerHTML =  "Custo: 100";  
    document.getElementById('img4').innerHTML =  "<img src=\"Imagens/pedra.png\" id=\"image4\" width=\"40%\" alt=\"pedra\"/>";
  } else if(rn4 >= 50) {
    document.getElementById('preco4').innerHTML =  "Custo: 100";  
    document.getElementById('img4').innerHTML =  "<img src=\"Imagens/madeira.png\" id=\"image4\" width=\"45%\" alt=\"madeira\"/>";
  }
  
//EnergiaColuna2
  if(rn5 < 32) {
    document.getElementById('preco5').innerHTML =  "Custo: 100"; 
    document.getElementById('img5').innerHTML =  "<img src=\"Imagens/madeira.png\" id=\"image5\" width=\"5%\" alt=\"madeira\"/>"; 
  } else if((rn5 >= 32) && (rn5 < 64)) {
    document.getElementById('preco5').innerHTML =  "Custo: 100"; 
    document.getElementById('img5').innerHTML =  "<img src=\"Imagens/pedra.png\" id=\"image5\" width=\"10%\" alt=\"pedra\"/>";  
  } else if(rn5 >= 64) {
    document.getElementById('preco5').innerHTML =  "Custo: 5";
    document.getElementById('img5').innerHTML =  "<img src=\"Imagens/rubi.png\" id=\"image5\" width=\"3%\" alt=\"rubi\"/>";
    document.getElementById("img5").style.left = "85%";
    document.getElementById("img5").style.left = "15%";
  }
  
//MadeiraColuna2
  if(rn6 < 50) {
    document.getElementById('preco6').innerHTML =  "Custo: 5";
    document.getElementById('img6').innerHTML =  "<img src=\"Imagens/rubi.png\" id=\"image6\" width=\"4%\" alt=\"rubi\"/>";
    document.getElementById("img6").style.top = "85%";
    document.getElementById("img6").style.left = "39%"; 
  } else if(rn6 >= 50) {
    document.getElementById('preco6').innerHTML =  "Custo: 100";  
    document.getElementById('img6').innerHTML =  "<img src=\"Imagens/pedra.png\" id=\"image6\" width=\"10.5%\" alt=\"pedra\"/>";
  }
  
//PedraColuna2
  if(rn7 < 50) {
    document.getElementById('preco7').innerHTML =  "Custo: 5";  
    document.getElementById('img7').innerHTML =  "<img src=\"Imagens/rubi.png\" id=\"image7\" width=\"6.5%\" alt=\"rubi\"/>";
    document.getElementById("img7").style.top = "85%";
    document.getElementById("img7").style.left = "63%";
  } else if(rn7 >= 50) {
    document.getElementById('preco7').innerHTML =  "Custo: 100";
    document.getElementById('img7').innerHTML =  "<img src=\"Imagens/madeira.png\" id=\"image7\" width=\"13%\" alt=\"madeira\"/>";  
  }
  
//RubisColuna2
  if(rn8 < 50) {
    document.getElementById('preco8').innerHTML =  "Custo: 100";
    document.getElementById('img8').innerHTML =  "<img src=\"Imagens/pedra.png\" id=\"image8\" width=\"40%\" alt=\"pedra\"/>";   
  } else if(rn8 >= 50) {
    document.getElementById('preco8').innerHTML =  "Custo: 100";
    document.getElementById('img8').innerHTML =  "<img src=\"Imagens/madeira.png\" id=\"image8\" width=\"45%\" alt=\"madeira\"/>";  
  }     
}
setInterval(printTime3, 1000);

function voltar() {
    window.location = "index.html";
}

function produto1() {
    var image = document.getElementById('image1').alt;

    if (confirm('Pretende comprar 2500 energia')) {
     if (image == "madeira") {
        //Madeira
        var madeiras = document.getElementById('qmadeira');
        var text1 = madeiras.textContent;
        var madeirasn = Number(text1);
        madeiras = madeirasn - 100;
        if (madeiras >= 0) {
         document.getElementById('qmadeira').innerHTML = madeiras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QMadeiras", madeiras);  
        
        //Energia
        var energias = document.getElementById('qenergia');
        var text2 = energias.textContent;
        var energiasn = Number(text2);
        energias = energiasn + 2500;
        alert(energias);
        document.getElementById('qenergia').innerHTML = energias;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QEnergia", energias);
        } else if (madeiras < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }

    }  else if (image == "pedra") {
        //Pedra
        var pedras = document.getElementById('qpedra');
        var text1 = pedras.textContent;
        var pedrasn = Number(text1);
        pedras = pedrasn - 100;
        if (pedras >= 0) {
        document.getElementById('qpedra').innerHTML = pedras;
        
        //Mandar quantidade para a página index
        sessionStorage.setItem("QPedras", pedras);

        //Energia
        var energias = document.getElementById('qenergia');
        var text2 = energias.textContent;
        var energiasn = Number(text2);
        energias = energiasn + 2500;
        
        document.getElementById('qenergia').innerHTML = energias;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QEnergia", energias);            
        } else if (pedras < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }

    } else if (image == "rubi") {
        //Pedra
        var rubis = document.getElementById('qrubi');
        var text3 = rubis.textContent;
        var rubisn = Number(text3);
        rubis = rubisn - 5;
        if (rubis >= 0) {
        document.getElementById('qrubi').innerHTML = rubis;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QRubis", rubis);

        //Energia
        var energias = document.getElementById('qenergia');
        var text2 = energias.textContent;
        var energiasn = Number(text2);
        energias = energiasn + 2500;
        alert(energias);
        document.getElementById('qenergia').innerHTML = energias;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QEnergia", energias);            
        } else if (rubis < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }

    }
    } else {

    }
}

function produto2() {
    var image = document.getElementById('image2').alt;

    if (confirm('Pretende comprar 100 madeiras')) {
     if (image == "pedra") {
        //Pedra
        var pedras = document.getElementById('qpedra');
        var text1 = pedras.textContent;
        var pedrasn = Number(text1);
        pedras = pedrasn - 100;
        if(pedras >= 0) {
        document.getElementById('qpedra').innerHTML = pedras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QPedras", pedras);

        //Madeira
        var madeiras = document.getElementById('qmadeira');
        var text2 = madeiras.textContent;
        var madeirasn = Number(text2);
        madeiras = madeirasn + 100;
        alert(madeiras);
        document.getElementById('qmadeira').innerHTML = madeiras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QMadeiras", madeiras);           
        } else if (pedras < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }
    } else if (image == "rubi") {
        //Pedra
        var rubis = document.getElementById('qrubi');
        var text3 = rubis.textContent;
        var rubisn = Number(text3);
        rubis = rubisn - 5;
        if (rubis >= 0) {
        document.getElementById('qrubi').innerHTML = rubis;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QRubis", rubis);

        //Madeira
        var madeiras = document.getElementById('qmadeira');
        var text2 = madeiras.textContent;
        var madeirasn = Number(text2);
        madeiras = madeirasn + 100;
        alert(madeiras);
        document.getElementById('qmadeira').innerHTML = madeiras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QMadeiras", madeiras);            
        } else if (rubis < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }
    }
    } else {

    }
}

function produto3() {
    var image = document.getElementById('image3').alt;
    if (confirm('Pretende comprar 100 pedras')) {
     if (image == "madeira") {
        //Madeira
        var madeiras = document.getElementById('qmadeira');
        var text1 = madeiras.textContent;
        var madeirasn = Number(text1);
        madeiras = madeirasn - 100;
        if (madeiras >= 0) {
         document.getElementById('qmadeira').innerHTML = madeiras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QMadeiras", madeiras);  
        
        //Pedra
        var pedras = document.getElementById('qpedra');
        var text2 = pedras.textContent;
        var pedrasn = Number(text2);
        pedras = pedrasn + 100;
        alert(pedras);
        document.getElementById('qpedra').innerHTML = pedras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QPedras", pedras);
        } else if (madeiras < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }
  
    } else if (image == "rubi") {
        //Rybi
        var rubis = document.getElementById('qrubi');
        var text3 = rubis.textContent;
        var rubisn = Number(text3);
        rubis = rubisn - 5;
        if (rubis >= 0) {
        document.getElementById('qrubi').innerHTML = rubis;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QRubis", rubis);

        //Pedra
        var pedras = document.getElementById('qpedra');
        var text2 = pedras.textContent;
        var pedrasn = Number(text2);
        pedras = pedrasn + 100;
        alert(pedras);
        document.getElementById('qpedra').innerHTML = pedras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QPedras", pedras);            
        } else if (rubis < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }
    }
    } else {

    }
}

function produto4() {
    var image = document.getElementById('image4').alt;

    if (confirm('Pretende comprar 5 rubis')) {
     if (image == "madeira") {
        //Madeira
        var madeiras = document.getElementById('qmadeira');
        var text1 = madeiras.textContent;
        var madeirasn = Number(text1);
        madeiras = madeirasn - 100;
        if (madeiras >= 0) {
         document.getElementById('qmadeira').innerHTML = madeiras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QMadeiras", madeiras);  
        
        //Rubi
        var rubis = document.getElementById('qrubi');
        var text2 = rubis.textContent;
        var rubisn = Number(text2);
        rubis = rubisn + 5;
        alert(rubis);
        document.getElementById('qrubi').innerHTML = rubis;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QRubis", rubis);
        } else if (madeiras < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }
    }  else if (image == "pedra") {
        //Pedra
        var pedras = document.getElementById('qpedra');
        var text1 = pedras.textContent;
        var pedrasn = Number(text1);
        pedras = pedrasn - 100;
        if(pedras >= 0) {
        document.getElementById('qpedra').innerHTML = pedras;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QPedras", pedras);

        //Rubi
        var rubis = document.getElementById('qrubi');
        var text2 = rubis.textContent;
        var rubisn = Number(text2);
        rubis = rubisn + 5;
        alert(rubis);
        document.getElementById('qrubi').innerHTML = rubis;
        //Mandar quantidade para a página index
        sessionStorage.setItem("QRubis", rubis);            
        } else if (pedras < 0) {
            alert("Você não tem a quantidade necessária para fazer a troca");
        }
    }
    } else {

    }
}

function produto5() {
    var image = document.getElementById('image5').alt;

    if (confirm('Pretende comprar 2500 energia')) {
        if (image == "madeira") {
           //Madeira
           var madeiras = document.getElementById('qmadeira');
           var text1 = madeiras.textContent;
           var madeirasn = Number(text1);
           madeiras = madeirasn - 100;
           if (madeiras >= 0) {
            document.getElementById('qmadeira').innerHTML = madeiras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QMadeiras", madeiras);  
           
           //Energia
           var energias = document.getElementById('qenergia');
           var text2 = energias.textContent;
           var energiasn = Number(text2);
           energias = energiasn + 2500;
           alert(energias);
           document.getElementById('qenergia').innerHTML = energias;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QEnergia", energias);
           } else if (madeiras < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
   
       }  else if (image == "pedra") {
           //Pedra
           var pedras = document.getElementById('qpedra');
           var text1 = pedras.textContent;
           var pedrasn = Number(text1);
           pedras = pedrasn - 100;
           if (pedras >= 0) {
           document.getElementById('qpedra').innerHTML = pedras;
           
           //Mandar quantidade para a página index
           sessionStorage.setItem("QPedras", pedras);
   
           //Energia
           var energias = document.getElementById('qenergia');
           var text2 = energias.textContent;
           var energiasn = Number(text2);
           energias = energiasn + 2500;
           
           document.getElementById('qenergia').innerHTML = energias;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QEnergia", energias);            
           } else if (pedras < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
   
       } else if (image == "rubi") {
           //Pedra
           var rubis = document.getElementById('qrubi');
           var text3 = rubis.textContent;
           var rubisn = Number(text3);
           rubis = rubisn - 5;
           if (rubis >= 0) {
           document.getElementById('qrubi').innerHTML = rubis;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QRubis", rubis);
   
           //Energia
           var energias = document.getElementById('qenergia');
           var text2 = energias.textContent;
           var energiasn = Number(text2);
           energias = energiasn + 2500;
           alert(energias);
           document.getElementById('qenergia').innerHTML = energias;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QEnergia", energias);            
           } else if (rubis < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
   
       }
       } else {
   
       }
}

function produto6() {
    var image = document.getElementById('image6').alt;

    if (confirm('Pretende comprar 100 madeiras')) {
        if (image == "pedra") {
           //Pedra
           var pedras = document.getElementById('qpedra');
           var text1 = pedras.textContent;
           var pedrasn = Number(text1);
           pedras = pedrasn - 100;
           if(pedras >= 0) {
           document.getElementById('qpedra').innerHTML = pedras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QPedras", pedras);
   
           //Madeira
           var madeiras = document.getElementById('qmadeira');
           var text2 = madeiras.textContent;
           var madeirasn = Number(text2);
           madeiras = madeirasn + 100;
           alert(madeiras);
           document.getElementById('qmadeira').innerHTML = madeiras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QMadeiras", madeiras);           
           } else if (pedras < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
       } else if (image == "rubi") {
           //Pedra
           var rubis = document.getElementById('qrubi');
           var text3 = rubis.textContent;
           var rubisn = Number(text3);
           rubis = rubisn - 5;
           if (rubis >= 0) {
           document.getElementById('qrubi').innerHTML = rubis;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QRubis", rubis);
   
           //Madeira
           var madeiras = document.getElementById('qmadeira');
           var text2 = madeiras.textContent;
           var madeirasn = Number(text2);
           madeiras = madeirasn + 100;
           alert(madeiras);
           document.getElementById('qmadeira').innerHTML = madeiras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QMadeiras", madeiras);            
           } else if (rubis < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
       }
       } else {
   
       }
}

function produto7() {
    var image = document.getElementById('image7').alt;

    if (confirm('Pretende comprar 100 pedras')) {
        if (image == "madeira") {
           //Madeira
           var madeiras = document.getElementById('qmadeira');
           var text1 = madeiras.textContent;
           var madeirasn = Number(text1);
           madeiras = madeirasn - 100;
           if (madeiras >= 0) {
            document.getElementById('qmadeira').innerHTML = madeiras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QMadeiras", madeiras);  
           
           //Pedra
           var pedras = document.getElementById('qpedra');
           var text2 = pedras.textContent;
           var pedrasn = Number(text2);
           pedras = pedrasn + 100;
           alert(pedras);
           document.getElementById('qpedra').innerHTML = pedras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QPedras", pedras);
           } else if (madeiras < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
     
       } else if (image == "rubi") {
           //Rybi
           var rubis = document.getElementById('qrubi');
           var text3 = rubis.textContent;
           var rubisn = Number(text3);
           rubis = rubisn - 5;
           if (rubis >= 0) {
           document.getElementById('qrubi').innerHTML = rubis;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QRubis", rubis);
   
           //Pedra
           var pedras = document.getElementById('qpedra');
           var text2 = pedras.textContent;
           var pedrasn = Number(text2);
           pedras = pedrasn + 100;
           alert(pedras);
           document.getElementById('qpedra').innerHTML = pedras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QPedras", pedras);            
           } else if (rubis < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
       }
       } else {
   
       }
}

function produto8() {
    var image = document.getElementById('image8').alt;

    if (confirm('Pretende comprar 5 rubis')) {
        if (image == "madeira") {
           //Madeira
           var madeiras = document.getElementById('qmadeira');
           var text1 = madeiras.textContent;
           var madeirasn = Number(text1);
           madeiras = madeirasn - 100;
           if (madeiras >= 0) {
            document.getElementById('qmadeira').innerHTML = madeiras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QMadeiras", madeiras);  
           
           //Rubi
           var rubis = document.getElementById('qrubi');
           var text2 = rubis.textContent;
           var rubisn = Number(text2);
           rubis = rubisn + 5;
           alert(rubis);
           document.getElementById('qrubi').innerHTML = rubis;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QRubis", rubis);
           } else if (madeiras < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
       }  else if (image == "pedra") {
           //Pedra
           var pedras = document.getElementById('qpedra');
           var text1 = pedras.textContent;
           var pedrasn = Number(text1);
           pedras = pedrasn - 100;
           if(pedras >= 0) {
           document.getElementById('qpedra').innerHTML = pedras;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QPedras", pedras);
   
           //Rubi
           var rubis = document.getElementById('qrubi');
           var text2 = rubis.textContent;
           var rubisn = Number(text2);
           rubis = rubisn + 5;
           alert(rubis);
           document.getElementById('qrubi').innerHTML = rubis;
           //Mandar quantidade para a página index
           sessionStorage.setItem("QRubis", rubis);            
           } else if (pedras < 0) {
               alert("Você não tem a quantidade necessária para fazer a troca");
           }
       }
       } else {
   
       }
}