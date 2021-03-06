//Popup confirm box to ensure user actually wnts to delete recipe
//redirects to the deleterecipe api using the recipe's _id
$(document).ready(() => {
  $(".recipe-delete-confirm").on("click", e => {
    recipeId = $(e.target).data("id");
    if (confirm("Are you sure you want to delete this recipe?")) {
      location.href = `/deleterecipe/${recipeId}`;
    }
  });

  //makes flashed messages fadeout after 4 seconds
  $("#flash")
    .delay(4000)
    .fadeOut();
});
