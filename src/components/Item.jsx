import { Link } from 'react-router-dom'

function Item({ isAdminMode, name, color, bgColor, title, price, url }) {
  return (
    <div className='item'>
      <Link to={isAdminMode ? `/admin/${name}` : `/product/${name}`}>
        <img src={url} />
      </Link>
      <div
        className='item-info'
        style={{ color: color, backgroundColor: bgColor }}
      >
        <h4>{title}</h4>
        <p>
          $<span className='item-price'>{price}</span>
        </p>
      </div>
    </div>
  )
}

Item.defaultProps = {
  isAdminMode: false,
  color: '#000',
  bgColor: '#fff',
}

export default Item
