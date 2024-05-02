const text = document.getElementById('text-round');
const rotate = new CircleType(text).radius(50)
    
window.addEventListener('scroll', function(){
text.style.transform = 'text-round(' + (window.scrollY * 0.15) + 'deg)'
})
