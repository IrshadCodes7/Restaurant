import tableImg from "./table.jpg";

export function homePage() {
    const content = document.querySelector("#content");
    content.innerHTML = `
          <h1>Restaurant</h1>
                <h3>Fine Dine with Us</h3>
                <p>We are the Best.</p>
                <img src="${tableImg}" alt="error">
    `;
}