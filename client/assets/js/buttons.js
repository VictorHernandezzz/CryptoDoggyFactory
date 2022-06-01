const dogColorsBtn = document.getElementById("colorsMenuBtn");
dogColorsBtn.addEventListener("click", showColorsMenu);

const dogAttributesBtn = document.getElementById("attributesMenuBtn");
dogAttributesBtn.addEventListener("click", showAttributesMenu);

async function showColorsMenu() {
    $('.dogColorsClass').css('display', 'block')
    $('.dogAttributesClass').css('display', 'none')
}

async function showAttributesMenu() {
    $('.dogAttributesClass').css('display', 'block')
    $('.dogColorsClass').css('display', 'none')
}