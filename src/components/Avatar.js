import '../index.css'
function Avatar({ size, shape }) {

  return (
    <div>
      <img className={`'${size}  ${shape}'`} src="https://picsum.photos/400/400" alt='Avatar' />

    </div>
  );
}

export default Avatar;