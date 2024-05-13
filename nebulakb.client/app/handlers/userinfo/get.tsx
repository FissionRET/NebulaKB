'use server'

import axios from 'axios';

interface GetProps {
    token?: string;
}

export default async function CheckAuthorization({token}: GetProps): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
        let isAuth = false;

        try {
            if (!token) {
                console.error('Token is undefined');
            }

            const resp = await axios.get('http://localhost:1337/api/user', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });

            if (resp.status === 200) {
                isAuth = true; // Authenticated
            }

            resolve(isAuth);
        } catch (error) {
            isAuth = false; // Deauthorized
            reject(error);
        }
    });
}
