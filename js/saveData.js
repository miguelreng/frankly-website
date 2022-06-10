'use strict';

const form = document.querySelector('#form-post');
const email = form.querySelector('#email');

const config = {
    apiKey: "AIzaSyBokEehcl1lHlB7tozPq1DxLQdNMNpzKpg",
    authDomain: "frankly-gg.firebaseapp.com",
    projectId: "frankly-gg",
    storageBucket: "nomadhouse-dcc5d.appspot.com",
    messagingSenderId: "28513870358",
    appId: "1:28513870358:web:5d9f8729c138cf15604b37",
    measurementId: "G-NKXYVZ0CBC",
    databaseURL: "https://frankly-gg-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "frankly-gg.appspot.com"
};

firebase.initializeApp(config);

var actionCodeSettings = {
    url: 'https://frankly.gg',
    handleCodeInApp: true 
};

var storage = firebase.storage();

function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();   
        if (email.value == null || email.value == "") {
            toggleModal('success-form');                    
        } else {            
            var requestAccess = firebase.database().ref('database').child('request-access').push();                    

            window.localStorage.setItem('PostKey', requestAccess.key);
            
            requestAccess.set({
                email: email.value
            });                                                                             
            toggleModal('success-form')                                            
        }
    })
}

