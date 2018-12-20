const template = document.querySelector("#aboutTemplate").content;
const parent = document.querySelector("main");


/* FETCH POST MY STORY TEMPLATE 1*/

function getAboutPosts(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/about_me?categories=16&_embed").then(e => e.json()).then(showAboutSections);
}

function showAboutSections(sectionList){
    sectionList.forEach(section => {

    const copy = template.cloneNode(true);

    copy.querySelector("div").id = section.slug;
    copy.querySelector("h2").textContent=section.title.rendered;
    copy.querySelector("p").innerHTML=section.content.rendered;
//find the images
  if(section._embedded){
     copy.querySelector("img").src=section._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
  } else {
     copy.querySelector("img").remove()
  }
//if(section.acf.video){
/*     copy.querySelector("video").innerHTML=section.acf["video"];
        if (str.includes('\"')) { str = JSON.parse(str); }else{
               copy.querySelector("video").remove()

        }*/
  //} else {
 //    copy.querySelector("video").remove()
 // }
    parent.appendChild(copy);

})
}
getAboutPosts()
