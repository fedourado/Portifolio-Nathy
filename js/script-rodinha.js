const text = document.getElementById('rotate')
const rotate = new CircleType(text).radius(50)
    
window.addEventListener('scroll', function(){
text.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
})
