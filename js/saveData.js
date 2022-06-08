'use strict';

const form = document.querySelector('#form-post');

const email = form.querySelector('#email');

const config = {
    apiKey: "AIzaSyDPdB0RgCu71-KTvMEihpJpqD6ytcAdfoc",
    authDomain: "nomadhouse-dcc5d.firebaseapp.com",
    projectId: "nomadhouse-dcc5d",
    storageBucket: "nomadhouse-dcc5d.appspot.com",
    messagingSenderId: "682037132934",
    appId: "1:682037132934:web:d4f4e5f6b397dfb644db07",
    measurementId: "G-917ZMEV2DV",
    databaseURL: "https://nomadhouse-dcc5d-default-rtdb.firebaseio.com/",
    storageBucket: "nomadhouse-dcc5d.appspot.com"
};

firebase.initializeApp(config);

var actionCodeSettings = {
    url: 'https://www.mynomadhouse.com',
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

