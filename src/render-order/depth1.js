import Depth2 from './depth2';

const Depth1 = () => {

  console.log('Depth 1 render')
  const handleOnClick = () => {
    console.log('depth 1 log')
  };


  return (
    <div onClick={handleOnClick} onClickCapture={() => console.log('depth 1 capture log')}>
      <div>I'm Depth1</div>
      <Depth2 />
    </div>
  )
}

export default Depth1;