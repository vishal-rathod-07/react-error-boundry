import PropTypes from 'prop-types';

const Card = ({ children }) => {
  const style = {
    border: '1px solid black',
    padding: '1rem',
    margin: '1rem',
  };

  return <div style={style}>{children}</div>;
};

Card.displayName = 'Card';

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
