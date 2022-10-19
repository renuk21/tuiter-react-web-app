const WhoToFollowListItem = (who) => {
    return (`
            <div class="row py-2 ms-1 text-bg-light wd-post-summary">
                <div class="col-2 wd-icon">
                    <img src=${who.avatarIcon} class="rounded-circle">
                </div>
                <div class="col-7">
                    <span class="fw-bold small">${who.userName}<i class="fa fa-check-circle ps-2"></i></span>
                    <div class="text-secondary small"><a href="#" class="text-white text-decoration-none">@${who.handle}</a></div>
                </div>
                <div class="col-2 mt-1">
                    <button class="btn btn-primary rounded-pill float-end" type="button">Follow</button>
                </div>
            </div>             
    `);
}
export default WhoToFollowListItem;