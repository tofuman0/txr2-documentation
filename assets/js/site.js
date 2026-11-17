(() => {
    const filters = document.getElementById("car-filters");
    if (!filters) {
        return;
    }

    const table = filters.parentElement.querySelector("table");
    const buttons = [...filters.querySelectorAll("button[data-car-class]")];
    const count = document.getElementById("car-filter-count");
    if (!table || !count) {
        return;
    }

    const rows = [...table.querySelectorAll("tbody tr")];
    if (rows.length === 0 || rows.some((row) => !row.cells[2])) {
        return;
    }

    function selectClass(selected) {
        let visible = 0;
        for (const row of rows) {
            const carClass = row.cells[2].textContent.trim().split(/\s/)[0];
            row.hidden = selected !== "all" && carClass !== selected;
            if (!row.hidden) {
                visible += 1;
            }
        }
        for (const button of buttons) {
            button.setAttribute("aria-pressed", String(button.dataset.carClass === selected));
        }
        count.textContent = `${visible} cars`;
    }

    for (const button of buttons) {
        button.addEventListener("click", () => selectClass(button.dataset.carClass));
    }
    selectClass("all");
    filters.hidden = false;
})();
