import PropTypes from 'prop-types'


function Card({children}) {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}
export default Card
