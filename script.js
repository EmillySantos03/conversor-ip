function acessar_inputs() {
   //acessar o valor em cada um dos 4 inputs
   var valor1 = document.querySelector('#valor1').value;
   valor2 = document.querySelector('#valor2').value;
   valor3 = document.querySelector('#valor3').value;
   valor4 = document.querySelector('#valor4').value;
   calcula(valor1, valor2, valor3, valor4);
}

function calcula(num, num2, num3, num4) {
   if (num != 127 || num4 != 255 || num && num2 && num3 && num4 != 255) {
      if (num <= 126 && num > 0) {
         if (num == 10) {
            alert("IP válido e reservado para Lan");
         }
         classe = "Classe: A";
         mascara = " Máscara: 255.0.0.0";
         funcao = "Função da Máscara: rede.host.host.host";
         endereco = ("Endereço de rede:" + num + ".0.0.0");
         endI = ("Endereço Inicial:" + num + "." + num2 + "." + num3 + ".1");
         endF = ("Endereço Final:" + num + ".255.255.254");
         broadcast = ("Broadcast: " + num + "255.255.255");
      }
      else if (num >= 128 && num < 191) {
         if (num == 172 && num2 >= 16 && num2 <= 31) {
            alert("IP válido e reservado para Lan");
         }
         classe = "Classe: B";
         mascara = " Máscara: 255.255.0.0";
         funcao = "Função da Máscara: rede.rede.host.host";
         endereco = ("Endereço de rede:" + num + ".0.0.0");
         endI = ("Endereço Inicial:" + num + "." + num2 + ".0.1");
         endF = ("Endereço Final:" + num + "." + num2 + ".255.254");
         broadcast = ("Broadcast: " + num + "." + num2 + "." + "255.255");
      }
      else if (num >= 192 && num <= 223) {
         if (num == 192 && num2 == 168) {
            alert("IP válido e reservado para Lan");
         }
         classe = "Classe: C";
         mascara = " Máscara: 255.255.255.0";
         funcao = "Função da Máscara: rede.rede.rede.host";
         endereco = ("Endereço de rede:" + num + ".0.0.0");
         endI = ("Endereço Inicial:" + num + "." + num2 + "." + num3 + ".1");
         endF = ("Endereço Final:" + num + "." + num2 + "." + num3 + ".254");
         broadcast = ("Broadcast: " + num + "." + num2 + "." + num3 + ".255");
      }
      else if (num >= 224 && num <= 239) {
         alert("IP não reservado para Lan e reservado para tráfego multicast");
         classe = "Classe: D";
         mascara = null;
         funcao = null;
         endereco = null;
         endI = null;
         endF = null;
         broadcast = null;
      }
      else if (num >= 240 && num <= 255) {
         alert("IP não reservado para Lan e reservado para usos futuros");
         classe = "Classe: E";
         mascara = null;
         funcao = null;
         endereco = null;
         endI = null;
         endF = null;
         broadcast = null;
      } else { }
      var binario = "";
      var resto;
      var binario2 = "";
      var resto2;
      var binario3 = "";
      var resto3;
      var binario4 = "";
      var resto4;
      if (num && num2 && num3 && num4 >= 0 && num && num2 && num3 && num4 <= 255) {
         for (i = 0; i < 8; i++) {
            resto = (num % 2);
            num = Math.trunc((num / 2));
            binario += resto;
         }
         for (i = 0; i < 8; i++) {
            resto2 = (num2 % 2);
            num2 = Math.trunc((num2 / 2));
            binario2 += resto2;
         }
         for (i = 0; i < 8; i++) {
            resto3 = (num3 % 2);
            num3 = Math.trunc((num3 / 2));
            binario3 += resto3;
         }
         for (i = 0; i < 8; i++) {
            resto4 = (num4 % 2);
            num4 = Math.trunc((num4 / 2));
            binario4 += resto4;
         }
      } else {
         alert("Por Favor digite um valor válido para IP em todos os octetos, ou seja, inteiro, positivo e menor ou igual a 255");
      }
      document.querySelector('#result1').innerHTML = classe;
      document.querySelector('#result2').innerHTML = mascara;
      document.querySelector('#result3').innerHTML = funcao;
      document.querySelector('#result4').innerHTML = endereco;
      document.querySelector('#result5').innerHTML = endI;
      document.querySelector('#result6').innerHTML = endF;
      document.querySelector('#result7').innerHTML = broadcast;
      document.querySelector('#result8').innerHTML = "Binário :" +
         binario.split('').reverse().join('') + "." +
         binario2.split('').reverse().join('') + "." +
         binario3.split('').reverse().join('') + "." +
         binario4.split('').reverse().join('');
      vetor = [classe, mascara, funcao, endereco, endI, endF, broadcast,
         , binario, binario2, binario3, binario4];
      return vetor;
   } else {
      alert("IP inválido")
   }
}
