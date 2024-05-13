Ext.define('New.model.userModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'action', type: 'string' },
        { name: 'fullname', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'contact', type: 'string' },
        { name: 'location', type: 'string' }
    ]
});