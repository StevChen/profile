var portfolioBoxHeaders = document.getElementsByClassName("portfolio-box-header");
var overlayer = document.getElementById("overlayer");
//console.log(porfolioBoxes);

function displayDetail(e){
	console.log(e.target.textContent);
	document.body.style.overflow = "hidden";
	overlayer.style.display = "block";

	var title = overlayer.querySelector(".overlayer_box #title h1");
	var detail = overlayer.querySelector(".overlayer_box #detail");
	title.textContent = e.target.textContent;
	detail.innerHTML = "Under Construction";

}

for(var i=0; i<portfolioBoxHeaders.length; i++){
	//console.log(porfolioBoxes[i]);
	console.log(portfolioBoxHeaders[i]);
	portfolioBoxHeaders[i].addEventListener("click", displayDetail);
}

window.onclick = function(e){
	//console.log(e.target);
	if(e.target == overlayer){
		overlayer.style.display = "none";
		document.body.style.overflow = "auto";
	}
}
