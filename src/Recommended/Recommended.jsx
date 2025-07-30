import Button from '../components/Button'
import './Recommended.css'
const Recommended = ({handleClick}) => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <Button value={''} onClickHandler={handleClick} title={"All"}/>
          <Button value={'Nike'} onClickHandler={handleClick} title={"Nike"}/>
          <Button value={'Adidas'} onClickHandler={handleClick} title={"Adidas"}/>
          <Button value={'Puma'} onClickHandler={handleClick} title={"Puma"}/>
          <Button value={'Vans'} onClickHandler={handleClick} title={"Vans"}/>
        </div>
      </div>
    </>
  )
}

export default Recommended