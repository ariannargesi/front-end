import Layout from '../components/layout';
import { useUser } from '../utils/hooks';

const Profile = () => {
  const user = useUser({ redirectTo: '/login' });

  return (
    <Layout>
     
      {user && (
        <>
        <h1>Profile</h1>
        </>
      )}
    </Layout>
  );
};

export default Profile;
