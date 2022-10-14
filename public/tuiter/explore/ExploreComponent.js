import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
               <div class="row m-0 mb-2">
                    <div class="col-10 position-relative">
                        <i class="fa fa-search wd-search position-absolute p-2 m-1"></i>
                        <input class="form-control wd-input rounded-pill p-2 bg-white border-dark" type="text" placeholder="  Search Tuiter" aria-label="searchbar">
                    </div>
                    <div class="col-2">
                        <a href="explore-settings.html"><i class="fa fa-cog fa-2x pt-1 fa-pull-right"></i></a>
                    </div>
               </div>
               <ul class="nav mb-2 mt-2 nav-tabs">
                          <!-- tabs -->
                          <li class="nav-item">
                            <a class="nav-link active" href="#">For you</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Trending</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                          </li>
                          <li class="nav-item d-none d-md-block">
                            <a class="nav-link" href="#">Entertainment</a>
                          </li>
               </ul>
               <div class="position-relative border-bottom-1 border-top-1 border-dark">
                            <img src="../../images/SpaceX.jpg" class="w-100 img-responsive">
                            <h2 class="wd-image-description text-light position-absolute bottom-0">SpaceX's Starship</h2>
                </div>
               
               <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;