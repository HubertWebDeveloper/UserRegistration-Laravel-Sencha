// Ext.define('Ext.view.usermodule.userFormcopy', {
//     extend:'Ext.panel.Panel',
//     extend: 'Ext.form.Panel',
//     xtype: 'userform',
//     // frame: true,
//     // layout: 'fit', 
//     // scrollable: true,
//     controller:'usercontroller',
//     items:[
//         {
//         title: 'Form Fields',
//         height:'100%',
//         bodyPadding: 10,
//         xtype:'form',
//         layout: 'form',
//         items: [{
//             xtype: 'combo',
//             fieldLabel: 'Action Take',
//             reference: 'action',
//             displayField: 'name',
//             valueField: 'key',
//             label:'action',
//             name:'action',
//             publishes: 'value',
//             required:true,
//             listeners: {
//                 change: function (field, newValue) {
//                     if (newValue == 'department' ) {
//                         field.up('userform').down('textfield[name=email]').setVisible(false)
//                     }else{
//                         field.up('userform').down('textfield[name=email]').setVisible(true)
//                     }
//                 }
//             },
//             store:[
//                 {key:'department' , name:'Department'},
//                 {key:'user' , name:'User'},
//                 {key:'both' , name:'Both'},
//             ]
//             },{
//                 xtype: 'textfield',
//                 fieldLabel: 'Full Name',
//                 name: 'fullname',
//                 allowBlank: false
//             },
//             {
//             xtype: 'textfield',
//             vtype:'email',
//             fieldLabel: 'Customer Email',
//             // queryMode: 'remote',
//             name:'email',
//             // forceSelection: true,
//             // bind: {
//             //    visible: '{action.value}'}
//             },{
//                 xtype: 'textfield',
//                 fieldLabel: 'Contact',
//                 name: 'contact',
//                 allowBlank: false
//             }, {
//                 xtype: 'textfield',
//                 fieldLabel: 'Location',
//                 name: 'location',
//                 allowBlank: false
//             }
//         ],
//         buttons: [{
//             text: 'Save',
//             formBind: true,
//             handler: 'onSaveButtonClick'
//             }]
//         }
//     ]

// });