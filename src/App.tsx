import './style.css';
import IMAGE from './react.png';
import FLOWER from './flower.svg';

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <img src={IMAGE} alt='' />
      <img src={FLOWER} alt='' />
    </>
  );
};

export default App;
