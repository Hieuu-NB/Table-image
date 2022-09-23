var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next') 
var close = document.querySelector('.close')
var galleryImg  = document.querySelector('.gallery__inner img')
var gallery  = document.querySelector('.gallery')

var currenIndex = 0;


function showGallery(){
	if (currenIndex == 0) {
		prev.classList.add('off')
	}
	else{
		prev.classList.remove('off')
	}
	if (currenIndex == images.length - 1) {
		next.classList.add('off')
	}
	else{
		next.classList.remove('off')
	}
	//hien thi: display
	galleryImg.src = images[currenIndex].src
	gallery.classList.add('show')
}

images.forEach((item, index)=>{
	item.addEventListener('click',function() {
		currenIndex = index;
		showGallery()
	})
});
close.addEventListener('click', function(){
	gallery.classList.remove('show')
})
// bấm nút esc thì out ra ngoài 
document.addEventListener('keydown',(e)=>{
	if(e.keyCode == 27){
		gallery.classList.remove('show')
	}
}) 
prev.addEventListener('click',function(){
	if(currenIndex > 0 ){
		currenIndex--
		showGallery()
	}
})

next.addEventListener('click',function(){
	if(currenIndex < images.length - 1){
		currenIndex++
		showGallery()
	}
})