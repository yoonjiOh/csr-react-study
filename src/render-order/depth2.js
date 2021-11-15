import Depth3 from './depth3';

const Depth2 = (props) => {
  console.log('Depth 2 render')
  return (
    <div onClick={() => console.log('depth 2 log')} 
      onChange={() => console.log('depth2 onChange')} 
      >
      <div>I'm Depth2</div>
      <Depth3 />
    </div>
  )
}

export default Depth2;