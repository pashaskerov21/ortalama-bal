function addInputSection() {
  let changeNumber = document.getElementById("change-number-input");
  let result = document.getElementById("result");
  
  let section4 = document.getElementById("subject-4");
  let section5 = document.getElementById("subject-5");
  let section6 = document.getElementById("subject-6");
  let section7 = document.getElementById("subject-7");
  let section8 = document.getElementById("subject-8");

  if (changeNumber.value == 3) {
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    if(result.style.display == "block"){
      result.style.display = "none";
    }
  }
  if (changeNumber.value == 4) {
    section4.style.display = "flex";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    if(result.style.display == "block"){
      result.style.display = "none";
    }
  }
  if (changeNumber.value == 5) {
    section4.style.display = "flex";
    section5.style.display = "flex";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    if(result.style.display == "block"){
      result.style.display = "none";
    }
  }
  if (changeNumber.value == 6) {
    section4.style.display = "flex";
    section5.style.display = "flex";
    section6.style.display = "flex";
    section7.style.display = "none";
    section8.style.display = "none";
    if(result.style.display == "block"){
      result.style.display = "none";
    }
  }
  if (changeNumber.value == 7) {
    section4.style.display = "flex";
    section5.style.display = "flex";
    section6.style.display = "flex";
    section7.style.display = "flex";
    section8.style.display = "none";
    if(result.style.display == "block"){
      result.style.display = "none";
    }
  }
  if (changeNumber.value == 8) {
    section4.style.display = "flex";
    section5.style.display = "flex";
    section6.style.display = "flex";
    section7.style.display = "flex";
    section8.style.display = "flex";
    if(result.style.display == "block"){
      result.style.display = "none";
    }
  }
}

function calculateFunction() {
  let kredit1 = document.getElementById("fk-1");
  let kredit2 = document.getElementById("fk-2");
  let kredit3 = document.getElementById("fk-3");
  let kredit4 = document.getElementById("fk-4");
  let kredit5 = document.getElementById("fk-5");
  let kredit6 = document.getElementById("fk-6");
  let kredit7 = document.getElementById("fk-7");
  let kredit8 = document.getElementById("fk-8");

  let bal1 = document.getElementById("fb-1");
  let bal2 = document.getElementById("fb-2");
  let bal3 = document.getElementById("fb-3");
  let bal4 = document.getElementById("fb-4");
  let bal5 = document.getElementById("fb-5");
  let bal6 = document.getElementById("fb-6");
  let bal7 = document.getElementById("fb-7");
  let bal8 = document.getElementById("fb-8");

  let fenn1 = parseInt(kredit1.value) * parseInt(bal1.value);
  let fenn2 = parseInt(kredit2.value) * parseInt(bal2.value);
  let fenn3 = parseInt(kredit3.value) * parseInt(bal3.value);
  let fenn4 = parseInt(kredit4.value) * parseInt(bal4.value);
  let fenn5 = parseInt(kredit5.value) * parseInt(bal5.value);
  let fenn6 = parseInt(kredit6.value) * parseInt(bal6.value);
  let fenn7 = parseInt(kredit7.value) * parseInt(bal7.value);
  let fenn8 = parseInt(kredit8.value) * parseInt(bal8.value);

  let changeNumber = document.getElementById("change-number-input");
  let suret, mexrec, sonNetice, status;
  let result = document.getElementById("result");
  const qiymetler = [bal1.value, bal2.value, bal3.value];

  // statusun tapilmasi
  function showStatus() {
    
    function filterArray51(value) {
      return value >= 51;
    }
    function filterArray71(value) {
      return value >= 71;
    }
    function filterArray91(value) {
      return value >= 91;
    }
    function filterArrayOver0(value) {
      return value >= 0;
    }
    function filterArrayUnder51(value) {
      return value < 51;
    }
    function from0To51Func(value) {
      return value >= 0 && value < 51;
    }

    const over51E = qiymetler.every(filterArray51);
    //const over51S = qiymetler.some(filterArray51);

    const over71E = qiymetler.every(filterArray71);
    //const over71S = qiymetler.some(filterArray71);

    const over91E = qiymetler.every(filterArray91);
    const over91S = qiymetler.some(filterArray91);

    const over0E = qiymetler.every(filterArrayOver0);
    const under51S = qiymetler.some(filterArrayUnder51);
    const from0To51F = qiymetler.filter(from0To51Func);

    if (over0E == true && under51S == true) {
      result.style.marginBottom = "20px";
      status = "Tələbə təqaüd qazanmayıb. <br> Kəsr sayı = " + from0To51F.length;
    }
    if (over51E == true) {
      result.style.marginBottom = "0";
      status = "Təqaüd növü: adi";
    }
    if (over91E == false && over91S == true && over71E == true) {
      result.style.marginBottom = "0";
      status = "Təqaüd növü: zərbəçi";
    }
    if (over91E == true) {
      result.style.marginBottom = "0";
      status = "Təqaüd növü: əlaçı";
    }

    return status;
  }

  if (changeNumber.value == 3) {
    if (
      kredit1.value == "" ||
      kredit1.value == "" ||
      kredit3.value == "" ||
      bal1.value == "" ||
      bal2.value == "" ||
      bal3.value == ""
    ) {
      alert("Bütün xanaları doldurun");
      result.style.display = "none";
    } else if (
      kredit1.value < 0 ||
      kredit2.value < 0 ||
      kredit3.value < 0 ||
      bal1.value < 0 ||
      bal2.value < 0 ||
      bal3.value < 0
    ) {
      alert("Daxil edilən ədədlər sıfırdan kiçik ola bilməz");
      result.style.display = "none";
    } else if (bal1.value > 100 || bal2.value > 100 || bal3.value > 100) {
      alert("Ümumi bal 100-dən böyük ola bilməz");
      result.style.display = "none";
    } else {
      suret = fenn1 + fenn2 + fenn3;
      mexrec =
        parseInt(kredit1.value) +
        parseInt(kredit2.value) +
        parseInt(kredit3.value);
      sonNetice = suret / mexrec;

      showStatus();

      result.style.display = "block";
    }
  }
  if (changeNumber.value == 4) {
    if (
      kredit1.value == "" ||
      kredit1.value == "" ||
      kredit3.value == "" ||
      kredit4.value == "" ||
      bal1.value == "" ||
      bal2.value == "" ||
      bal3.value == "" ||
      bal4.value == ""
    ) {
      alert("Bütün xanaları doldurun");
      result.style.display = "none";
    } else if (
      kredit1.value < 0 ||
      kredit2.value < 0 ||
      kredit3.value < 0 ||
      kredit4.value < 0 ||
      bal1.value < 0 ||
      bal2.value < 0 ||
      bal3.value < 0 ||
      bal4.value < 0
    ) {
      alert("Daxil edilən ədədlər sıfırdan kiçik ola bilməz");
      result.style.display = "none";
    } else if (
      bal1.value > 100 ||
      bal2.value > 100 ||
      bal3.value > 100 ||
      bal4.value > 100
    ) {
      alert("Ümumi bal 100-dən böyük ola bilməz");
      result.style.display = "none";
    } else {
      suret = fenn1 + fenn2 + fenn3 + fenn4;
      mexrec =
        parseInt(kredit1.value) +
        parseInt(kredit2.value) +
        parseInt(kredit3.value) +
        parseInt(kredit4.value);
      sonNetice = suret / mexrec;

      function showStatusForSection4(){
        qiymetler.push(bal4.value);
        showStatus();
      }
      showStatusForSection4();
      result.style.display = "block";
      
    }
  }
  if (changeNumber.value == 5) {
    if (
      kredit1.value == "" ||
      kredit1.value == "" ||
      kredit3.value == "" ||
      kredit4.value == "" ||
      kredit5.value == "" ||
      bal1.value == "" ||
      bal2.value == "" ||
      bal3.value == "" ||
      bal4.value == "" ||
      bal5.value == ""
    ) {
      alert("Bütün xanaları doldurun");
      result.style.display = "none";
    } else if (
      kredit1.value < 0 ||
      kredit2.value < 0 ||
      kredit3.value < 0 ||
      kredit4.value < 0 ||
      kredit5.value < 0 ||
      bal1.value < 0 ||
      bal2.value < 0 ||
      bal3.value < 0 ||
      bal4.value < 0 ||
      bal5.value < 0
    ) {
      alert("Daxil edilən ədədlər sıfırdan kiçik ola bilməz");
      result.style.display = "none";
    } else if (
      bal1.value > 100 ||
      bal2.value > 100 ||
      bal3.value > 100 ||
      bal4.value > 100 ||
      bal5.value > 100
    ) {
      alert("Ümumi bal 100-dən böyük ola bilməz");
      result.style.display = "none";
    } else {
      suret = fenn1 + fenn2 + fenn3 + fenn4 + fenn5;
      mexrec =
        parseInt(kredit1.value) +
        parseInt(kredit2.value) +
        parseInt(kredit3.value) +
        parseInt(kredit4.value) +
        parseInt(kredit5.value);
      sonNetice = suret / mexrec;

      function showStatusForSection5(){
        qiymetler.push(bal4.value,bal5.value);
        showStatus();
      }
      showStatusForSection5();
      result.style.display = "block";
    }
  }
  if (changeNumber.value == 6) {
    if (
      kredit1.value == "" ||
      kredit1.value == "" ||
      kredit3.value == "" ||
      kredit4.value == "" ||
      kredit5.value == "" ||
      kredit6.value == "" ||
      bal1.value == "" ||
      bal2.value == "" ||
      bal3.value == "" ||
      bal4.value == "" ||
      bal5.value == "" ||
      bal6.value == ""
    ) {
      alert("Bütün xanaları doldurun");
      result.style.display = "none";
    } else if (
      kredit1.value < 0 ||
      kredit2.value < 0 ||
      kredit3.value < 0 ||
      kredit4.value < 0 ||
      kredit5.value < 0 ||
      kredit6.value < 0 ||
      bal1.value < 0 ||
      bal2.value < 0 ||
      bal3.value < 0 ||
      bal4.value < 0 ||
      bal5.value < 0 ||
      bal6.value < 0
    ) {
      alert("Daxil edilən ədədlər sıfırdan kiçik ola bilməz");
      result.style.display = "none";
    } else if (
      bal1.value > 100 ||
      bal2.value > 100 ||
      bal3.value > 100 ||
      bal4.value > 100 ||
      bal5.value > 100 ||
      bal6.value > 100
    ) {
      alert("Ümumi bal 100-dən böyük ola bilməz");
      result.style.display = "none";
    } else {
      suret = fenn1 + fenn2 + fenn3 + fenn4 + fenn5 + fenn6;
      mexrec =
        parseInt(kredit1.value) +
        parseInt(kredit2.value) +
        parseInt(kredit3.value) +
        parseInt(kredit4.value) +
        parseInt(kredit5.value) +
        parseInt(kredit6.value);
      sonNetice = suret / mexrec;

      function showStatusForSection6(){
        qiymetler.push(bal4.value,bal5.value,bal6.value);
        showStatus();
      }
      showStatusForSection6();
      result.style.display = "block";
    }
  }
  if (changeNumber.value == 7) {
    if (
      kredit1.value == "" ||
      kredit1.value == "" ||
      kredit3.value == "" ||
      kredit4.value == "" ||
      kredit5.value == "" ||
      kredit6.value == "" ||
      kredit7.value == "" ||
      bal1.value == "" ||
      bal2.value == "" ||
      bal3.value == "" ||
      bal4.value == "" ||
      bal5.value == "" ||
      bal6.value == "" ||
      bal7.value == ""
    ) {
      alert("Bütün xanaları doldurun");
      result.style.display = "none";
    }else if (
      kredit1.value < 0 ||
      kredit2.value < 0 ||
      kredit3.value < 0 ||
      kredit4.value < 0 ||
      kredit5.value < 0 ||
      kredit6.value < 0 ||
      kredit7.value < 0 ||
      bal1.value < 0 ||
      bal2.value < 0 ||
      bal3.value < 0 ||
      bal4.value < 0 ||
      bal5.value < 0 ||
      bal6.value < 0 ||
      bal7.value < 0
    ) {
      alert("Daxil edilən ədədlər sıfırdan kiçik ola bilməz");
      result.style.display = "none";
    } else if (
      bal1.value > 100 ||
      bal2.value > 100 ||
      bal3.value > 100 ||
      bal4.value > 100 ||
      bal5.value > 100 ||
      bal6.value > 100 ||
      bal7.value > 100
    ) {
      alert("Ümumi bal 100-dən böyük ola bilməz");
      result.style.display = "none";
    } else {
      suret = fenn1 + fenn2 + fenn3 + fenn4 + fenn5 + fenn6 + fenn7;
      mexrec =
        parseInt(kredit1.value) +
        parseInt(kredit2.value) +
        parseInt(kredit3.value) +
        parseInt(kredit4.value) +
        parseInt(kredit5.value) +
        parseInt(kredit6.value) +
        parseInt(kredit7.value);
      sonNetice = suret / mexrec;

      function showStatusForSection7(){
        qiymetler.push(bal4.value,bal5.value,bal6.value,bal7.value);
        showStatus();
      }
      showStatusForSection7();
      result.style.display = "block";
    }
  }
  if (changeNumber.value == 8) {
    if (
      kredit1.value == "" ||
      kredit1.value == "" ||
      kredit3.value == "" ||
      kredit4.value == "" ||
      kredit5.value == "" ||
      kredit6.value == "" ||
      kredit7.value == "" ||
      kredit8.value == "" ||
      bal1.value == "" ||
      bal2.value == "" ||
      bal3.value == "" ||
      bal4.value == "" ||
      bal5.value == "" ||
      bal6.value == "" ||
      bal7.value == "" ||
      bal8.value == ""
    ) {
      alert("Bütün xanaları doldurun");
      result.style.display = "none";
    }else if (
      kredit1.value < 0 ||
      kredit2.value < 0 ||
      kredit3.value < 0 ||
      kredit4.value < 0 ||
      kredit5.value < 0 ||
      kredit6.value < 0 ||
      kredit7.value < 0 ||
      kredit8.value < 0 ||
      bal1.value < 0 ||
      bal2.value < 0 ||
      bal3.value < 0 ||
      bal4.value < 0 ||
      bal5.value < 0 ||
      bal6.value < 0 ||
      bal7.value < 0 ||
      bal8.value < 0
    ) {
      alert("Daxil edilən ədədlər sıfırdan kiçik ola bilməz");
      result.style.display = "none";
    } else if (
      bal1.value > 100 ||
      bal2.value > 100 ||
      bal3.value > 100 ||
      bal4.value > 100 ||
      bal5.value > 100 ||
      bal6.value > 100 ||
      bal7.value > 100 ||
      bal8.value > 100
    ) {
      alert("Ümumi bal 100-dən böyük ola bilməz");
      result.style.display = "none";
    } else {
      suret = fenn1 + fenn2 + fenn3 + fenn4 + fenn5 + fenn6 + fenn7 + fenn8;
      mexrec =
        parseInt(kredit1.value) +
        parseInt(kredit2.value) +
        parseInt(kredit3.value) +
        parseInt(kredit4.value) +
        parseInt(kredit5.value) +
        parseInt(kredit6.value) +
        parseInt(kredit7.value) +
        parseInt(kredit8.value);
      sonNetice = suret / mexrec;

      function showStatusForSection8(){
        qiymetler.push(bal4.value,bal5.value,bal6.value,bal7.value,bal8.value);
        showStatus();
      }
      showStatusForSection8();
      result.style.display = "block";
    }
  }

  //result.style.display = "block";
  result.innerHTML = "Ortalama: " + sonNetice.toFixed(2) + "<br>" + status;
}
