'use server'

import axios from 'axios';

interface LogoutProps {
    token?: string;
}

export default async function Logout({token}: LogoutProps): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
        let message = '';

        try {
            if (!token) {
                return console.error('Token is undefined');
            }

            const resp = await axios.post(
                'http://localhost:1337/api/logout',
                {},  // empty data
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            );

            if (resp.status === 200) {
                message = 'success'; // Logged out
            }

            resolve(message);
        } catch (err) {
            message = 'failed'; // Error
            reject(err)
        }
    });
}