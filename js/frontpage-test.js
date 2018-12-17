const template = document.querySelector("#frontpageTemplate").content;
const parent = document.querySelector("#parent");

const params = new URLSearchParams(window.location.search);
const catID = params.get("catid");

function loadPostsbyCategory(catID){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?categories=" + catID + "&_embed").then(e => e.json()).then(showSection);
    console.log(catID);
}

function showSection(sectiontList){
    console.log(section.title.rendered)

    sectiontList.forEach(event => {
    const copy = template.cloneNode(true);

    copy.cloneNode(true);
    copy.querySelector("#teachingTitle").textContent=section.title.rendered;
    copy.querySelector("#teachingP").innerHTML=section.content.rendered;

    //find the images
  if(section._embedded){
     template.querySelector("img").src=section._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
  } else {
     template.querySelector("img").remove()
  }

    parent.appendChild(clone);
    })
}




