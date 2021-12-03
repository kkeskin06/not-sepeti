const yenigorev = document.querySelector(".input-gorev");
const yenigoreveklebtn = document.querySelector(".btn-gorev-ekle");
const gorevlistesi = document.querySelector(".gorev-listesi");

yenigoreveklebtn.addEventListener("click", gorevekle);
gorevlistesi.addEventListener("click",gorevSilTamamla);
function gorevSilTamamla(e){
    const tiklanilanEleman = e.target;
    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')){
      tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
    }
    if(tiklanilanEleman.classList.contains('gorev-btn-sil')){
      tiklanilanEleman.parentElement.classList.toggle('kaybol');
      tiklanilanEleman.parentElement.addEventListener('transitionend',function (){
        tiklanilanEleman.parentElement.remove();
      });
    }
    
}

function gorevekle(e) {
  e.preventDefault();

  //div oluşturma
  const gorevDiv = document.createElement("div");
  gorevDiv.classList.add("gorev-item");

  //li oluşturma
  const gorevLi = document.createElement("li");
  gorevLi.classList.add("gorev-tanim");
  gorevLi.innerText = yenigorev.value;
  gorevDiv.appendChild(gorevLi);

  //tamamlandi butonu ekle
  const gorevTamambtn = document.createElement("button");
  gorevTamambtn.classList.add("gorev-btn");
  gorevTamambtn.classList.add("gorev-btn-tamamlandi");
  gorevTamambtn.innerHTML = '<i class="far fa-check-square"></i>';
  gorevDiv.appendChild(gorevTamambtn);

  //sil butonu ekle
  const gorevSilbtn = document.createElement("button");
  gorevSilbtn.classList.add("gorev-btn");
  gorevSilbtn.classList.add("gorev-btn-sil");
  gorevSilbtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  gorevDiv.appendChild(gorevSilbtn);

  yenigorev.value = "";

  //ul ye oluşturdugumuz divi ekleyelim
  gorevlistesi.appendChild(gorevDiv);

}