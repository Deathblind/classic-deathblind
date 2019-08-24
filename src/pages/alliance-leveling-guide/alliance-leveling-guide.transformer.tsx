import QuestAvailable from "../../icons/quest-available.png";
import QuestComplete from "../../icons/quest-complete.png";

// .replace(new RegExp("<li>", "g"), function() {
//     return `<li>
//         <label>
//             <input type='checkbox' data-id="${postID}:${index++}" />
//             <div></div>
//         </label>
//         <div>
//     `;
// })
// .replace(new RegExp("</li>", "g"), `</div></li>`)
// .replace(
//     /!\?</g,
//     `<img class="quest-icon" src="${QuestAvailable}" /><img class="quest-icon" src="${QuestComplete}" /><`
// )
// .replace(
//     /!</g,
//     `<img class="quest-icon" src="${QuestAvailable}" /><`
// )
// .replace(
//     /\?</g,
//     `<img class="quest-icon" src="${QuestComplete}" /><`
// )
// .replace(new RegExp("<img", "g"), `<img loading="lazy"`)

export const replaceQuestIcons = (content: string): string => {
    const availableIcon = `<img class="quest-icon" src="${QuestAvailable}" alt="Quest Available Icon" title="Quest Available" />`;
    const completeIcon = `<img class="quest-icon" src="${QuestComplete}" alt="Quest Complete Icon" title="Quest Complete" />`;

    return content
        .replace(/!\?</g, `${availableIcon}${completeIcon}<`)
        .replace(/!</g, `${availableIcon}<`)
        .replace(/\?</g, `${completeIcon}<`);
};

export const lazyLoadImages = (content: string): string =>
    content.replace(new RegExp("<img", "g"), `<img loading="lazy"`);

export type CheckboxIdMethod = (index: number) => string;
export type CheckboxValueMethod = (id: string) => boolean;
export type CheckboxSetValueMethod = (id: string, oldValue: boolean) => void;

export const createCheckboxes = (
    getId: CheckboxIdMethod,
    getValue?: CheckboxValueMethod,
    setValue?: CheckboxSetValueMethod
) => (content: string): string => {
    let index = 0;

    return content
        .replace(new RegExp("<li>", "g"), function() {
            const id = getId(index++);
            const value = getValue ? getValue(id) : false;

            return `<li>
            <label>
                <input type='checkbox' name="${id}" data-id="${id}" value="1" ${value ? "checked" : null} />
                <div></div>
            </label>
            <div>
        `;
        })
        .replace(new RegExp("</li>", "g"), `</div></li>`);
};
