(function () {
  "use strict";
  var validViews = ["home", "pricing", "login", "register", "account", "service", "learn", "course", "support", "download"];
  var views = Array.prototype.slice.call(document.querySelectorAll("[data-view]"));
  var header = document.querySelector(".site-header");
  var mobileNav = document.querySelector(".mobile-nav");
  var toast = document.querySelector(".toast");
  var toastTimer = null;
  var currentView = "home";
  var currentStage = 1;
  var currentLesson = 0;
  var lessons = [
    ["Installation", "03:20"], ["Sign in & licensing", "04:10"], ["Create a project", "05:30"],
    ["Import your video", "06:15"], ["Create useful tags", "05:00"], ["Scout a match", "08:40"],
    ["Review the timeline", "06:00"], ["Export a report", "06:05"]
  ];

  document.documentElement.classList.add("js-ready");

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toast.classList.remove("visible"); }, 3400);
  }

  function routeInfo() {
    var hash = window.location.hash || "";
    if (hash.indexOf("#/") !== 0) {
      return { view: currentView, anchor: hash.length > 1 ? hash.slice(1) : "" };
    }
    var raw = hash.slice(2);
    var marker = raw.indexOf("#");
    var path = marker >= 0 ? raw.slice(0, marker) : raw;
    var anchor = marker >= 0 ? raw.slice(marker + 1) : "";
    path = path.split("?")[0].replace(/\/+$/, "") || "home";
    if (validViews.indexOf(path) < 0) path = "home";
    return { view: path, anchor: anchor };
  }

  function updateTitle(view) {
    var titles = {
      home: "SpotScout Lab — See the Game. Understand More.",
      pricing: "Plans & Pricing — SpotScout Lab",
      login: "Sign in — SpotScout Lab",
      register: "Create an account — SpotScout Lab",
      account: "Your account — SpotScout Lab",
      service: "Scouting Service — SpotScout Lab",
      learn: "SpotScout Academy — SpotScout Lab",
      course: "SpotScout Fundamentals — SpotScout Lab",
      support: "Support — SpotScout Lab",
      download: "Download for Windows — SpotScout Lab"
    };
    var title = titles[view] || titles.home;
    document.title = window.SpotScoutI18n ? window.SpotScoutI18n.t(title) : title;
  }

  function renderRoute(shouldScroll) {
    var info = routeInfo();
    currentView = info.view;
    views.forEach(function (view) {
      view.classList.toggle("active", view.getAttribute("data-view") === currentView);
    });
    updateTitle(currentView);
    if (mobileNav) mobileNav.classList.remove("open");
    var menuButton = document.querySelector('[data-action="menu"]');
    if (menuButton) menuButton.setAttribute("aria-expanded", "false");
    if (shouldScroll !== false) {
      if (info.anchor) {
        window.setTimeout(function () {
          var target = document.getElementById(info.anchor);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 40);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    requestAnimationFrame(revealVisible);
  }

  function navigate(view, anchor) {
    var next = "#/" + view + (anchor ? "#" + anchor : "");
    if (window.location.hash === next) renderRoute(true);
    else window.location.hash = next;
  }

  function revealVisible() {
    document.querySelectorAll(".view.active .reveal").forEach(function (node) {
      if (node.getBoundingClientRect().top < window.innerHeight * .94) node.classList.add("revealed");
    });
  }

  window.addEventListener("hashchange", function () { renderRoute(true); });
  renderRoute(false);

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -35px 0px" });
    document.querySelectorAll(".reveal").forEach(function (node) { observer.observe(node); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (node) { node.classList.add("revealed"); });
  }
  window.addEventListener("scroll", function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
    var photo = document.querySelector(".hero-photo");
    if (photo && currentView === "home" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      photo.style.transform = "translateY(" + Math.min(window.scrollY * .08, 65) + "px)";
    }
    revealVisible();
  }, { passive: true });

  try {
    var savedTheme = window.localStorage.getItem("spotscout-theme");
    if (savedTheme === "light" || savedTheme === "dark") document.body.setAttribute("data-theme", savedTheme);
  } catch (error) { /* local storage may be unavailable in a private browser context */ }

  function setBilling(type) {
    document.querySelectorAll("[data-billing]").forEach(function (button) {
      button.classList.toggle("active", button.getAttribute("data-billing") === type);
    });
    document.querySelectorAll("[data-annual][data-lifetime]").forEach(function (price) {
      price.textContent = price.getAttribute(type);
    });
    document.querySelectorAll("[data-price-suffix]").forEach(function (suffix) {
      suffix.textContent = type === "annual" ? "/ year" : "one-time";
    });
  }

  function setServiceStage(stageNumber) {
    currentStage = Math.max(1, Math.min(5, stageNumber));
    document.querySelectorAll(".service-stage").forEach(function (stage) {
      var active = Number(stage.getAttribute("data-stage")) === currentStage;
      stage.classList.toggle("active", active);
      stage.querySelectorAll("input, select, textarea").forEach(function (field) {
        field.disabled = !active;
      });
    });
    document.querySelectorAll(".service-step-item").forEach(function (step, index) {
      step.classList.toggle("current", index + 1 === currentStage);
      step.classList.toggle("done", index + 1 < currentStage);
    });
    var current = document.querySelector(".current-step");
    var indicator = document.querySelector(".step-indicator > span:last-child");
    var back = document.querySelector('[data-action="service-back"]');
    var next = document.querySelector('[data-action="service-next"]');
    var submit = document.querySelector('[data-action="service-submit"]');
    if (current) current.textContent = String(currentStage).padStart(2, "0");
    if (indicator) indicator.textContent = "05";
    if (back) back.hidden = currentStage === 1;
    if (next) next.hidden = currentStage === 5;
    if (submit) submit.hidden = currentStage !== 5;
    if (currentStage === 5) updateServiceSummary();
  }

  function updateServiceSummary() {
    var form = document.querySelector('[data-form="service"]');
    if (!form) return;
    var value = function (name) {
      var field = form.querySelector('[name="' + name + '"]');
      return field ? field.value.trim() : "";
    };
    var sport = value("sport") || "—";
    var match = [value("team"), value("opponent")].filter(Boolean).join(" vs ") || "—";
    var link = value("video") || "—";
    var serviceField = form.querySelector('[name="service"]:checked');
    var service = serviceField ? serviceField.value : "—";
    var price = service === "Quick Scout" ? "From ฿4,900" : service === "Advanced Analysis" ? "From ฿9,900" : "—";
    var values = { sport: sport, match: match, video: link, service: service, price: price };
    Object.keys(values).forEach(function (key) {
      var target = document.querySelector('[data-summary="' + key + '"]');
      if (target) target.textContent = values[key];
    });
  }

  function selectLesson(index) {
    currentLesson = Math.max(0, Math.min(lessons.length - 1, index));
    document.querySelectorAll(".lesson-row").forEach(function (row, rowIndex) {
      row.classList.toggle("selected", rowIndex === currentLesson);
    });
    var heading = document.querySelector(".lesson-description h2");
    var eyebrow = document.querySelector(".lesson-description .eyebrow");
    var caption = document.querySelector(".lesson-video-caption");
    var time = document.querySelector(".lesson-video-controls > span");
    var row = document.querySelector('.lesson-row[data-lesson="' + currentLesson + '"]');
    if (heading) heading.textContent = lessons[currentLesson][0] + (currentLesson === 0 ? "." : ".");
    if (eyebrow) eyebrow.textContent = "LESSON " + String(currentLesson + 1).padStart(2, "0") + " / 08";
    if (caption) caption.innerHTML = "LESSON " + String(currentLesson + 1).padStart(2, "0") + " <i>·</i> " + lessons[currentLesson][0].toUpperCase();
    if (time) time.textContent = "00:00 / " + lessons[currentLesson][1];
    var previous = document.querySelector(".lesson-nav button:first-child");
    if (previous) previous.disabled = currentLesson === 0;
    if (row) row.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  document.addEventListener("click", function (event) {
    var sectionLink = event.target.closest("[data-section]");
    if (sectionLink) {
      event.preventDefault();
      navigate("home", sectionLink.getAttribute("data-section"));
      return;
    }
    var routeButton = event.target.closest("[data-go]");
    if (routeButton) {
      event.preventDefault();
      navigate(routeButton.getAttribute("data-go"));
      return;
    }
    var billing = event.target.closest("[data-billing]");
    if (billing) {
      setBilling(billing.getAttribute("data-billing"));
      return;
    }
    var lesson = event.target.closest("[data-lesson]");
    if (lesson) {
      selectLesson(Number(lesson.getAttribute("data-lesson")));
      return;
    }
    var filter = event.target.closest("[data-filter]");
    if (filter) {
      var kind = filter.getAttribute("data-filter");
      document.querySelectorAll(".academy-filter").forEach(function (button) {
        button.classList.toggle("active", button === filter);
      });
      document.querySelectorAll(".academy-card").forEach(function (card) {
        card.hidden = kind !== "all" && card.getAttribute("data-kind") !== kind;
      });
      return;
    }
    var action = event.target.closest("[data-action]");
    if (!action) return;
    var name = action.getAttribute("data-action");
    if (name === "theme") {
      var nextTheme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.body.setAttribute("data-theme", nextTheme);
      try { window.localStorage.setItem("spotscout-theme", nextTheme); } catch (error) { /* ignore */ }
      action.setAttribute("aria-label", nextTheme === "light" ? "Switch to dark theme" : "Switch to light theme");
    } else if (name === "menu") {
      var open = mobileNav.classList.toggle("open");
      action.setAttribute("aria-expanded", open ? "true" : "false");
    } else if (name === "prototype-notice") {
      showToast("This sign-in option is a visual prototype and is not connected yet.");
    } else if (name === "toggle-password") {
      var password = action.parentElement.querySelector("input");
      if (password) {
        var visible = password.type === "password";
        password.type = visible ? "text" : "password";
        action.textContent = visible ? "Hide" : "Show";
      }
    } else if (name === "service-next") {
      var activeStage = document.querySelector('.service-stage[data-stage="' + currentStage + '"]');
      var fields = activeStage ? Array.prototype.slice.call(activeStage.querySelectorAll(":required")) : [];
      var valid = fields.every(function (field) {
        if (field.type === "radio") {
          return document.querySelector('[name="' + field.name + '"]:checked') !== null;
        }
        return field.checkValidity();
      });
      if (!valid) {
        var firstInvalid = fields.filter(function (field) {
          return field.type === "radio" ? !document.querySelector('[name="' + field.name + '"]:checked') : !field.checkValidity();
        })[0];
        if (firstInvalid && firstInvalid.type !== "radio") firstInvalid.reportValidity();
        else showToast("Choose a service to continue.");
        return;
      }
      setServiceStage(currentStage + 1);
    } else if (name === "service-back") {
      setServiceStage(currentStage - 1);
    } else if (name === "service-submit") {
      event.preventDefault();
      showToast("Request prepared for the prototype. No order or video was sent.");
    } else if (name === "download-demo") {
      showToast("The Windows installer will be added here when SpotScout is ready to release.");
    } else if (name === "deactivate-device") {
      showToast("Device controls will be available when account licensing is connected.");
    } else if (name === "rename-device" || name === "manage-devices") {
      showToast("Device management is a prototype view and is not connected yet.");
    } else if (name === "lesson-play") {
      showToast("Lesson videos will be connected in the Academy build.");
    } else if (name === "next-lesson") {
      selectLesson(currentLesson + 1);
      showToast("Lesson selection changed. Course progress is a preview.");
    }
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    var formType = form.getAttribute("data-form");
    if (!formType) return;
    event.preventDefault();
    if (formType === "register") {
      var password = form.querySelector('[name="password"]');
      var confirm = form.querySelector('[name="confirm-password"]');
      if (password && confirm && password.value !== confirm.value) {
        confirm.setCustomValidity("Passwords do not match.");
        confirm.reportValidity();
        confirm.setCustomValidity("");
        return;
      }
      showToast("Your details look ready. Account creation is not connected in this prototype.");
    } else if (formType === "login") {
      showToast("Sign-in is not connected in this prototype. The account screen uses sample data.");
    } else if (formType === "service") {
      showToast("Request prepared for the prototype. No order or video was sent.");
    }
  });

  document.querySelectorAll(".service-stage input, .service-stage select, .service-stage textarea").forEach(function (field) {
    field.disabled = !field.closest(".service-stage").classList.contains("active");
  });
  document.querySelectorAll(".lesson-row").forEach(function (row) {
    row.addEventListener("dblclick", function () { showToast("Lesson video playback will be connected in the Academy build."); });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileNav) {
      mobileNav.classList.remove("open");
      var menuButton = document.querySelector('[data-action="menu"]');
      if (menuButton) menuButton.setAttribute("aria-expanded", "false");
    }
  });
})();
