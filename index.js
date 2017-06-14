
     function number2words(number) {
       // Your code here
       angka = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
       result = "";
       if (number < 12) {
     	  result += " " + angka[number];
       } else if (number < 20) {
     	  result += number2words(number - 10) + " Belas";
       } else if (number < 100) {
     	  result += number2words(Math.floor(number / 10)) + " Puluh" + number2words(number % 10);
       } else if (number < 200) {
     	  result += " Seratus" + number2words(number - 100);
       } else if (number < 1000) {
     	  result += number2words(Math.floor(number / 100)) + " Ratus" + number2words(number % 100);
       } else if (number < 2000) {
     	  result += " Seribu" + number2words(number - 1000);
       } else if (number < 1000000) {
     	  result += number2words(Math.floor(number / 1000)) + " Ribu" + number2words(number % 1000);
       } else if (number < 1000000000) {
     	  result += number2words(Math.floor(number / 1000000)) + " Juta" + number2words(number % 1000000);
       } else if (number < 1000000000000) {
     	  result += number2words(Math.floor(number / 1000000000)) + " Milyar" + number2words(number % 1000000000);
       } else if (number < 1000000000000000) {
     	  result += number2words(Math.floor(number / 1000000000000)) + " Trilyun" + number2words(number % 1000000000000);
       }
       return result;
     }

     module.exports = {
          number2words
     }
