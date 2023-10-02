export interface EventsResources {
    events: string;
    paginator: {
        week: string;
        month: string;
        list: string;
    },
    layout: {
        week: {
            underDev: string;
        };
        month: {
            underDev: string;
        };
        list: {
            day: string;
            start: string;
            end: string;
        }
    };
}