import { loginUser, logout, forgotPassword } from '../services/users.js';

export function loginPage(main) {
    main.innerHTML = `  <div class="login-container">
                            <form class="form" id="login">
                                <h1>Login</h1>
                                <div class="label-input-container">
                                    <label for="email">Email: </label>
                                    <input type="email" name="email" id="email" required>
                                </div>
                                <div class="label-input-container">
                                    <label for="password">Password: </label>
                                    <input type="password" name="password" id="password" required>
                                </div>
                                <div class="label-input-container">
                                    <input type="submit" id="submit-login" value="Login">
                                    <div id="errors"></div>
                                </div>
                            </form>

                            <p>You don't have an account yet? <a href="./index.html#/register" id="create-account">Create one</a></p>
                        </div>
    `;

    main.querySelector('#submit-login').addEventListener('click', async (event) => {
        event.preventDefault();
        const email = main.querySelector('#email').value;
        const password = main.querySelector('#password').value;
        loginUser(email, password).then((status) => {
          if (status.success) window.location.hash = '#/game';
          else {
            main.querySelector('#errors').innerHTML = status.errorText;
          }
        });
      });
}