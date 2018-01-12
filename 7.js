window.onload = function() {

    // Task 1
// https://javascript.ru/forum/events/45587-otlovit-sobytie-storage.html
    document.getElementById('btn1').onclick = supports_html5_storage;
    var check1 = document.getElementById('check1');

    function supports_html5_storage() {
        try {
            check1.innerHTML = 'Результат выведен в консоль';
            console.log ("localStorage - поддерживается");
            return 'localStorage' in window && window['localStorage'] !== null; 

        } catch (e) {
            check1.innerHTML = 'Результат выведен в консоль';
            console.log ("localStorage - не поддерживается");
            return false;           
        }
    }


    // Task 2

    if (localStorage.getItem('background')!=null) {
        var colour = localStorage.getItem('background');
        document.getElementsByTagName('link')[0].href = colour;
    }

    document.getElementById('yellow').onclick = function () {
        document.getElementsByTagName('link')[0].href = '7.css';
        localStorage.setItem('background','7.css');
    }

    document.getElementById('cyan').onclick = function () {
        document.getElementsByTagName('link')[0].href = '8.css';
        localStorage.setItem('background','8.css');
    }


    // Task 3

    var mas3 = {
        Имя: 'Иванов',
        Фамилия: 'Иван',
        Отчество: 'Иванович',
        Гражданстов: 'Украинец',
        Специальность: 'Водитель',
        Возраст: 50,
    }
    var masString = JSON.stringify(mas3);


    localStorage.setItem('stuff', masString);

    var out3 = document.getElementById('out3');

    document.getElementById('btn3').onclick = function () {
        var stuff = localStorage.getItem('stuff');
        console.log(stuff);
        var masout3 = JSON.parse(stuff);
        var out = '';
        for (var key in masout3) {
            out += key + ' - ' + masout3[key] + ';' + '<br>';
        }
        out3.innerHTML = out;
    }


    // Task 4

    function time () {
        var timer= setTimeout(popBox, 4000);
        if (localStorage.getItem('confirm') == 'closeWindow') {
            clearTimeout(timer);
        }
    }
     time ();
// http://www.wisdomweb.ru/JS/popbox.php
    function popBox(){
        var x=confirm("Согласен");
        if (x==true){
            localStorage.setItem('confirm', 'closeWindow');
        }
        else {
            localStorage.setItem('confirm', 'openWindow');
        }
    }
    
   


    // Task 5

    var allStorage = document.getElementById('locStorageOut');

    document.getElementById('btn5').onclick = function () {

        var out5 = '';
        for (var key in localStorage) {
            out5 += key + ' - ' + localStorage[key] + ';' + '<br>';
        }
        allStorage.innerHTML = out5;
    }


}

// https://tproger.ru/articles/localstorage/
// http://javasampleapproach.com/frontend/jquery/html-5-web-localstorage-using-jquery-cache-data-springboot-restapis