// TODO: 2. Select the elements with the following IDs
// * modal
const modal = document.querySelector("#modal")
// * open-modal-btn
const openModalBtn = document.querySelector("#open-modal-btn")
// * close-modal-btn
const closeModalBtn = document.querySelector("#close-modal-btn")
// * BONUS: overlay
const ovrLay = document.querySelector("#overlay")

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

openModalBtn.addEventListener("click", e => {
  modal.classList.add("open")
  overlay.classList.add("open")
})

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal

closeModalBtn.addEventListener("click", closeModal)

// BONUS: Also remove the class "open" from the overlay

overlay.addEventListener("click", closeModal)

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

function closeModal() {
  modal.classList.remove("open")
  overlay.classList.remove("open")
}
