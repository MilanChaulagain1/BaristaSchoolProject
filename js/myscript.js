function scrollToBottom() {
    // Get the height of the entire document
    const fullHeight = document.body.scrollHeight;

    // Scroll to the bottom of the page
    window.scrollTo({
      top: fullHeight,
      behavior: 'smooth' // You can use 'auto' instead of 'smooth' for instant scrolling
    });
  }