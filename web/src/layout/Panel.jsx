import { useState } from 'react';
import FormNewUser from "../components/FormNewUser";
import UserProfile from "../components/UserProfile";
import SearchUser from '../components/SearchUser';

const Panel = () => {

    const [renderCreate, setRenderCreate] = useState(false);
    const [renderSearch, setRenderSearch] = useState(false);

    const handleViews = (ev) => {
        const id = ev.target.id
        if (id === 'create') {
            setRenderCreate(!renderCreate)
            setRenderSearch(false)
        } else {
            setRenderCreate(false)
            setRenderSearch(!renderSearch)
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
                    <li id="search">Search user</li>
                </ul>
                <section>
                    {renderViews()}
                </section>
            </section>
            <section>
                <UserProfile />
            </section>
        </main>
    )
}
export default Panel