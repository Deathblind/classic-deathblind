import { css } from "../../../theme/util/helpers";
import {
    questForeground,
    npcForeground,
    primaryAccentBackground
} from "../../../theme/theme/colors";

export const wowStyling = css`
    .wowhead {
        color: inherit;
    }

    .wowhead--quest {
        color: ${questForeground};
    }

    .wowhead--npc {
        color: ${npcForeground};
    }

    /* Hearthstone */
    .wowhead[data-wowhead*="item=6948"] {
        color: ${primaryAccentBackground} !important;
    }

    .quest-icon {
        vertical-align: middle;
        width: 1em;
        height: 1em;
    }
`;
