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
});
