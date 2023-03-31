import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profile-reducer";
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
  refreshProfile() {
    let userId = this.props.router.params.userId; 
    if(!userId) {
      userId = this.props.authUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount(){
    this.refreshProfile();
  }
  componentDidUpdate(prevProps){
    if(this.props.router.params.userId != prevProps.router.params.userId){
      this.refreshProfile();
    }
    
  }
  render(){
    return(
      <div>
        <Profile {...this.props} isOwner = {!this.props.router.params.userId} profile = {this.props.profile} 
        status = {this.props.status} updateStatus = {this.props.updateStatus} savePhoto = {this.props.savePhoto}/>
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
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
