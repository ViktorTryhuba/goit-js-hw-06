const form = document.querySelector('#name-input')
const name = document.querySelector('#name-output')


// CHANGE



form.addEventListener("change" ,(event) => {
    if (event.currentTarget.value.trim() !== '') {
        name.textContent = event.currentTarget.value;
    } else {
        name.textContent = "Anonymous"
    }
})











// INPUT


// form.addEventListener("input" ,(event) => {
//     if (event.currentTarget.value.trim() !== '') {
//         name.textContent = event.currentTarget.value;
//     } else {
//         name.textContent = "Anonymous"
//     }
// })
