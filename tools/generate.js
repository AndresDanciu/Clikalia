const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Create component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/componentFuctional/',
        },
        stringReplacers: ['__name__'],
        output: {
            path: './src/components/__name__(camelCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    {
        option: 'Create new feature',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/feature/',
        },
        stringReplacers: ['__name__'],
        output: {
            path: './src/features/__name__(camelCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    // {
    //     option: 'Create Pages Component',
    //     defaultCase: '(pascalCase)',
    //     entry: {
    //         folderPath: './tools/templates/componentPage/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/features/__name__(camelCase)',
    //         pathAndFileNameDefaultCase: '(pascalCase)',
    //     },
    // },
    // {
    //     option: 'Create custom Hook',
    //     defaultCase: '(camelCase)',
    //     entry: {
    //         folderPath: './tools/templates/customHook/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/hooks/',
    //         pathAndFileNameDefaultCase: '(camelCase)',
    //     },
    // },
    // {
    //     option: 'Redux Create Action and Reducer',
    //     defaultCase: '(camelCase)',
    //     entry: {
    //         folderPath: './tools/templates/Redux/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/redux/',
    //         pathAndFileNameDefaultCase: '(camelCase)',
    //     },
    // },
    // {
    //     option: 'Redux Create Action',
    //     defaultCase: '(camelCase)',
    //     entry: {
    //         folderPath: './tools/templates/Redux-Action/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/redux/actions/',
    //         pathAndFileNameDefaultCase: '(camelCase)',
    //     },
    // },
    // {
    //     option: 'Redux Create Reducer',
    //     defaultCase: '(camelCase)',
    //     entry: {
    //         folderPath: './tools/templates/Redux-Reducer/',
    //     },
    //     stringReplacers: ['__name__'],
    //     output: {
    //         path: './src/redux/reducers/',
    //         pathAndFileNameDefaultCase: '(camelCase)',
    //     },
    // },

]);

