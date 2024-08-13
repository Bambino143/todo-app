$(document).ready(() => {
  $(".container__list").on("click", ".click", function () {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      $(this).next().css("text-decoration", "line-through");
      $(this).next().css("color", "hsl(233, 11%, 84%)");
    } else {
      $(this).next().css("text-decoration", "none");
      $(this).next().css("color", "hsl(235, 19%, 35%)");
    }
  });

  $(".container__list").on("click", 'img[alt="cross"]', function () {
    $(this).parent().remove();
     let count = $(".container__list").children().length - 1;
     $(".count").text(`${count}`);
  });

  $(".moon").click(() => {
    $(".moon").css("display", "none");
    $(".sun").css("display", "initial");
    $("main").addClass("dark_bg");
    $("body").addClass("dark_body");
    $(".container__input").addClass("dark_todo");
    $(".container__list").addClass("dark_todo");
    $(".container__nav").addClass("dark_todo");
    $(".click").addClass("click_dark");
    $(".container__list--task").addClass("list--task_dark");
    $(".container__list").children().last().css('border-bottom', 'none');

  });
  $(".sun").click(() => {
    $(".sun").css("display", "none");
    $(".moon").css("display", "initial");
    $("main").removeClass("dark_bg");
    $("body").removeClass("dark_body");
    $(".container__input").removeClass("dark_todo");
    $(".container__list").removeClass("dark_todo");
    $(".container__nav").removeClass("dark_todo");
    $(".click").removeClass("click_dark");
    $(".container__list--task").removeClass("list--task_dark");
  });

  $(".round").click(() => {
    if ($(".border-none").val() !== "") {
      let value = $(".border-none").val();
      $(".container__list").prepend(`<div class="container__list--task">
            <div class="flex">
            <div class="click">
                <img src="images/icon-check.svg" alt="check" />
                </div>
              <span class="todo">${value}</span>
            </div>
            <img src="images/icon-cross.svg" alt="cross" />
            </div>`);

      let count = $(".container__list").children().length - 1;
      $(".count").text(`${count}`);
    }
  });

  $(".border-none").keydown((event) => {
    if ($(".border-none").val() !== "") {
      if (event.key === "Enter") {
        let value = $(".border-none").val();
        $(".container__list").prepend(`<div class="container__list--task">
                  <div class="flex">
                    <div class="click">
                      <img src="images/icon-check.svg" alt="check" />
                    </div>
                    <span class="todo">${value}</span>
                  </div>
                  <img src="images/icon-cross.svg" alt="cross" />
                </div>`);
        let count = $(".container__list").children().length - 1;
        $(".count").text(`${count}`);
      }
    }
  });
/*WAS HAVING TO MANY BUGS I COULD NOT FIX, ILL PROBABLY COME BACK TO FIX THEM WHEN IM A BETTER PRGRAMMER😢 */
//   let active = () => {
//     let arr = $('.click').toArray();
//     let newArr = arr.filter((x)=> {
//       if(!$(x).hasClass('clicked')) {
//         return $(x).parent().parent();
//       } 

//     })
//     $('.container__active').prepend($(newArr).parent().parent())

//   }
 

//   $('.active__todo').click(() => {
//     $('.remove').css('display', 'none')
//     $('.container__active').css('display', 'grid')

//     active();
//   });

//   $('.all').click(()=> {
//     $('.remove').css('display', 'grid')
//     $('.container__active').css('display', 'none')
//   })
 
  


});
