//@prepros-prepend "./modules/header.js";
//@prepros-prepend "./modules/course-card-manager.js";
//@prepros-prepend "./modules/course.js";

$(document).ready(function () {
    
    const header = new Header();
    const courseCardManager = new CourseCardManager();

    $(".scroll-up").click(() => {
        $.scrollTo(0, 500);
    });

    if ($("[data-scroll-to-fixed]").length > 0) {
        $("[data-scroll-to-fixed]").scrollToFixed({
            zIndex: 1
        });
    }

    if ($(".course").length > 0) {
        const course = new Course();
    }
    
});