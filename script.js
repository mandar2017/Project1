window.onload = () => {
  const url = window.location.href;
  if(url.includes("#")){
    window.location.href= "/"
  }
}



const bar = document.querySelector(".rectangle-latest");

setTimeout(() => {
  bar.style.setProperty("--progress", "100%");
}, 500);

