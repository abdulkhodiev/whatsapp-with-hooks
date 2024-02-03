import React, { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Connections from './Connections.svg';
import Story from './story.png';
import Checked from './checked.svg';
import Notchecked from './not-checked.svg';
import Chats from './chat-icon.svg';
import Call from './call.svg';
import Contacts from './contact.svg';

const TOGGLE_THEME = 'TOGGLE_THEME';

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialState = { theme: 'light' };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.body.className = state.theme === 'dark' ? 'dark-theme' : '';
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeToggler = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const toggleTheme = useCallback(() => dispatch({ type: TOGGLE_THEME }), [dispatch]);

  return (
    <label htmlFor="check">
      <input
        type="checkbox"
        id="check"
        className="check"
        onChange={toggleTheme}
        checked={state.theme === 'dark'}
      />
      <div className="parent">
        <div className="child"></div>
      </div>
    </label>
  );
};

const UserBox = React.memo(({ imgSrc, userName, date, messageImg, message }) => (
  <div className="user-box d-flex gap-2 align-items-center">
    <img src={imgSrc} alt="404" />
    <div className="user-info-box">
      <div className="user-info__header d-flex justify-content-between align-items-center">
        <p className="user-name">{userName}</p>
        <p>{date}</p>
      </div>
      <div className="user-message d-flex gap-1 align-items-center">
        <img src={messageImg} alt="404" />
        <p>{message}</p>
      </div>
    </div>
  </div>
));

function App() {
  return (
    <ThemeProvider>
      <div className="wrapper">
          <header>
          <div className="container-fluid d-flex align-items-center justify-content-between py-2">
          <p>9:41</p>
          <img src={Connections} alt="404" />
          </div>
          </header>

          <div className="stories">
          <div className="container d-flex flex-column p-3 text-white gap-3">
          <div className="stories-title d-flex justify-content-between align-items-center">
          <h1>WhatsApp</h1>
          <ThemeToggler />
          </div>
          <div className="stories-wr d-flex gap-3">
          <img src={Story} alt="404" />
          <img src={Story} alt="404" />
          <img src={Story} alt="404" />
          <img src={Story} alt="404" />
          <img src={Story} alt="404" />
          </div>
          </div>
          </div>

          <main>
          <div className="container d-flex flex-column gap-1 p-3">
          <UserBox
          imgSrc={Story}
          userName="Cinemaghar App Project"
          date="27/04/2023"
          messageImg={Checked}
          message="Order now lai download now rakhdaa k hol.."
          />
          <UserBox
          imgSrc={Story}
          userName="Cinemaghar App Project"
          date="27/04/2023"
          messageImg={Notchecked}
          message="Order now lai download now rakhdaa k hol.."
          />
          <UserBox
          imgSrc={Story}
          userName="Cinemaghar App Project"
          date="27/04/2023"
          messageImg={Checked}
          message="Order now lai download now rakhdaa k hol.."
          />
          <UserBox
          imgSrc={Story}
          userName="Cinemaghar App Project"
          date="27/04/2023"
          messageImg={Checked}
          message="Order now lai download now rakhdaa k hol.."
          />
          <UserBox
          imgSrc={Story}
          userName="Cinemaghar App Project"
          date="27/04/2023"
          messageImg={Notchecked}
          message="Order now lai download now rakhdaa k hol.."
          />
          <UserBox
          imgSrc={Story}
          userName="Cinemaghar App Project"
          date="27/04/2023"
          messageImg={Checked}
          message="Order now lai download now rakhdaa k hol.."
          />
          <UserBox
          imgSrc={Story}
          userName="Cinemaghar App Project"
          date="27/04/2023"
          messageImg={Checked}
          message="Order now lai download now rakhdaa k hol.."
          />
          <UserBox
          imgSrc={Story}
          userName="Cinemaghar App Project"
          date="27/04/2023"
          messageImg={Notchecked}
          message="Order now lai download now rakhdaa k hol.."
          />
          </div>
          </main>

          <footer>
          <div className="container px-5 py-3 d-flex justify-content-between align-items-center">
          <div className="icon-wr-box d-flex flex-column text-center align-items-center chats-wr">
          <img src={Chats} alt="404" width={22.5} />
          <p>Chats</p>
          </div>
          <div className="icon-wr-box d-flex flex-column text-center align-items-center">
          <img src={Call} alt="404" width={16} />
          <p>Calls</p>
          </div>
          <div className="icon-wr-box d-flex flex-column text-center align-items-center">
          <img src={Contacts} alt="404" width={21} />
          <p>Contacts</p>
          </div>
          </div>
          </footer>
          </div>
    </ThemeProvider>
  );
}

export default App;
