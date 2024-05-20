document.getElementById('pesquisa').addEventListener('click', function() {
    fetch('https://anapioficeandfire.com/api/books/')
        .then(response => response.json())
        .then(data => {
            let retorno = '';
            data.forEach(book => {
                retorno += `
                    <div class="book">
                        <h2>${book.name}</h2>
                        <p>Autor(a): ${book.authors[0]}</p>
                        <p>Ano de lançamento: ${book.released}</p>
                    </div>
                `;
            });
            document.getElementById('retorno').innerHTML = retorno;
        })
        .catch(error => console.error('Error:', error));
});