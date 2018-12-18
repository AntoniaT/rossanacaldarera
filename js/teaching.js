const template = document.querySelector("#teachingTemplate").content;
const parent = document.querySelector("#teaching-content");




/* FETCH POSTS OF TEACHING SUBPAGE TEMPLATE*/

function getTeachingTexts(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/teaching?categories=15&_embed").then(e => e.json()).then(showSections);
}


function showSections(sectionList){
    sectionList.forEach(section => {

    const copy = template.cloneNode(true);

    copy.querySelector("div").id = section.slug;
    copy.querySelector("h2").textContent= section.title.rendered;
    copy.querySelector("p").innerHTML= section.content.rendered;
//find the images
//  if(section._embedded){
//     copy.querySelector("img").src=section._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
//  } else {
//     copy.querySelector("img").remove()
//  }
    parent.appendChild(copy);

})
}
getTeachingTexts()
