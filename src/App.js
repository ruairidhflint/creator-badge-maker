import { Suspense, useState, lazy } from 'react';
import { Route } from 'react-router';
import MakerBadge from './Components/MakerBadge';

import Loading from './Views/Loading';
const Home = lazy(() => import('./Views/Home'));
const About = lazy(() => import('./Views/About'));
const Result = lazy(() => import('./Views/Result'));

export default function App() {
  const [choice, setChoice] = useState({ type: '', name: '', url: '', image: '' });
  return (
    <Suspense fallback={<Loading />}>
      <Route exact path="/" render={(props) => <Home {...props} choice={choice} setChoice={setChoice} />} />
      <Route exact path="/about" component={About} />
      <Route exact path="/result" render={(props) => <Result {...props} choice={choice} />} />
      <MakerBadge />
    </Suspense>
  );
}
