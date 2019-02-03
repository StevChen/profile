var portfolioBoxes = document.getElementsByClassName("portfolio-box-header");
//console.log(porfolioBoxes);

function displayDetail(){
	var overlayer = document.getElementsByClassName("overlayer");
	document.body.style.overflow = "hidden";
	overlayer[0].style.display = "block";
} 

for(var i=0; i<portfolioBoxes.length; i++){
	//console.log(porfolioBoxes[i]);
	portfolioBoxes[i].addEventListener("click", displayDetail);
}

