/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ReadTextImage.Application',

    name: 'ReadTextImage',

    requires: [
        // This will automatically load all classes in the ReadTextImage namespace
        // so that application classes do not need to require each other.
        'ReadTextImage.*'
    ],

    // The name of the initial view to create.
    mainView: 'ReadTextImage.view.main.Main'
});
