const template1 = document.querySelector("#teachingTemplate1").content;
const template2 = document.querySelector("#teachingTemplate2").content;
const template3 = document.querySelector("#teachingTemplate3").content;
const template4 = document.querySelector("#teachingTemplate3").content;



const parent1 = document.querySelector("#parent1");
const parent2 = document.querySelector("#parent2");
const parent3 = document.querySelector("#parent3");
const parent4 = document.querySelector("#parent3");



/* FETCH POST MY MISSION TEMPLATE 1*/

function loadPostsbyCategory1(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/teaching?categories=10&_embed").then(e => e.json()).then(showMyMission);
}
loadPostsbyCategory1();

function showMyMission(myMission){
    myMission.forEach(single => {

    const copy = template1.cloneNode(true);
    copy.querySelector("#myMissionTitle").textContent=single.title.rendered;
    copy.querySelector("#myMissionP").innerHTML=single.content.rendered;
//find the images
  if(single._embedded){
     copy.querySelector("img").src=single._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  } else {
     copy.querySelector("img").remove()
  }
    parent1.appendChild(copy);

})
}


/* FETCH POST CLASS DESCRIPTION TEMPLATE 2*/

function loadPostsbyCategory2(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/teaching?categories=11&_embed").then(e => e.json()).then(showClassDescription);
}

function showClassDescription(classDescription){
    classDescription.forEach(single => {

    const copy = template2.cloneNode(true);
    copy.querySelector("#classTitle").textContent=single.title.rendered;
    copy.querySelector("#classP").innerHTML=single.content.rendered;
////find the images
  if(single._embedded){
     copy.querySelector("img").src=single._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  } else {
     copy.querySelector("img").remove()
  }
    parent2.appendChild(copy);

})
}

loadPostsbyCategory2();

/* FETCH POST TESTIMONIALS TEMPLATE 3*/

function loadPostsbyCategory3(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/teaching?categories=12&_embed").then(e => e.json()).then(showTestimonials);

}
loadPostsbyCategory3();

function showTestimonials(testimonials){
    testimonials.forEach(single => {

    const copy = template3.cloneNode(true);
    copy.querySelector("#testimonialTitle").textContent=single.title.rendered;
    copy.querySelector("#testimonialP").innerHTML=single.content.rendered;

//find the images
  if(single._embedded){
     copy.querySelector("img").src=single._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  } else {
     copy.querySelector("img").remove()
  }

    parent3.appendChild(copy);

})
}
/* FETCH POST CLASS MEDIA TEMPLATE 3*/

function loadPostsbyCategory4(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/teaching?categories=13&_embed").then(e => e.json()).then(showMedia);

}
loadPostsbyCategory4();

function showMedia(classMedia){
    classMedia.forEach(single => {

    const copy = template4.cloneNode(true);
    copy.querySelector("#performanceMediaTitle").textContent=single.title.rendered;
//    copy.querySelector("#teachingImg2").src=single.acf.images;   /* THE ACF OF THE IMAGE GALLERY DOES NOT SHOW IN THE JSON !!?????*/
//    copy.querySelector("#teachingImg3").src=single.acf.images;
//    copy.querySelector("#teachingImg4").src=single.acf.images;
//

////find the images
//  if(single._embedded){
//     copy.querySelector("img").src=single._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
//  } else {
//     copy.querySelector("img").remove()
//  }

    parent4.appendChild(copy);

})
}


