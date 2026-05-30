/* ==========================================
   AKSARA JATIM AI - PREMIUM V5
========================================== */

/* ==========================================
   DARK MODE
========================================== */

function darkMode(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

}

window.addEventListener("load",()=>{

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

    }

});

/* ==========================================
   SCROLL TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let current = 0;

const increment = target/100;

function updateCounter(){

if(current < target){

current += increment;

counter.innerText = Math.floor(current);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

},

{
threshold:0.5
}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

".card, .program-card, .stat-box, .timeline-item"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el=>{

revealObserver.observe(el);

});

/* ==========================================
   HERO ANIMATION
========================================== */

window.addEventListener("load",()=>{

const hero = document.querySelector(".hero-content");

hero.style.opacity="1";

hero.style.transform="translateY(0)";

});

/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/* ==========================================
   AI BOOK MATCH
========================================== */

function recommendBook(){

const interest = document.getElementById("bookInterest").value;

const result = document.getElementById("bookResult");

if(interest==="teknologi"){

result.innerHTML=`

📚 Rekomendasi:

<br><br>

• AI Superpowers

<br>

• The Innovators

<br>

• Deep Work

`;

}

else if(interest==="motivasi"){

result.innerHTML=`

📚 Rekomendasi:

<br><br>

• Atomic Habits

<br>

• Filosofi Teras

<br>

• The Power of Habit

`;

}

else if(interest==="sejarah"){

result.innerHTML=`

📚 Rekomendasi:

<br><br>

• Sapiens

<br>

• Indonesia Menggugat

<br>

• Sejarah Dunia

`;

}

else{

result.innerHTML=

"Silakan pilih kategori terlebih dahulu.";

}

}

/* ==========================================
   FORM RELAWAN
========================================== */

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

showNotification(

"Terima kasih telah mendaftar sebagai relawan!"

);

form.reset();

});

}

/* ==========================================
   NEWSLETTER
========================================== */

const newsletterBtn = document.querySelector(

"#newsletter button"

);

if(newsletterBtn){

newsletterBtn.addEventListener("click",()=>{

showNotification(

"Berhasil berlangganan newsletter!"

);

});

}

/* ==========================================
   NOTIFICATION
========================================== */

function showNotification(message){

const notif = document.createElement("div");

notif.innerText = message;

notif.style.position="fixed";

notif.style.top="20px";

notif.style.right="20px";

notif.style.background="#7B1113";

notif.style.color="white";

notif.style.padding="15px 25px";

notif.style.borderRadius="10px";

notif.style.zIndex="9999";

notif.style.boxShadow=

"0 5px 15px rgba(0,0,0,.3)";

document.body.appendChild(notif);

setTimeout(()=>{

notif.remove();

},3000);

}

/* ==========================================
   PROGRESS BAR ANIMATION
========================================== */

const progressBars = document.querySelectorAll(

".progress-fill"

);

const progressObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width =

entry.target.textContent.trim();

entry.target.style.width = width;

}

});

},

{
threshold:0.5
}

);

progressBars.forEach(bar=>{

bar.style.width="0";

progressObserver.observe(bar);

});

/* ==========================================
   NAVBAR SHADOW
========================================== */

window.addEventListener("scroll",()=>{

const nav = document.querySelector("nav");

if(window.scrollY > 50){

nav.style.boxShadow=

"0 8px 20px rgba(0,0,0,.2)";

}else{

nav.style.boxShadow=

"0 3px 12px rgba(0,0,0,.15)";

}

});

/* ==========================================
   FOOTER YEAR AUTO
========================================== */

const year = document.getElementById("year");

if(year){

year.textContent =

new Date().getFullYear();

}

/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load",()=>{

const loader = document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.display="none";

},1000);

}

});

/* ==========================================
   WELCOME MESSAGE
========================================== */

console.log(

"AKSARA JATIM AI V5 LOADED 🚀"

);

const uploadForm = document.getElementById("uploadForm");

if(uploadForm){

    uploadForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        showNotification(
            "Karya berhasil dikirim!"
        );

        uploadForm.reset();

    });

}

/* ==========================================
   ARTICLE READING PROGRESS
========================================== */

window.addEventListener("scroll",()=>{

const progressBar =
document.getElementById("readingProgress");

if(progressBar){

const totalHeight =
document.documentElement.scrollHeight
- window.innerHeight;

const progress =
(window.scrollY / totalHeight) * 100;

progressBar.style.width =
progress + "%";

}

});

/* ==========================================
   LIKE ARTICLE
========================================== */

const likeBtn =
document.getElementById("likeBtn");

const likeCount =
document.getElementById("likeCount");

let likes = 0;

if(likeBtn){

    likeBtn.addEventListener("click",()=>{

        likes++;

        likeCount.innerText =
        likes + " Suka";

    });

}