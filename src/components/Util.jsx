import React, {useState} from 'react'
import { headerData } from '../util/header'

const Util = () => {
  const utilData = headerData.utils
  const [count, setCount] = useState(0)

  return (
    <ul className='util-list'>
      {utilData.map((u) => (
        <li key={u.id}>
          <a href={u.href}>
            <div className='icon-wrapper'>
              <img src={u.icon} alt={u.label} />
              {u.id === 'cart' && (
                <span className='cart-count'>{count}</span>
              )}
            </div>
          </a>
        </li>

      ))}
    </ul>
  )
}

export default Util