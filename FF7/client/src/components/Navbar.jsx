import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Link
        to='/'
        className={currentPage == '/' ? 'nav-link active' : 'nav-link'}>
        Home
      </Link>
      <Link
        to='/characters'
        className={
          currentPage == '/characters' ? 'nav-link active' : 'nav-link'
        }>
        Characters
      </Link>
    </>
  );
};

export default Navbar;
