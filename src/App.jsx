import { Suspense } from 'react';

import Grid from './Grid';
import Card from './Card';

import './App.css';

import { Data } from './Data';

function App() {
  return (
    <Grid>
      <Card>
        <Suspense fallback={'Loading...'}>
          <Data type="users" />
        </Suspense>
      </Card>

      <Card>
        <Suspense fallback={'Loading...'}>
          {/* pass hasError prop to Data component to simulate an error */}
          <Data type="posts" />
        </Suspense>
      </Card>

      <Card>
        <Suspense fallback={'Loading...'}>
          <Data type="comments" />
        </Suspense>
      </Card>
    </Grid>
  );
}

export default App;
