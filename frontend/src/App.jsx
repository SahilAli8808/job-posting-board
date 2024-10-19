import SignUpPage from './components/SignUpPage';
import { Toaster } from 'react-hot-toast'; // Import Toaster
import './App.css';

function App() {
  return (
    <>
      <Toaster /> {/* Render Toaster */}
      <SignUpPage />
    </>
  );
}

export default App;
