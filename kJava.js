	let ide = "a4";
	let co = 0;
	let inv = "n";
	let lg = "n";
	let ide2 = null;
	let col = null;
	let dro = "n";
	let btim = 200;
	let navc = "pc1";
	let clist = ["ct1", "ct2", "ct3", "ct4", "ct5", "ct6", "ct7"];
	let plist = ["pag1", "pag2", "pag3", "pag4", "pag5", "pag6", "pag7"];
	let oclist = [po, pt, pth, pf, pfi, ps, pse];
	let cnlist = ["cartinf", "cartrt", "cartro", "cartbac", "cartlt", "cartlo", "carthido"];
	let indy = 0;
	
	function st(){
	  cChang("banner-text", "opacity", "1");
	  cChang("banner-text", "transform", "translate(15vw, 5vh)");
	}

	function invert() {
		if (inv == "n")
			{inv = "y";
			txChange();
			 document.body.style.backgroundColor = "#002042";
			 document.body.style.color = "#efefef";
			 cChang("banner", "background-Color", "#002042");
			 document.getElementById("d1").style.backgroundColor = "#401d49";
			 cChang("dc", "background-Color", "#555555");
			 cChang("dc", "color", "#efefef");
			 cChang("dropbtn", "background-Color", "#401d49");
			 cChang("dropbtn", "color", "#efefef");
			 cChang("nd", "background-Color", "#401d49");
			 cChang("nd", "color", "#efefef");
			 cChang("lin", "color", "yellow");
			 cChang("b1", "background-color", "#001031");
			 cChang("b1t", "background-color", "#001031");
			 document.getElementById("li1").style.color = "yellow";
			 document.getElementById("li1").style.borderBottom = "1px dotted yellow";
			 document.getElementById("tip").style.color = "#f0e6ac";
			 document.getElementById("li6").style.color = "yellow";
			 document.getElementById(ide2).style.backgroundColor = "#333";
			 document.getElementById(ide2).style.color = "#cca01d";
			 cChang("card", "background-Color", "#353839");
			 cChang("card", "box-Shadow", "3px 3px 10px 0 #0dd");
			 cChang("cartinf", "background-Color", "#353839");
			 cChang("cartinf", "box-Shadow", "0px 3px 10px 0 #0dd");
			 cChang("cartlo", "background-Color", "#353839");
			 cChang("cartlo", "box-Shadow", "0px 3px 10px 0 #0dd");
			 cChang("cartro", "background-Color", "#353839");
			 cChang("cartro", "box-Shadow", "0px 3px 10px 0 #0dd");
			 cChang("cartlt", "background-Color", "#353839");
			 cChang("cartlt", "box-Shadow", "0px 3px 10px 0 #0dd");
			 cChang("cartrt", "background-Color", "#353839");
			 cChang("cartrt", "box-Shadow", "0px 3px 10px 0 #0dd");
			 cChang("cartbac", "background-Color", "#353839");
			 cChang("cartbac", "box-Shadow", "0px 3px 10px 0 #0dd");
			 cChang("carthido", "background-Color", "#353839");
			 cChang("carthido", "box-Shadow", "0px 3px 10px 0 #0dd");
			 const myTimeout = setTimeout(ret, btim);
			 if (co!=0) {
			 document.getElementById(ide).style.backgroundColor = "#333";
			 document.getElementById(ide).style.color = "#cca01d";}
			 else if (co==0 && ide!="a4") {
			 document.getElementById(ide).style.backgroundColor = "#333";
			 document.getElementById(ide).style.color = "#cca01d";}
			 }
		else
			{inv = "n";
			txChange();
			 document.body.style.backgroundColor = "";
			 document.body.style.color = "";
			 cChang("banner", "background-color", "");
			 document.getElementById("d1").style.backgroundColor = "";
			 cChang("dc", "background-Color", "");
			 cChang("dc", "color", "");
			 cChang("dropbtn", "background-Color", "");
			 cChang("dropbtn", "color", "");
			 cChang("nd", "background-Color", "");
			 cChang("nd", "color", "");
			 cChang("lin", "color", "");
			 cChang("b1", "background-color", "");
			 cChang("b1t", "background-color", "");
			 document.getElementById("li1").style.color = "";
			 document.getElementById("li1").style.borderBottom = "";
			 document.getElementById("tip").style.color = "#8c8c8c";
			 document.getElementById("li6").style.color = "";
			 document.getElementById(ide2).style.backgroundColor = "#333";
			 document.getElementById(ide2).style.color = "#cca01d";
			 cChang("card", "background-Color", "");
			 cChang("card", "box-Shadow", "");
			 cChang("card", "background-Color", "");
			 cChang("card", "box-Shadow", "");
			 cChang("cartinf", "background-Color", "");
			 cChang("cartinf", "box-Shadow", "");
			 cChang("cartlo", "background-Color", "");
			 cChang("cartlo", "box-Shadow", "");
			 cChang("cartro", "background-Color", "");
			 cChang("cartro", "box-Shadow", "");
			 cChang("cartlt", "background-Color", "");
			 cChang("cartlt", "box-Shadow", "");
			 cChang("cartrt", "background-Color", "");
			 cChang("cartrt", "box-Shadow", "");
			 cChang("cartbac", "background-Color", "");
			 cChang("cartbac", "box-Shadow", "");
			 cChang("carthido", "background-Color", "");
			 cChang("carthido", "box-Shadow", "");
			 const myTimeout = setTimeout(ret2, btim);
			 
			 if (co!=0) {
			 document.getElementById(ide).style.backgroundColor = "#333";
			 document.getElementById(ide).style.color = "#cca01d";}	 
			 else if (co==0 && ide!="a4") {
			 document.getElementById(ide).style.backgroundColor = "#333";
			 document.getElementById(ide).style.color = "#cca01d";}
			 }
	}
	
	function cChang(cName, cProp, cVal){
	var cols = document.getElementsByClassName(cName);
	for(i = 0; i < cols.length; i++) {
		cols[i].style.setProperty(cProp, cVal);}
	}
	
	function lgtext() {
	if (inv == "y"){
		document.getElementById(ide2).style.backgroundColor = "#333";
		document.getElementById(ide2).style.color = "#cca01d";
		const myTimeout = setTimeout(ret, btim);}
	if (lg == "n")
		{lg = "y";
		txChange();
		document.body.style.fontSize = "160%";
		cChang("banner-text", "transform", "translate(10vw, -5vh)");
		document.getElementById("htimg").style.transform = "translate(45vw, -33vh)";
	    cChang("banner-text", "transition", "none");
		document.getElementById("cla1").style.width = "90vw";
		document.getElementById("cla11").style.width = "90vw";
		document.getElementById("cla2").style.width = "90vw";
		document.getElementById("cla22").style.width = "90vw";
		document.getElementById("hab").style.left = "43%";
		document.getElementById("im").style.width = "510px";
		document.getElementById("im").style.height = "260px";
		document.getElementById("im").style.left = "50%";
		cChang("card", "height", "66vh");
		cChang("card", "width", "22.5%");
		cChang("b2t", "padding-bottom", "625px");
		cChang("cartinf", "height", "66vh");
		cChang("cartinf", "width", "22.5%");
		cChang("cartlo", "height", "66vh");
		cChang("cartlo", "width", "22.5%");
		cChang("cartro", "height", "66vh");
		cChang("cartro", "width", "22.5%");
		cChang("cartlt", "height", "66vh");
		cChang("cartlt", "width", "22.5%");
		cChang("cartrt", "height", "66vh");
		cChang("cartrt", "width", "22.5%");
		cChang("cartbac", "height", "66vh");
		cChang("cartbac", "width", "22.5%");
		cChang("carthido", "height", "66vh");
		cChang("carthido", "width", "22.5%");
		cChang("CI", "height", "39vh");
		cChang("overlay-content", "top", "9%");
		cChang("exc", "display", "none");
		document.getElementById("dc1b").style.cursor = "zoom-out";}
	else
		{lg = "n";
		 txChange();
		 document.body.style.fontSize = "";
		 cChang("banner-text", "transform", "translate(15vw, 5vh)");
		 document.getElementById("htimg").style.transform = "translate(40vw, -30vh)";
		 document.getElementById("cla1").style.width = "";
		 document.getElementById("cla11").style.width = "";
		 document.getElementById("cla2").style.width = "";
		 document.getElementById("cla22").style.width = "";
		 document.getElementById("hab").style.left = "";
		 document.getElementById("im").style.width = "340px";
		 document.getElementById("im").style.height = "180px";
		 document.getElementById("im").style.left = "60%";
		 cChang("card", "height", "");
		 cChang("card", "width", "");
		 cChang("b2t", "padding-bottom", "");
		 cChang("cart", "height", "");
		 cChang("cart", "width", "");
		 cChang("cartinf", "height", "");
		 cChang("cartinf", "width", "");
		 cChang("cartlo", "height", "");
		 cChang("cartlo", "width", "");
		 cChang("cartro", "height", "");
		 cChang("cartro", "width", "");
		 cChang("cartlt", "height", "");
		 cChang("cartlt", "width", "");
		 cChang("cartrt", "height", "");
		 cChang("cartrt", "width", "");
		 cChang("cartbac", "height", "");
	  	 cChang("cartbac", "width", "");
		 cChang("carthido", "height", "");
		 cChang("carthido", "width", "");
		 cChang("CI", "height", "");
		 cChang("overlay-content", "top", "");
		 cChang("exc", "display", "");
		 document.getElementById("dc1b").style.cursor = "zoom-in";}
	}
	
	function txChange() {
			if (lg=="n" && inv == "y") {
			    document.getElementById("acc").textContent = "If the text above is difficult to read, you can increase the text size on the left side of the navigation bar";
				document.getElementById("a4").href = "CVs/KushCVA.pdf";	
			 }
			 if (lg=="n" && inv == "n") {
			    document.getElementById("acc").textContent = "If the text above is difficult to read, try the accessibility features on the left side of the navigation bar; changes are automatically applied to the CV";
			 	document.getElementById("a4").href = "CVs/KushCV.pdf";	
			 }
			 if (lg=="y" && inv == "n") {
			    document.getElementById("acc").textContent = "If the text above is difficult to read, you can invert the colours of the page on the left side of the navigation bar";
			    document.getElementById("a4").href = "CVs/KushCVL.pdf";
			 }
			 if (lg=="y" && inv == "y") {
			    document.getElementById("acc").style.display = "none";
				document.getElementById("wo1").style.display = "none";
				document.getElementById("cla1").style.boxShadow = "8px 0px 4px -4px rgba(0,0,0,0.3) inset";
				document.getElementById("cla2").style.boxShadow = "8px 0px 4px -4px rgba(0,0,0,0.3) inset";
				document.getElementById("a4").href = "CVs/KushCVAL.pdf";
			 }
			 else {
			 	document.getElementById("acc").style.display = "";
				document.getElementById("wo1").style.display = "";
				document.getElementById("cla1").style.boxShadow = "";
				document.getElementById("cla2").style.boxShadow = "";				
			 }

	}
	
	function hon() {
	   if (inv == "y") {
	    if (ide2 != ide) {
	       document.getElementById(ide2).style.backgroundColor = "#200b28";}}}
		   
	function hoff() {
		if (inv == "y") {
		if (ide==ide2) {
	       document.getElementById(ide2).style.backgroundColor = "#333";}
		else if (dro=="y")
		{document.getElementById(ide2).style.backgroundColor = "#555555";
		 document.getElementById(ide2).style.color = "white"}
		else {document.getElementById(ide2).style.backgroundColor = "#401d49";}
		}}
	
	function hn5() {
		ide2 = "a5";
		dro = "n";
		hon();}
	
	function hn4() {
		ide2 = "a4";
		dro = "n";
		hon();}
		
	function hn3() {
		ide2 = "a3";
		dro = "n";
		hon();}
		
	function hn2() {
		ide2 = "a2";
		dro = "n";
		hon();}
		
	function hn1() {
		ide2 = "a1";
		dro = "n";
		hon();}
		
	function dcn1a(){
		ide2 = "dc1a";
		dro = "y";
		hon();}
		
	function dcn1b(){
		ide2 = "dc1b";
		dro = "y";
		hon();}
		
	function dcn2a(){
		ide2 = "dc2a";
		dro = "y";
		hon();}
		
	function dcn2b(){
		ide2 = "dc2b";
		dro = "y";
		hon();}
		
	function dcn2c(){
		ide2 = "dc2c";
		dro = "y";
		hon();}
		
	function dcn3a(){
		ide2 = "dc3a";
		dro = "y";
		hon();}
		
	function dcn3b(){
		ide2 = "dc3b";
		dro = "y";
		hon();}
		
	function dcn3c(){
		ide2 = "dc3c";
		dro = "y";
		hon();}
	
	function c4() {
	if (co==0){co=1;
	revo();
	ide="a4";}
	revo();
	ide = "a4";
	hig();}
	
	function c3() {
	if (co==0){co=1;
	revo();
	ide="a3";}
	if (inv == "y") {
		document.getElementById(ide2).style.backgroundColor = "#333";
		document.getElementById(ide2).style.color = "#cca01d";
		const myTimeout = setTimeout(ret, btim);}
	revo();
	ide="a3"
	hig();}
	
	function ret() {
		document.getElementById(ide2).style.backgroundColor = "#200b28";
		document.getElementById(ide2).style.color = "white";
		document.getElementById(ide2).style.transition = "background-color 0.2s, color 0.2s";}
	
	function ret2() {
		document.getElementById(ide2).style.backgroundColor = "";
		document.getElementById(ide2).style.color = "";}
	
	function c2() {
	if (co==0){co=1;
	revo();
	ide="a2";}
	if (inv == "y") {
		document.getElementById(ide2).style.backgroundColor = "#333";
		document.getElementById(ide2).style.color = "#cca01d";
		const myTimeout = setTimeout(ret, btim);
		if (document.getElementById("wo").style.display == "none") {
		 document.getElementById("dc3a").href = "#wo2";}
		else {document.getElementById("dc3a").href = "#wo";}}
	revo();
	ide="a2";
	hig();}
	
	function c1() {
	if (co==0){co=1;
	revo();
	ide="a1";}
	revo();
	ide = "a1";
	hig();}
	
	function revo() {
	if (inv == "n"){
		document.getElementById(ide).style.backgroundColor = "";
		document.getElementById(ide).style.padding = "13.5px 18px";
		document.getElementById(ide).style.color = "";}
		else {
		document.getElementById(ide).style.backgroundColor = "#401d49";
		document.getElementById(ide).style.padding = "13.5px 18px";
		document.getElementById(ide).style.color = "white";}
	}
	
	function hig() {
	if (inv == "n"){
		document.getElementById(ide).style.backgroundColor = "#333";
		document.getElementById(ide).style.color = "#cca01d";}
	else {
		document.getElementById(ide).style.backgroundColor = "#333";
		document.getElementById(ide).style.color = "#cca01d";
	}}
	
	function cid1() {
	revo();
	ide = "a1";
	hig();}
	
	function cid2() {
	revo();
	ide = "a2";
	hig();}
	
	function cid3() {
	revo();
	ide = "a3";
	hig();}
	
	function op() {
	document.getElementById("tip").style.opacity = "1";}
	
	function wo(){
	document.getElementById(navc).style.display = "";
	navc = "wc1";
	openNav();}
	
	function wt(){
	document.getElementById(navc).style.display = "";
	navc = "wc2";
	openNav();}
	
	function wth(){
	document.getElementById(navc).style.display = "";
	navc = "wc3";
	openNav();}
	
	function wf(){
	document.getElementById(navc).style.display = "";
	navc = "wc4";
	openNav();}
	
	function po(){
	if (document.getElementById(clist[0]).className == "cartinf"){
	document.getElementById(navc).style.display = "";
	navc = "pc1";
	openNavt();
	document.getElementById("pc1i").style.display = "";
	document.getElementById("pc1b").style.display = "block";}}
	
	function pt(){
	if (document.getElementById(clist[1]).className == "cartinf"){
	document.getElementById(navc).style.display = "";
	navc = "pc2";
	openNavt();}}
	
	function pth(){
	if (document.getElementById(clist[2]).className == "cartinf"){
	document.getElementById(navc).style.display = "";
	navc = "pc3";
	openNavt();}}
	
	function pf(){
	if (document.getElementById(clist[3]).className == "cartinf"){
	document.getElementById(navc).style.display = "";
	navc = "pc4";
	openNavt();}}
	
	function pfi(){
	if (document.getElementById(clist[4]).className == "cartinf"){
	document.getElementById(navc).style.display = "";
	navc = "pc5";
	openNavt();}}
	
	function ps(){
	if (document.getElementById(clist[5]).className == "cartinf"){
	document.getElementById(navc).style.display = "";
	navc = "pc6";
	openNavt();}}
	
	function pse(){
	if (document.getElementById(clist[6]).className == "cartinf"){
	document.getElementById(navc).style.display = "";
	navc = "pc7";
	openNavt();}}
	
	function openNav() {
	document.getElementById(navc).style.display = "block";
	let elem = document.getElementById("d1");
	let coords = elem.getBoundingClientRect();
	document.getElementById("myNav").style.top = coords.top + "px";
	document.getElementById("myNav").style.height = "100vh";
	}
  
    function closeNav() {
    document.getElementById("myNav").style.height = "0vh";
	document.getElementById(navc).style.display = "";}
	
	function openNavt() {
	document.getElementById(navc).style.display = "block";
	let elem = document.getElementById("d1");
	let coords = elem.getBoundingClientRect();
	document.getElementById("myNav2").style.top = coords.top + "px";
	document.getElementById("myNav2").style.height = "100vh";}
  
    function closeNavt() {
    document.getElementById("myNav2").style.height = "0vh";
	document.getElementById(navc).style.display = "";
	if(indy==0){
	document.getElementById("pc1i").style.display = "none";
	document.getElementById("pc1b").style.display = "";
	}}
	
	function rig() {
	unhigt();
	if (indy < 6) {
		indy++;}
	else {indy = 0}
	higt();
	}

	function lef() {
	unhigt();
	if (indy > 0) {
		indy--;}
	else {indy = 6}
	higt();
	}
	
	function pago() {
	unhigt();
	indy = 0;
	higt();
	}
	
	function pagt() {
	unhigt();
	indy = 1;
	higt();
	}
	
	function pagth() {
	unhigt();
	indy = 2;
	higt();
	}
	
	function pagf() {
	unhigt();
	indy = 3;
	higt();
	}
	
	function pagfi() {
	unhigt();
	indy = 4;
	higt();
	}
	
	function pags() {
	unhigt();
	indy = 5;
	higt();
	}
	
	function pagse() {
	unhigt();
	indy = 6;
	higt();
	}
	
	function unhigt() {
	document.getElementById(plist[indy]).style.backgroundColor = "";
	}

	function higt() {
	document.getElementById(plist[indy]).style.backgroundColor = "#ddd";
	document.getElementById(clist[indy]).className = "cartinf";
	let tindy = indy;
	for(let j = 0; j < cnlist.length; j++){
	  document.getElementById(clist[tindy]).className = cnlist[j];
	  tindy++;
	  if(tindy > 6){
	  tindy = 0;}
	}
	//oclist[indy]();
	}
	
	document.getElementById("dc1a").addEventListener("click", invert());
	document.getElementById("dc1b").addEventListener("click", lgtext());
	
	function initComparisons() {
	  var x, n;
	  /* Find all elements with an "overlay" class: */
	  x = document.getElementsByClassName("img-comp-overlay");
	  for (n = 0; n < x.length; n++) {
		/* Once for each "overlay" element:
		pass the "overlay" element as a parameter when executing the compareImages function: */
		compareImages(x[n]);
	  }
	  function compareImages(img) {
		var slider, img, clicked = 0, w, h;
		/* Get the width and height of the img element */
		w = img.offsetWidth;
		h = img.offsetHeight;
		/* Set the width of the img element to 50%: */
		img.style.width = (w / 2) + "px";
		/* Create slider: */
		slider = document.createElement("DIV");
		slider.setAttribute("class", "img-comp-slider");
		/* Insert slider */
		img.parentElement.insertBefore(slider, img);
		/* Position the slider in the middle: */
		slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
		slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
		/* Execute a function when the mouse button is pressed: */
		slider.addEventListener("mousedown", slideReady);
		/* And another function when the mouse button is released: */
		window.addEventListener("mouseup", slideFinish);
		/* Or touched (for touch screens: */
		slider.addEventListener("touchstart", slideReady);
		 /* And released (for touch screens: */
		window.addEventListener("touchend", slideFinish);
		function slideReady(e) {
		  /* Prevent any other actions that may occur when moving over the image: */
		  e.preventDefault();
		  /* The slider is now clicked and ready to move: */
		  clicked = 1;
		  /* Execute a function when the slider is moved: */
		  window.addEventListener("mousemove", slideMove);
		  window.addEventListener("touchmove", slideMove);
		}
		function slideFinish() {
		  /* The slider is no longer clicked: */
		  clicked = 0;
		}
		function slideMove(e) {
		  var pos;
		  /* If the slider is no longer clicked, exit this function: */
		  if (clicked == 0) return false;
		  /* Get the cursor's x position: */
		  pos = getCursorPos(e)
		  /* Prevent the slider from being positioned outside the image: */
		  if (pos < 0) pos = 0;
		  if (pos > w) pos = w;
		  /* Execute a function that will resize the overlay image according to the cursor: */
		  slide(pos);
		}
		function getCursorPos(e) {
		  var a, x = 0;
		  e = (e.changedTouches) ? e.changedTouches[0] : e;
		  /* Get the x positions of the image: */
		  a = img.getBoundingClientRect();
		  /* Calculate the cursor's x coordinate, relative to the image: */
		  x = e.pageX - a.left;
		  /* Consider any page scrolling: */
		  x = x - window.pageXOffset;
		  return x;
		}
		function slide(x) {
		  /* Resize the image: */
		  img.style.width = x + "px";
		  /* Position the slider: */
		  slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
		}
	  }
	}