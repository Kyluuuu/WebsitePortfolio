import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                 *//* empty css                */const h=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})}),b=document.querySelectorAll(".hidden");b.forEach(e=>h.observe(e));window.addEventListener("load",()=>{document.querySelector(".navBar").classList.add("showUp")});const l=document.getElementById("scrollText");window.addEventListener("wheel",e=>{e.deltaY>0&&(l.classList.add("scrollHide"),l.classList.remove("scrollAnimation"))});window.addEventListener("scroll",()=>{l.classList.add("scrollHide"),l.classList.remove("scrollAnimation")});const w=document.getElementById("experience");w.addEventListener("click",()=>{const t=document.getElementById("experienceSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:t-n,behavior:"smooth"})});const f=document.getElementById("projects");f.addEventListener("click",()=>{const t=document.getElementById("projectSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:t-n,behavior:"smooth"})});const v=document.getElementById("about");v.addEventListener("click",()=>{const t=document.getElementById("aboutSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:t-n,behavior:"smooth"})});const p=document.getElementById("contact");p.addEventListener("click",()=>{const t=document.getElementById("contactSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:t-n,behavior:"smooth"})});const E=document.getElementById("home");E.addEventListener("click",e=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{l.classList.remove("scrollHide"),l.classList.add("scrollAnimation")},1e3)});const s=document.getElementById("lightModeButton"),m=s.querySelector(".moon"),g=s.querySelector(".sunny");s.addEventListener("click",()=>{let e=!JSON.parse(localStorage.getItem("lightModeOn"));y(e),localStorage.setItem("lightModeOn",String(e))});y(JSON.parse(localStorage.getItem("lightModeOn")));function y(e){console.log(e);const t=document.querySelector(".beginTitle h1"),c=document.querySelector(".innerLeftAbout p"),n=document.querySelector(".beginTitle h2"),r=document.querySelector(".Technology p"),i=document.querySelector(".scroll"),a=document.querySelectorAll(".hidden"),d=document.querySelectorAll(".allProjectsContainer"),u=document.querySelectorAll(".allExperienceContainer");e?(m.style.display="none",g.style.display="block",document.body.style.backgroundColor="white",t.style.color="black",c.style.color="black",n.style.color="#555",r.style.color="#555",i.style.color="black",a.forEach(o=>{o.style.color="black",o.style.borderColor="black"}),d.forEach(o=>{o.style.color="white"}),u.forEach(o=>{o.style.color="black"})):(g.style.display="none",m.style.display="block",document.body.style.backgroundColor="#333",t.style.color="white",c.style.color="white",n.style.color="#999",r.style.color="#999",i.style.color="white",a.forEach(o=>{o.style.color="white",o.style.borderColor="white"}),d.forEach(o=>{o.style.color="white"}),u.forEach(o=>{o.style.color="white"}))}