$(document).ready(function () {
    let testimonials = {
        "0":{
            "name": "Cool Websites",
            "description": "Web Development Firm",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        "1":{
            "name": "Best Lawyers Inc.",
            "description": "Law Firm",
            "body": "Fusce aliquam fermentum urna. Curabitur porta venenatis mauris ut maximus. Donec at faucibus urna. Sed malesuada, sem vitae ultricies interdum, nulla nunc rutrum tortor, sed mattis diam velit et lorem. Etiam sed tempor nunc. Ut hendrerit bibendum ipsum at pretium. Phasellus eros diam, pulvinar nec maximus non, eleifend et sapien. Maecenas quis est sodales, congue dolor vitae, convallis leo. Nullam maximus nisi in venenatis accumsan. Morbi aliquet, dui vitae bibendum elementum, est felis fermentum velit, scelerisque viverra felis quam vitae nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vel posuere nisi. Phasellus gravida diam ex, et sollicitudin tellus porta id."
        }
    };
    let testimonialIndex = 0;
    $("#back").click(function () {
        testimonialIndex--; 
        if (testimonialIndex < 0) {
            testimonialIndex = Object.keys(testimonials).length - 1;
        }
        setTestimonial();
    });
    $("#forward").click(function () {
        testimonialIndex++; 
        if (testimonialIndex >= Object.keys(testimonials).length) {
            testimonialIndex = 0;
        }
        setTestimonial();
    });

    function setTestimonial () {
        $("#name").text(testimonials[String(testimonialIndex)]["name"]);
        $("#description").text(testimonials[String(testimonialIndex)]["description"]);
        $("#body").text(testimonials[String(testimonialIndex)]["body"]);
    }
});