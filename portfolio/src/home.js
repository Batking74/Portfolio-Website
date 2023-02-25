//  // Countdown
//   // Step 1. What element do we want to animate?
//   const countdown = document.querySelector("#countdown");
//   // Step 2. What function will change it each time?

//   const countItDown = () => {
//     const currentTime = parseFloat(countdown.textContent);
//     if (currentTime > 0) {
//        countdown.textContent = currentTime - 1;   
//     } else {
//         window.clearInterval(timer);
//         location.replace('https://www.instagram.com/mr_blacknificent/')
//     }
    
//   };

// //   Step 3: Call that on an interval
//   var timer = window.setInterval(countItDown, 1000);

// // Toggles
// const backgroundBtn = document.querySelector('#background-Toggle');
// const navigation = document.querySelector('.navbar')
// const footer = document.querySelector('#footerBackgroundColorToggle')
// const uniqueText = document.querySelectorAll("#highlight-Toggle");
// backgroundBtn.addEventListener('click', () => {
//     document.body.classList.toggle('changeBackgroundColor');
//     navigation.classList.toggle('changeNavColorByToggle');
//     footer.classList.toggle('footerBackgroundColorToggle');
//     uniqueText.classList.toggle('highlight-Toggle');
// })

// // Play Music
// const playMusic = document.querySelector('.playMusic');
// playMusic.addEventListener('click', () => {
//     playMusic.innerHTML = `<svg style="width: 20px; height: 20px" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>`;
// })

// function sendEmail() {
//     Email.send({
//         Host : 'smtp.elasticemail.com',
//         Username : 'nazirknuckles@gmail.com',
//         Password : '5DB14C00F5337AB8773C8F0FF81E5F4B7206',
//         SecureToken : "f6556e03-5b1c-4695-b449-486411aa4870",
//         To : 'Hello@gmail.com',
//         From : email.value,
//         Subject : "New User!",
//         Body : msg.value
//     }).then(
//       message => alert(message)
//     )
// }