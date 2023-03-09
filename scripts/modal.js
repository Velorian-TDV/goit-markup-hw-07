(() => {
  const closeButton = document.querySelector('.closeBurger')
  const burger = document.querySelector('.burgerButton');
  const navi = document.querySelector('.header-navigatorAndAddress')


  closeButton.addEventListener('click', event => {
    navi.style.transform = 'translateY(-300vh)'
    navi.style.opacity = '0';
  })

  burger.addEventListener('click', event => {
    navi.style.transform = 'translateY(0vh)';
    navi.style.opacity = '1';
  })

})();


// const fun1 = () => {
//   return new Promise((resolve, reject) => {

//     if (Math.random().toFixed() == 1) {
//       setTimeout(() => {
//         resolve();
//         console.log(`
//         Nice, function get resolve, 
//         random is on our side,
//         let's go to the next function ...
//         `)
//       }, 2000)
//     } else {
//       reject();
//       console.log('Better luck next time, try again later ...')
//     }
//   })
// }

// const fun2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log('fun2')
//     }, 1000)
//   })
// }

// const fun3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log('fun3')
//     }, 3000)
//   })
// }

// (async () => {
//   await fun1();
//   await fun2();
//   await fun3();
// })();

