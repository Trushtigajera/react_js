import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <div className='top'>
                <button><Link to={"/Posts"}>Post</Link></button>
                <button><Link to={"/Comments"}>Comments</Link></button>
                <button><Link to={"/Albums"}>Albums</Link></button>
                <button><Link to={"/Photos"}>Photos</Link></button>
                <button><Link to={"/Todo"}>Todo</Link></button>
                <button><Link to={"/User"}>User</Link></button>
                
            </div>
        </>
    );
}
export default Home;