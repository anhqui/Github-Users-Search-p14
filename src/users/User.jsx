import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
const User = ({ user, getUser, loading }) => {
    const { id } = useParams()
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user

    useEffect(() => {
        getUser(id)
    }, [])



    return <div>
        {name}
    </div>;
};

export default User;
