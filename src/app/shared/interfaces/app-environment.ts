export interface AppEnvironment {
    name: 'production' | 'testing' | 'staging' | 'local' | 'default';
    settings: {
        apiUrl: string;
        mySetting?: string;
    };
}
