let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

root.addEventListener("onclick", e => {

});

function showClick() {
    console.log("Đã click");
    alert("hehehe");
  }
  