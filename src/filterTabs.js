function removeNamesWithXFromTab(tableau) {
    const newTab = tableau.filter(
        (name) => name.toLowerCase().includes("x") === false
    );

    return newTab;
}

exports.removeNamesWithXFromTab = removeNamesWithXFromTab;
