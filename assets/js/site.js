function initCarFilters() {
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
}

function initRivalDetails() {
    const heading = document.getElementById("performance-multipliers");
    if (!heading || !heading.closest("main.content")) {
        return;
    }

    const technical = document.createElement("section");
    technical.id = "rival-technical-details";
    technical.setAttribute("aria-label", "Detailed rival performance calculations");
    let next = heading.nextElementSibling;
    while (next && next.tagName !== "H2" &&
        !(next.tagName === "P" && next.textContent.trim().startsWith("Beating this rival for the first time in the current Quest period"))) {
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
}

function initChallengeDetails() {
    const heading = document.getElementById("challenge-response");
    if (!heading || !heading.closest("main.content")) {
        return;
    }
    const original = heading.nextElementSibling;
    const cars = original?.nextElementSibling;
    const source = cars?.nextElementSibling;
    if (original?.tagName !== "P" || cars?.tagName !== "P" || source?.tagName !== "P" ||
        !original.textContent.startsWith("This rival’s source record enables") ||
        !cars.textContent.startsWith("The original normal-car records matching") ||
        !source.textContent.startsWith("These values follow")) {
        return;
    }
    const match = original.textContent.match(/classification value (\d+)/);
    const classification = original.querySelector("a");
    if (!match || !classification) {
        return;
    }
    const summary = document.createElement("p");
    const link = classification.cloneNode(true);
    link.textContent = "driving classification";
    summary.append("A challenge may be cancelled if your ", link,
        ` is below ${match[1]} and your car is from a different family. The cars below match this rival’s family and bypass this particular check; other challenge conditions still apply.`);
    const technical = document.createElement("section");
    technical.id = "rival-challenge-technical-details";
    technical.setAttribute("aria-label", "Challenge response technical details");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rival-technical-toggle";
    button.setAttribute("aria-controls", technical.id);
    heading.after(summary);
    technical.append(original, source);
    cars.after(button, technical);

    let expanded = false;
    try {
        expanded = localStorage.getItem("txr2-technical-details") === "on";
    } catch (_) {
        // The control still works without browser storage.
    }
    function update() {
        technical.hidden = !expanded;
        button.setAttribute("aria-expanded", String(expanded));
        button.textContent = expanded ? "Hide challenge details" : "Show challenge details";
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
}

function initPartFilters() {
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
        const detailIndex = headers.findIndex((header) =>
            ["Additional attributes", "Other attributes"].includes(header.textContent.trim()));
        if (detailIndex >= 0 && rows.every((row) => row.cells[detailIndex])) {
            const detailButton = document.createElement("button");
            detailButton.type = "button";
            detailButton.className = "rival-technical-toggle";
            if (!table.id) {
                table.id = `parts-table-${[...content.querySelectorAll(".part-filter")].length + 1}`;
            }
            detailButton.setAttribute("aria-controls", table.id);
            let expanded = false;
            try {
                expanded = localStorage.getItem("txr2-technical-details") === "on";
            } catch (_) {
                // Details remain available without browser storage.
            }
            function updateDetails() {
                headers[detailIndex].hidden = !expanded;
                for (const row of rows) {
                    row.cells[detailIndex].hidden = !expanded;
                }
                detailButton.setAttribute("aria-pressed", String(expanded));
                detailButton.textContent = expanded ? "Hide extra attributes" : "Show extra attributes";
            }
            detailButton.addEventListener("click", () => {
                expanded = !expanded;
                try {
                    localStorage.setItem("txr2-technical-details", expanded ? "on" : "off");
                } catch (_) {
                    // The selection still applies to this page.
                }
                updateDetails();
            });
            controls.appendChild(detailButton);
            updateDetails();
        }
        table.before(controls);
        select.addEventListener("change", update);
        update();
    }
}

function initPage() {
    initCarFilters();
    initRivalDetails();
    initChallengeDetails();
    initPartFilters();
}

initPage();

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
        try {
            audio.currentTime = 0;
            return Promise.resolve(audio.play());
        } catch (error) {
            return Promise.reject(error);
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
        if (enabled) {
            play().catch(() => {});
        }
    });
    let navigation = 0;
    let renderedPath = window.location.pathname + window.location.search;
    async function loadPage(url, addHistory) {
        const request = ++navigation;
        try {
            const response = await fetch(url, { credentials: "same-origin" });
            if (!response.ok) {
                throw new Error("Page request failed");
            }
            const page = new DOMParser().parseFromString(await response.text(), "text/html");
            const selectors = ["nav.menu", ".help", "main.content", "footer"];
            const replacements = selectors.map((selector) => page.querySelector(selector));
            const current = selectors.map((selector) => document.querySelector(selector));
            const scripts = [...page.querySelectorAll("script")];
            const extraScripts = scripts.some((script) => !script.src ||
                !new URL(script.src, url).pathname.endsWith("/assets/js/site.js"));
            if (replacements.some((element) => !element) || current.some((element) => !element) ||
                extraScripts) {
                throw new Error("Page needs a full navigation");
            }
            if (request !== navigation) {
                return;
            }
            for (let i = 0; i < current.length; i += 1) {
                current[i].replaceWith(replacements[i]);
            }
            document.title = page.title;
            const loadedUrl = new URL(url, window.location.href);
            renderedPath = loadedUrl.pathname + loadedUrl.search;
            if (addHistory) {
                history.pushState(null, "", url);
            }
            initPage();
            window.scrollTo(0, 0);
            const main = document.querySelector("main.content");
            main.setAttribute("tabindex", "-1");
            main.focus({ preventScroll: true });
        } catch (_) {
            if (request === navigation) {
                window.location.href = url;
            }
        }
    }
    document.addEventListener("click", (event) => {
        const target = event.target.closest(".menu a.row, .car-filters button, .rival-technical-toggle");
        if (!target || event.defaultPrevented) {
            return;
        }
        if (enabled) {
            play().catch(() => {});
        }
        if (target.matches(".menu a.row") && event.button === 0 &&
            !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey &&
            (!target.target || target.target === "_self")) {
            const url = new URL(target.href, window.location.href);
            if (url.origin === window.location.origin && !url.hash && !target.hasAttribute("download")) {
                event.preventDefault();
                loadPage(url.href, true);
            }
        }
    });
    window.addEventListener("popstate", () => {
        if (window.location.pathname + window.location.search !== renderedPath) {
            loadPage(window.location.href, false);
        }
    });
    update();
    toggle.hidden = false;
})();
