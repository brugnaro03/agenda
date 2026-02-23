// Variáveis globais
let contacts = [];

// Função para adicionar um novo contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const category = document.getElementById('category').value;

  // Criando o objeto de contato
  const newContact = {
    name,
    email,
    phone,
    category
  };

  // Adicionando o contato à lista
  contacts.push(newContact);

  // Atualizando a exibição da lista e o total
  updateContactsList();
  updateTotalContacts();

  // Limpando os campos do formulário
  document.getElementById('contact-form').reset();
});

// Função para exibir a lista de contatos
function updateContactsList() {
  const contactsList = document.getElementById('contacts-list');
  contactsList.innerHTML = '';

  // Adicionando cada contato à lista
  contacts.forEach(contact => {
    const li = document.createElement('li');
    li.textContent = `${contact.name} - ${contact.email} - ${contact.phone}`;
    li.classList.add(contact.category); // Adiciona a classe de categoria

    contactsList.appendChild(li);
  });
}

// Função para atualizar o total de contatos
function updateTotalContacts() {
  document.getElementById('total-contacts').textContent = contacts.length;
}

// Função para filtrar contatos
function filterContacts() {
  const searchQuery = document.getElementById('search').value.toLowerCase();

  // Filtrando contatos conforme o nome
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery));

  // Exibindo os contatos filtrados
  const contactsList = document.getElementById('contacts-list');
  contactsList.innerHTML = '';

  filteredContacts.forEach(contact => {
    const li = document.createElement('li');
    li.textContent = `${contact.name} - ${contact.email} - ${contact.phone}`;
    li.classList.add(contact.category); // Adiciona a classe de categoria
    contactsList.appendChild(li);
  });
}