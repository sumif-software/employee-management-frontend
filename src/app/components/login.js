'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { login } from '../actions/auth'

const LoginForm = () => {
    const [state, action] = useFormState(login, undefined)
    const { pending } = useFormStatus()

    return (
        <form className="flex flex-col px-2 py-2 mt-2" action={action}>
            <div className="mb-4">
                <input name="email" type="text" className="shadow-sm border border-gray-400 p-2 w-full" placeholder="Email Address"></input>
            </div>
            <div className="mb-4">
                <input name="password" type="password" className="shadow-sm border border-gray-400 p-2 w-full" placeholder="Password"></input>
            </div>
            {state?.errors?.password && (
                <div>
                    <p className='text-red-400'>Password must:</p>
                    <ul>
                        {state.errors.password.map((error) => (
                            <li key={error} className='text-base text-xs px-2 text-red-500 mb-1'>- {error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div>
                <button disabled={pending} type="submit" className="p-2 text-white text-sm bg-blue-500 shadow-sm border border-blue-500 border-opacity-75 rounded-sm p-1">Login</button>
            </div>
        </form>
    )
}
export default LoginForm