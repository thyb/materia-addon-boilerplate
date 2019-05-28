export default class YourAddon {
    public static displayName = 'Your Package';
    public static logo = 'https://s3.amazonaws.com/kinlane-productions/api-evangelist/noun-project/the-noun-project-clicking-heels.jpg';

    public static installSettings = [
        {
            name: 'name',
            description: 'Enter your name',
            type: 'string',
            required: true
        }
    ];

    constructor(app, config) { }

    start() {
    }

    uninstall(app) { }
}
