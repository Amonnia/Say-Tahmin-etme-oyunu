'use strict';


let secretNumber = Math.trunc((Math.random()*20 )+1)  // trunc inte çevirmek için
let score = 5;



    const displayMessage = function(message){
        document.querySelector('.message').textContent = message;
    }


    document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.kontrol-text').value);
    console.log(guess,typeof guess)
    
   

   //input boş girilirse
     if (!guess) {
        displayMessage('Bir Sayı Giriniz!')
        document.querySelector('body').style.backgroundColor ='#7F1F1F'
    }
    
     
    //sayılar birbiriyle eşleşirse
    else if(guess===secretNumber){
        score--;
        displayMessage('Doğru Tahmin!');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor ='#60b347'
        document.querySelector('.kontrol-text').disabled= true;
        document.querySelector('.check').disabled= true;
        document.querySelector('.kontrol-text').value='';
    }

    
   
    //sayı yanlış ise
    else if(guess !== secretNumber){
        score--;
        document.querySelector('.label-score').textContent = `Deneme Hakkı:${score}`; 
        document.querySelector('body').style.backgroundColor ='#000'
        if(score==0){
            displayMessage('Kaybettiniz.Baştan Başlayınız.')
            document.querySelector('.kontrol-text').disabled= true;
            document.querySelector('.check').disabled= true;
            document.querySelector('.kontrol-text').value='';
        }

        guess>secretNumber ? displayMessage('Daha Düşük')  : displayMessage('Daha Yüksek');
    }


 })


 document.querySelector('.bastan-baslat').addEventListener('click',function(){
    score = 5;
    secretNumber = Math.trunc(Math.random()*20)
    displayMessage('Tahmin Ediliyor...')
    document.querySelector('.kontrol-text').disabled= false;
    document.querySelector('.check').disabled= false;
    document.querySelector('.kontrol-text').value='';
    document.querySelector('.label-score').textContent = `Deneme Hakkı:${score}`;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.kontrol-text').value = '';
    document.querySelector('body').style.backgroundColor ='#262626'

 })


