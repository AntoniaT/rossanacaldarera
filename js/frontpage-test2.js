const template1 = document.querySelector("#frontpageTemplate1").content;
const template2 = document.querySelector("#frontpageTemplate2").content;
const template3 = document.querySelector("#frontpageTemplate3").content;
const template4 = document.querySelector("#frontpageTemplate4").content;


const parent1 = document.querySelector("#parent1");
const parent2 = document.querySelector("#parent2");
const parent3 = document.querySelector("#parent3");
const parent4 = document.querySelector("#parent4");


/* FETCH POST WHO I AM INTRO TEMPLATE 1*/

function loadPostsbyCategory1(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?categories=2&_embed").then(e => e.json()).then(showWhoIam);
}
loadPostsbyCategory1();

function showWhoIam(WhoIam){
    WhoIam.forEach(single => {

    const copy = template1.cloneNode(true);
    copy.querySelector("#whoiamTitle").textContent=single.title.rendered;
    copy.querySelector("#whoiamP").innerHTML=single.content.rendered;
//find the images
  if(single._embedded){
     copy.querySelector("img").src=single._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  } else {
     copy.querySelector("img").remove()
  }
    parent1.appendChild(copy);

})
}


/* FETCH POST CAREER INTRO TEMPLATE 2*/

function loadPostsbyCategory2(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?categories=4&_embed").then(e => e.json()).then(showCareer);
}

function showCareer(singleSection){
    singleSection.forEach(single => {

    const copy = template2.cloneNode(true);
    copy.querySelector("#careerTitle").textContent=single.title.rendered;
    copy.querySelector("#careerP").innerHTML=single.content.rendered;
//find the images
  if(single._embedded){
     copy.querySelector("img").src=single._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  } else {
     copy.querySelector("img").remove()
  }
    parent2.appendChild(copy);

})
}

loadPostsbyCategory2();

/* FETCH POST TEACHING INTRO TEMPLATE 1*/

function loadPostsbyCategory3(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?categories=3&_embed").then(e => e.json()).then(showTeaching);

}
loadPostsbyCategory3();

function showTeaching(teaching){
    teaching.forEach(single => {

    const copy = template3.cloneNode(true);
    copy.querySelector("#teachingTitle").textContent=single.title.rendered;
    copy.querySelector("#teachingP").innerHTML=single.content.rendered;
    copy.querySelector("#teachingImg2").src=single.acf.images;   /* THE ACF OF THE IMAGE GALLERY DOES NOT SHOW IN THE JSON !!?????*/
    copy.querySelector("#teachingImg3").src=single.acf.images;
    copy.querySelector("#teachingImg4").src=single.acf.images;


//find the images
  if(single._embedded){
     copy.querySelector("img").src=single._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  } else {
     copy.querySelector("img").remove()
  }

    parent3.appendChild(copy);

})
}
/* FETCH POST CONTACT INTRO TEMPLATE 1*/

function loadPostsbyCategory4(){
fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/front_page?categories=5&_embed").then(e => e.json()).then(showContact);

}
loadPostsbyCategory4();

function showContact(contact){
    contact.forEach(section => {

    const copy = template4.cloneNode(true);

    copy.querySelector("#contactTitle").textContent=section.title.rendered;
    copy.querySelector("#contactP").innerHTML=section.content.rendered;

//find the images
  if(section._embedded){
     copy.querySelector("img").src=section._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  } else {
     copy.querySelector("img").remove()
  }

        parent4.appendChild(copy);
    })
}



