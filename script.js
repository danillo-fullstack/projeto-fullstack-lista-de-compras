const adicionar = document.querySelector('button');
const itens = document.querySelector('.itens');
const input = document.querySelector('#item');

adicionar.addEventListener('click', (event) => {
    event.preventDefault();

    if (!input.value.trim()) {
        input.setCustomValidity('Por favor, digite o nome do item.');
        input.reportValidity();
        return;
    } else {
        input.setCustomValidity('');
    }

    addNewItem();
    clearInput();
})

function addNewItem() {
    
    const nameItem = input.value.trim();
    
    const li = document.createElement('li');
    li.classList.add('item')
    li.innerHTML = `<div class="checkbox-wrapper">
                        <input type="checkbox" name="product[]" id="product-5">
                        <label for="product-5">${nameItem}</label>
                    </div>
                    <a href="#">
                        <img src="/assets/lixeira.svg" alt="ícone de lixeira">
                    </a>`;
   itens.prepend(li)
}

function clearInput() {
     input.value = '';
}
