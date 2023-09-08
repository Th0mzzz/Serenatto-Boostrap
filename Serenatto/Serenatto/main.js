const modeBtn = document.querySelector("#mode_btn")
const body = document.querySelector('body')

modeBtn.addEventListener('click', () =>{
    
    const modo = modeBtn.checked ? 'dark' : "light"
    body.setAttribute("data-bs-theme", modo)

})