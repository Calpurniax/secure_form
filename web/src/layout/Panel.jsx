import { useState, useEffect } from 'react';
import { getUsers } from '../services/getUsers';
import FormNewUser from "../components/FormNewUser";
import UserProfile from "../components/UserProfile";
import SearchUser from '../components/SearchUser';
import AllUsers from '../components/AllUsers';

const Panel = () => {

    const [renderCreate, setRenderCreate] = useState(false);
    const [renderSearch, setRenderSearch] = useState(false);
    const [renderAllUsers, setrenderAllUsers] = useState(false);

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
            setrenderAllUsers(false)
        } else if (id === 'search') {            
            setRenderCreate(false)
            setRenderSearch(!renderSearch)
        } else {
            const oldvalue=renderAllUsers
            setrenderAllUsers(!oldvalue)
        }
    }

    const renderViews = () => {
        if (renderCreate) {
            return <FormNewUser />
        } else if (renderSearch) {
            return (
                <SearchUser />
            )
        }
    }
    return (
        <main>
            <section>
                <ul onClick={handleViews}>
                    <li id="create">Create user</li>
                    <li id="search">Search user (no funciona aún)</li>
                    <li id="allUsers">Show all users</li>
                </ul>
                <section>
                    {renderViews()}
                </section>
            </section>
            <section>
                {renderAllUsers ? <AllUsers allUsers={allUsers} /> : <UserProfile />}
            </section>
        </main>
    )
}
export default Panel