

        // function showDropList(event, menuClass,i) {
        //     event.preventDefault(); // Prevent <a> default behavior
        //     const dropdown = document.querySelector(`.${menuClass}`);

        //     const allDropdowns = document.querySelectorAll('.dropdown');
        //     allDropdowns.forEach(list => {
        //         if (list.classList.contains('dropdown')) {
        //             list.classList.remove('dropdown');
        //         }
        //         else{
        //           list.classList.add('dropdown');
        //         }
        //     });
        //     dropdown.classList.toggle("dropdown");
        //   document.getElementsByClassName("arrow")[i-1].classList.toggle("rotate")

        //   }

        function showDropList(event, menuClass, i) {
          event.preventDefault();
      
          const dropdown = document.querySelector(`.${menuClass}`);
          const arrow = document.getElementsByClassName('arrow')[i - 1];
      
          // Check if the clicked dropdown is already open
          if (dropdown.classList.contains('dropdown')) {
              dropdown.classList.remove('dropdown'); // Close it
              arrow.classList.remove('rotate');      // Remove rotation
          } else {
              // Close all *other* dropdowns first (as before)
              const allDropdowns = document.querySelectorAll('.dropdown');
              allDropdowns.forEach(otherDropdown => {
                  if (otherDropdown !== dropdown && otherDropdown.classList.contains('dropdown')) {
                      otherDropdown.classList.remove('dropdown');
                  }
              });
      
              dropdown.classList.add('dropdown'); // Open the clicked one
              arrow.classList.add('rotate');      // Rotate the arrow
          }
      }

          function ShowMenu() {
            let image = document.getElementById("image");
            //git div which contain ul
            let menu = document.getElementsByClassName("hiddenMenu")[0];
         
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

          // document.getElementsByClassName("ProductList1")[0].style.display="block"
          document.getElementsByClassName("arrow1")[0].classList.toggle("rotate")

           document.getElementsByClassName("ProductList1")[0].classList.toggle("drop")
          document.getElementsByClassName("CompanyList1")[0].classList.remove("drop");
          document.getElementsByClassName("ConnectList1")[0].classList.remove("drop");

          }
          function showCompany() {

          document.getElementsByClassName("CompanyList1")[0].classList.toggle("drop");
            document.getElementsByClassName("ConnectList1")[0].classList.remove("drop");
          document.getElementsByClassName("ProductList1")[0].classList.remove("drop")
          document.getElementsByClassName("arrow2")[0].classList.toggle("rotate")

            
           }
           function showConnect() {

            document.getElementsByClassName("ConnectList1")[0].classList.toggle("drop");
          document.getElementsByClassName("ProductList1")[0].classList.remove("drop")
          document.getElementsByClassName("CompanyList1")[0].classList.remove("drop");

          document.getElementsByClassName("arrow3")[0].classList.toggle("rotate")
            
           }