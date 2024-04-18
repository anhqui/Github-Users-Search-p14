import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner';
import PropTypes from "prop-types";
import Repos from '../components/repos/Repos';


const User = ({ user, getUser, loading, repos, getUserRepos }) => {
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
        getUserRepos(id)
    }, [])


    if(loading) return <Spinner />

    return <>
        <Link to='/' className='btn btn-light'>Back To Search</Link>
        Hireable: {' '} {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
        <div className="card grid-2">
            <div className='all-center'>
                <img src={avatar_url} alt="profile" className='round-img' style={{ width: '150px' }} />
                <h1>{name}</h1>
                <p>Location: {location}</p>
            </div>
            <div>
                {bio && <>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </>}
                <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                <ul>
                    <li>{login && <>
                        <strong>Username: </strong> {login}
                    </>}</li>
                    <li>{blog && <>
                        <strong>Website: </strong> {blog}
                    </>}</li>
                </ul>
            </div>

        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-danger">Public repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />

    </>;


};

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
}

export default User;
