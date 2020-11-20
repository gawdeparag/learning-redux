import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from './CardComponent';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers([{
            id: 1,
            name: "John Doe",
            company: {
                name: "Acme",
                catchPhrase: "Kaboom!"
            }
        }
        ]));
    }, []);

    return (
        <>
            {users.length > 0 && users.map((user) => {
                <Card user={user} key={user.id} />
            })}
            {users.length === 0 && <p>No users available!</p>}
        </>
    )
}

export default Users;