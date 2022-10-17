import './App.css';
import Avatar from './components/Avatar';

function App() {

  const s = 'w-[30px] h-[30px] align-middle', m = 'w-[60px] h-[60px] align-middle', l = 'w-[120px] h-[120px] align-middle', xl = 'w-[200px] h-[200px] align-middle'
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
        <Avatar size={m} shape={square} />
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
        <Avatar size={l} shape={square} />
        <p>size s</p>
        <p>type square</p>
      </div>
      <div>
        <Avatar size={l} shape={rounded} />
        <p>size s</p>
        <p>type rounded</p>
      </div>
      <div>
        <Avatar size={l} shape={circle} />
        <p>size s</p>
        <p>type circle</p>
      </div>
    </div>
  );
}

export default App;
