import { home } from './home.js';
import { startGame } from './game.js';
import { loginPage } from './views/login.js';
import { isLogged, logout } from './services/users.js';
import { registerPage } from './views/register.js';

export function route(urlHash) {
    const main = document.querySelector('#container');

    switch (urlHash) {
      case '#/':
        console.log("Home");
        home(main);
        break;
      case '#/login':
        main.innerHTML = '';
        loginPage(main);
        break;
      case '#/game':
        if (isLogged()) {
          console.log("Logged");
          startGame();
          console.log("Game");
        } else {
          window.location.hash = '#/login';
        }
        break;
      // case '#/allgames':
      //   main.innerHTML = '';
      //   // main.append(generateGameList()); 
      //   // Get All Games
      //   break;
      case '#/register':
        main.innerHTML = '';
        registerPage(main);
        break;
      case '#/logout':
        logout();
        console.log("Logout");
        window.location.hash = '#/';
        break;
    //   case '#/profile':
    //     main.innerHTML = '';
    //     main.append(profileForm());
    //     break;
    //   case '':
    //     window.location.hash = '#/';
    //     break;
      default:
        window.location.hash = '#/';
    }
  }