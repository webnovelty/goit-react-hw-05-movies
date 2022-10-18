import { Link, Outlet } from 'react-router-dom';
import { AiFillCaretLeft } from 'react-icons/ai';

export const Movies = () => {
  return (
	  <main>
		  <Link to='/'><AiFillCaretLeft /> Go back</Link>

      <Outlet />
    </main>
  );
};
