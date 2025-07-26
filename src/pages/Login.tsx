import LoginForm from '@/components/auth/LoginForm';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-4">
      <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold">
            LEAVE <span className="text-purple-500">LANE</span>
          </h1> 
        <p className="text-gray-600 mt-2">Leave Management Portal</p>
      </div>
      <LoginForm />
    </div>
  );
}