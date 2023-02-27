
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const themeToggler = document.querySelector(".themeToggler");





// show sidebar
menuBtn.addEventListener("click",() =>{
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener("click",() =>{
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener("click", ()=>{

    document.body.classList.toggle('dark-theme-variables');

   
    
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    
})
