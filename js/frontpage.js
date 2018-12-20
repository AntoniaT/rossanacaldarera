const template = document.querySelector("#frontpageTemplate").content;
const parent = document.querySelector(".frontpage-content");


/* FETCH FROM FRONT PAGE POSTS TEMPLATE */


function getIntrotexts() {
    fetch("http://anckdesign.com/kea/rossana/wp-json/wp/v2/Front_page?categories=14&_embed").then(res => res.json()).then(showIntros);
}

function showIntros(introList) {
    introList.forEach(intro => {
        const copy = template.cloneNode(true);

        copy.querySelector("div").id = intro.slug;
        copy.querySelector("h2").textContent = intro.title.rendered;
        copy.querySelector("p").innerHTML = intro.content.rendered;
        copy.querySelector("a").href = intro.acf.read_more_link;
        copy.querySelector("img").src = intro._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;



        parent.appendChild(copy);
    })
}


getIntrotexts();
