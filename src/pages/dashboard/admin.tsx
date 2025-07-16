import React, { useEffect, useState } from 'react';
import { account } from '../../utils/appwrite';

const AdminDashboard = () => {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    account.get().then(user => {
      let name = user.name || user.email || '';
      let first = name.split(' ')[0];
      if (!user.name && user.email) {
        first = user.email.split('@')[0];
      }
      setFirstName(first);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold text-center">WELCOME, {firstName} ADMIN</h1>
    </div>
  );
};

export default AdminDashboard; 