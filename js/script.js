$(document).ready(function () {
    // Check each 'links-check' for the 'active' class
    $('.links-check').each(function () {
        if ($(this).hasClass('active')) {
            // Add 'active' class to the corresponding 'sidebar-navs-links' parent
            var parentCollapse = $(this).closest('.collapse');
            parentCollapse.addClass('show'); // Show the collapse element
            parentCollapse.prev('.sidebar-navs-links').addClass('active');
        }
    });

    // Ensure any 'sidebar-navs-links' with 'active' class shows its collapse
    $('.sidebar-navs-links').each(function () {
        if ($(this).hasClass('active')) {
            $(this).next('.collapse').addClass('show');

        }
    });
});


$(document).ready(function () {
    // User Card Handling
    $('.user-card-wrapper').click(function () {
        $('.logout-t').fadeToggle();
    });

    // Profile Section Handling
    $('#profile-btn').click(function () {
        $('.profile-section').fadeToggle();
    });

    // Notification Button Handling
    $('#notification-btn').click(function () {
        $('.notification-section').fadeToggle();
    });
});


// assign role
$(document).ready(function () {
    $('.table-client-row input').change(function () {
        if ($(this).is(':checked')) {
            $(this).closest('.table-client-row').addClass('selected-row');
        } else {
            $(this).closest('.table-client-row').removeClass('selected-row');
        }
    });
});


// assign role
