angular.module('tnApp.controllers').controller('ContactCtrl', function($scope) {
    $scope.alias = 'ContactCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    if (document.getElementById('contact-page')) {
        var submitBtn = $('#submit');
        submitBtn.on('click', function(e) {
            console.log("Clicked");

            var formData = {
                companyName: $('#company-name').val(),
                currentWebsite: $('#curren-website').val(),
                designation: $('#designation').val(),
                firstName: $('#first-name').val(),
                lastName: $('#last-name').val(),
                phoneNumber: $('#phone').val(),
                mobileNumber: $('#mobile').val(),
                email: $('#email').val(),
                city: $('#city').val(),
                country: $('#country').val(),
                purpose: $('#purpose').val(),
                businessDescription: $('#business-description').val(),
                competitors: $('#competitors').val(),
                usp: $('#usp').val(),
                demographics: $('#target-demographics').val(),
                sitesEnjoyed: $('#sites-enjoyed').val(),
                sitesNotEnjoyed: $('#sites-not-enjoyed').val(),
                functionality: $('#functionality').val(),
                webManagement: $('#web-management').val(),
                keywordResearch: $('#keyword-research').val(),
                contentResearch: $('#content-research').val(),
                timeInvestment: $('#time-investment').val(),
                feedback: $('#feedback').val()
            }

            var DB = Parse.Object.extend('SiteContactForm');
            var saveForm = new DB();

            // SUBMIT FORM UPON VALIDATION
            if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email || !formData.city || !formData.purpose) {
                console.warn("You've Missed Some info");
                return;
            } else {
                e.preventDefault();
                saveForm.save(formData).then(function(res) {
                    // console.log("Success!", res);
                    window.location.href = "../../index.html"
                })
            }
        })
    }
});