/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ReadTextImage.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onRunHandler() {
        const {
            endPoint,
            api,
            key,
            fileUrl
        } = this.getViewModel().getData();

        this.lookup('form').mask('Running...');

        Ext.Ajax.request({
            url: `${endPoint}/${api}`,
            headers: {
                'Ocp-Apim-Subscription-Key': key // authentication
            },
            jsonData: {
                url: fileUrl
            },
            success: response => {
                this.getReadResult(response.getResponseHeader('Operation-Location'), key);
            }
        });
    },

    getReadResult(url, key) {
        Ext.Ajax.request({
            url,
            headers: {
                'Ocp-Apim-Subscription-Key': key
            },
            success: response => {
                const result = Ext.decode(response.responseText);

                // if process is not ready
                if (result.status !== 'succeeded') {
                    // try again after 1 sec
                    Ext.defer(() => {
                        this.getReadResult(url, key);
                    }, 1000);

                    return;
                }

                this.lookup('form').unmask();

                // populate the store to show result words on grid
                // simplify only to read page 1(array position 0) for images.
                // TODO: in case of pdf, can be verified each page of the result
                this.getViewModel().getStore('lines').setData(result.analyzeResult.readResults[0].lines);
            }
        });
    }
});