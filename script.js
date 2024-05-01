// Genera la secuencia de fibonacci
function generateFibonacci(num) {
  let sequence = [];
  let a = 0, b = 1;
  
  for (let i = 0; i < num; i++) {
    sequence.push(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
  
  return sequence;
}

//Crea carta con secuencia de fibonacci
function createCard(sequence) {
  const cardContainer = document.getElementById('cardContainer');
  
  const card = document.createElement('div');
  card.className = 'card';
  
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  
  const cardTitle = document.createElement('h4');
  cardTitle.textContent = 'Fibonacci Sequence:';
  cardContent.appendChild(cardTitle);
  
  const sequenceList = document.createElement('ul');
  sequence.forEach(num => {
    const listItem = document.createElement('li');
    listItem.textContent = num;
    sequenceList.appendChild(listItem);
  });
  cardContent.appendChild(sequenceList);
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    const confirmDelete = confirm('¿Desea eliminar esta tarjeta?');
    if (confirmDelete) {
      cardContainer.removeChild(card);
    }
  });
  cardContent.appendChild(deleteButton);
  
  card.appendChild(cardContent);
  cardContainer.appendChild(card);
}


document.getElementById('fibForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const numberInput = document.getElementById('numberInput');
  const num = parseInt(numberInput.value);
  const fibonacciSequence = generateFibonacci(num);
  createCard(fibonacciSequence);
});
