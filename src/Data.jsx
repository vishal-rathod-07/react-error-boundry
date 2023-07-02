import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function Data({ type, hasError = false }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDataFromType(type, hasError).then((data) => setData(data));
  }, [type, hasError]);

  return (
    <div>
      {type}: {data}
    </div>
  );
}

Data.displayName = 'Data';

Data.propTypes = {
  type: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};

function getDataFromType(type, hasError) {
  const data = {
    users: '88',
    posts: '1,048',
    comments: '10,048',
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      if (hasError) {
        // below is a fake error
        resolve({ error: 'Something went wrong.' });
      } else {
        resolve(data[type]);
      }
    }, 1000);
  });
}
