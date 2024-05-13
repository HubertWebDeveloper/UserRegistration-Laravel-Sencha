Ext.define('Ext.view.usermodule.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usercontroller',

    onSaveButtonClick: function(button) {
        var form = button.up('form');
        var window = form.up('window');

        if (form.isValid()) { // make sure the form contains valid data before submitting
            form.submit({
                waitMsg: "saving",
                method: 'GET',
                url: 'http://localhost/UserRegistration/backend/public/adduser',
                
                failure: function(form, action) {
                    console.log(action);
                    Ext.Msg.alert('Success Message', action.response.responseText);
                }
            });
        } else { // display error alert if the data is invalid
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.'),
            form.getView().destroy();
        }
    },
    onShowFilters: function () {
        //Ext.Msg.alert('Filter Data');
        
        //myForm.show();
    }
});