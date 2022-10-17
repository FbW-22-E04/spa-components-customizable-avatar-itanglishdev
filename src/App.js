import './App.css';
import Avatar from './Avatar';

function App() {

  const typesOfSize = [
    { s: 'w-[30px] h-[30px]' },
    { m: 'w-[60px] h-[60px]' },
    { l: 'w-[120px] h-[120px]' },
    { xl: 'w-[200px] h-[200px]' }
  ]

  const typeOfShape = [
    { square: 'border' },
    { rounded: 'rounded' },
    { circle: 'rounded-full' }
  ]

  return (
    <div>
      <Avatar />
    </div>
  );
}

export default App;
