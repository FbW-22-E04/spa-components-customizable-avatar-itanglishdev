function Avatar({ size, shape }) {


  return (
    <div>
      <img src="https://picsum.photos/400/400" alt="Avatar" />
      <select className="w-[100px]" placeholder="Size" name="size" id="">
        <option value={size.s}>S</option>
        <option value={size.m}>M</option>
        <option value={size.l}>L</option>
        <option value={size.xl}>XL</option>
      </select>
      <select className="w-[100px]" placeholder="Shape" name="shape" id="">
        <option value={shape.square}>Square</option>
        <option value={shape.round}>Rounded</option>
        <option value={shape.circle}>Circle</option>
      </select>
    </div>
  );
}

export default Avatar;