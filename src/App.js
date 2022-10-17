import './App.css';
import Avatar from './components/Avatar';
import { useState } from 'react'

function App() {

  // const [size, setSize] = useState(typesOfSize[1])
  // const [shape, setShape] = useState(typeOfShape[0])

  // const typesOfSize = [
  const s = 'w-[30px] h-[30px]', m = 'w-[60px] h-[60px]', l = 'w-[120px] h-[120px]', xl = 'w-[200px] h-[200px]'


  const square = 'border', rounded = 'rounded-lg', circle = 'rounded-full'

  return (
    <div className="grid gap-10 grid-cols-3 grid-rows-3 m-[auto]" >
      {/* grid-rows-3 */}
      {/* <div> */}
      <div>
        <Avatar size={s} shape={square} />
        <p>size s</p>
        <p>type square</p>
      </div>
      <div>
        <Avatar size={s} shape={rounded} />
        <p>size s</p>
        <p>type rounded</p>
      </div>
      <div>
        <Avatar size={s} shape={circle} />
        <p>size s</p>
        <p>type circle</p>
      </div>
      <div>
        <Avatar size={m} shape='border' />
        <p>size m</p>
        <p>type square</p>
      </div>
      <div>
        <Avatar size={m} shape={rounded} />
        <p>size m</p>
        <p>type rounded</p>
      </div>
      <div>
        <Avatar size={m} shape='rounded-full' />
        <p>size s</p>
        <p>type circle</p>
      </div>
      <div>
        <Avatar size={l} shape='border' />
        <p>size s</p>
        <p>type square</p>
      </div>
      <div>
        <Avatar size={l} shape={rounded} />
        <p>size s</p>
        <p>type rounded</p>
      </div>
      <div>
        <Avatar size={l} shape='rounded-full' />
        <p>size s</p>
        <p>type circle</p>
      </div>
    </div>
  );
}

export default App;
