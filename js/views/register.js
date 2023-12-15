import { registerUser } from '../services/users.js';

export function registerPage(main) {
    main.innerHTML = `  <div class="login-container">
                            <form class="form" id="login">
                                <h1>Register</h1>
                                <div class="label-input-container">
                                    <label for="email">Email: </label>
                                    <input type="email" name="email" id="email" required>
                                </div>
                                <div class="label-input-container">
                                    <label for="password">Password: </label>
                                    <input type="password" name="password" id="password" required>
                                </div>
                                <div class="label-input-container">
                                    <input type="submit" id="submit-register" value="Register">
                                    <div id="errors"></div>
                                </div>
                            </form>

                            <p>You have an account? <a href="./index.html#/login" id="go-to-login">Go to login page</a></p>
                        </div>
    `;

    main.querySelector('#submit-register').addEventListener('click', async (event) => {
        event.preventDefault();
        const email = main.querySelector('#email').value;
        const password = main.querySelector('#password').value;
        const dataLogin = await registerUser(email, password);
        console.log(dataLogin);
      });
}