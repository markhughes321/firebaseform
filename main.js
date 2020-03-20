  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBV9OWhiTQ0_mSQRIOys9_03PCiC2RZraw",
    authDomain: "gorkville.firebaseapp.com",
    databaseURL: "https://gorkville.firebaseio.com",
    projectId: "gorkville",
    storageBucket: "gorkville.appspot.com",
    messagingSenderId: "481238572240",
    appId: "1:481238572240:web:13996d01106a9939e552d5",
    measurementId: "G-PEPNRECKR3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}