import {useKindeAuth} from '@kinde-oss/kinde-auth-react';

function Auth() {
    const { login, register , logout } = useKindeAuth();
  return (
    <div>

<button className='border bg-blue-500 m-2 rounded-md text-white p-2'  onClick={register} type="button">Register</button>
<button className='border bg-blue-500 m-2 rounded-md text-white p-2'  onClick={login} type="button">Log In</button>
<button onClick={logout} className='bordre bg-red-500 rounded-md p-2' type="button">Sign out</button>
    </div>
  )
}

export default Auth