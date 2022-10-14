const PostSummaryItem = (posts) => {
    var innerHtml = ''
    if (`${posts.topic}`!=''){
        innerHtml= `<a href="#" class="text-secondary text-decoration-none">${posts.topic}</a><br/>`
    }
    return (`
    <div class="row border m-0 bg-light">
        <div class="col-9">
        <div class="small">${innerHtml}</div>
            <span class="text-light fw-bold small"><a href="#" class="text-white text-decoration-none">${posts.userName} </a>
            <i class="fa fa-check-circle text-white ps-2"></i></span>
            <span class="text-secondary small"> - ${posts.time}</span>
            <p class="text-white small fw-bold">${posts.title}</p>
        </div>
        <div class="col-3 wd-icon-img">
            <img src=${posts.image} class="float-end rounded mt-2">
        </div>
    </div>
    
    `);
}
export default PostSummaryItem;