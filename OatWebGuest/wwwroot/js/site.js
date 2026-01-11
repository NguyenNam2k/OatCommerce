// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
(function () {
    "use strict";

    const root = document.querySelector(".oat-page");
    const nav = document.querySelector(".oat-nav");

    const fallbackImage =
        root?.dataset?.imageFallback ||
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=80";

    // Global image fallback for any <img> that fails to load.
    if (fallbackImage) {
        document.addEventListener(
            "error",
            (e) => {
                const img = e.target;
                if (!(img instanceof HTMLImageElement)) return;
                if (!img.src || img.src === fallbackImage) return;
                img.src = fallbackImage;
            },
            true
        );
    }

    // Nav micro-interactions
    if (nav) {
        let lastKnownY = 0;
        let ticking = false;

        const update = () => {
            const y = lastKnownY;
            if (y > 10) {
                nav.classList.add("oat-nav--scrolled");
            } else {
                nav.classList.remove("oat-nav--scrolled");
            }
            ticking = false;
        };

        window.addEventListener(
            "scroll",
            () => {
                lastKnownY = window.scrollY || 0;
                if (!ticking) {
                    window.requestAnimationFrame(update);
                    ticking = true;
                }
            },
            { passive: true }
        );
    }

    // Smooth scroll for in-page anchors with fixed navbar offset.
    document.addEventListener("click", (e) => {
        const a = e.target?.closest?.('a[href^="#"]');
        if (!a) return;

        const id = a.getAttribute("href");
        if (!id || id === "#") return;

        const el = document.querySelector(id);
        if (!el) return;

        e.preventDefault();
        const navHeight = nav?.offsetHeight ?? 0;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;

        window.scrollTo({ top, behavior: "smooth" });
    });

    // Product showcase carousel (page-based: show max 4 cards per view)
    const productShowcase = document.querySelector("[data-product-showcase]");
    if (productShowcase) {
        const track = productShowcase.querySelector("[data-product-track]");
        const btnPrev = productShowcase.querySelector("[data-product-prev]");
        const btnNext = productShowcase.querySelector("[data-product-next]");

        const getGap = () => {
            if (!track) return 0;
            const styles = window.getComputedStyle(track);
            return (
                parseFloat(styles.columnGap || "") ||
                parseFloat(styles.gap || "") ||
                0
            );
        };

        const getCardWidth = () => {
            const firstCard = track?.querySelector?.("[data-product-card]");
            if (!firstCard) return 320;
            return firstCard.getBoundingClientRect().width || 320;
        };

        const getPerView = () => {
            if (!track) return 1;
            const card = getCardWidth();
            const gap = getGap();
            const viewport = track.parentElement;
            const viewportWidth = viewport?.getBoundingClientRect().width || track.clientWidth;
            const est = Math.floor((viewportWidth + gap) / (card + gap));
            return Math.min(4, Math.max(1, est));
        };

        const getPageStep = () => {
            const perView = getPerView();
            const card = getCardWidth();
            const gap = getGap();
            return Math.round(perView * card + Math.max(0, perView - 1) * gap);
        };

        const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

        const getMaxScroll = () => {
            if (!track) return 0;
            return Math.max(0, track.scrollWidth - track.clientWidth);
        };

        const updateButtons = () => {
            if (!track) return;
            const max = getMaxScroll();
            const x = track.scrollLeft;
            const eps = 2;
            if (btnPrev) btnPrev.disabled = x <= eps;
            if (btnNext) btnNext.disabled = x >= max - eps;
        };

        const snapToNearestPage = () => {
            if (!track) return;
            const step = getPageStep();
            if (step <= 0) return;

            const max = getMaxScroll();
            const page = Math.round(track.scrollLeft / step);
            const target = clamp(page * step, 0, max);
            track.scrollTo({ left: target, behavior: "smooth" });
        };

        let isAnimating = false;
        const scrollByPage = (dir) => {
            if (!track || isAnimating) return;
            isAnimating = true;

            const step = getPageStep();
            const max = getMaxScroll();
            const current = track.scrollLeft;

            const page = Math.round(current / step);
            const nextPage = clamp(page + dir, 0, Math.ceil(max / step));
            const target = clamp(nextPage * step, 0, max);

            track.scrollTo({ left: target, behavior: "smooth" });

            window.setTimeout(() => {
                isAnimating = false;
                updateButtons();
            }, 280);
        };

        btnPrev?.addEventListener("click", () => scrollByPage(-1));
        btnNext?.addEventListener("click", () => scrollByPage(1));

        let snapTimer;
        track?.addEventListener(
            "scroll",
            () => {
                updateButtons();
                window.clearTimeout(snapTimer);
                snapTimer = window.setTimeout(snapToNearestPage, 120);
            },
            { passive: true }
        );

        window.addEventListener(
            "resize",
            () => {
                snapToNearestPage();
                updateButtons();
            },
            { passive: true }
        );

        updateButtons();
    }

    // Production process slider
    const process = document.querySelector("[data-process]");
    if (process) {
        const img = process.querySelector(".oat-process__image");
        const stepEl = process.querySelector("[data-process-step]");
        const titleEl = process.querySelector("[data-process-title]");
        const descEl = process.querySelector("[data-process-desc]");
        const barEl = process.querySelector("[data-process-bar]");
        const indexEl = process.querySelector("[data-process-index]");
        const totalEl = process.querySelector("[data-process-total]");

        const btnPrev = process.querySelector("[data-process-prev]");
        const btnNext = process.querySelector("[data-process-next]");
        const dotsWrap = process.querySelector("[data-process-dots]");
        const tabsWrap = process.querySelector("[data-process-tabs]");

        const steps = [
            {
                title: "Chọn yến mạch & nguyên liệu",
                desc: "Tuyển chọn yến mạch nguyên hạt, sữa/yogurt và topping tươi theo ngày. Ưu tiên nguồn nguyên liệu sạch và ổn định.",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80",
                icon: "ri-leaf-line"
            },
            {
                title: "Sơ chế & chuẩn bị topping",
                desc: "Rửa, cắt trái cây; rang nhẹ hạt và chuẩn bị sốt/bơ hạt. Mọi thứ được cân định lượng để hương vị đồng nhất.",
                image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
                icon: "ri-knife-line"
            },
            {
                title: "Mix base (yến mạch + sữa/yogurt)",
                desc: "Pha base theo công thức, kiểm soát độ sánh và vị ngọt. Trộn đều để yến mạch nở chuẩn sau khi ủ lạnh.",
                image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1400&q=80",
                icon: "ri-flask-line"
            },
            {
                title: "Đóng hũ & tạo layer",
                desc: "Đóng hũ theo layer: base – topping – sauce. Đảm bảo thẩm mỹ và trải nghiệm ăn ngon hơn.",
                image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1400&q=80",
                icon: "ri-stack-line"
            },
            {
                title: "Ủ lạnh & kiểm tra chất lượng",
                desc: "Ủ lạnh đủ thời gian để kết cấu đạt chuẩn. Kiểm tra cảm quan, vệ sinh và tem nhãn trước khi giao.",
                image: "https://images.unsplash.com/photo-1580915411954-282cb1c96b0f?auto=format&fit=crop&w=1400&q=80",
                icon: "ri-snowy-line"
            },
            {
                title: "Đóng gói & giao hàng",
                desc: "Đóng gói giữ lạnh, chống sốc. Giao nhanh để bạn nhận được bữa sáng tươi ngon đúng hẹn.",
                image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1400&q=80",
                icon: "ri-truck-line"
            }
        ];

        const durationMs = 220;
        let current = 0;
        let animating = false;

        if (totalEl) totalEl.textContent = String(steps.length);

        const setActiveStates = () => {
            dotsWrap?.querySelectorAll(".oat-dot").forEach((d, i) => {
                d.classList.toggle("is-active", i === current);
            });
            tabsWrap?.querySelectorAll(".oat-step").forEach((t, i) => {
                t.classList.toggle("is-active", i === current);
            });
        };

        const renderControls = () => {
            if (dotsWrap) {
                dotsWrap.innerHTML = "";
                for (let i = 0; i < steps.length; i++) {
                    const dot = document.createElement("button");
                    dot.type = "button";
                    dot.className = "oat-dot";
                    dot.setAttribute("aria-label", `Bước ${i + 1}`);
                    dot.addEventListener("click", () => goTo(i));
                    dotsWrap.appendChild(dot);
                }
            }

            if (tabsWrap) {
                tabsWrap.innerHTML = "";
                for (let i = 0; i < steps.length; i++) {
                    const tab = document.createElement("button");
                    tab.type = "button";
                    tab.className = "oat-step";
                    tab.setAttribute("aria-label", `Bước ${i + 1}`);
                    tab.innerHTML = `<i class="${steps[i].icon}"></i><span>Bước ${i + 1}</span>`;
                    tab.addEventListener("click", () => goTo(i));
                    tabsWrap.appendChild(tab);
                }
            }
        };

        const applyStep = () => {
            const s = steps[current];
            if (stepEl) stepEl.textContent = String(current + 1);
            if (indexEl) indexEl.textContent = String(current + 1);
            if (titleEl) titleEl.textContent = s.title;
            if (descEl) descEl.textContent = s.desc;
            if (img) {
                img.src = s.image;
            }
            if (barEl) {
                const pct = ((current + 1) / steps.length) * 100;
                barEl.style.width = `${pct}%`;
            }

            const badgeIcon = process.querySelector(".oat-process__badge i");
            if (badgeIcon) badgeIcon.className = s.icon;

            btnPrev && (btnPrev.disabled = current === 0);
            btnNext && (btnNext.disabled = current === steps.length - 1);

            setActiveStates();
        };

        const goTo = (idx) => {
            if (animating) return;
            if (idx < 0 || idx >= steps.length) return;
            if (idx === current) return;

            animating = true;
            process.classList.add("is-animating");

            window.setTimeout(() => {
                current = idx;
                applyStep();

                window.setTimeout(() => {
                    process.classList.remove("is-animating");
                    animating = false;
                }, durationMs);
            }, durationMs);
        };

        btnPrev?.addEventListener("click", () => goTo(current - 1));
        btnNext?.addEventListener("click", () => goTo(current + 1));

        renderControls();
        applyStep();

        // keyboard support
        process.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") goTo(current - 1);
            if (e.key === "ArrowRight") goTo(current + 1);
        });
        process.setAttribute("tabindex", "0");
    }

    // Origin reveal on scroll
    const originItems = document.querySelectorAll("[data-origin-item]");
    if (originItems.length) {
        originItems.forEach((el) => el.classList.add("oat-reveal"));

        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (!entry.isIntersecting) continue;
                        entry.target.classList.add("is-in");
                        io.unobserve(entry.target);
                    }
                },
                { threshold: 0.12 }
            );

            originItems.forEach((el) => io.observe(el));
        } else {
            originItems.forEach((el) => el.classList.add("is-in"));
        }
    }
})();
