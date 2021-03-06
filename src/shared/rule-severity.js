// LICENSE : MIT
"use strict";
const assert = require("assert");
export const SeverityLevel = {
    "none": 0,
    "info": 0,
    "warning": 1,
    "error": 2
};
/**
 *
 * @param ruleConfig
 * @returns {number}
 */
export function getSeverity(ruleConfig) {
    if (ruleConfig == null) {
        return SeverityLevel.error;
    }
    // rule:<true|false>
    if (typeof ruleConfig === "boolean") {
        return ruleConfig ? SeverityLevel.error : SeverityLevel.none;
    }
    if (ruleConfig.severity) {
        assert(SeverityLevel[ruleConfig.severity] !== undefined, `please set
"rule-key": {
    "severity": "<warning|error>"
}`);
        return SeverityLevel[ruleConfig.severity];
    }
    return SeverityLevel.error;
}
