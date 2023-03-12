(() => {
  // Menu var obj
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  // Menu events
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  // Navigator togle function
  function toggleMenu() {
    refs.menu.classList.toggle("navigator-hiden");
  }
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