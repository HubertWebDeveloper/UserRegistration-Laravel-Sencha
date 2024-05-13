Ext.define('Ext.view.usermodule.userTable', {
    extend: 'Ext.grid.Panel',
    xtype: 'usertable',

    title: 'User Table Display',
    height: 600,

    iconCls: 'framing-buttons-grid',
    autoLoad: true,
    store: {
        type: 'userstore'
    },
    viewModel: true,
    buttonAlign: 'center',

    bind: {
        selection: '{theRow}'
    },

    selModel: {
        type: 'checkboxmodel'
    },
    columns:[
        {text:'Action Take', dataIndex:'action', flex:1},
        {text:'Full Name', dataIndex:'fullname', flex:1},
        {text:'Customer Email', dataIndex:'email', flex:1},
        {text:'Contact', dataIndex:'contact', flex:1},
        {text:'Location', dataIndex:'location', flex:1},
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
    },
    tbar: [{
        text: 'Add New User',
        tooltip: 'Add a new user',
        iconCls: 'framing-buttons-add',
        handler: function () {
            myForm.show();
        }
    },'-',{
        text: 'Remove User',
        tooltip: 'Remove the selected item',
        iconCls:'framing-buttons-remove',
        disabled: true,

        bind: {
            disabled: '{!theRow}'
        }
    },'-',{
        text: 'View Details',
        tooltip: 'View the selected item',
        iconCls:'framing-buttons-remove',
        disabled: true,

        bind: {
            disabled: '{!theRow}'
        }
    },],
    // fbar: [{
    //     minWidth: 80,
    //     text: 'Save'
    // }, {
    //     minWidth: 80,
    //     text: 'Cancel'
    // }]
    
});
var myForm = new Ext.form.Panel({
    title: 'Insert New User',
    controller: 'usercontroller',
    xtype: 'form',
    resizable: true,
    floating: true,
    closable : true,
    layout: 'fit',
    plain: true,
    width: 500,

    items: [{
        padding: 10,
        items: [{
            xtype: 'combo',
            fieldLabel: 'Action Take',
            reference: 'action',
            displayField: 'name',
            valueField: 'key',
            label:'action',
            name:'action',
            publishes: 'value',
            required:true,
            listeners: {
                    change: function (field, newValue) {
                    if (newValue == 'department' ) {
                        field.up('form').down('textfield[name=email]').setVisible(false)
                    }else{
                        field.up('form').down('textfield[name=email]').setVisible(true)
                    }
                }
            },
            store:[
                {key:'department' , name:'Department'},
                {key:'user' , name:'User'},
                {key:'both' , name:'Both'},
            ]
            },{
                xtype: 'textfield',
                fieldLabel: 'Full Name',
                name: 'fullname',
                allowBlank: false
            },
            {
            xtype: 'textfield',
            vtype:'email',
            fieldLabel: 'Customer Email',
            name:'email',
            },{
                xtype: 'textfield',
                fieldLabel: 'Contact',
                name: 'contact',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Location',
                name: 'location',
                allowBlank: false
            }],
            padding: 10,
            buttons: [{
            text: 'Save',
            formBind: true,
            handler: 'onSaveButtonClick'
        }]
    }],
});