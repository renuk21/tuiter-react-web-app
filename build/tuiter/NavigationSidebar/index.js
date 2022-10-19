const NavigationSidebar = (active) => {
// function NavigationSidebar() {
    // $('#wd-nav').append(`
    return (`
                
               <div class="list-group">
                 <a class="list-group-item" href="/">
                   <i class="fab fa-tumblr-square"></i>
                 </a>
                 <a class="list-group-item ${active==='home'?'active':''}" href="../HomeScreen/index.html">
                   <i class="fa fa-home"></i>
                   <span> Home</span>
                 </a>
                 <a class="list-group-item ${active==='explore'?'active':''}" href="../explore/index.html">
                   <i class="fa fa-hashtag"></i>
                   <span> Explore</span>
                 </a>
                 <a class="list-group-item" href="/">
                   <i class="fa fa-bell"></i>
                   <span> Notifications</span>
                 </a>
                 <a class="list-group-item" href="/">
                   <i class="fa fa-envelope"></i>
                   <span> Messages</span>
                 </a>
                 <a class="list-group-item" href="/">
                   <i class="fa fa-bookmark"></i>
                   <span> Bookmarks</span>
                 </a>   
                 <a class="list-group-item" href="/">
                   <i class="fa fa-list-ul"></i>
                   <span> Lists</span>
                 </a>
                 <a class="list-group-item" href="/">
                   <i class="fa fa-user"></i>
                   <span> Profile</span>
                 </a>
                 <a class="list-group-item" href="/">
                   <i class="fa fa-ellipsis-h"></i>
                   <span> More</span>
                 </a>       
               </div>
            
               <div class="d-grid mt-2">
                 <a href="../tuit.html"
                    class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
               </div>
 `);

};
// $(NavigationSidebar);


export default NavigationSidebar;


