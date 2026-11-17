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

(() => {
    const heading = document.getElementById("performance-multipliers");
    if (!heading || !heading.closest("main.content")) {
        return;
    }

    const technical = document.createElement("section");
    technical.id = "rival-technical-details";
    technical.setAttribute("aria-label", "Detailed rival performance calculations");
    let next = heading.nextElementSibling;
    while (next && next.tagName !== "H2" &&
        !(next.tagName === "P" && next.textContent.trim().startsWith("A first win in the current Quest period"))) {
        const following = next.nextElementSibling;
        technical.appendChild(next);
        next = following;
    }
    if (!technical.children.length) {
        return;
    }

    const summary = document.createElement("p");
    summary.textContent = "Rivals get extra grip, and their target speed can change depending on the distance between cars. Their fitted parts and settings also affect their performance. Open the technical details for the exact values.";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rival-technical-toggle";
    button.setAttribute("aria-controls", technical.id);
    heading.after(summary, button, technical);

    let expanded = false;
    try {
        expanded = localStorage.getItem("txr2-technical-details") === "on";
    } catch (_) {
        // The control still works when browser storage is unavailable.
    }
    function update() {
        technical.hidden = !expanded;
        button.setAttribute("aria-expanded", String(expanded));
        button.textContent = expanded ? "Hide technical details" : "Show technical details";
    }
    button.addEventListener("click", () => {
        expanded = !expanded;
        try {
            localStorage.setItem("txr2-technical-details", expanded ? "on" : "off");
        } catch (_) {
            // Keep the current page usable without persistent storage.
        }
        update();
    });
    update();
})();

(() => {
    const content = document.querySelector("main.content");
    if (!content) {
        return;
    }

    for (const table of content.querySelectorAll("table")) {
        const headers = [...table.querySelectorAll("thead th")];
        if (headers.length < 2 || headers[0].textContent.trim() !== "Part" ||
            headers[1].textContent.trim() !== "Cost (CP)") {
            continue;
        }

        const rows = [...table.querySelectorAll("tbody tr")];
        const categories = rows.map((row) => {
            const name = row.cells[0]?.textContent.trim() || "";
            return name.replace(/ Type \d+.*$/, "");
        });
        if (!rows.length || categories.some((category) => !category)) {
            continue;
        }

        const controls = document.createElement("div");
        controls.className = "part-filter";
        const label = document.createElement("label");
        const select = document.createElement("select");
        select.id = `part-filter-${[...content.querySelectorAll(".part-filter")].length + 1}`;
        label.htmlFor = select.id;
        label.textContent = "Filter parts";
        const count = document.createElement("span");
        count.setAttribute("aria-live", "polite");

        function addOption(value, text) {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = text;
            select.appendChild(option);
        }

        addOption("all", "All parts");
        for (const category of new Set(categories)) {
            addOption(category, category === "Muffler & air cleaner" ? "Exhaust & air cleaner" : category);
        }
        function update() {
            let visible = 0;
            rows.forEach((row, index) => {
                row.hidden = select.value !== "all" && categories[index] !== select.value;
                if (!row.hidden) {
                    visible += 1;
                }
            });
            count.textContent = `${visible} parts shown`;
        }
        controls.append(label, select, count);
        table.before(controls);
        select.addEventListener("change", update);
        update();
    }
})();

(() => {
    const toggle = document.getElementById("sound-toggle");
    const audio = document.getElementById("menu-sound");
    if (!toggle || !audio) {
        return;
    }
    let enabled = false;
    try {
        enabled = localStorage.getItem("txr2-menu-sound") === "on";
    } catch (_) {
        // Sound remains available for the current page without storage.
    }
    function update() {
        toggle.setAttribute("aria-pressed", String(enabled));
        toggle.setAttribute("aria-label", enabled ? "Mute menu sounds" : "Enable menu sounds");
    }
    function play() {
        if (!enabled) {
            return;
        }
        audio.currentTime = 0;
        const playing = audio.play();
        if (playing) {
            playing.catch(() => {});
        }
    }
    toggle.addEventListener("click", () => {
        enabled = !enabled;
        try {
            localStorage.setItem("txr2-menu-sound", enabled ? "on" : "off");
        } catch (_) {
            // The current selection still works on this page.
        }
        update();
        play();
    });
    document.addEventListener("click", (event) => {
        const target = event.target.closest(".menu a.row, .car-filters button, .rival-technical-toggle");
        if (!target || !enabled || event.defaultPrevented) {
            return;
        }
        play();
        if (target.matches(".menu a.row") && event.button === 0 &&
            !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey &&
            (!target.target || target.target === "_self")) {
            event.preventDefault();
            setTimeout(() => { window.location.href = target.href; }, 250);
        }
    });
    update();
    toggle.hidden = false;
})();
