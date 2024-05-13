Ext.define('New.store.userStore', {
    extend: 'Ext.data.Store',
    model: 'New.model.userModel',
    alias: 'store.userstore',
    proxy: {
        type: 'ajax',
        url: 'http://localhost/UserRegistration/backend/public/getuser',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true
});