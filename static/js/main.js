/**
 * main.js — минимальная клиентская логика темы "blog".
 *
 * Ответственности:
 *   1) Переключение мобильного навигационного меню (бургер).
 *   2) Закрытие меню по клику вне его области или по Escape.
 *   3) Корректировка ширины блоков кода при изменении размеров viewport
 *      (на случай, если CSS-формула с 100vw даёт погрешность из-за скроллбара).
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // ---- 1. Мобильное меню ----------------------------------------------
    var toggle = document.querySelector(".site-nav__toggle");
    var list = document.querySelector("#site-nav-list");

    if (toggle && list) {
      toggle.addEventListener("click", function () {
        var open = list.getAttribute("data-open") === "true";
        list.setAttribute("data-open", String(!open));
        toggle.setAttribute("aria-expanded", String(!open));
      });

      // Закрытие меню по клику на ссылку (для одностраничной навигации)
      list.addEventListener("click", function (e) {
        if (e.target.matches("a")) {
          list.setAttribute("data-open", "false");
          toggle.setAttribute("aria-expanded", "false");
        }
      });

      // Закрытие по Escape
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && list.getAttribute("data-open") === "true") {
          list.setAttribute("data-open", "false");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
    }

    // ---- 2. Корректировка scroll-padding для якорей ---------------------
    // Чтобы заголовки, на которые ведут ссылки, не перекрывались sticky-меню.
    document.documentElement.style.scrollPaddingTop = "4rem";
  });
})();
