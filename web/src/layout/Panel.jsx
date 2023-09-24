import { useState, useEffect } from 'react';
import { getUsers } from '../services/msgAndUsers';

import FormNewUser from '../components/panelComponents/FormNewUser';
import UserProfile from '../components/panelComponents/UserProfile';
import GetProfile from '../components/panelComponents/GetProfile';
import AllUsers from '../components/panelComponents/AllUsers';

const Panel = () => {

    const [renderCreate, setRenderCreate] = useState(false);
    const [renderSearch, setRenderSearch] = useState(false);
    const [renderAllUsers, setRenderAllUsers] = useState(false);

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getUsers().then((response) => {
            setAllUsers(response)           
        })
    }, [])

    const handleViews = (ev) => {
        const id = ev.target.id
        if (id === 'create') {
            setRenderCreate(!renderCreate)
            setRenderSearch(false)
            setRenderAllUsers(false)
        } else if (id === 'search') {            
            setRenderCreate(false)
            setRenderSearch(!renderSearch)
        } else {
            const oldvalue=renderAllUsers
            setRenderAllUsers(!oldvalue)
        }
    }

    const renderViews = () => {
        if (renderCreate) {
            return <FormNewUser />
        } else if (renderSearch) {
            return (
                <GetProfile />
            )
        }
    }
    return (
        <main>
            <section>
                <ul onClick={handleViews}>
                    <li id="create">Create user</li>
                    <li id="search">Search user</li>
                    <li id="allUsers">Show all users</li>
                </ul>
                <section>
                    {renderViews()}
                </section>
            </section>
            <section>
                {renderAllUsers ? <AllUsers allUsers={allUsers} setAllUsers={setAllUsers}/> : <UserProfile />}
            </section>
        </main>
    )
}
export default Panel