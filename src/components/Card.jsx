const Card = ({ title, desc, icon }) => {
  return (
    <div class='card'>
      <div className='card-icon'>{icon}</div>
      <h4 className='card-title'>{title}</h4>
      <p className='card-desc'>{desc}</p>
    </div>
  )
}

export default Card
