const Button = props => {
  //  Write your code here.
  const {text, color} = props
  return <button className={color}>{text}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='mainHeading'>Social Buttons</h1>
    <div className='buttonContainer'>
      <Button text='Like' color='yellow' />
      <Button text='Comment' color='white' />
      <Button text='Share' color='blue' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
