// define page paths
const ROOT_PATH = "";
const PAGE_VALUES = Object.freeze({
    HOME: "",
    PROJECTS: "projects",
});

export const PAGE_PATHS = Object.freeze({
    HOME: `${ROOT_PATH}/${PAGE_VALUES.HOME}`,
    PROJECTS: `${ROOT_PATH}/${PAGE_VALUES.PROJECTS}`,
});
