/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('ReadTextImage.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'formpanel',
        reference: 'form',
        width: 500,
        defaultType: 'textfield',
        items: [{
            label: 'Endpoint (replace with your endpoint)',
            bind: '{endPoint}'
        },{
            label: 'Subs. Key',
            bind: '{key}'
        },{
            xtype: 'displayfield',
            label: 'API',
            bind: '{api}'
        },{
            label: 'File URL',
            bind: '{fileUrl}'
        },{
            // TODO: Implement preview for PDF
            xtype: 'image',
            height: 300,
            bind: {
                src: '{fileUrl}'
            }
        }],
        bbar: ['->', {
            text: 'Run',
            handler: 'onRunHandler'
        }]
    },{
        xtype: 'grid',
        flex: 1,
        title: 'Lines found',
        variableHeights: true,
        itemConfig: {
            collapsed: false,
            body: {
                tpl:
                    `&lt;p&gt;Words: &lt;br&gt;
                        &lt;tpl for=&quot;words&quot;&gt;
                            &lt;p&gt;{text} - confidence: {confidence * 100}%&lt;/p&gt;
                        &lt;/tpl&gt;
                    &lt;/p&gt;`
            }
        },
        bind: '{lines}',
        columns: [{
            text: 'Line',
            dataIndex: 'text',
            flex: 1
        }]
    }]
});