<script>
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

screen1.addEventListener("click", ()=>{
  document.querySelectorAll(".flame").forEach(f=>f.style.display="none");

  setTimeout(()=>{
    screen1.classList.remove("active");
    screen2.classList.add("active");
  },600);
});

function goFinal(){
  screen2.classList.remove("active");
  screen3.classList.add("active");
}
</script>
