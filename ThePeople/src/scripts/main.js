function main() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const getUsers = async () => {
    try {
      const response = await fetch(`${baseUrl}/users`);
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllUsers(responseJson);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderAllUsers = (users) => {
    const listUsersElement = document.querySelector('#listPeople');
    listUsersElement.innerHTML = '';

    users.forEach((user) => {
      listUsersElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
        <div class="card"  style="background-color: #1C82AD; color:white">
          <div class="card-body">
            <h5>(${user.id}) ${user.name}</h5>
            <p>Phone: ${user.phone}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}</p>
          </div>
        </div>
      </div>`;
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  getUsers();
}

export default main;
