var nameci = sessionStorage.getItem("localname");

//alert(this.playername);

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.getElementById("demo").innerHTML = hours+":"+mins+":"+secs; 
    
    nameci = document.getElementById('showjmname');
    var text3 = nameci.textContent;
    var namecin = String(text3);
    nameci = namecin;

        if(secs == 30 || secs == 0) {
            var energia = document.getElementById('energia');
            var text1 = energia.textContent;
            var venergian = Number(text1);
            venergia = venergian + 300;

            if(venergia <= 10000) {
                energia = document.getElementById('energia');
                text2 = energia.textContent;
                var energian = Number(text2);
                energia = energian + 300;
                document.getElementById('energia').innerHTML = energia;  
                sessionStorage.setItem("QEnergia", energia); 
            } else {
                energia = document.getElementById('energia');
                text3 = energia.textContent;
                energian = Number(text3);
                if (energian <= 10000) {
                var fenergia = 10000 - energian;
                energian = energian + fenergia;
                energia = energian; 
                document.getElementById('energia').innerHTML = energia; 
                sessionStorage.setItem("QEnergia", energia); 
                }  
            }
        }     
}
setInterval(printTime, 1000);

function clearCheckBoxes() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].type === 'checkbox')
            inputs[i].checked = false;
    }
}

function popupcasa() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}

function popupgruta() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function popupcasa1() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}

function popupcasa2() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
}

function popupcasa3() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show");
}

function popupcasino() {
    var popup = document.getElementById("myPopup6");
    popup.classList.toggle("show");
}

function popupcomercio() {
    var popup = document.getElementById("myPopup7");
    popup.classList.toggle("show");
}

function voltar() {
    window.location = "index.html";
}

// Below function Executes on click of login button.
function login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value; 
var playername = document.getElementById("playername").value;
var JMname = document.getElementById("JMname").value;

if ((playername == "") || (JMname == "")){
    alert("ERRO");
} else if ( username == "dj332" && password == "ara"){
window.location = "index.html"; // Redirecting to other page.
sessionStorage.setItem("Nome_do_jogador", playername);
sessionStorage.setItem("Nome_do_Jipe", JMname);
}else{
alert("ERRO");
}
}

//Casa
function home() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;

    if (nameci == 'Casa') {
        if (confirm('Pretende melhorar alguma cidade?')) {
            window.location = "construir.html";
            //Madeira
            var madeiras = document.getElementById('madeira');
            var text6 = madeiras.textContent;
            var madeirasn = Number(text6);
            madeiras = madeirasn;
            sessionStorage.setItem("QMadeiras", madeiras);

            //Energia
            var energia = document.getElementById('energia');
            var text1 = energia.textContent;
            var energian = Number(text1);
            energia = energian;
            sessionStorage.setItem("QEnergia", energia);
            
            //Pedra
            var pedras = document.getElementById('pedra');
            var text7 = pedras.textContent;
            var pedrasn = Number(text7);
            pedras = pedrasn;
            sessionStorage.setItem("QPedras", pedras);

            //Rubi
            var rubis = document.getElementById('rubis');
            var text5 = rubis.textContent;
            var rubisn = Number(text5);
            rubis = rubisn;
            sessionStorage.setItem("QRubis", rubis);
        } else {

        }
    } else if (nameci == 'Gruta') {
    if (confirm('Pretendes ir para Casa?')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 830;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa';
    nameci = 'Casa';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "80%";
    document.getElementById("jeep").style.top = "30%";
    document.getElementById("tjeep").style.left = "80%";
    document.getElementById("tjeep").style.top = "33%"; 
    } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa';
        nameci = 'Casa';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "80%";
        document.getElementById("jeep").style.top = "30%";
        document.getElementById("tjeep").style.left = "80%";
        document.getElementById("tjeep").style.top = "33%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
            }
        } 
        }        
    } else {
      alert("Não tem energia suficiente");  
    }    
        
    }

    } else if (nameci == 'Casa1') {  
    if (confirm('Pretendes ir para Casa?')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 500;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa';
    nameci = 'Casa';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "80%";
    document.getElementById("jeep").style.top = "30%";
    document.getElementById("tjeep").style.left = "80%";
    document.getElementById("tjeep").style.top = "33%";          
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);

        document.getElementById('showjmname').innerHTML = 'Casa';
        nameci = 'Casa';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "80%";
        document.getElementById("jeep").style.top = "30%";
        document.getElementById("tjeep").style.left = "80%";
        document.getElementById("tjeep").style.top = "33%"; 
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
            }
        } 
        }
    } else {
        alert("Não tem energia suficiente");
    }
    }
    } else if (nameci == 'Casa2') {
    if (confirm('Pretendes ir para Casa?')) {     
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 600;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa';
    nameci = 'Casa';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "80%";
    document.getElementById("jeep").style.top = "30%";
    document.getElementById("tjeep").style.left = "80%";
    document.getElementById("tjeep").style.top = "33%";          
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa';
        nameci = 'Casa';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "80%";
        document.getElementById("jeep").style.top = "30%";
        document.getElementById("tjeep").style.left = "80%";
        document.getElementById("tjeep").style.top = "33%";  
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
            }
        } 
        }
    } else {
       alert("Não tem energia suficiente"); 
    }
    }
    } else if (nameci == 'Casa3') {
    if (confirm('Pretendes ir para Casa?')) {    
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 1000;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa';
    nameci = 'Casa';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "80%";
    document.getElementById("jeep").style.top = "30%";
    document.getElementById("tjeep").style.left = "80%";
    document.getElementById("tjeep").style.top = "33%";          
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);
       
        document.getElementById('showjmname').innerHTML = 'Casa';
        nameci = 'Casa';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "80%";
        document.getElementById("jeep").style.top = "30%";
        document.getElementById("tjeep").style.left = "80%";
        document.getElementById("tjeep").style.top = "33%";  

        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
            }
        } 
        }   
        } else {
          alert("Não tem energia suficiente");  
        }

    }
    } else if (nameci == 'Comércio') {
    if (confirm('Pretendes ir para Casa?')) {   
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 750;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa';
    nameci = 'Casa';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "80%";
    document.getElementById("jeep").style.top = "30%";
    document.getElementById("tjeep").style.left = "80%";
    document.getElementById("tjeep").style.top = "33%";          
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa';
        nameci = 'Casa';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "80%";
        document.getElementById("jeep").style.top = "30%";
        document.getElementById("tjeep").style.left = "80%";
        document.getElementById("tjeep").style.top = "33%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
            }
        } 
        }                
            } else {
               alert("Não tem energia suficiente"); 
            }

    }
    } else if (nameci == 'Casino') {
    if (confirm('Pretendes ir para Casa?')) {   
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 950;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa';
    nameci = 'Casa';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "80%";
    document.getElementById("jeep").style.top = "30%";
    document.getElementById("tjeep").style.left = "80%";
    document.getElementById("tjeep").style.top = "33%";          
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa';
        nameci = 'Casa';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "80%";
        document.getElementById("jeep").style.top = "30%";
        document.getElementById("tjeep").style.left = "80%";
        document.getElementById("tjeep").style.top = "33%";  
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
            }
        } 
        }       
        } else {
           alert("Não tem energia suficiente"); 
        }

    }
    } 
}

//Gruta
function gruta() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;

    if (nameci == 'Gruta') {      
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
    } else if (nameci == 'Casa') {
    if (confirm('Pretendes ir para a Gruta')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1); 
    energia = energian - 830;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Gruta';
    nameci = 'Gruta';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "35%";
    document.getElementById("jeep").style.top = "33%";
    document.getElementById("tjeep").style.left = "35%";
    document.getElementById("tjeep").style.top = "36%";             
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Gruta';
        nameci = 'Gruta';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "35%";
        document.getElementById("jeep").style.top = "33%";
        document.getElementById("tjeep").style.left = "35%";
        document.getElementById("tjeep").style.top = "36%";   
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        } 
    } else {
       alert("Não tem energia suficiente"); 
    }

    }  

    } else if (nameci == 'Casa1') {  
    if (confirm('Pretendes ir para a Gruta')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1); 
    energia = energian - 930;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Gruta';
    nameci = 'Gruta';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "35%";
    document.getElementById("jeep").style.top = "33%";
    document.getElementById("tjeep").style.left = "35%";
    document.getElementById("tjeep").style.top = "36%";             
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);
       
        document.getElementById('showjmname').innerHTML = 'Gruta';
        nameci = 'Gruta';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "35%";
        document.getElementById("jeep").style.top = "33%";
        document.getElementById("tjeep").style.left = "35%";
        document.getElementById("tjeep").style.top = "36%";   

        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
      alert("Não tem energia suficiente");  
    }

    } 
    } else if (nameci == 'Casa2') {
    if (confirm('Pretendes ir para a Gruta')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1); 
    energia = energian - 320;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Gruta';
    nameci = 'Gruta';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "35%";
    document.getElementById("jeep").style.top = "33%";
    document.getElementById("tjeep").style.left = "35%";
    document.getElementById("tjeep").style.top = "36%";             
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Gruta';
        nameci = 'Gruta';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "35%";
        document.getElementById("jeep").style.top = "33%";
        document.getElementById("tjeep").style.left = "35%";
        document.getElementById("tjeep").style.top = "36%";   
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }  
    } else if (nameci == 'Casa3') {
    if (confirm('Pretendes ir para a Gruta')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1); 
    energia = energian - 430;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Gruta';
    nameci = 'Gruta';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "35%";
    document.getElementById("jeep").style.top = "33%";
    document.getElementById("tjeep").style.left = "35%";
    document.getElementById("tjeep").style.top = "36%";             
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Gruta';
        nameci = 'Gruta';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "35%";
        document.getElementById("jeep").style.top = "33%";
        document.getElementById("tjeep").style.left = "35%";
        document.getElementById("tjeep").style.top = "36%";  
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }   
    } else {
       alert("Não tem energia suficiente"); 
    }    

    }  
    } else if (nameci == 'Comércio') {          
    if (confirm('Pretendes ir para a Gruta')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1); 
    energia = energian - 880;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Gruta';
    nameci = 'Gruta';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "35%";
    document.getElementById("jeep").style.top = "33%";
    document.getElementById("tjeep").style.left = "35%";
    document.getElementById("tjeep").style.top = "36%";             
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Gruta';
        nameci = 'Gruta';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "35%";
        document.getElementById("jeep").style.top = "33%";
        document.getElementById("tjeep").style.left = "35%";
        document.getElementById("tjeep").style.top = "36%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }   
    } else {
      alert("Não tem energia suficiente");  
    }

    } 
    } else if (nameci == 'Casino') {       
    if (confirm('Pretendes ir para a Gruta')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1); 
    energia = energian - 680;
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Gruta';
    nameci = 'Gruta';
    sessionStorage.setItem("localname", nameci); 
    document.getElementById("showjmname").style.left = "53%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "35%";
    document.getElementById("jeep").style.top = "33%";
    document.getElementById("tjeep").style.left = "35%";
    document.getElementById("tjeep").style.top = "36%";             
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Gruta';
        nameci = 'Gruta';
        sessionStorage.setItem("localname", nameci); 
        document.getElementById("showjmname").style.left = "53%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "35%";
        document.getElementById("jeep").style.top = "33%";
        document.getElementById("tjeep").style.left = "35%";
        document.getElementById("tjeep").style.top = "36%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }    
    } else {
      alert("Não tem energia suficiente");  
    }

    } 
    }
}

//Cidade1
function casa1() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;

    if ((nameci == 'Casa1') || (energia <= 0)) {
       
    } else if (nameci == 'Casa') {    
    if (confirm('Pretendes ir para a Casa1')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 500;
    
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa1';
    nameci = 'Casa1';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "88%";
    document.getElementById("jeep").style.top = "71.5%";
    document.getElementById("tjeep").style.left = "88%";
    document.getElementById("tjeep").style.top = "74.5%";              
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa1';
        nameci = 'Casa1';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "88%";
        document.getElementById("jeep").style.top = "71.5%";
        document.getElementById("tjeep").style.left = "88%";
        document.getElementById("tjeep").style.top = "74.5%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }        
    } else if (nameci == 'Gruta') {  
    if (confirm('Pretendes ir para a Casa1')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 930;
    
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa1';
    nameci = 'Casa1';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "88%";
    document.getElementById("jeep").style.top = "71.5%";
    document.getElementById("tjeep").style.left = "88%";
    document.getElementById("tjeep").style.top = "74.5%";               
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa1';
        nameci = 'Casa1';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "88%";
        document.getElementById("jeep").style.top = "71.5%";
        document.getElementById("tjeep").style.left = "88%";
        document.getElementById("tjeep").style.top = "74.5%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Casa2') {
    if (confirm('Pretendes ir para a Casa1')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 600;
    
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa1';
    nameci = 'Casa1';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "88%";
    document.getElementById("jeep").style.top = "71.5%";
    document.getElementById("tjeep").style.left = "88%";
    document.getElementById("tjeep").style.top = "74.5%";              
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa1';
        nameci = 'Casa1';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "88%";
        document.getElementById("jeep").style.top = "71.5%";
        document.getElementById("tjeep").style.left = "88%";
        document.getElementById("tjeep").style.top = "74.5%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }   
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Casa3') {
    if (confirm('Pretendes ir para a Casa1')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 500;
    
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa1';
    nameci = 'Casa1';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "88%";
    document.getElementById("jeep").style.top = "71.5%";
    document.getElementById("tjeep").style.left = "88%";
    document.getElementById("tjeep").style.top = "74.5%";               
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa1';
        nameci = 'Casa1';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "88%";
        document.getElementById("jeep").style.top = "71.5%";
        document.getElementById("tjeep").style.left = "88%";
        document.getElementById("tjeep").style.top = "74.5%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Comércio') {  
    if (confirm('Pretendes ir para a Casa1')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 150;
    
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa1';
    nameci = 'Casa1';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "88%";
    document.getElementById("jeep").style.top = "71.5%";
    document.getElementById("tjeep").style.left = "88%";
    document.getElementById("tjeep").style.top = "74.5%";             
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa1';
        nameci = 'Casa1';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "88%";
        document.getElementById("jeep").style.top = "71.5%";
        document.getElementById("tjeep").style.left = "88%";
        document.getElementById("tjeep").style.top = "74.5%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
      alert("Não tem energia suficiente");  
    }

    }
    } else if (nameci == 'Casino') { 
    if (confirm('Pretendes ir para a Casa1')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 450;
    
    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa1';
    nameci = 'Casa1';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "88%";
    document.getElementById("jeep").style.top = "71.5%";
    document.getElementById("tjeep").style.left = "88%";
    document.getElementById("tjeep").style.top = "74.5%";              
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa1';
        nameci = 'Casa1';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "88%";
        document.getElementById("jeep").style.top = "71.5%";
        document.getElementById("tjeep").style.left = "88%";
        document.getElementById("tjeep").style.top = "74.5%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
      alert("Não tem energia suficiente");  
    }

    }
    }
}

//Cidade2
function casa2() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;

    if ((nameci == 'Casa2') || (energia <= 0)) {
       
    } else if (nameci == 'Casa') {
    if (confirm('Pretendes ir para a Casa2')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 600; 

    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa2';
    nameci = 'Casa2'; 
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "45%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "48%";            
        } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa2';
        nameci = 'Casa2'; 
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "45%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "48%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }          
    } else if (nameci == 'Gruta') {  
    if (confirm('Pretendes ir para a Casa2')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 330; 

    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa2';
    nameci = 'Casa2'; 
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "45%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "48%";            
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa2';
        nameci = 'Casa2'; 
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "45%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "48%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Casa1') {  
    if (confirm('Pretendes ir para a Casa2')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 600; 

    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa2';
    nameci = 'Casa2'; 
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "45%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "48%";             
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa2';
        nameci = 'Casa2'; 
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "45%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "48%";  
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Casa3') {   
    if (confirm('Pretendes ir para a Casa2')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 400; 

    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa2';
    nameci = 'Casa2'; 
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "45%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "48%";            
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa2';
        nameci = 'Casa2'; 
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "45%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "48%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Comércio') {       
    if (confirm('Pretendes ir para a Casa2')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 550; 

    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa2';
    nameci = 'Casa2'; 
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "45%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "48%";            
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa2';
        nameci = 'Casa2'; 
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "45%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "48%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Casino') {     
    if (confirm('Pretendes ir para a Casa2')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 350; 

    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa2';
    nameci = 'Casa2'; 
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "45%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "48%";            
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa2';
        nameci = 'Casa2'; 
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "45%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "48%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
      alert("Não tem energia suficiente");  
    }

    }
    }
}

//Cidade3
function casa3() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;

    if ((nameci == 'Casa3') || (energia <= 0)){
       
    } else if (nameci == 'Casa') {
    if (confirm('Pretendes ir para a Casa3')) {
    var energia = document.getElementById('energia');   
    var text1 = energia.textContent;   
    var energian = Number(text1);   
    energia = energian - 1000;

    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa3';
    nameci = 'Casa3';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "23.5%";
    document.getElementById("jeep").style.top = "73%";
    document.getElementById("tjeep").style.left = "23.5%";
    document.getElementById("tjeep").style.top = "76%";              
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa3';
        nameci = 'Casa3';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "23.5%";
        document.getElementById("jeep").style.top = "73%";
        document.getElementById("tjeep").style.left = "23.5%";
        document.getElementById("tjeep").style.top = "76%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }        
    } else {
       alert("Não tem energia suficiente");
    }

    }
    } else if (nameci == 'Gruta') {    
    if (confirm('Pretendes ir para a Casa3')) {
    var energia = document.getElementById('energia');   
    var text1 = energia.textContent;   
    var energian = Number(text1);   
    energia = energian - 430;

    if (energia >= 0) {
        var random = Math.floor(Math.random() * 100) + 1;
        
        if ((random >= 0) && (random < 90))  {
    document.getElementById('showjmname').innerHTML = 'Casa3';
    nameci = 'Casa3';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "23.5%";
    document.getElementById("jeep").style.top = "73%";
    document.getElementById("tjeep").style.left = "23.5%";
    document.getElementById("tjeep").style.top = "76%";             
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa3';
        nameci = 'Casa3';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "23.5%";
        document.getElementById("jeep").style.top = "73%";
        document.getElementById("tjeep").style.left = "23.5%";
        document.getElementById("tjeep").style.top = "76%";  
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }            
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Casa1') {  
    if (confirm('Pretendes ir para a Casa3')) {
    var energia = document.getElementById('energia');   
    var text1 = energia.textContent;   
    var energian = Number(text1);   
    energia = energian - 500;

    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa3';
    nameci = 'Casa3';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "23.5%";
    document.getElementById("jeep").style.top = "73%";
    document.getElementById("tjeep").style.left = "23.5%";
    document.getElementById("tjeep").style.top = "76%";   

    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa3';
        nameci = 'Casa3';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "23.5%";
        document.getElementById("jeep").style.top = "73%";
        document.getElementById("tjeep").style.left = "23.5%";
        document.getElementById("tjeep").style.top = "76%";   
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }        
    } else {
       alert("Não tem energia suficiente"); 
    }

    }
    } else if (nameci == 'Casa2') { 
    if (confirm('Pretendes ir para a Casa3')) {
    var energia = document.getElementById('energia');   
    var text1 = energia.textContent;   
    var energian = Number(text1);   
    energia = energian - 400;

    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa3';
    nameci = 'Casa3';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "23.5%";
    document.getElementById("jeep").style.top = "73%";
    document.getElementById("tjeep").style.left = "23.5%";
    document.getElementById("tjeep").style.top = "76%";  
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa3';
        nameci = 'Casa3';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "23.5%";
        document.getElementById("jeep").style.top = "73%";
        document.getElementById("tjeep").style.left = "23.5%";
        document.getElementById("tjeep").style.top = "76%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    } 

    } else {
        alert("Não tem energia suficiente");
    }        

    }
    } else if (nameci == 'Comércio') {
    if (confirm('Pretendes ir para a Casa3')) {
    var energia = document.getElementById('energia');   
    var text1 = energia.textContent;   
    var energian = Number(text1);   
    energia = energian - 350;

    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa3';
    nameci = 'Casa3';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "23.5%";
    document.getElementById("jeep").style.top = "73%";
    document.getElementById("tjeep").style.left = "23.5%";
    document.getElementById("tjeep").style.top = "76%";        
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa3';
        nameci = 'Casa3';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "23.5%";
        document.getElementById("jeep").style.top = "73%";
        document.getElementById("tjeep").style.left = "23.5%";
        document.getElementById("tjeep").style.top = "76%";  
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }           
    } else {
        alert("Não tem energia suficiente");
    }
    }
    } else if (nameci == 'Casino') {
    if (confirm('Pretendes ir para a Casa3')) {
    var energia = document.getElementById('energia');   
    var text1 = energia.textContent;   
    var energian = Number(text1);   
    energia = energian - 150;

    if (energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casa3';
    nameci = 'Casa3';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "54.5%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "23.5%";
    document.getElementById("jeep").style.top = "73%";
    document.getElementById("tjeep").style.left = "23.5%";
    document.getElementById("tjeep").style.top = "76%";        
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casa3';
        nameci = 'Casa3';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "54.5%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "23.5%";
        document.getElementById("jeep").style.top = "73%";
        document.getElementById("tjeep").style.left = "23.5%";
        document.getElementById("tjeep").style.top = "76%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }
              
    } else {
        alert("Não tem energia suficiente");
    }
    }
    }
}

//Casino
function casino() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;

    if (nameci == 'Casino') {  
        var rubis = document.getElementById('rubis');
        var text7 = rubis.textContent;
        var rubisn = Number(text7);
        rubis = rubisn;
        document.getElementById('rubis').innerHTML = rubis; 
        if (rubis >= 5) {
        if (confirm('Irás gastar 5 rubis')) {
        var rubis = document.getElementById('rubis');
        var text7 = rubis.textContent;
        var rubisn = Number(text7);
        rubis = rubisn - 5;
        document.getElementById('rubis').innerHTML = rubis;
        sessionStorage.setItem("QRubis", rubis); 
        rn = Math.floor(Math.random() * 100) + 1;
        if (rn >= 1 && rn <= 50) {
            alert('Parabéns recebeste 3000 de energia');
            energia = energia + 3000;
            document.getElementById('energia').innerHTML = energia;
            sessionStorage.setItem("QEnergia", energia); 
        }
        if (rn >= 51 && rn <= 63) {
            alert('Parabéns recebeste 13 pedras');
            var pedras = document.getElementById('pedra');
            var text5 = pedras.textContent;
            var pedrasn = Number(text5);
            pedras = pedrasn + 13;
            document.getElementById('pedra').innerHTML = pedras;
            sessionStorage.setItem("QPedras", pedras); 
        }
        if (rn >= 64 && rn <= 76) {
            alert('Parabéns recebeste 14 madeiras');
            var madeiras = document.getElementById('madeira');
            var text6 = madeiras.textContent;
            var madeirasn = Number(text6);
            madeiras = madeirasn + 14;
            document.getElementById('madeira').innerHTML = madeiras;
            sessionStorage.setItem("QMadeiras", madeiras);   
        }   
        if (rn >= 77 && rn <= 82) {
            alert('Parabéns recebeste 10 rubis');
            var rubis = document.getElementById('rubis');
            var text7 = rubis.textContent;
            var rubisn = Number(text7);
            rubis = rubisn + 10;
            document.getElementById('rubis').innerHTML = rubis; 
            sessionStorage.setItem("QRubis", rubis);  
        }
        if (rn >= 83 && rn <= 88) {
            alert('Parabéns recebeste 5000 de energia e 20 madeiras');
            var madeiras = document.getElementById('madeira');
            var text6 = madeiras.textContent;
            var madeirasn = Number(text6);
            madeiras = madeirasn + 20;
            energia = energia + 5000;
            document.getElementById('madeira').innerHTML = madeiras; 
            document.getElementById('energia').innerHTML = energia;
            sessionStorage.setItem("QMadeiras", madeiras); 
            sessionStorage.setItem("QEnergia", energia);   
        }
        if (rn >= 89 && rn <= 94) {
            alert('Parabéns recebeste 5000 de energia e 19 pedras');
            var pedras = document.getElementById('pedra');
            var text5 = pedras.textContent;
            var pedrasn = Number(text5);
            pedras = pedrasn + 19;
            energia = energia + 5000;
            document.getElementById('pedra').innerHTML = pedras; 
            document.getElementById('energia').innerHTML = energia;  
            sessionStorage.setItem("QPedras", pedras); 
            sessionStorage.setItem("QEnergia", energia); 
        }
        if (rn >= 95 && rn <= 99) {
            alert('Parabéns recebeste 6000 de energia, 20 madeiras e 19 pedras');
            var pedras = document.getElementById('pedra');
            var text5 = pedras.textContent;
            var pedrasn = Number(text5);
            var madeiras = document.getElementById('madeira');
            var text6 = madeiras.textContent;
            var madeirasn = Number(text6);
            madeiras = madeirasn + 20;
            pedras = pedrasn + 19;
            energia = energia + 6000;
            document.getElementById('madeira').innerHTML = madeiras;
            document.getElementById('pedra').innerHTML = pedras; 
            document.getElementById('energia').innerHTML = energia; 
            sessionStorage.setItem("QMadeiras", madeiras); 
            sessionStorage.setItem("QPedras", pedras); 
            sessionStorage.setItem("QEnergia", energia);  
        }
        if (rn == 100) {
            alert('Parabéns recebeste 8000 de energia, 30 madeiras, 29 pedras e 30 rubis');
            var pedras = document.getElementById('pedra');
            var text5 = pedras.textContent;
            var pedrasn = Number(text5);
            var madeiras = document.getElementById('madeira');
            var text6 = madeiras.textContent;
            var madeirasn = Number(text6);
            var rubis = document.getElementById('rubis');
            var text7 = rubis.textContent;
            var rubisn = Number(text7);
            madeiras = madeirasn + 30;
            pedras = pedrasn + 29;
            energia = energia + 8000;
            rubis = rubisn + 30;  
            document.getElementById('rubis').innerHTML = rubis; 
            document.getElementById('madeira').innerHTML = madeiras;
            document.getElementById('pedra').innerHTML = pedras; 
            document.getElementById('energia').innerHTML = energia; 
            sessionStorage.setItem("QMadeiras", madeiras); 
            sessionStorage.setItem("QRubis", rubis); 
            sessionStorage.setItem("QPedras", pedras); 
            sessionStorage.setItem("QEnergia", energia);  
        }   
        } else {

        }
        } else {
            alert('Não tens a quantidade necessária de rubis')
        }      
    } else if (nameci == 'Casa') {
    if (confirm('Pretendes ir para o Casino')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 950;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casino';
    nameci = 'Casino';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "55%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "90.5%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "93.5%";
    } else {
        alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casino';
        nameci = 'Casino';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "55%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "90.5%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "93.5%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }
 
    } else {
        alert("Não tem energia suficiente");
    }      
    } 
    } else if (nameci == 'Gruta') {
    if (confirm('Pretendes ir para o Casino')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 680;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casino';
    nameci = 'Casino';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "55%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "90.5%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "93.5%";         
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casino';
        nameci = 'Casino';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "55%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "90.5%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "93.5%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }

    } else {
        alert("Não tens energia suficiente");
    }      
    }       
    } else if (nameci == 'Casa1') {
    if (confirm('Pretendes ir para o Casino')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 450;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casino';
    nameci = 'Casino';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "55%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "90.5%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "93.5%";         
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casino';
        nameci = 'Casino';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "55%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "90.5%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "93.5%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }

    } else {
        alert("Não tens energia suficiente");
    }       
    }      
    } else if (nameci == 'Casa2') {
    if (confirm('Pretendes ir para o Casino')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 350;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casino';
    nameci = 'Casino';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "55%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "90.5%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "93.5%";         
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casino';
        nameci = 'Casino';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "55%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "90.5%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "93.5%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }

    } else {
        alert("Não tens energia suficiente");
    }       
    }       
    } else if (nameci == 'Casa3') {  
    if (confirm('Pretendes ir para o Casino')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 250;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casino';
    nameci = 'Casino';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "55%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "90.5%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "93.5%"; 
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casino';
        nameci = 'Casino';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "55%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "90.5%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "93.5%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }

    } else {
        alert("Não tens energia suficiente");
    }       
    }      
    } else if (nameci == 'Comércio') {    
    if (confirm('Pretendes ir para o Casino')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;
    var energian = Number(text1);
    energia = energian - 200;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Casino';
    nameci = 'Casino';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "55%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "52%";
    document.getElementById("jeep").style.top = "90.5%";
    document.getElementById("tjeep").style.left = "52%";
    document.getElementById("tjeep").style.top = "93.5%";
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Casino';
        nameci = 'Casino';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "55%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "52%";
        document.getElementById("jeep").style.top = "90.5%";
        document.getElementById("tjeep").style.left = "52%";
        document.getElementById("tjeep").style.top = "93.5%";
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }
 
    } else {
        alert("Não tens energia suficiente");
    }        
    }  
    }
}

//Comércio
function comercio() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;

    if (nameci == 'Comércio') {
    if (confirm('Pretende ver o que está hoje há venda')) {
        window.location = "comercio.html";
        //Madeira
        var madeiras = document.getElementById('madeira');
        var text6 = madeiras.textContent;
        var madeirasn = Number(text6);
        madeiras = madeirasn;
        sessionStorage.setItem("QMadeiras", madeiras);

        //Energia
        var energia = document.getElementById('energia');
        var text1 = energia.textContent;
        var energian = Number(text1);
        energia = energian;
        sessionStorage.setItem("QEnergia", energia);
        
        //Pedra
        var pedras = document.getElementById('pedra');
        var text5 = pedras.textContent;
        var pedrasn = Number(text5);
        pedras = pedrasn;
        sessionStorage.setItem("QPedras", pedras);

        //Rubi
        var rubis = document.getElementById('rubis');
        var text7 = rubis.textContent;
        var rubisn = Number(text7);
        rubis = rubisn;
        sessionStorage.setItem("QRubis", rubis);
    } else {

    }
    } else if (nameci == 'Casa') {
    if (confirm('Pretendes ir para o Comércio')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 750;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Comércio';
    nameci = 'Comércio';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "58%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "73%";
    document.getElementById("jeep").style.top = "90%";
    document.getElementById("tjeep").style.left = "73%";
    document.getElementById("tjeep").style.top = "93%";        
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Comércio';
        nameci = 'Comércio';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "58%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "73%";
        document.getElementById("jeep").style.top = "90%";
        document.getElementById("tjeep").style.left = "73%";
        document.getElementById("tjeep").style.top = "93%"; 

        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }
         
    } else {
        alert("Não tens energia suficiente");
    }       
    } 
    } else if (nameci == 'Gruta') {
    if (confirm('Pretendes ir para o Comércio')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 680;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Comércio';
    nameci = 'Comércio';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "58%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "73%";
    document.getElementById("jeep").style.top = "90%";
    document.getElementById("tjeep").style.left = "73%";
    document.getElementById("tjeep").style.top = "93%";        
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Comércio';
        nameci = 'Comércio';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "58%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "73%";
        document.getElementById("jeep").style.top = "90%";
        document.getElementById("tjeep").style.left = "73%";
        document.getElementById("tjeep").style.top = "93%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }
         
    } else {
        alert("Não tens energia suficiente");
    }       
    }  
    } else if (nameci == 'Casa1') {
    if (confirm('Pretendes ir para o Comércio')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 250;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Comércio';
    nameci = 'Comércio';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "58%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "73%";
    document.getElementById("jeep").style.top = "90%";
    document.getElementById("tjeep").style.left = "73%";
    document.getElementById("tjeep").style.top = "93%";        
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Comércio';
        nameci = 'Comércio';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "58%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "73%";
        document.getElementById("jeep").style.top = "90%";
        document.getElementById("tjeep").style.left = "73%";
        document.getElementById("tjeep").style.top = "93%";  
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }
         
    } else {
        alert("Não tens energia suficiente");
    }      
    }  
    } else if (nameci == 'Casa2') {
    if (confirm('Pretendes ir para o Comércio')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 550;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Comércio';
    nameci = 'Comércio';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "58%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "73%";
    document.getElementById("jeep").style.top = "90%";
    document.getElementById("tjeep").style.left = "73%";
    document.getElementById("tjeep").style.top = "93%"; 
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Comércio';
        nameci = 'Comércio';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "58%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "73%";
        document.getElementById("jeep").style.top = "90%";
        document.getElementById("tjeep").style.left = "73%";
        document.getElementById("tjeep").style.top = "93%"; 
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }       
    } else {
        alert("Não tens energia suficiente");
    }       
    } 
    } else if (nameci == 'Casa3') {
    if (confirm('Pretendes ir para o Comércio')) {
    var energia = document.getElementById('energia');
    var text1 = energia.textContent;  
    var energian = Number(text1);
    energia = energian - 450;
    
    if(energia >= 0) {
    var random = Math.floor(Math.random() * 100) + 1;
    
    if ((random >= 0) && (random < 90)) {
    document.getElementById('showjmname').innerHTML = 'Comércio';
    nameci = 'Comércio';
    sessionStorage.setItem("localname", nameci);
    document.getElementById("showjmname").style.left = "58%";
    document.getElementById('energia').innerHTML = energia;
    sessionStorage.setItem("QEnergia", energia);
    document.getElementById("jeep").style.left = "73%";
    document.getElementById("jeep").style.top = "90%";
    document.getElementById("tjeep").style.left = "73%";
    document.getElementById("tjeep").style.top = "93%";         
    } else {
                alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);
       
        document.getElementById('showjmname').innerHTML = 'Comércio';
        nameci = 'Comércio';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "58%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        document.getElementById("jeep").style.left = "73%";
        document.getElementById("jeep").style.top = "90%";
        document.getElementById("tjeep").style.left = "73%";
        document.getElementById("tjeep").style.top = "93%";      

        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
    }
        
    } else {
        alert("Não tens energia suficiente");
    }       
    }  
    } else if (nameci == 'Casino') {
        if (confirm('Pretendes ir para o Comércio')) {
        var energia = document.getElementById('energia');
        var text1 = energia.textContent;
        var energian = Number(text1);
        energia = energian - 200;
        if (energia >= 0) {
        var random = Math.floor(Math.random() * 100) + 1;
        
        if ((random >= 0) && (random < 90)) {
        document.getElementById('showjmname').innerHTML = 'Comércio';
        nameci = 'Comércio';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "58%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);      
        document.getElementById("jeep").style.left = "73%";
        document.getElementById("jeep").style.top = "90%";
        document.getElementById("tjeep").style.left = "73%";
        document.getElementById("tjeep").style.top = "93%";            
        } else {
                    alert("Foste Roubado!!! -10 madeiras e -10 pedras");
        
        var RMadeiras = document.getElementById('madeira');
        var textM = RMadeiras.textContent;
        var RMadeirasn = Number(textM);
        
        var RPedras = document.getElementById('pedra');
        var textP = RPedras.textContent;
        var RPedrasn = Number(textP);

        document.getElementById('showjmname').innerHTML = 'Comércio';
        nameci = 'Comércio';
        sessionStorage.setItem("localname", nameci);
        document.getElementById("showjmname").style.left = "58%";
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);      
        document.getElementById("jeep").style.left = "73%";
        document.getElementById("jeep").style.top = "90%";
        document.getElementById("tjeep").style.left = "73%";
        document.getElementById("tjeep").style.top = "93%";  
       
        if((RMadeirasn <= 0) && (RPedrasn <= 0)) {
            
        } else if((RMadeirasn >= 0) && (RPedrasn <= 0)) {
            if((RMadeirasn >= 0) && (RMadeirasn <= 9)) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);                
            } else {
            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);  
            } 
        } else if((RPedrasn >= 0) && (RMadeirasn <= 0)) {
            if((RPedrasn >= 0) && (RPedrasn <= 9)) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                
            } else {
            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                    
            }
        } else {
            if(((RMadeirasn >= 0) && (RMadeirasn <= 9)) && ((RPedrasn >= 10))) {
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras); 

            RPedras = RPedrasn - 10;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras); 
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 10))) {
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);

            RMadeiras = RMadeirasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            } else if(((RPedrasn >= 0) && (RPedrasn <= 9)) && ((RMadeirasn >= 0) && (RMadeirasn <= 9))){
            var RMadeirasn2 = RMadeirasn;  
            RMadeiras = RMadeirasn - RMadeirasn2;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            var RPedrasn2 = RPedrasn;  
            RPedras = RPedrasn - RPedrasn2;
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);
            } else {
            RMadeiras = RMadeirasn - 10;
            RPedras = RPedrasn - 10;
            document.getElementById('madeira').innerHTML = RMadeiras;
            sessionStorage.setItem("QMadeiras", RMadeiras);
            document.getElementById('pedra').innerHTML = RPedras;
            sessionStorage.setItem("QPedras", RPedras);                 
        } 
        }
        }

        } else {
            alert("Não tens energia suficiente");
        }           
        } 
    }
}


function minerar() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;

    if (energia >= 1000) {
        if (confirm('Irás gastar 1000 de energia')) {
        energia = energia - 1000;
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        ren = Math.floor(Math.random() * 100) + 1;
        if (ren >= 1 && ren <= 80) {
            alert('Parabéns recebeste 19 pedras');
            var pedras = document.getElementById('pedra');
            var text5 = pedras.textContent;
            var pedrasn = Number(text5);
            pedras = pedrasn + 19;
            document.getElementById('pedra').innerHTML = pedras;
            sessionStorage.setItem("QPedras", pedras);
        }
        if (ren >= 81 && ren <= 94) {
            alert('Parabéns recebeste 9 madeiras');
            var madeiras = document.getElementById('madeira');
            var text6 = madeiras.textContent;
            var madeirasn = Number(text6);
            madeiras = madeirasn + 9;
            document.getElementById('madeira').innerHTML = madeiras;
            sessionStorage.setItem("QMadeiras", madeiras);
        }
        if (ren >= 95 && ren <= 100) {
            alert('Parabéns recebeste 10 rubis');
            var rubis = document.getElementById('rubis');
            var text7 = rubis.textContent;
            var rubisn = Number(text7);
            rubis = rubisn + 10;
            document.getElementById('rubis').innerHTML = rubis; 
            sessionStorage.setItem("QRubis", rubis); 
        }     
        } else {

        }
        } else {
            alert('Não tens a quantidade necessária de energia')
        }
}

function explorar() {
    energia = document.getElementById('energia');
    text1 = energia.textContent;
    energian = Number(text1);
    energia = energian;
    
    if (energia >= 1000) {
        if (confirm('Irás gastar 1000 de energia')) {
        energia = energia - 1000;
        document.getElementById('energia').innerHTML = energia;
        sessionStorage.setItem("QEnergia", energia);
        ren = Math.floor(Math.random() * 100) + 1;
        if (ren >= 1 && ren <= 80) {
            alert('Parabéns recebeste 19 madeiras');
            var madeiras = document.getElementById('madeira');
            var text5 = madeiras.textContent;
            var madeirasn = Number(text5);
            madeiras = madeirasn + 19;
            document.getElementById('madeira').innerHTML = madeiras;
            sessionStorage.setItem("QMadeiras", madeiras);
        }
        if (ren >= 81 && ren <= 94) {
            alert('Parabéns recebeste 9 pedras');
            var pedras = document.getElementById('pedra');
            var text6 = pedras.textContent;
            var pedrasn = Number(text6);
            pedras = pedrasn + 9;
            document.getElementById('pedra').innerHTML = pedras;
            sessionStorage.setItem("QPedras", pedras);
        }
        if (ren >= 95 && ren <= 100) {
            alert('Parabéns recebeste 10 rubis');
            var rubis = document.getElementById('rubis');
            var text7 = rubis.textContent;
            var rubisn = Number(text7);
            rubis = rubisn + 10;
            document.getElementById('rubis').innerHTML = rubis; 
            sessionStorage.setItem("QRubis", rubis); 
        }     
        } else {

        }
        } else {
            alert('Não tens a quantidade necessária de energia')
        }
}
