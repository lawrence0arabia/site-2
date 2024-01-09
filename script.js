$(document).ready(function () {
    var $container = $("#container"); // TODO: Generalise both to work with classes, creating new instances for each. 
    var $pageContainer = $("#page-container");

    $(document).on('mousemove', function (event) {
        // Calculate the distance of the mouse from the center of the container
        var containerCenterX = $container.offset().left + $container.width() / 2;
        var containerCenterY = $container.offset().top + $container.height() / 2;
        var containerDeltaX = event.pageX - containerCenterX;
        var containerDeltaY = event.pageY - containerCenterY;
        var containerDistance = Math.sqrt(containerDeltaX * containerDeltaX + containerDeltaY * containerDeltaY);

        // Calculate the shadow position and intensity for the container based on the mouse position
        var containerShadowX = containerDeltaX / -20; // Divide by 2
        var containerShadowY = containerDeltaY / -20; // Divide by 2
        var containerShadowBlur = containerDistance / 10; // Divide by 2

        // Apply the updated box shadow to the container
        $container.css('box-shadow', `${containerShadowX}px ${containerShadowY}px ${containerShadowBlur}px #7a7a7a, ${-containerShadowX}px ${-containerShadowY}px ${containerShadowBlur}px #ffffff`);

        // Calculate the distance of the mouse from the center of the page container
        var pageContainerCenterX = $pageContainer.width() / 2;
        var pageContainerCenterY = $pageContainer.height() / 2;
        var pageContainerDeltaX = event.pageX - pageContainerCenterX;
        var pageContainerDeltaY = event.pageY - pageContainerCenterY;
        var pageContainerDistance = Math.sqrt(pageContainerDeltaX * pageContainerDeltaX + pageContainerDeltaY * pageContainerDeltaY);

        // Calculate the shadow position and intensity for the page container based on the mouse position
        var pageContainerShadowX = pageContainerDeltaX / 20; // Divide by 2
        var pageContainerShadowY = pageContainerDeltaY / 20; // Divide by 2
        var pageContainerShadowBlur = pageContainerDistance / 10; // Divide by 2

        // Apply the updated box shadow to the page container
        $pageContainer.css('box-shadow', `inset ${pageContainerShadowX}px ${pageContainerShadowY}px ${pageContainerShadowBlur}px #7a7a7a, inset ${-pageContainerShadowX}px ${-pageContainerShadowY}px ${pageContainerShadowBlur}px #ffffff`);
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const glow = document.getElementById('glow');

  document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    glow.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
  });
});