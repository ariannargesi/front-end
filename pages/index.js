import Layout from '../components/layout';
import LoginForm from '../components/login-form';
import { useUser } from '../utils/hooks';

const Login = () => {
  useUser({ redirectTo: '/profile', redirectIfFound: true });
  return (
    <Layout>
        <h1>Welcome to Rent-a-Tent</h1>
        <div className="logins-container" >
          <div className="login-item">
            <LoginForm />
          </div>
          <div className="login-item">
            <LoginForm /> 
          </div>
        </div>
    </Layout>
  );
};

export default Login;
