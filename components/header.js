import Link from 'next/link';
import { useUser } from '../utils/hooks';
import Menu from './Menu'
const Header = () => {
  const user = useUser();

  return (
    <header>
      <nav>
        <ul>
          {user ? (
            <>

              <Menu title="Click" >
                  <Link href=""><a> {user.email} </a></Link>
                  <Link href="/"><a>Item 2</a></Link>
                  <Link href="/"><a>Item 3</a></Link>
                  <Link href="/api/logout"><a>Logout</a></Link>
              </Menu>
              {/* <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li> */}
            </>
          ) : (
            null
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
