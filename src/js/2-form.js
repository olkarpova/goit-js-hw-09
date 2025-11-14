const formData = { email: "", message: "" };
const localStorageKey = "feedback-form-state";


const form = document.querySelector(".js-feedback-form");

form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value.trim(); 
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", e => {
    e.preventDefault();

    

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
});

const saveData = localStorage.getItem(localStorageKey);
if (saveData) {
    const parsedData = JSON.parse(saveData);
    form.email.value = parsedData.email || "";
    form.message.value = parsedData.message || "";
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
}
// -----------------приклад з лекції 05.11 Модуль 9. Модульність коду-------------------

// const STORAGE_KEY = 'feedback-msg';
// const form = document.querySelector('.feedback_form');
// const textarea = form.querySelector('textarea');

// form.addEventListener('input', () => {
//     const formData = new FormData(form); 
    // Створюємо об’єкт FormData, який автоматично збирає всі поля форми і їхні значення.

//     const values = {
//         name: formData.get('name'),
//         message: formData.get('message'),
//     };

//     saveToLS(STORAGE_KEY, values);
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const data = loadFromLS(STORAGE_KEY);
//     form.elements.name.value = data.name;
//     form.elements.message.value = data.message;
// })

// function saveToLS(key, value) {
//     const zip = JSON.stringify(value);
//     // const item = localStorage.getitem(key);
//     // if (!item) {
//     localStorage.setItem(key, zip);
// }
// function loadFromLS(key) {
//     const zip = localStorage.getItem(key);
//     try {
//         const value = JSON.parse(zip);
//         return value;
//      } catch {
//         return zip;
//     }
// }