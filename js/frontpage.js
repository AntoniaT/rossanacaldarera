const template1 = document.querySelector("#frontpageTemplate");
const parent1 = document.querySelector("#whoIamContainer");

const params = new URLSearchParams(window.location.search);
const catID = params.get("cat");


//function loadPosts() {
//    fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/Front_page?"+"categories="+catID+"&_embed").then(e => e.json()).then(showPost);
//}
function loadPosts() {
    fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/Front_page?categories="+"2"+"&_embed").then(e => e.json()).then(showPost);
}
function showPost(post){
    const copy = template1.cloneNode(true).content;

    copy.querySelector("p").innerHTML=post.content.rendered;
    copy.querySelector("img").src = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    console.log(post);
}
    parent1.appendChild(template1);

showPost();
