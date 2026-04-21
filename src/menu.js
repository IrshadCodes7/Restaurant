import menuImg from "./menu.jpg"

export function menuPage(){
    const content = document.querySelector("#content");
    content.innerHTML = `
         <img src="${menuImg}" alt="error">
    `;
}