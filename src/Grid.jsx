import PropTypes from 'prop-types';

const Grid = ({ children }) => {
  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '1rem',
  };

  return <div style={style}>{children}</div>;
};

Grid.displayName = 'Grid';

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
