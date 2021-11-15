const Depth3 = () => {
  console.log('Depth 3 render')
  return (
    <div onClick={() => console.log('depth 3 log')} onClickCapture={() => console.log('depth 3 capture log')}>
      <div>I'm Depth3</div>
    </div>
  )
}

export default Depth3;