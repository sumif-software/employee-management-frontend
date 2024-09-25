'use client';

import { LoginFormSchema } from "../lib/definitions"
import { redirect } from "next/navigation"
import useToken from "../actions/useToken";
import { useEffect } from 'react';


export async function login(state, formData) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // const { email, password } = validatedFields.data

    // const result = fetch('http://localhost:8000/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(validatedFields.data)
    // }).then(data => data.json())
    redirect("/dashboard")
}


export function loginUser(access_token) {
    const { token, setToken } = useToken();
    useEffect(() => {
        const get_token = async() => {
            const result = await fetch("http://localhost:8000/auth/token/google-oauth2/?access_token=" + access_token, {
                method: 'GET'
            }).then(data => data.json())
            setToken(result['token']);
            
        }
        get_token();
        if( typeof token != "undefined")
            redirect("/dashboard")
    }, [access_token, token]);
}
