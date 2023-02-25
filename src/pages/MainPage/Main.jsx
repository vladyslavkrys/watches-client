import logo from './assets/logo.svg';
import './assets/Main.css';
import { MainMenuHeader } from '../../components/MainMenuHeader/MainMenuHeader';

const Main = () => (
  <div className="Main">
    <MainMenuHeader />
    <div className="Main-header">
      <img src={logo} className="Main-logo" alt="logo" />
      <p>
        Edit <code>src/components/Main.js</code> and save to reload.
      </p>
      <a className="Main-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  </div>
);

export default Main;
