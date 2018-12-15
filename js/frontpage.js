const template = document.querySelector("#frontpageTemplate");
const parent = document.querySelector("#whoIamContainer");
//
//const params = new URLSearchParams(window.location.search);
//const catID = params.get("cat");


function loadPosts() {
    fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?categories="+"2"+"&_embed").then(e => e.json()).then(showPost);
    console.log();
}
function showPost(post){
    const clone= template.cloneNode(true);

    clone.querySelector("#sectionContent").textContent=post.content.rendered;
    clone.querySelector("#sectionImg").src = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    console.log(post);

    parent.appendChild(clone);

}

