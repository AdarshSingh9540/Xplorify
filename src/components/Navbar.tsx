// Navbar.tsx
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

function Navbar() {
  const { login, register, logout } = useKindeAuth();

  return (
    <div>
      <div>
        <div>
          <h1 className='font-bold text-green-600 text-xl'>Xplorify</h1>
        </div>
        <div>
          <button className='border bg-blue-500 m-2 rounded-md text-white p-2' onClick={register} type="button">Register</button>
          <button className='border bg-blue-500 m-2 rounded-md text-white p-2' onClick={login} type="button">Log In</button>
          <button onClick={logout} className='border bg-red-500 rounded-md p-2' type="button">Sign out</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;