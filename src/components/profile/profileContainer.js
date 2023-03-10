import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


function withRouter(Component) {

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
      profileId = 2;
    }
    this.props.getUserProfile(profileId);
  }
  render(){
    return(
      <div>
        <Profile {...this.props} profile = {this.props.profile}/>
        </div>
    )
  }
  
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
}) 
export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
