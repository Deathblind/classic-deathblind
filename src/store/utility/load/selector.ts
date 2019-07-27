import { AsyncState } from "../async/state";

export const dataSelector = <EntryType>(
    entry: AsyncState<EntryType>
): EntryType | null => entry.data;
