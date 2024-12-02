window.carregarTabela = async function () {
  const tableBody = document.querySelector('#alunosTable');

  try {
    const response = await fetch('/api/alunos');
    const alunos = await response.json();

    alunos.forEach(aluno => {
      const row = document.createElement('tr');

      Object.values(aluno).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};