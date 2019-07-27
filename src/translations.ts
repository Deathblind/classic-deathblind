import { FormattedMessage } from "react-intl";
type Translations = { [key: string]: FormattedMessage.MessageDescriptor };

export const compileDefaultValues = (trans: Translations) => {
    const keys = Object.keys(trans);

    return keys.reduce(
        (acc, cur) => {
            const obj = trans[cur];

            acc[obj.id] = obj.defaultMessage!;

            return acc;
        },
        {} as { [key: string]: string }
    );
};

export const translations = {};
