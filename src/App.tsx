import {Card} from './components/Card';
import './App.css';

function App() {
  return (
    <div className="app">
      <Card />
      <footer>
        <p className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Made with ❤️ by{' '}
          <a href="https://github.com/chowjiaming">Joseph Chow</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
