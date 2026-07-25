// Sets current page links to active and smooth scroll to top rather than reloading the page when clicking on the
// current page link in the top nav, mobile menu, and footer.

        async function topNav() {
                console.log('Top navigation initialization complete.');
                const topNavLink = await waitForElement("#topnav-link-home");
                topNavLink.href = "#";
                topNavLink.classList.add("active");
        }

        async function mobileNav() {
                console.log('Mobile navigation initialization complete.');
                const mobileNavLink = await waitForElement("#mobile-link-home");
                mobileNavLink.href = "#";
                mobileNavLink.classList.add("active");
        } 

        async function footerNav() {
                console.log('Footer navigation initialization complete.');
                const footerNavLink = await waitForElement("#footer-link-home");
                footerNavLink.href = "#";
                footerNavLink.classList.add("active");
        }
                topNav();
                mobileNav();
                footerNav();

