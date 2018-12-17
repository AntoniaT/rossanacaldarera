const template1 = document.querySelector("#aboutTemplate1").content;
const template2 = document.querySelector("#aboutTemplate2").content;
const template3 = document.querySelector("#aboutTemplate3").content;


const parent1 = document.querySelector("#parent1");
const parent2 = document.querySelector("#parent2");
const parent3 = document.querySelector("#parent3");


/* FETCH POST MY STORY TEMPLATE 1*/

function loadPostsbyCategory1(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/about_me?categories=8&_embed").then(e => e.json()).then(showMyStory);
}
loadPostsbyCategory1();

function showMyStory(myStory){
    myStory.forEach(single => {

    const copy = template1.cloneNode(true);
    copy.querySelector("#myStoryTitle").textContent=single.title.rendered;
    copy.querySelector("#myStoryP").innerHTML=single.content.rendered;
//find the images
//  if(single._embedded){
//     copy.querySelector("img").src=single._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
//  } else {
//     copy.querySelector("img").remove()
//  }
    parent1.appendChild(copy);

})
}


/* FETCH POST PERFORMANCE CAREER TEMPLATE 2*/

function loadPostsbyCategory2(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/about_me?categories=7&_embed").then(e => e.json()).then(showPerformance);
}

function showPerformance(performance){
    performance.forEach(single => {

    const copy = template2.cloneNode(true);
    copy.querySelector("#performanceCareerTitle").textContent=single.title.rendered;
    copy.querySelector("#performanceCareerP").innerHTML=single.content.rendered;
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

/* FETCH POST PERFORMANCE MEDIA TEMPLATE 3*/

function loadPostsbyCategory3(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/about_me?categories=6&_embed").then(e => e.json()).then(showMedia);

}
loadPostsbyCategory3();

function showMedia(media){
    media.forEach(single => {

    const copy = template3.cloneNode(true);
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

    parent3.appendChild(copy);

})
}



