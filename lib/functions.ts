'server only';

export type TranslationObject = {
    translation: [
        {
            text: string
        }
    ]
}

export function getLocale(locale: string) {
    return {
        select: {
            translation: {
                select: {
                    text: true
                },
                where: {
                    language: {
                        name: locale
                    }
                }
            }
        }
    }
}

export function deserialize(object: any): string {
    return object.translation[0].text;
}