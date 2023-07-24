import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>
      { children }
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
