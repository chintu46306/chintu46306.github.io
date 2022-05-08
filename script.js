console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
        if(  document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
        document.querySelector('.main').style.width = '100%'

       }
       else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline'   
        }, 350);
    }
})