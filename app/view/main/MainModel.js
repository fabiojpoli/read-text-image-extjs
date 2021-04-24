/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ReadTextImage.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        endPoint: 'https://fabio-test.cognitiveservices.azure.com', // replace with your endpoint
        api: 'vision/v3.2/read/analyze',
        key: 'yourKeyHere',
        fileUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Atomist_quote_from_Democritus.png/338px-Atomist_quote_from_Democritus.png'
    },
    stores: {
        lines: {
            fields: ['text', 'words']
        }
    }
});