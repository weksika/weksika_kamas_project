import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


export function withRouter(Component) {

	function ComponentWithRouterProp(props) {
		 let location = useLocation();
		 let navigate = useNavigate();
		 let params = useParams();
		 return (
			  <Component
					{...props}
					router={{ location, navigate, params }}
			  />
		 );
	}

	return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
  componentDidMount(){
    
    let profileId = this.props.router.params.userId; 
    if(!profileId) {
      profileId = this.props.authUserId;
    }
    this.props.getUserProfile(profileId);
    this.props.getStatus(profileId);
  }
  render(){
    return(
      <div>
        <Profile {...this.props} profile = {this.props.profile} 
        status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        </div>
    )
  }
  
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
}) 
export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
