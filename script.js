

        function showDropList(event, menuClass,i) {
            event.preventDefault(); // Prevent <a> default behavior
            const dropdown = document.querySelector(`.${menuClass}`);
            dropdown.classList.toggle("dropdown");
          document.getElementsByClassName("arrow")[i-1].classList.toggle("rotate")

          }


          function ShowMenu() {
            let image = document.getElementById("image");
            //git div which contain ul
            let menu = document.getElementsByClassName("hiddenMenu")[0];
          //  menu.style.transform="scale(1.2)"
       //     menu.style.transation="all 3s"
             menu.classList.toggle("show");
        

            //change image
            if (image.getAttribute("src") == "./images/icon-hamburger.svg") {
              image.src = "./images/icon-close.svg";
            } else {
              image.src = "./images/icon-hamburger.svg";
            }
          }
          
          //in mobile
          function showProduct() {

          // document.getElementsByClassName("ProductList1")[0].style.display="block";
          document.getElementsByClassName("arrow1")[0].classList.toggle("rotate")

           document.getElementsByClassName("ProductList1")[0].classList.toggle("drop")
          }
          function showCompany() {

          document.getElementsByClassName("arrow2")[0].classList.toggle("rotate")
          document.getElementsByClassName("CompanyList1")[0].classList.toggle("drop");
            
           }
           function showConnect() {

            document.getElementsByClassName("ConnectList1")[0].classList.toggle("drop");
          document.getElementsByClassName("arrow3")[0].classList.toggle("rotate")
            
           }