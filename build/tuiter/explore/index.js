import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
       <h2>Explore</h2>
  <div class="row mt-2">
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('explore')}
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-9 col-9 align-content-xxl-center m-xxl-1
align-content-xl-center m-xl-auto align-content-lg-center m-lg-1 align-content-md-center m-md-1 align-content-sm-center m-sm-1
align-content-center m-1">
    <!--<h3>ExploreComponent</h3>-->
    ${ExploreComponent()}
   </div>
   <div class="col-xxl-3 col-xl-4 col-lg-4 d-lg-block d-md-none d-sm-none d-none">
    <!--<h3>WhoToFollowList </h3>-->
    ${WhoToFollowList()}
   </div>
  </div>
   `);
}
$(exploreComponent);

