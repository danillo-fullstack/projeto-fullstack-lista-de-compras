const adicionar = document.querySelector('button');
const itens = document.querySelector('.itens');
const input = document.querySelector('#item');
const menssage = document.querySelector('.alert-delete');
const closeAlert = document.querySelector('.alert-delete > svg');

let contador = 0;

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

/**
 * @param addNewItem um novo item na lista
 */
function addNewItem() {
    const nameItem = input.value.trim();
    
    const li = document.createElement('li');
    li.classList.add('item')

    contador++;
    li.innerHTML = `<div class="checkbox-wrapper">
                        <input type="checkbox" name="product[]" id="product-${contador}">
                        <label for="product-${contador}">${nameItem}</label>
                    </div>
                    <a href="#">
                        <img src="/assets/lixeira.svg" alt="ícone de lixeira">
                    </a>`;
   itens.prepend(li)
}

function clearInput() {
     input.value = '';
}

/**
 * @param  removeItem exclui o item da lista após clicar no icone da lixeira
 */
function removeItem() {
    itens.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        const li = e.target.closest('.item');

        if (!link || !li) {
            return;
        }

        li.remove();
        menssage.classList.remove('hide');
    });
}

removeItem();

closeAlert.addEventListener('click', () => {
    menssage.classList.add('hide');
});

