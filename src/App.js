import RegistrationForm from './components/forms/RegistrationForm/RegistrationForm';
import MainLayout from './components/layout/MainLayout';
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <MainLayout>
      <Navigate to={'/registration'} />
    </MainLayout>
  );
};

export default App;
