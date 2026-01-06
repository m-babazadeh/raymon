const loader = document.getElementById('loader');

function showLoader() {
  loader.classList.remove('hidden');
  loader.classList.add('flex');
}

function hideLoader() {
  loader.classList.add('hidden');
  loader.classList.remove('flex');
}

// users

function showUsers(users) {
  const main = document.getElementById('main');
  let html = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  `; 
  users.forEach(user => {
    html += `
      <div class="p-4 bg-gradient-to-t from-gray-300 to-blue-200 shadow-md rounded-md">
        <h3 class="text-lg font-semibold mb-2">${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
      </div>
    `;
  });

  html += `</div>`;
  main.innerHTML = html;
}

// fetch

document.querySelector('.nav .users').addEventListener('click', function (e) {

  e.preventDefault();
  showLoader();

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      showUsers(data);
      hideLoader();
    })
    .catch(error => {
      console.error(error);
      hideLoader();
    });
});