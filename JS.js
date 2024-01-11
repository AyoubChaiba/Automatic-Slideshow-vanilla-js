let img = document.querySelectorAll(".image img");
let text = document.querySelector(".slides-imge > h3");
let dot = document.querySelector(".dot");
let setting = document.querySelector(".settings_drob");
let index = 1;
	dotDiv()

let clickDot = document.querySelectorAll(".dot > div");

	slide()

	let s = true;

		function plus(n) {
			slide(index+=n);
			// console.log(index+=n);
		}

		function slide(){
			none()
			if (index > img.length) index=1;
			if (index <= 0) index = img.length;
			img[index-1].style.display ="block";
			clickDot[index-1].classList.add("active");
			// console.log(index-1);
			Update_text()
		}

		function settings() {
			if (s){
				setting.style.display = "block" ;
				s=false;
			}else {
				setting.style.display = "none" ;
				s=true;
			}
		}

		console.log(setting);

		let interval = setInterval(() => slide(++index) , 5000)


		function none() {
			for (let i = 0; i < img.length; i++) {
				img[i].style.display = "none" ;
				clickDot[i].classList.remove("active");
			}
			}

		function dotDiv() {
			for (let i = 0; i < img.length; i++) dot.innerHTML += "<div></div>";
			}

			clickDot.forEach((e,i)=>{
				e.addEventListener("click", () => {
					none()
					e.classList.add("active");
					img[i].style.display ="block";
					index = i+1;
					// console.log(index);
					Update_text()
				})
			})

			function Update_text() {
				text.innerHTML = `${index} / ${img.length}`;
				// console.log(index);
			}


// ***************************

// var aa = document.querySelectorAll(".img0 img");
// var pp = document.querySelector(".pp");
// var c = 1,l = 0;
// for(i = 1; i < aa.length; i++){aa[i].style.display = "none";}
// pp.innerHTML = `imag : ${c}/${aa.length}`;
// function GO() {
//   if (c < aa.length) {
//     aa[c].style.display = "block";
//     ++c;
//     pp.innerHTML = `imag : ${c}/${aa.length}`;
//     if (l < c) {
//       aa[l].style.display = "none";
//       l++;}}}
// function BACK() {
//   if (l > 0) {
//     --l;
//     aa[l].style.display = "block";
//     if (c > l) {--c;
//       aa[c].style.display = "none";
//       pp.innerHTML = `imag : ${c}/${aa.length}`;}}}

// const img = document.querySelectorAll(".img0 img");
// const btn_A = document.querySelectorAll(".btn_A button");
// let pp = document.querySelector(".pp p");
// let C = 0;
// img[C].style.display = "block";
// pp.innerHTML = `imag : ${1 + C}/${img.length}`;
// for (i = 0; i < btn_A.length; i++) {
//   btn_A[i].addEventListener("click", Click);
// }
// function Click(n) {
//   if (C < img.length - 1 && n.target.className == btn_A[0].className) {
//     img[C].style.display = "none";
//     img[++C].style.display = "block";
//   } else if (C > 0 && n.target.className == btn_A[1].className) {
//     img[C].style.display = "none";
//     img[--C].style.display = "block";
//   }
//   pp.innerHTML = `imag : ${1 + C}/${img.length}`;
// }

// var img_src=["img/444.jpg","img/bbb.jpg","img/ccc.jpg","img/mr-robot.jpg","img/kkk.jpg"];
// var C =0 ;
// function GO(){if(C<img_src.length-1){++C;img1.src=img_src[C];}}
// function BACK(){if(C>0){--C;img1.src=img_src[C];}}


