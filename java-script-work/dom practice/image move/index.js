// const elem1 = document.querySelector("#elem1")
// const elemImages = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(dets){
//    elemImages.style.left = dets.x+ "px"
//    elemImages.style.top = dets.y+ "px"
// })

// elem1.addEventListener("mouseenter", function(dets){
//    elemImages.style.opacity="1"

// })
// elem1.addEventListener("mouseleave", function(dets){
//    elemImages.style.opacity="0"

// })

const elem1w = document.querySelectorAll("#elem1");


elem1w.forEach(function (val) {

  val.addEventListener("mouseenter", function () {
   val.childNodes[3].style.opacity="1"
  });
  val.addEventListener("mouseleave", function () {
val.childNodes[3].style.opacity="0"
 });
 val.addEventListener("mousemove", function (dets) {
   val.childNodes[3].style.left = dets.x+"px"
   // val.childNodes[3].style.top = dets.y+"px"
    });


});
