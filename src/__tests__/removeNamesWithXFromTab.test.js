const { removeNamesWithXFromTab } = require("../filterTabs");

describe("app tests suites - removeX", () => {
    test("should return an array", () => {
        const result = removeNamesWithXFromTab([]);
        expect(result).toEqual([]);
    });

    test("should return the same tab", () => {
        const tab = ["Momo", "Hadji", "Leo"];
        const result = removeNamesWithXFromTab(tab);
        expect(result).toEqual(tab);
    });

    test("should return only JK in the tab", () => {
        const tab = ["DMX", "Xzibit", "JeanKevin"];
        const result = removeNamesWithXFromTab(tab);
        expect(result).toEqual(["JeanKevin"]);
    });

    test("should return a tab with JC and Leo", () => {
        const tab = ["JC", "Leo", "xena"];
        const result = removeNamesWithXFromTab(tab);
        expect(result).toEqual(["JC", "Leo"]);
    });
});
