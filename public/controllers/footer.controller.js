app.controller('FooterCtrl', function($scope) {
    $scope.alias = 'FooterCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    // FOOTER CONTACT FORM
    var footerContactFormBtn = $('#footer-contact-us-submit');
    footerContactFormBtn.on('click', function(e){

        var footerContactForm = $('#footer-contact-us-form');
        var footerContactName = $('#footer-contact-us-name');
        var footerContactEmail = $('#footer-contact-us-email');
        var footerContactMessage = $('#footer-contact-us-message');

        var DB = Parse.Object.extend('SiteContactForm');
        var saveForm = new DB();
        
        // SUBMIT FORM UPON VALIDATION
        if ( !footerContactName.val() || !footerContactEmail.val() || !footerContactMessage.val() ) {
            console.warn("You've Missed Some info");
            // e.preventDefault();
            return;
        } else {
            e.preventDefault();
            saveForm.save({
                leadName: footerContactName.val(),
                leadEmail: footerContactEmail.val(),
                message: footerContactMessage.val()
            }).then(function(res){
                console.log("Response", res);
                window.location.reload();
            })
        }
    })


});