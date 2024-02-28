const alunos = [];

function adicionarAlunos() {
    var nome = document.getElementById('nome').value;
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);
    var nota4 = parseInt(document.getElementById('nota4').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    let situacao = "";

    if (media >= 70) {
        situacao = "Aprovado";
    } else if (media >= 50 && media < 70) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    var aluno = {
        nome: nome,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        nota4: nota4,
        situacao: situacao
    };

    alunos.push(aluno);

    if (alunos.length >= 2) {
        gerarMediaGeral();
        document.getElementById('adicionarAlunos').style.display = 'none'; // Oculta o botão de adicionar
    
        window.location.href = "mediaGeral.html";
    
    }

    limparCampos();
}

    function limparCampos() {
        document.getElementById('nome').value = "";
        document.getElementById('nota1').value = "";
        document.getElementById('nota2').value = "";
        document.getElementById('nota3').value = "";
        document.getElementById('nota4').value = "";
    }

function gerarMediaGeral() {
    let somaMedias = 0;

    alunos.forEach(aluno => {
        somaMedias += (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;
    });

    let mediaGeral = somaMedias / 5;

    document.getElementById('resultados').innerHTML = `
    <h1>Visão Geral</h1>
    <div class="media-geral">
        <label>Média Geral:</label>
        <span>${mediaGeral.toFixed(2)}</span>
    </div>
    `;

    alunos.forEach(aluno => {
        document.getElementById('resultados').innerHTML += `
        <div class="container2">
                <h2>${aluno.nome}</h2>
                
                    
                        <label>Nota 1º Bimestre:</label>
                        <div class ="retan">${aluno.nota1}</div>
            
    
        </div>`
            ;
    });
}