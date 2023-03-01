//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {


    // Masthead loading effect
    var mastheadLoad = function () {
        const mastHead = document.body.querySelector('.masthead');
        if (!mastHead) {
            return;
        }
        mastHead.classList.add('scroll-visible')
    };

    mastheadLoad();


    // Run Waypoint
    const sections = document.getElementsByTagName("section");
    for(let section of sections) {
        let waypoint = new Waypoint({
            element: section,
            handler: function() {
                section.classList.add("scroll-visible")
            },
            offset: '50%'
        })
    }

});