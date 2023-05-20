let purcashe = {};
let btn = document.querySelector(".button");
let options = form.selectCategory.options  /* Коллекция всех option */
let selectOption = form.selectCategory.selectedIndex /* Выбранный option */
purcashe.name = form.name.value;
purcashe.price = form.price.value;
purcashe.category = options[selectOption].innerText;
let tbody = document.querySelector(".tbody")

btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log(options[selectOption].innerText)
    tbody.insertAdjacentHTML('beforeEnd',
        `
<tr class="purcashes__item purcashes__row" data-category="product">
    <td class="purcashes__td">${form.name.value}</td>
    <td class="purcashes__td">${options[selectOption].innerText}</td>
    <td class="purcashes__td">${form.price.value}</td>
    <td class="purcashes__td"><i class="purcashes__item-del fa-solid fa-xmark"></i></td>
</tr>

`
    )
})







