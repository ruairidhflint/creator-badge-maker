import { Suspense, useState, lazy } from 'react';
import { Switch, Route } from 'react-router';
import MakerBadge from './Components/MakerBadge';
import NotFound from './Views/404';

import Loading from './Views/Loading';
const Home = lazy(() => import('./Views/Home'));
const About = lazy(() => import('./Views/About'));
const Result = lazy(() => import('./Views/Result'));

export default function App() {
  const [choice, setChoice] = useState({ type: '', name: '', url: '', image: '' });
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} choice={choice} setChoice={setChoice} />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/result" render={(props) => <Result {...props} choice={choice} />} />
        <Route component={NotFound} />
      </Switch>
      <MakerBadge />
    </Suspense>
  );
}
