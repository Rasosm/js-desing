// IMPORTS
import renderHobbies from "../components/hobbies.js";
// EXECUTION
(async () => {
    /* HEADER-start */
    /* HEADER-end */

    /* HERO-start */
    /* HERO-end */

    /* ABOUT-ME-start */
    /* ABOUT-ME-end */

    /* HOBBIES-start */
    try {
        const response = await fetch('./data/hobbies.json');
        const data = await response.json();
        const hobbiesResponse = renderHobbies('hobbies', data);
        if (hobbiesResponse[0]) {
            console.error(hobbiesResponse[1]);
        }
    } catch (error) {
        console.log(error);
    }
    /* HOBBIES-end */

    /* ACHIEVEMENTS-start */
    /* ACHIEVEMENTS-end */

    /* SERVICES-start */
    /* SERVICES-end */

    /* WORK-start */
    /* WORK-end */

    /* EXPERTISE-start */
    /* EXPERTISE-end */

    /* PORTFOLIO-start */
    /* PORTFOLIO-end */

    /* TESTIMONIALS-start */
    /* TESTIMONIALS-end */

    /* HIRE-ME-start */
    /* HIRE-ME-end */

    /* CONTACTS-start */
    /* CONTACTS-end */

    /* FOOTER-start */
    /* FOOTER-end */
})();