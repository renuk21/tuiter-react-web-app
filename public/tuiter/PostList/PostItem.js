const PostItem = (posts) => {
    var innerHtmlLink = ''
    if (`${posts.link}`!=''){
        innerHtmlLink= `
        <li class="list-group-item">
        <span class=""> ${posts.desc1}</span><br/>
        <span class="wd-gray">${posts.desc2}</span>
        <br/>
        <div class="wd-gray"><i class="fas fa-link"></i>
        <a href="https://${posts.link}" class="wd-dec">${posts.link}</a></div>
        </li>`
    }

    var title =''
    if(`${posts.title}`.includes("#B") ){
        title = `${posts.title}`
        title = title.replace("#B",`<a href="https://${posts.link}">`);
        title = title.replace("#B!",`</a>`);
        console.log(title)
    }
    return (`
    <li class="list-group-item">
    <div class="row">
            <div class="col-2 col-lg-2"><img src=${posts.userImage} class="wd-dp" /></div>
            <div class="col-10 col-lg-10">
            ${posts.userName} <i class="fa fa-check-circle"></i>
            <div class="wd-gray">@${posts.handle} <span>&nbsp;&#183;&nbsp;</span> ${posts.time}</div>
            <div class="small pb-2">${title}</div>
            <ul class="list-group">
                <li class="list-group-item wd-inner">
                    <img src=${posts.image} class="wd-inner"/>
                </li>
                ${innerHtmlLink}
                <li class="wd-nostyle wd-gray">
                    <i class="far fa-comment wd-iFirst"></i>${posts.comments}
                    <i class="fas fa-retweet wd-i"></i>${posts.retweets}
                    <i class="far fa-heart wd-i"></i>${posts.likes}
                    <i class="fas fa-upload wd-i"></i>
                </li>
            </ul>
            </div>
    </div>   
    </li>
    `);
}
export default PostItem;