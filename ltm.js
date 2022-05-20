(function () {
    if (typeof gtag === 'undefined') return;
  
    // Grab all the menu items on Twenty Twenty WordPress theme page.
    const menuElts = document.querySelectorAll('a[href*="wts"]');
    console.log(`I found ${menuElts.length} menu items to process.`); // JavaScript template literal for printing inline JS expression.
  
    // If no menu items, bail.
    if (menuElts.length === 0) return;
  
    // Convert to an array so we can map over the array
    // if you don't want to use the spread syntax.
    // let menuItemsArr = Array.from(menuElts);
    // menuItemsArr.map((elt) => {
  
    // Spread and map.
    [...menuElts].map((elt) => {
      // Set up the listener and handler at the same time.
      try {
        elt.addEventListener("click", function (evt) {
  
          let name = evt.target.innerText;
          let url = evt.target.getAttribute("href");
  
          console.log(`Sending event: ${name} and to GA4.`);
  
          // DEBUG
          // evt.preventDefault(); // Don't navigate!
          // console.log(`Menu item clicked: ${name} ${url}`);
  
          gtag("event", "Contato Wts", {
            menu_item_name: name,
            menu_item_url: url,
          });
        });
      } catch (e) {
        console.log(
          "Something wrong happened when setting up event handling for the menu items."
        );
      }
    });
  })();