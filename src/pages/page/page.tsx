import React from "react";

declare global {
    interface Window {
        $WowheadPower:
            | {
                  refreshLinks: Function;
              }
            | undefined;
    }
}
