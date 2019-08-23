import { createGlobalStyle } from "../theme/util/helpers";
import { normalize } from "polished";

export const Normalize = createGlobalStyle`
    ${normalize()}
`;

export { Normalize as default };
