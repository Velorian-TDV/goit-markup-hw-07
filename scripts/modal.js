(() => {
  // Modal var obj
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  // Modal events
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // backdrop togle function
  function toggleModal() {
    refs.modal.classList.toggle("backdrop-hiden");
  }
})();