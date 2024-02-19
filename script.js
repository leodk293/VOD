const container = document.querySelector(".container");

async function fetchData() {
    const url = 'https://porn-videos.p.rapidapi.com/video/mia%20khalifa';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4685e83adbmshbe621af8b52500bp19db03jsna57eb0a7e344',
            'X-RapidAPI-Host': 'porn-videos.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        for(let i = 0; i < result.length; i++){

            const dataContainer = document.createElement("div");

            const image = document.createElement("img");
            const title = document.createElement("h3");
            const video = document.createElement("a");

            image.src = result[i].mainThumbnail;

            title.innerText = result[i].title;
            title.style.color = "#000";

            video.href = result[i].videoUrl;
            video.target = "_blank";
            video.innerText = "SEE VIDEO";
            video.classList.add("link");

            dataContainer.appendChild(image);
            dataContainer.appendChild(title);
            dataContainer.appendChild(video);

            dataContainer.classList.add("pattern");

            container.appendChild(dataContainer);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData();



