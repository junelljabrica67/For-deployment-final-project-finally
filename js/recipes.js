/*
Shows the detail dialog for each recipe card.
When a card is clicked, it fills the modal with matching image, title, summary, and steps.
*/
$(function () {
  const recipeDetails = [
    {
      prep: "Prep 20 mins • Cook 45 mins • Serves 4",
      description:
        "A savory and tangy Filipino braised chicken dish loved for its rich flavor.",
      steps: [
        "Marinate chicken with soy sauce, vinegar, garlic, and peppercorn.",
        "Sear chicken until lightly browned.",
        "Add marinade, bay leaves, and a little water then simmer until tender.",
        "Reduce sauce until glossy and serve with steamed rice.",
      ],
    },
    {
      prep: "Prep 25 mins • Cook 50 mins • Serves 5",
      description:
        "A comforting sour soup with pork, tamarind, and fresh vegetables.",
      steps: [
        "Boil pork until tender and skim the broth.",
        "Add onions, tomatoes, and tamarind base.",
        "Add radish, eggplant, and string beans.",
        "Season to taste and finish with kangkong before serving.",
      ],
    },
    {
      prep: "Prep 15 mins • Cook 35 mins • Serves 4",
      description: "A light ginger chicken soup with papaya and chili leaves.",
      steps: [
        "Saute garlic, onion, and ginger until aromatic.",
        "Add chicken pieces and cook until lightly browned.",
        "Pour water and simmer until chicken is tender.",
        "Add green papaya and chili leaves, then season and serve warm.",
      ],
    },
    {
      prep: "Prep 30 mins • Cook 1 hr 30 mins • Serves 6",
      description:
        "Peanut-based stew with oxtail and vegetables, served with bagoong.",
      steps: [
        "Boil oxtail until very tender.",
        "Prepare annatto oil and saute garlic and onion.",
        "Add peanut sauce and toasted rice powder to thicken.",
        "Add vegetables last and serve with bagoong on the side.",
      ],
    },
    {
      prep: "Prep 10 mins • Cook 25 mins • Serves 3",
      description: "Vinegar-based fish stew with ginger and vegetables.",
      steps: [
        "Arrange fish in a pan with garlic, onion, and ginger.",
        "Add vinegar, water, and seasoning.",
        "Simmer gently without stirring too much.",
        "Cook until fish is done and sauce is balanced.",
      ],
    },
    {
      prep: "Prep 35 mins • Cook 20 mins • Serves 6",
      description:
        "Crispy Filipino spring rolls filled with seasoned pork and vegetables.",
      steps: [
        "Mix ground pork, carrots, onions, and seasonings.",
        "Wrap filling in lumpia wrappers and seal edges.",
        "Deep-fry in batches until golden brown.",
        "Drain excess oil and serve with sweet chili sauce.",
      ],
    },
    {
      prep: "Prep 15 mins • Cook 40 mins • Serves 4",
      description: "Pork stew with coconut milk and chili for creamy heat.",
      steps: [
        "Saute pork until lightly browned.",
        "Add garlic, onion, and shrimp paste.",
        "Pour coconut milk and simmer slowly.",
        "Add chilies and cook until sauce is creamy and thick.",
      ],
    },
    {
      prep: "Prep 15 mins • Cook 45 mins • Serves 5",
      description: "Mung bean stew with leafy greens and optional chicharon.",
      steps: [
        "Boil mung beans until soft.",
        "Saute garlic, onion, and tomatoes in another pan.",
        "Combine sauteed base with boiled mung beans.",
        "Add malunggay leaves, season, and simmer briefly.",
      ],
    },
    {
      prep: "Prep 20 mins • Cook 20 mins • Serves 2",
      description:
        "Breakfast favorite with tapa beef, garlic rice, and fried egg.",
      steps: [
        "Marinate beef strips with soy sauce, garlic, and sugar.",
        "Pan-fry beef until caramelized.",
        "Prepare garlic fried rice in the same pan.",
        "Top with sunny-side-up egg and serve hot.",
      ],
    },
    {
      prep: "Prep 20 mins • Cook 50 mins • Serves 5",
      description:
        "Tomato-based pork stew with liver spread, potatoes, and carrots.",
      steps: [
        "Saute garlic and onion, then brown the pork pieces.",
        "Add tomato sauce and water, then simmer until pork softens.",
        "Mix in liver spread for deeper flavor.",
        "Add potatoes, carrots, and bell pepper then cook until tender.",
      ],
    },
    {
      prep: "Prep 15 mins • Cook 1 hr 10 mins • Serves 6",
      description:
        "A soothing beef and vegetable soup perfect for cool, rainy days.",
      steps: [
        "Boil beef shanks in water until almost tender.",
        "Add onion, peppercorn, and fish sauce.",
        "Drop in corn, potatoes, and saba banana.",
        "Finish with pechay and serve piping hot.",
      ],
    },
    {
      prep: "Prep 15 mins • Cook 35 mins • Serves 4",
      description:
        "Thin beef slices simmered in soy-calamansi sauce with onions.",
      steps: [
        "Marinate beef in soy sauce, calamansi, and pepper.",
        "Pan-fry potato rounds until golden and set aside.",
        "Cook marinated beef with onions until tender.",
        "Return potatoes, simmer briefly, and serve warm.",
      ],
    },
    {
      prep: "Prep 10 mins • Cook 15 mins • Serves 4",
      description:
        "Simple sauteed chayote dish with garlic, onion, and light seasoning.",
      steps: [
        "Saute garlic and onion until fragrant.",
        "Add sliced sayote and stir-fry for a few minutes.",
        "Season with fish sauce and pepper.",
        "Add a splash of water, cover, and cook until crisp-tender.",
      ],
    },
    {
      prep: "Prep 15 mins • Cook 30 mins • Serves 4",
      description:
        "Creamy chicken macaroni soup that's comforting and kid-friendly.",
      steps: [
        "Saute garlic, onion, and shredded chicken.",
        "Pour chicken broth and bring to a gentle boil.",
        "Add macaroni, carrots, and cabbage.",
        "Stir in milk, season, and simmer until creamy.",
      ],
    },
    {
      prep: "Prep 30 mins • Cook 45 mins • Serves 8",
      description:
        "Colorful layered rice cake made with coconut milk and sticky rice flour.",
      steps: [
        "Divide batter into portions and color each layer.",
        "Steam first layer until set before adding the next.",
        "Repeat layering and steaming until all batter is used.",
        "Cool completely, slice into squares, and serve.",
      ],
    }
  ];

  // Modal elements that get updated when a card is selected.
  const itemDetailsDialog = $("#item-details-dialog");
  const itemDetailsImage = $("#item-details-image");
  const itemDetailsTitle = $("#item-details-title");
  const itemDetailsPrep = $("#item-details-prep");
  const itemDetailsDescription = $("#item-details-description");
  const itemDetailsSteps = $("#item-details-steps");

  // Match each card to the data at the same index in the array above.
  $(".recipe-card").each(function (index) {
    const card = $(this);

    card.on("mouseenter", function () {
      card.css("transform", "translateY(-6px)");
    });

    card.on("mouseleave", function () {
      card.css("transform", "translateY(0)");
    });

    // On click, copy the selected card data into the dialog and open it.
    card.on("click", function () {
      const details = recipeDetails[index];
      const imageSource = card.find("img").attr("src");
      const nameText = card.find(".recipe-name").text();

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
