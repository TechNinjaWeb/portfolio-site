app.directive('modalbox', function() {
    return {
        template: '',
        restrict: 'EA',
        link: function(scope, elem, attrs) {
            console.warn("ModalBox.Directive - scope, elem, attrs", scope, elem, attrs);

            elem.on('click', function(e){
                $('#SOMETHING').click();
                console.log("Clicked That!", e);
            })
        }
    };
});


