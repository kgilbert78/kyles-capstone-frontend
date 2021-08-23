import { useAuth0 } from "@auth0/auth0-react";


export const CommentForm = (props) => {
    // const {isAuthenticated, loginWithRedirect, logout} = useAuth0();
    return (
        <div>
            {props.isAuthenticated ? 
                <div className="mt-5 text-center"> 
                    <h2>Leave a comment about this site:</h2>
                    <form>
                        <input className="form-control" type="text" />
                        <button className="mt-3 btn btn-sm btn-info" type="submit">Post Comment</button>
                    </form>
                    <button className="mt-3 btn btn-sm btn-info" onClick={(event) => props.logout()}>Logout</button>
                </div> 
            : <div className="mt-5 text-center">
                <button 
                    className="mt-3 btn btn-sm btn-info" // 
                    onClick={(event) => props.loginWithRedirect()}
                >
                    Please login to leave a comment
                </button>
            </div>
            }
        </div>
        
    )
};