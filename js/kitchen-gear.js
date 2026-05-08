/*
Shows the detail dialog for each kitchen gear card.
When a card is clicked, it fills the modal with matching image, title, summary, and steps.
*/
$(function () {
  const gearDetails = [
    {
      prep: "Prep use: every meal • Cleaning: hand wash recommended",
      description:
        "A versatile knife for chopping, slicing, and mincing ingredients quickly.",
      steps: [
        "Use a pinch grip for better control.",
        "Keep the blade sharp with regular honing.",
        "Use a stable cutting board when slicing.",
        "Wash and dry immediately after use.",
      ],
    },
    {
      prep: "Best for prep station • Clean after each ingredient type",
      description:
        "Protects countertops and gives a stable surface for cutting work.",
      steps: [
        "Place a damp towel underneath to prevent slipping.",
        "Use separate boards for meat and vegetables.",
        "Sanitize thoroughly after raw proteins.",
        "Store upright to air dry.",
      ],
    },
    {
      prep: "Ideal for high heat • Great for stir-fry servings 3-5",
      description:
        "A deep curved pan for stir-frying, tossing, and quick searing.",
      steps: [
        "Preheat wok until hot before adding oil.",
        "Add aromatics first, then protein and vegetables.",
        "Keep ingredients moving for even cooking.",
        "Season lightly and serve immediately.",
      ],
    },
    {
      prep: "Perfect for eggs and searing • Serves 1-3",
      description:
        "Flat-bottomed pan used for sauteing, frying, and pan-roasting.",
      steps: [
        "Heat pan on medium before adding fat.",
        "Avoid overcrowding for better browning.",
        "Use silicone or wooden utensils on nonstick.",
        "Cool and wash gently after use.",
      ],
    },
    {
      prep: "Best for sauces and soups • Capacity for 2-4 servings",
      description:
        "Deep-sided pan used for simmering sauces, grains, and reheating liquids.",
      steps: [
        "Use low to medium heat for controlled simmering.",
        "Stir frequently to prevent scorching.",
        "Use a lid to reduce cooking time.",
        "Let cool before soaking for cleanup.",
      ],
    },
    {
      prep: "For large batches • Serves 6-10",
      description: "Tall pot for broths, stews, and large-volume boiling.",
      steps: [
        "Start with cold water for making broth.",
        "Bring to a gentle simmer, not a rolling boil.",
        "Skim impurities for a clear stock.",
        "Strain liquid when flavors are fully extracted.",
      ],
    },
    {
      prep: "Used during prep • Keeps recipe ratios accurate",
      description: "Tool for measuring wet or dry ingredients consistently.",
      steps: [
        "Place cup on level surface for accurate reading.",
        "Check liquid volume at eye level.",
        "Use dry cups for flour and sugar portions.",
        "Clean thoroughly to avoid flavor transfer.",
      ],
    },
    {
      prep: "Prep and marinating • Nesting storage friendly",
      description:
        "Bowls used for combining ingredients, marinating, and tossing salads.",
      steps: [
        "Choose bowl size based on ingredient volume.",
        "Use non-slip base bowls when whisking.",
        "Cover and chill when marinating proteins.",
        "Stack and store after completely drying.",
      ],
    },
    {
      prep: "Quick prep for vegetables and fruits",
      description:
        "Hand tool for peeling skin from produce with minimal waste.",
      steps: [
        "Hold produce firmly on a stable surface.",
        "Peel away from your hand for safety.",
        "Rinse blade area after sticky produce.",
        "Dry before storing to avoid rust.",
      ],
    },
  ];

  // Modal elements that get updated when a card is selected.
  const itemDetailsDialog = $("#item-details-dialog");
  const itemDetailsImage = $("#item-details-image");
  const itemDetailsTitle = $("#item-details-title");
  const itemDetailsPrep = $("#item-details-prep");
  const itemDetailsDescription = $("#item-details-description");
  const itemDetailsSteps = $("#item-details-steps");

  // Match each card to the data at the same index in the array above.
  $(".kitchen-gear-card").each(function (index) {
    const card = $(this);

    card.on("mouseenter", function () {
      card.css("transform", "translateY(-6px)");
    });

    card.on("mouseleave", function () {
      card.css("transform", "translateY(0)");
    });

    // On click, copy the selected card data into the dialog and open it.
    card.on("click", function () {
      const details = gearDetails[index];
      const imageSource = card.find("img").attr("src");
      const nameText = card.find(".kitchen-gear-name").text();

      itemDetailsImage.attr("src", imageSource);
      itemDetailsTitle.text(nameText);
      itemDetailsPrep.text(details.prep);
      itemDetailsDescription.text(details.description);
      itemDetailsSteps.empty();

      for (let i = 0; i < details.steps.length; i += 1) {
        itemDetailsSteps.append("<li>" + details.steps[i] + "</li>");
      }

      itemDetailsDialog.addClass("show");
    });
  });

  // Close button hides the dialog.
  $("#close-item-details-button").on("click", function () {
    itemDetailsDialog.removeClass("show");
  });

  // Clicking the dark backdrop also closes the dialog.
  itemDetailsDialog.on("click", function (event) {
    if (event.target.id === "item-details-dialog") {
      itemDetailsDialog.removeClass("show");
    }
  });

  /*
    SEARCH FEATURE
    Listens to what the user types in the search box.
    For every keystroke, it checks each kitchen gear card name against the typed text.
    Cards that match stay visible; cards that do not match get hidden.
    If no cards match at all, a "no results" message appears instead.
  */

  /* Grab the search input box so we can read its value when the user types */
  var searchInput = $("#kitchen-search-input");

  /* Grab the wrapper div so we can toggle the "has-text" class on it */
  var searchWrap = $(".search-bar-wrap");

  /* Grab the X button that clears the search box */
  var clearBtn = $("#kitchen-search-clear");

  /* Grab the empty-state message block shown when nothing matches */
  var emptyMsg = $(".search-empty-msg");

  /*
    Runs every time the user presses a key inside the search box.
    It reads the current text, trims extra spaces, and lowercases it
    so the comparison is not case-sensitive (e.g. "wok" matches "Wok").
  */
  searchInput.on("input", function () {
    var typed = $(this).val().trim().toLowerCase();

    /*
      Toggle the "has-text" class on the wrapper.
      When the class is present, CSS shows the clear (X) button.
    */
    if (typed.length > 0) {
      searchWrap.addClass("has-text");
    } else {
      searchWrap.removeClass("has-text");
    }

    /* Keep track of how many cards are still visible after filtering */
    var visibleCount = 0;

    /*
      Loop through every kitchen gear card on the page.
      Read the name text inside each card, lowercase it, then check
      if it contains the text the user typed.
    */
    $(".kitchen-gear-card").each(function () {
      var cardName = $(this).find(".kitchen-gear-name").text().toLowerCase();

      if (typed === "" || cardName.indexOf(typed) !== -1) {
        /* The card name matches — make it visible */
        $(this).show();
        visibleCount++;
      } else {
        /* The card name does not match — hide it */
        $(this).hide();
      }
    });

    /*
      After checking all cards, decide whether to show the "no results" message.
      If visibleCount is 0 and the user has actually typed something, show it.
      Otherwise hide it.
    */
    if (visibleCount === 0 && typed.length > 0) {
      emptyMsg.addClass("show");
    } else {
      emptyMsg.removeClass("show");
    }
  });

  /*
    Runs when the user clicks the X (clear) button.
    Clears the text box, removes the "has-text" class so the button hides again,
    makes all kitchen gear cards visible again, and hides the empty message.
  */
  clearBtn.on("click", function () {
    searchInput.val("");
    searchWrap.removeClass("has-text");
    $(".kitchen-gear-card").show();
    emptyMsg.removeClass("show");
    searchInput.focus();
  });
});
