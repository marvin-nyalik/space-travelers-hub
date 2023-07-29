import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <Layout>
                {' '}
                <Rockets />
                {' '}
              </Layout>
)}
          />
          <Route
            path="/missions"
            element={(
              <Layout>
                {' '}
                <Missions />
                {' '}
              </Layout>
)}
          />
          <Route
            path="/profile"
            element={(
              <Layout>
                {' '}
                <Profile />
                {' '}
              </Layout>
)}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
