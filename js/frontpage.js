const template = document.querySelector("#frontpageTemplate").content;
const parent = document.querySelector("#parent");


const params = new URLSearchParams(window.location.search);
const postID = params.get("id");
console.log(postID);

function loadEventsbyCategory(postID) {
    fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?" + postID + "&_embed").then(e => e.json()).then(showEvents);
}
console.log(postID)


fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?id&_embed").then(e => e.json()).then(showSections);

//function loadPosts() {
//    fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?id="+ postID +"&_embed").then(e => e.json()).then(showPost);
//    console.log();
//}
function showSections(sectionList){
    sectionList.forEach(section => {

    const clone = template.cloneNode(true);

//    clone.querySelector("#whoiamTitle").textContent=section.title.rendered;
//    clone.querySelector("#whoiamP").innerHTML=section.content.rendered;
////    clone.querySelector("img").src = section._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
//
//    clone.querySelector("#careerTitle").textContent=section.title.rendered;
//    clone.querySelector("#careerP").innerHTML=section.content.rendered;
////    clone.querySelector("img").src = section._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

    clone.querySelector("#teachingTitle").textContent=section.title.rendered;
    clone.querySelector("#teachingP").innerHTML=section.content.rendered;

    //find the images
  if(section._embedded){
     clone.querySelector("img").src=section._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
  } else {
     clone.querySelector("img").remove()
  }

//    clone.querySelector("#contactTitle").textContent=section.title.rendered;
//    clone.querySelector("#contactP").innerHTML=section.content.rendered;
////    clone.querySelector("img").src = section._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;


    parent.appendChild(clone);
    })
}



