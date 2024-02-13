import PropTypes from 'prop-types'

function UserGreeting(props){
   
    return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please Log in to Continue</h2>) 
}
UserGreeting.propTypes ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}
export default UserGreeting