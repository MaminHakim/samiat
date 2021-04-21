!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.lozad = t());
})(this, function () {
  "use strict";
  function s(e) {
    e.setAttribute("data-loaded", !0);
  }
  function l(e) {
    return "true" === e.getAttribute("data-loaded");
  }
  var c =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var d = arguments[t];
          for (var u in d)
            Object.prototype.hasOwnProperty.call(d, u) && (e[u] = d[u]);
        }
        return e;
      },
    d = document.documentMode,
    f = {
      rootMargin: "0px",
      threshold: 0,
      load: function (e) {
        if ("picture" === e.nodeName.toLowerCase()) {
          var t = document.createElement("img");
          d &&
            e.getAttribute("data-iesrc") &&
            (t.src = e.getAttribute("data-iesrc")),
            e.appendChild(t);
        }
        e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")),
          e.getAttribute("data-srcset") &&
            (e.srcset = e.getAttribute("data-srcset")),
          e.getAttribute("data-background-image") &&
            (e.style.backgroundImage =
              "url('" + e.getAttribute("data-background-image") + "')");
      },
      loaded: function () {},
    };
  return function () {
    var d,
      u,
      a =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : ".lozad",
      e = c(
        {},
        f,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
      ),
      t = e.rootMargin,
      n = e.threshold,
      i = e.load,
      r = e.loaded,
      o = void 0;
    return (
      window.IntersectionObserver &&
        (o = new IntersectionObserver(
          ((d = i),
          (u = r),
          function (e, t) {
            e.forEach(function (e) {
              0 < e.intersectionRatio &&
                (t.unobserve(e.target),
                l(e.target) || (d(e.target), s(e.target), u(e.target)));
            });
          }),
          { rootMargin: t, threshold: n }
        )),
      {
        observe: function () {
          for (
            var e =
                (d = a) instanceof Element
                  ? [d]
                  : d instanceof NodeList
                  ? d
                  : document.querySelectorAll(d),
              t = 0;
            t < e.length;
            t++
          )
            l(e[t]) || (o ? o.observe(e[t]) : (i(e[t]), s(e[t]), r(e[t])));
          var d;
        },
        triggerLoad: function (e) {
          l(e) || (i(e), s(e), r(e));
        },
      }
    );
  };
});
var defaultSettings = "fa";
!(function (u) {
  u.fn.persiaNumber = function (e) {
    function t(e, t) {
      e.find("*")
        .andSelf()
        .contents()
        .each(function () {
          3 === this.nodeType &&
            "style" != this.parentNode.localName &&
            "script" != this.parentNode.localName &&
            ((this.nodeValue = this.nodeValue.replace(
              this.nodeValue.match(/[0-9]*\.[0-9]+/),
              function (e) {
                return e.replace(/\./, ",");
              }
            )),
            (this.nodeValue = this.nodeValue.replace(/\d/g, function (e) {
              return String.fromCharCode(e.charCodeAt(0) + t);
            })));
        });
    }
    "string" == typeof e && 0 < e.length && (defaultSettings = e);
    var d = 1728;
    "ar" == e && (d = 1584),
      t((window.persiaNumberedDOM = this), d),
      u(document).ajaxComplete(function () {
        t(window.persiaNumberedDOM, d);
      });
  };
})(jQuery),
  (origParseInt = parseInt),
  (parseInt = function (e) {
    return (
      (e =
        e &&
        e
          .toString()
          .replace(
            /[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g,
            function (e) {
              return String.fromCharCode(e.charCodeAt(0) - 1728);
            }
          )
          .replace(
            /[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g,
            function (e) {
              return String.fromCharCode(e.charCodeAt(0) - 1584);
            }
          )
          .replace(/[\u066B]/g, ".")),
      origParseInt(e)
    );
  }),
  (origParseFloat = parseFloat),
  (parseFloat = function (e) {
    return (
      (e =
        e &&
        e
          .toString()
          .replace(
            /[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g,
            function (e) {
              return String.fromCharCode(e.charCodeAt(0) - 1728);
            }
          )
          .replace(
            /[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g,
            function (e) {
              return String.fromCharCode(e.charCodeAt(0) - 1584);
            }
          )
          .replace(/[\u066B]/g, ".")),
      origParseFloat(e)
    );
  });
var twemoji = (function () {
  "use strict";
  var d = {
      base: "https://twemoji.maxcdn.com/2/",
      ext: ".png",
      size: "72x72",
      className: "emoji",
      convert: {
        fromCodePoint: function (e) {
          var t = "string" == typeof e ? parseInt(e, 16) : e;
          if (t < 65536) return n(t);
          return n(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t));
        },
        toCodePoint: c,
      },
      onerror: function () {
        this.parentNode && this.parentNode.replaceChild(C(this.alt, !1), this);
      },
      parse: function (e, t) {
        (t && "function" != typeof t) || (t = { callback: t });
        return ("string" == typeof e
          ? function (e, i) {
              return l(e, function (e) {
                var t,
                  d,
                  u = e,
                  a = y(e),
                  n = i.callback(a, i);
                if (n) {
                  for (d in ((u = "<img ".concat(
                    'class="',
                    i.className,
                    '" ',
                    'draggable="false" ',
                    'alt="',
                    e,
                    '"',
                    ' src="',
                    n,
                    '"'
                  )),
                  (t = i.attributes(e, a))))
                    t.hasOwnProperty(d) &&
                      0 !== d.indexOf("on") &&
                      -1 === u.indexOf(" " + d + "=") &&
                      (u = u.concat(" ", d, '="', t[d].replace(r, o), '"'));
                  u = u.concat("/>");
                }
                return u;
              });
            }
          : function (e, t) {
              var d,
                u,
                a,
                n,
                i,
                r,
                o,
                s,
                l,
                c,
                f,
                g,
                m,
                h = (function e(t, d) {
                  var u,
                    a,
                    n = t.childNodes,
                    i = n.length;
                  for (; i--; )
                    (u = n[i]),
                      3 === (a = u.nodeType)
                        ? d.push(u)
                        : 1 !== a ||
                          "ownerSVGElement" in u ||
                          b.test(u.nodeName.toLowerCase()) ||
                          e(u, d);
                  return d;
                })(e, []),
                p = h.length;
              for (; p--; ) {
                for (
                  a = !1,
                    n = document.createDocumentFragment(),
                    i = h[p],
                    r = i.nodeValue,
                    s = 0;
                  (o = v.exec(r));

                ) {
                  if (
                    ((l = o.index) !== s && n.appendChild(C(r.slice(s, l), !0)),
                    (f = o[0]),
                    (g = y(f)),
                    (s = l + f.length),
                    (m = t.callback(g, t)))
                  ) {
                    for (u in (((c = new Image()).onerror = t.onerror),
                    c.setAttribute("draggable", "false"),
                    (d = t.attributes(f, g))))
                      d.hasOwnProperty(u) &&
                        0 !== u.indexOf("on") &&
                        !c.hasAttribute(u) &&
                        c.setAttribute(u, d[u]);
                    (c.className = t.className),
                      (c.alt = f),
                      (c.src = m),
                      (a = !0),
                      n.appendChild(c);
                  }
                  c || n.appendChild(C(f, !1)), (c = null);
                }
                a &&
                  (s < r.length && n.appendChild(C(r.slice(s), !0)),
                  i.parentNode.replaceChild(n, i));
              }
              return e;
            })(e, {
          callback: t.callback || i,
          attributes: "function" == typeof t.attributes ? t.attributes : s,
          base: "string" == typeof t.base ? t.base : d.base,
          ext: t.ext || d.ext,
          size:
            t.folder ||
            (function (e) {
              return "number" == typeof e ? e + "x" + e : e;
            })(t.size || d.size),
          className: t.className || d.className,
          onerror: t.onerror || d.onerror,
        });
      },
      replace: l,
      test: function (e) {
        v.lastIndex = 0;
        var t = v.test(e);
        return (v.lastIndex = 0), t;
      },
    },
    t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
    v = /\ud83d[\udc68-\udc69](?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)(?:\ufe0f|\ud83c[\udffb-\udfff])\u200d[\u2640\u2642]\ufe0f|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|(?:\u002a)\ufe0f?\u20e3|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca-\udfcc]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd74\udd75\udd7a\udd90\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddd1-\udddd]|[\u261d\u26f7\u26f9\u270a-\u270d])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\u0023\u20e3|\u0030\u20e3|\u0031\u20e3|\u0032\u20e3|\u0033\u20e3|\u0034\u20e3|\u0035\u20e3|\u0036\u20e3|\u0037\u20e3|\u0038\u20e3|\u0039\u20e3|\ud800\udc00|\ud83c[\udc04\udccf\udd70\udd71\udd7e\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude02\ude1a\ude2f\ude32-\ude3a\ude50\ude51\udf00-\udf21\udf24-\udf84\udf86-\udf93\udf96\udf97\udf99-\udf9b\udf9e-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcd-\udff0\udff3-\udff5\udff7-\udfff]|\ud83d[\udc00-\udc41\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfd\udcff-\udd3d\udd49-\udd4e\udd50-\udd67\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda4\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\udecb\udecd-\uded2\udee0-\udee5\udee9\udeeb\udeec\udef0\udef3-\udef8]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd4c\udd50-\udd6b\udd80-\udd97\uddc0\uddd0\uddde-\udde6]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26ce\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2705\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2728\u2733\u2734\u2744\u2747\u274c\u274e\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27a1\u27b0\u27bf\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299\ue50a]|(?:\u2639)(?:\ufe0f|(?!\ufe0e))/g,
    u = /\uFE0F/g,
    a = String.fromCharCode(8205),
    r = /[&<>'"]/g,
    b = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
    n = String.fromCharCode;
  return d;
  function C(e, t) {
    return document.createTextNode(t ? e.replace(u, "") : e);
  }
  function i(e, t) {
    return "".concat(t.base, t.size, "/", e, t.ext);
  }
  function y(e) {
    return c(e.indexOf(a) < 0 ? e.replace(u, "") : e);
  }
  function o(e) {
    return t[e];
  }
  function s() {
    return null;
  }
  function l(e, t) {
    return String(e).replace(v, t);
  }
  function c(e, t) {
    for (var d = [], u = 0, a = 0, n = 0; n < e.length; )
      (u = e.charCodeAt(n++)),
        a
          ? (d.push((65536 + ((a - 55296) << 10) + (u - 56320)).toString(16)),
            (a = 0))
          : 55296 <= u && u <= 56319
          ? (a = u)
          : d.push(u.toString(16));
    return d.join(t || "-");
  }
})();
$(document).ready(function () {
  if ("standalone" in window.navigator && window.navigator.standalone) {
    var t;
    document.addEventListener(
      "click",
      function (e) {
        for (t = e.target; "A" !== t.nodeName && "HTML" !== t.nodeName; )
          t = t.parentNode;
        "href" in t &&
          -1 !== t.href.indexOf("http") &&
          -1 !== t.href.indexOf(document.location.host) &&
          (e.preventDefault(), (document.location.href = t.href));
      },
      !1
    );
  }
});
var lazy = lozad("main [data-src], main [data-background-image]", {});
function lazy_load() {
  lazy.observe();
}
$(function (e) {
  lazy_load();
}),
  $(document).on("mousedown", ".loading", function (e) {
    $("*").is(".loading") ? $(this).unbind("click") : $(this).bind("click");
  }),
  $("[data-mdl]").click(function () {}),
  $(document).on("click", "*[data-mdl]", function (e) {
    $(".mdl").removeClass("act"),
      e.preventDefault(),
      $("#" + $(this).data("mdl")).addClass("act"),
      $("header, main, footer").css({ overflow: "hidden" }),
      $("html").css({ overflow: "hidden" }),
      set_emoji();
    var t = $(this).attr("data-clone"),
      d = $($("#" + $(this).data("mdl") + " .mdl_data>section"));
    void 0 !== t && !1 !== t && (d.empty(), $(t).clone().prependTo(d)),
      lozad(".mdl [data-src], .mdl [data-background-image]", {}).observe();
  });
var mdl_openers = $(
  ".login_buttons>a, .canvas_footer a[data-mdl=login], .canvas_footer a[data-mdl=register]"
);
function autodir(e, t) {
  var d = e.text();
  if ("val" == t) d = e.val();
  var u,
    a = d;
  parseInt(a.length / 3) <
  (u = (u = a.match(/[\u0600-\u06FF]/g)) ? u.length : 0)
    ? e.addClass("rtl").removeClass("ltr")
    : e.addClass("ltr").removeClass("rtl");
}
function auto_direction() {
  $(".auto_direction:not(input, textarea)").each(function () {
    autodir($(this), "text");
  }),
    $(document).on(
      "keypress",
      "input.auto_direction, textarea.auto_direction",
      function () {
        autodir($(this), "val");
      }
    );
}
function getMainHome() {
  return $("meta[property='main_url']").attr("content") + "/";
}
function normStr(e) {
  return e
    .replace(/\s+/g, " ")
    .replace(/^\s\s*/, "")
    .replace(/\s\s*$/, "");
}
function numberWithCommas(e) {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function set_emoji() {
  twemoji.parse(document.body, {
    base: $("meta[property='asset_url']").attr("content") + "/images/emoji/",
    folder: "svg",
    ext: ".svg",
  });
}
if (
  ($(document).on("click", "*[data-mdl][data-ref]", function (e) {
    var d = $(this).data("ref");
    mdl_openers.each(function (e, t) {
      $(this).attr({
        "data-href": $(this).attr("href"),
        href: $(this).attr("href") + "?go=" + d,
      });
    }),
      $("form").each(function (e, t) {
        $(this).attr({
          "data-action": $(this).attr("action"),
          action: $(this).attr("action") + "?go=" + d,
        });
      });
  }),
  $(document).on("click", ".mdl .close_mdl,.mdl .close_mdl", function (e) {
    if (
      0 != $("#profile_editor").length &&
      $("#profile_editor").hasClass("act")
    ) {
      if (
        null !== profileEditorState.form_originals &&
        $("#profile-editor-form").serialize() !=
          profileEditorState.form_originals &&
        ((confirmed = confirm(
          $("#profile-editor-form").data("unsaved-changes-msg")
        )),
        !0 !== confirmed)
      )
        return;
      (window.location.hash = "!"),
        $("#profile-editor-form").html(""),
        (profileEditorState.form_originals = null);
    }
    $(".mdl").removeClass("act"),
      $("header, main, footer").removeAttr("style"),
      $("html").css({ overflow: "visible" }),
      mdl_openers.each(function (e, t) {
        $(this)
          .attr({ href: $(this).attr("data-href") })
          .removeAttr("data-href");
      }),
      $("form").each(function (e, t) {
        $(this)
          .attr({ action: $(this).attr("data-action") })
          .removeAttr("data-action");
      }),
      $(".alertify-logs").remove();
  }),
  $(document).keydown(function (e) {
    27 == e.keyCode && $(".mdl.act .close_mdl").trigger("click");
  }),
  $(document).ready(function () {
    auto_direction();
  }),
  $(window).scroll(function () {
    50 <= $(window).scrollTop()
      ? $("header").addClass("switch")
      : $("header").removeClass("switch");
  }),
  $(window).scroll(function () {
    100 <= $(window).scrollTop()
      ? $(
          ".profile_header .user_image, .profile_nav, .profile_header"
        ).addClass("hidden")
      : $(
          ".profile_header .user_image, .profile_nav, .profile_header"
        ).removeClass("hidden");
  }),
  $(window).load(function () {
    50 <= $(window).scrollTop()
      ? $("header").addClass("switch")
      : $("header").removeClass("switch");
  }),
  $(window).load(function () {
    100 <= $(window).scrollTop()
      ? $(
          ".profile_header .user_image, .profile_nav, .profile_header"
        ).addClass("hidden")
      : $(
          ".profile_header .user_image, .profile_nav, .profile_header"
        ).removeClass("hidden");
  }),
  $(".scroll_top").click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, 200);
  }),
  $(document).on("click", ".auto_select", function () {
    this.focus(), this.select();
  }),
  $(".countup").each(function () {
    $(this).text("0"),
      $(this)
        .prop("Counter", $(this).data("count") - $(this).data("count") / 100)
        .animate(
          { Counter: $(this).data("count") },
          {
            duration: 2e3,
            easing: "swing",
            step: function (e) {
              $(this).text(numberWithCommas(Math.ceil(e))), set_number();
            },
          }
        );
  }),
  set_emoji(),
  "undefined" != typeof Storage && void 0 !== $("#sticky-notice").data("id"))
) {
  var notices = localStorage.notices,
    notice = $("#sticky-notice").data("id");
  void 0 !== notices && (notices = JSON.parse(notices)),
    (void 0 === notices ||
      ($.isArray(notices) && -1 == $.inArray(notice, notices))) &&
      ($("#sticky-notice").slideDown(200),
      "function" == typeof stick_sidebar &&
        setTimeout(function () {
          stick_sidebar();
        }, 200));
}
function set_number() {
  $("html[lang=fa] .num").persiaNumber();
}
$(document).on("click", ".sticky_notice .close", function (e) {
  if ("undefined" != typeof Storage) {
    var t = localStorage.notices;
    void 0 !== $("#sticky-notice").data("id") &&
      (void 0 === t
        ? (t = []).push($("#sticky-notice").data("id"))
        : (t = JSON.parse(t)).push($("#sticky-notice").data("id")),
      localStorage.setItem("notices", JSON.stringify(t)));
  }
  $("#sticky-notice").slideUp(200),
    "function" == typeof stick_sidebar &&
      setTimeout(function () {
        stick_sidebar();
      }, 200);
}),
  $(document).ready(function () {
    set_number();
  }),
  $(document).on("click", '*[data-mdl="guest_message"]', function () {
    $(".mdl#guest_message meta[name='current_user_data']")
      .data("receiverusername", $(this).data("receiverusername"))
      .data("receivername", $(this).data("receivername"))
      .data("receiverpic", $(this).data("receiverpic")),
      $(".mdl#guest_message h3 span").html(
        $(".mdl#guest_message meta[name='current_user_data']").data(
          "receivername"
        )
      );
  }),
  $(document).on(
    "change keydown keyup keypress blur",
    "#guest_message input, #guest_message textarea",
    function (e) {
      setTimeout(function () {
        3 == $("#guest_message .item.has-success").length
          ? $("#guest_message .button")
              .removeClass("disabled gray")
              .prop("disabled", !1)
          : $("#guest_message .button")
              .addClass("disabled gray")
              .prop("disabled", !0);
      }, 100);
    }
  ),
  $(document).ready(function () {
    $(document).on("click", "#guest_message .button", function (e) {
      3 == $("#guest_message .item.has-success").length &&
        ($("#guest_message .button").addClass("loading"),
        $("#guest_message .form_errors div").remove(),
        jQuery.ajax({
          dataType: "json",
          type: "POST",
          url: getMainHome() + "messaging/message/new",
          data: {
            name: $("#guest_message #guest_name").val(),
            email: $("#guest_message #guest_email").val(),
            text: $("#guest_message #guest_text").val(),
            to: $("#guest_message meta[name='current_user_data']").data(
              "receiverusername"
            ),
            "g-recaptcha-response": grecaptcha.getResponse(),
          },
          beforeSend: function (e) {
            return e.setRequestHeader(
              "X-CSRF-Token",
              $("meta[name='at_token']").attr("content")
            );
          },
          success: function (e) {
            if (e.hasOwnProperty("status") && !e.status) {
              for (errorTitle in e.errors)
                for (error in e.errors[errorTitle])
                  $("#guest_message .form_errors").append(
                    "<div>" + e.errors[errorTitle][error] + "</div>"
                  );
              alertify.error($("meta[name=msg]").data("error"));
            } else
              alertify.success($("meta[name=msg]").data("success")),
                $(
                  "#guest_message #guest_name, #guest_message #guest_email, #guest_message #guest_text"
                ).val("");
            $("#guest_message .button").removeClass("loading"),
              grecaptcha.reset();
          },
          error: function (e, t, d) {
            $("#guest_message .button").removeClass("loading"),
              grecaptcha.reset(),
              alertify.error($("meta[name=msg]").data("error"));
          },
        }));
    });
  }),
  (function (g) {
    "use strict";
    function f(e, t) {
      e.addClass(t.errorElementClass).removeClass("valid");
      var d = e.parent();
      d.hasClass("input-group") && (d = d.parent()),
        d
          .addClass(t.inputParentClassOnError)
          .removeClass(t.inputParentClassOnSuccess),
        "" !== t.borderColorOnError &&
          e.css("border-color", t.borderColorOnError);
    }
    function m(e, d) {
      e.each(function () {
        var e = g(this),
          t = e.parent();
        t.hasClass("input-group") && (t = t.parent()),
          p(e, "", d, d.errorMessagePosition),
          e
            .removeClass("valid")
            .removeClass(d.errorElementClass)
            .css("border-color", ""),
          t
            .removeClass(d.inputParentClassOnError)
            .removeClass(d.inputParentClassOnSuccess)
            .find("." + d.errorMessageClass)
            .remove();
      });
    }
    function n(e, t, d, u) {
      var a = u.errorMessageTemplate.messages.replace(/\{errorTitle\}/g, t),
        n = [];
      g.each(d, function (e, t) {
        n.push(u.errorMessageTemplate.field.replace(/\{msg\}/g, t));
      }),
        (a = a.replace(/\{fields\}/g, n.join("")));
      var i = u.errorMessageTemplate.container.replace(
        /\{errorMessageClass\}/g,
        u.errorMessageClass
      );
      (i = i.replace(/\{messages\}/g, a)), e.children().eq(0).before(i);
    }
    var h = g(window),
      p = function (e, t, d, u) {
        var a = o(e);
        if (a) a.innerHTML = t;
        else if ("object" == typeof u) {
          var n = !1;
          if (
            (u.find("." + d.errorMessageClass).each(function () {
              if (this.inputReferer == e[0]) return (n = g(this)), !1;
            }),
            n)
          )
            t ? n.html(t) : n.remove();
          else
            ((i = g(
              '<div class="' + d.errorMessageClass + '">' + t + "</div>"
            ))[0].inputReferer = e[0]),
              u.prepend(i);
        } else {
          var i,
            r = e.parent();
          r.hasClass("input-group") && (r = r.parent()),
            0 ==
              (i = r.find("." + d.errorMessageClass + ".help-block")).length &&
              (i = g("<span></span>")
                .addClass("help-block")
                .addClass(d.errorMessageClass)).appendTo(r),
            i.html(t);
        }
      },
      o = function (e, t) {
        return document.getElementById(e.attr("name") + "_err_msg");
      };
    (g.fn.validateOnBlur = function (e, t) {
      return (
        this.find(
          "input[data-validation],textarea[data-validation],select[data-validation]"
        ).bind("blur.validation", function () {
          g(this).validateInputOnBlur(e, t, !0, "blur");
        }),
        t.validateCheckboxRadioOnClick &&
          this.find(
            "input[type=checkbox][data-validation],input[type=radio][data-validation]"
          ).bind("click.validation", function () {
            g(this).validateInputOnBlur(e, t, !0, "click");
          }),
        this
      );
    }),
      (g.fn.validateOnEvent = function (d, u) {
        return (
          this.find(
            "input[data-validation][data-validation-event],textarea[data-validation][data-validation-event],select[data-validation][data-validation-event]"
          ).each(function () {
            var e = g(this),
              t = e.valAttr("event");
            t &&
              e.bind(t + ".validation", function () {
                g(this).validateInputOnBlur(d, u, !0, t);
              });
          }),
          this
        );
      }),
      (g.fn.showHelpOnFocus = function (e) {
        return (
          (e = e || "data-validation-help"),
          this.find(".has-help-txt")
            .valAttr("has-keyup-event", !1)
            .removeClass("has-help-txt"),
          this.find("textarea,input").each(function () {
            var t = g(this),
              d =
                "jquery_form_help_" +
                (t.attr("name") || "").replace(/(:|\.|\[|\])/g, ""),
              u = t.attr(e);
            u &&
              t
                .addClass("has-help-txt")
                .unbind("focus.help")
                .bind("focus.help", function () {
                  var e = t.parent().find("." + d);
                  0 == e.length &&
                    ((e = g("<span />")
                      .addClass(d)
                      .addClass("help")
                      .addClass("help-block")
                      .text(u)
                      .hide()),
                    t.after(e)),
                    e.fadeIn();
                })
                .unbind("blur.help")
                .bind("blur.help", function () {
                  g(this)
                    .parent()
                    .find("." + d)
                    .fadeOut("slow");
                });
          }),
          this
        );
      }),
      (g.fn.validateInputOnBlur = function (e, t, d, u) {
        if (
          ((g.formUtils.eventType = u),
          (this.valAttr("suggestion-nr") ||
            this.valAttr("postpone") ||
            this.hasClass("hasDatepicker")) &&
            !window.postponedValidation)
        ) {
          var a = this,
            n = this.valAttr("postpone") || 200;
          return (
            (window.postponedValidation = function () {
              a.validateInputOnBlur(e, t, d, u),
                (window.postponedValidation = !1);
            }),
            setTimeout(function () {
              window.postponedValidation && window.postponedValidation();
            }, n),
            this
          );
        }
        (e = g.extend({}, g.formUtils.LANG, e || {})), m(this, t);
        var i = this,
          r = i.closest("form"),
          o =
            (i.attr(t.validationRuleAttribute),
            g.formUtils.validateInput(
              i,
              e,
              g.extend({}, t, { errorMessagePosition: "element" }),
              r,
              u
            ));
        return (
          !0 === o
            ? i.addClass("valid").parent().addClass(t.inputParentClassOnSuccess)
            : null !== o &&
              (f(i, t),
              p(i, o, t, t.errorMessagePosition),
              d &&
                i
                  .unbind("keyup.validation")
                  .bind("keyup.validation", function () {
                    g(this).validateInputOnBlur(e, t, !1, "keyup");
                  })),
          this
        );
      }),
      (g.fn.valAttr = function (e, t) {
        return void 0 === t
          ? this.attr("data-validation-" + e)
          : !1 === t || null === t
          ? this.removeAttr("data-validation-" + e)
          : (0 < e.length && (e = "-" + e),
            this.attr("data-validation" + e, t));
      }),
      (g.fn.isValid = function (r, o, d) {
        if (g.formUtils.isLoadingModules) {
          var e = this;
          return (
            setTimeout(function () {
              e.isValid(r, o, d);
            }, 200),
            null
          );
        }
        (o = g.extend({}, g.formUtils.defaultConfig(), o || {})),
          (r = g.extend({}, g.formUtils.LANG, r || {})),
          (d = !1 !== d),
          g.formUtils.errorDisplayPreventedWhenHalted &&
            (delete g.formUtils.errorDisplayPreventedWhenHalted, (d = !1)),
          (g.formUtils.isValidatingEntireForm = !0),
          (g.formUtils.haltValidation = !1);
        function s(e, t) {
          g.inArray(e, u) < 0 && u.push(e),
            a.push(t),
            t.attr("current-error", e),
            d && f(t, o);
        }
        var l = [],
          u = [],
          a = [],
          c = this;
        if (
          (d &&
            (c.find("." + o.errorMessageClass + ".alert").remove(),
            m(c.find("." + o.errorElementClass + ",.valid"), o)),
          c
            .find("input,textarea,select")
            .filter(':not([type="submit"],[type="button"])')
            .each(function () {
              var e,
                t,
                d = g(this),
                u = d.attr("type"),
                a = "radio" == u || "checkbox" == u,
                n = d.attr("name");
              if (
                ((e = n),
                !(
                  "submit" === (t = u) ||
                  "button" === t ||
                  "reset" == t ||
                  -1 < g.inArray(e, o.ignore || [])
                ) &&
                  (!a || g.inArray(n, l) < 0))
              ) {
                a && l.push(n);
                var i = g.formUtils.validateInput(d, r, o, c, "submit");
                null != i &&
                  (!0 !== i
                    ? s(i, d)
                    : d
                        .valAttr("current-error", !1)
                        .addClass("valid")
                        .parent()
                        .addClass("has-success"));
              }
            }),
          "function" == typeof o.onValidate)
        ) {
          var t = o.onValidate(c);
          g.isArray(t)
            ? g.each(t, function (e, t) {
                s(t.message, t.element);
              })
            : t && t.element && t.message && s(t.message, t.element);
        }
        return (
          (g.formUtils.isValidatingEntireForm = !1),
          !g.formUtils.haltValidation && 0 < a.length
            ? (d &&
                ("top" === o.errorMessagePosition
                  ? n(c, r.errorTitle, u, o)
                  : "custom" === o.errorMessagePosition
                  ? "function" == typeof o.errorMessageCustom &&
                    o.errorMessageCustom(c, r.errorTitle, u, o)
                  : g.each(a, function (e, t) {
                      p(t, t.attr("current-error"), o, o.errorMessagePosition);
                    }),
                o.scrollToTopOnError && h.scrollTop(c.offset().top - 20)),
              !1)
            : (!d &&
                g.formUtils.haltValidation &&
                (g.formUtils.errorDisplayPreventedWhenHalted = !0),
              !g.formUtils.haltValidation)
        );
      }),
      (g.fn.validateForm = function (e, t) {
        return (
          window.console &&
            "function" == typeof window.console.warn &&
            window.console.warn(
              "Use of deprecated function $.validateForm, use $.isValid instead"
            ),
          this.isValid(e, t, !0)
        );
      }),
      (g.fn.restrictLength = function (e) {
        return new g.formUtils.lengthRestriction(this, e), this;
      }),
      (g.fn.addSuggestions = function (t) {
        var d = !1;
        return (
          this.find("input").each(function () {
            var e = g(this);
            0 < (d = g.split(e.attr("data-suggestions"))).length &&
              !e.hasClass("has-suggestions") &&
              (g.formUtils.suggest(e, d, t), e.addClass("has-suggestions"));
          }),
          this
        );
      }),
      (g.split = function (e, d) {
        if ("function" != typeof d) {
          if (!e) return [];
          var u = [];
          return (
            g.each(e.split(d || /[,|\-\s]\s*/g), function (e, t) {
              (t = g.trim(t)).length && u.push(t);
            }),
            u
          );
        }
        e &&
          g.each(e.split(/[,|\-\s]\s*/g), function (e, t) {
            if ((t = g.trim(t)).length) return d(t, e);
          });
      }),
      (g.validate = function (u) {
        var e = g.extend(g.formUtils.defaultConfig(), {
          form: "form",
          validateOnEvent: !0,
          validateOnBlur: !0,
          validateCheckboxRadioOnClick: !0,
          showHelpOnFocus: !0,
          addSuggestions: !0,
          modules: "",
          onModulesLoaded: null,
          language: !1,
          onSuccess: !1,
          onError: !1,
          onElementValidate: !1,
        });
        (u = g.extend(e, u || {})),
          g(u.form).each(function (e, t) {
            var d = g(t);
            h.trigger("formValidationSetup", [d]),
              d
                .find(".has-help-txt")
                .unbind("focus.validation")
                .unbind("blur.validation"),
              d
                .removeClass("has-validation-callback")
                .unbind("submit.validation")
                .unbind("reset.validation")
                .find("input[data-validation],textarea[data-validation]")
                .unbind("blur.validation"),
              d
                .bind("submit.validation", function () {
                  var e = g(this);
                  if (g.formUtils.haltValidation) return !1;
                  if (g.formUtils.isLoadingModules)
                    return (
                      setTimeout(function () {
                        e.trigger("submit.validation");
                      }, 200),
                      !1
                    );
                  var t = e.isValid(u.language, u);
                  return (
                    !g.formUtils.haltValidation &&
                    (t && "function" == typeof u.onSuccess
                      ? !1 !== u.onSuccess(e) && void 0
                      : t || "function" != typeof u.onError
                      ? t
                      : (u.onError(e), !1))
                  );
                })
                .bind("reset.validation", function () {
                  g(this)
                    .find("." + u.errorMessageClass + ".alert")
                    .remove(),
                    m(g(this).find("." + u.errorElementClass + ",.valid"), u);
                })
                .addClass("has-validation-callback"),
              u.showHelpOnFocus && d.showHelpOnFocus(),
              u.addSuggestions && d.addSuggestions(),
              u.validateOnBlur &&
                (d.validateOnBlur(u.language, u),
                d.bind("html5ValidationAttrsFound", function () {
                  d.validateOnBlur(u.language, u);
                })),
              u.validateOnEvent && d.validateOnEvent(u.language, u);
          }),
          "" != u.modules &&
            ("function" == typeof u.onModulesLoaded &&
              h.one("validatorsLoaded", u.onModulesLoaded),
            g.formUtils.loadModules(u.modules));
      }),
      (g.formUtils = {
        defaultConfig: function () {
          return {
            ignore: [],
            errorElementClass: "error",
            borderColorOnError: "#FFB400",
            errorMessageClass: "form-error",
            validationRuleAttribute: "data-validation",
            validationErrorMsgAttribute: "data-validation-error-msg",
            errorMessagePosition: "element",
            errorMessageTemplate: {
              container:
                '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
              messages: "<strong>{errorTitle}</strong><ul>{fields}</ul>",
              field: "<li>{msg}</li>",
            },
            errorMessageCustom: n,
            scrollToTopOnError: !0,
            dateFormat: "yyyy-mm-dd",
            addValidClassOnAll: !1,
            decimalSeparator: ".",
            inputParentClassOnError: "has-error",
            inputParentClassOnSuccess: "has-success",
          };
        },
        validators: {},
        _events: { load: [], valid: [], invalid: [] },
        haltValidation: !1,
        isValidatingEntireForm: !1,
        addValidator: function (e) {
          var t =
            0 === e.name.indexOf("validate_") ? e.name : "validate_" + e.name;
          void 0 === e.validateOnKeyUp && (e.validateOnKeyUp = !0),
            (this.validators[t] = e);
        },
        isLoadingModules: !1,
        loadedModules: {},
        loadModules: function (t, e, u) {
          if ((void 0 === u && (u = !0), g.formUtils.isLoadingModules))
            setTimeout(function () {
              g.formUtils.loadModules(t, e, u);
            });
          else {
            var o = !1,
              d = function (e, a) {
                function n() {
                  0 == --d &&
                    ((g.formUtils.isLoadingModules = !1),
                    u && o && h.trigger("validatorsLoaded"));
                }
                var t = g.split(e),
                  d = t.length;
                0 < d && (g.formUtils.isLoadingModules = !0);
                var i = "?__=" + new Date().getTime(),
                  r =
                    document.getElementsByTagName("head")[0] ||
                    document.getElementsByTagName("body")[0];
                g.each(t, function (e, t) {
                  if (0 == (t = g.trim(t)).length) n();
                  else {
                    var d = a + t + (".js" == t.substr(-3) ? "" : ".js"),
                      u = document.createElement("SCRIPT");
                    d in g.formUtils.loadedModules
                      ? n()
                      : ((g.formUtils.loadedModules[d] = 1),
                        (o = !0),
                        (u.type = "text/javascript"),
                        (u.onload = n),
                        (u.src = d + (".dev.js" == d.substr(-7) ? i : "")),
                        (u.onreadystatechange = function () {
                          ("complete" != this.readyState &&
                            "loaded" != this.readyState) ||
                            (n(),
                            (this.onload = null),
                            (this.onreadystatechange = null));
                        }),
                        r.appendChild(u));
                  }
                });
              };
            if (e) d(t, e);
            else {
              var a = function () {
                var e = !1;
                return (
                  g('script[src*="form-validator"]').each(function () {
                    return (
                      "/" ==
                        (e =
                          this.src.substr(0, this.src.lastIndexOf("/")) +
                          "/") && (e = ""),
                      !1
                    );
                  }),
                  !1 !== e && (d(t, e), !0)
                );
              };
              a() || g(a);
            }
          }
        },
        validateInput: function (u, a, n, i, r) {
          if (u.attr("disabled")) return null;
          u.trigger("beforeValidation");
          var o = u.val() || "",
            e = u.valAttr("optional"),
            t = !1,
            d = !1,
            s = u.valAttr("if-checked");
          if (
            (null != s &&
              ((t = !0),
              i.find('input[name="' + s + '"]').prop("checked") && (d = !0)),
            (!o && "true" === e) || (t && !d))
          )
            return !!n.addValidClassOnAll || null;
          var l,
            c = u.attr(n.validationRuleAttribute),
            f = !0;
          return c
            ? (g.split(
                c,
                function (e) {
                  0 !== e.indexOf("validate_") && (e = "validate_" + e);
                  var t = g.formUtils.validators[e];
                  if (!t || "function" != typeof t.validatorFunction)
                    throw new Error('Using undefined validator "' + e + '"');
                  "validate_checkbox_group" == e &&
                    (u = g("[name='" + u.attr("name") + "']:eq(0)"));
                  var d = null;
                  if (
                    (("keyup" == r && !t.validateOnKeyUp) ||
                      (d = t.validatorFunction(o, u, n, a, i)),
                    !d)
                  )
                    return (
                      (f = null) !== d &&
                        (f =
                          (f = u.attr(
                            n.validationErrorMsgAttribute +
                              "-" +
                              e.replace("validate_", "")
                          )) ||
                          (f = u.attr(n.validationErrorMsgAttribute)) ||
                          (f = a[t.errorMessageKey]) ||
                          t.errorMessage),
                      !1
                    );
                },
                " "
              ),
              (l =
                "string" == typeof f
                  ? (u.trigger("validation", !1), f)
                  : null !== f || n.addValidClassOnAll
                  ? (u.trigger("validation", !0), !0)
                  : null),
              "function" == typeof n.onElementValidate &&
                null !== l &&
                n.onElementValidate(!0 === l, u, i, f),
              l)
            : !!n.addValidClassOnAll || null;
        },
        parseDate: function (e, t) {
          var d,
            u,
            a,
            n,
            i = t.replace(/[a-zA-Z]/gi, "").substring(0, 1),
            r = "^",
            o = t.split(i || null);
          if (
            (g.each(o, function (e, t) {
              r += (0 < e ? "\\" + i : "") + "(\\d{" + t.length + "})";
            }),
            (r += "$"),
            null === (d = e.match(new RegExp(r))))
          )
            return !1;
          function s(e, t, d) {
            for (var u = 0; u < t.length; u++)
              if (t[u].substring(0, 1) === e)
                return g.formUtils.parseDateInt(d[u + 1]);
            return -1;
          }
          return (
            (a = s("m", o, d)),
            (u = s("d", o, d)),
            (n = s("y", o, d)),
            !(
              (2 === a &&
                28 < u &&
                (n % 4 != 0 || (n % 100 == 0 && n % 400 != 0))) ||
              (2 === a &&
                29 < u &&
                (n % 4 == 0 || (n % 100 != 0 && n % 400 == 0))) ||
              12 < a ||
              0 === a
            ) &&
              !(
                (this.isShortMonth(a) && 30 < u) ||
                (!this.isShortMonth(a) && 31 < u) ||
                0 === u
              ) && [n, a, u]
          );
        },
        parseDateInt: function (e) {
          return (
            0 === e.indexOf("0") && (e = e.replace("0", "")), parseInt(e, 10)
          );
        },
        isShortMonth: function (e) {
          return (e % 2 == 0 && e < 7) || (e % 2 != 0 && 7 < e);
        },
        lengthRestriction: function (d, u) {
          function e() {
            var e = d.val().length;
            if (a < e) {
              var t = d.scrollTop();
              d.val(d.val().substring(0, a)), d.scrollTop(t);
            }
            (n = a - e) < 0 && (n = 0), u.text(n);
          }
          var a = parseInt(u.text(), 10),
            n = 0;
          g(d)
            .bind("keydown keyup keypress focus blur", e)
            .bind("cut paste", function () {
              setTimeout(e, 100);
            }),
            g(document).bind("ready", e);
        },
        numericRangeCheck: function (e, t) {
          var d = g.split(t),
            u = parseInt(t.substr(3), 10);
          return 2 == d.length &&
            (e < parseInt(d[0], 10) || e > parseInt(d[1], 10))
            ? ["out", d[0], d[1]]
            : 0 === t.indexOf("min") && e < u
            ? ["min", u]
            : 0 === t.indexOf("max") && u < e
            ? ["max", u]
            : ["ok"];
        },
        _numSuggestionElements: 0,
        _selectedSuggestion: null,
        _previousTypedVal: null,
        suggest: function (t, e, d) {
          function o(e, t) {
            var d = t.offset();
            e.css({
              width: t.outerWidth(),
              left: d.left + "px",
              top: d.top + t.outerHeight() + "px",
            });
          }
          var l = {
            css: {
              maxHeight: "150px",
              background: "#FFF",
              lineHeight: "150%",
              textDecoration: "underline",
              overflowX: "hidden",
              overflowY: "auto",
              border: "#CCC solid 1px",
              borderTop: "none",
              cursor: "pointer",
            },
            activeSuggestionCSS: { background: "#E9E9E9" },
          };
          d && g.extend(l, d),
            (l.css.position = "absolute"),
            (l.css["z-index"] = 9999),
            t.attr("autocomplete", "off"),
            0 === this._numSuggestionElements &&
              h.bind("resize", function () {
                g(".jquery-form-suggestions").each(function () {
                  var e = g(this),
                    t = e.attr("data-suggest-container");
                  o(e, g(".suggestions-" + t).eq(0));
                });
              }),
            this._numSuggestionElements++;
          function c(e) {
            var t = e.valAttr("suggestion-nr");
            (g.formUtils._selectedSuggestion = null),
              (g.formUtils._previousTypedVal = null),
              g(".jquery-form-suggestion-" + t).fadeOut("fast");
          }
          return (
            t
              .data("suggestions", e)
              .valAttr("suggestion-nr", this._numSuggestionElements)
              .unbind("focus.suggest")
              .bind("focus.suggest", function () {
                g(this).trigger("keyup"),
                  (g.formUtils._selectedSuggestion = null);
              })
              .unbind("keyup.suggest")
              .bind("keyup.suggest", function () {
                var d = g(this),
                  u = [],
                  a = g.trim(d.val()).toLocaleLowerCase();
                if (a != g.formUtils._previousTypedVal) {
                  g.formUtils._previousTypedVal = a;
                  var n = !1,
                    e = d.valAttr("suggestion-nr"),
                    i = g(".jquery-form-suggestion-" + e);
                  if ((i.scrollTop(0), "" != a)) {
                    var r = 2 < a.length;
                    g.each(d.data("suggestions"), function (e, t) {
                      var d = t.toLocaleLowerCase();
                      if (d == a)
                        return u.push("<strong>" + t + "</strong>"), !(n = !0);
                      (0 === d.indexOf(a) || (r && -1 < d.indexOf(a))) &&
                        u.push(
                          t.replace(new RegExp(a, "gi"), "<strong>$&</strong>")
                        );
                    });
                  }
                  n || (0 == u.length && 0 < i.length)
                    ? i.hide()
                    : 0 < u.length && 0 == i.length
                    ? ((i = g("<div></div>").css(l.css).appendTo("body")),
                      t.addClass("suggestions-" + e),
                      i
                        .attr("data-suggest-container", e)
                        .addClass("jquery-form-suggestions")
                        .addClass("jquery-form-suggestion-" + e))
                    : 0 < u.length && !i.is(":visible") && i.show(),
                    0 < u.length &&
                      a.length != u[0].length &&
                      (o(i, d),
                      i.html(""),
                      g.each(u, function (e, t) {
                        g("<div></div>")
                          .append(t)
                          .css({
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            padding: "5px",
                          })
                          .addClass("form-suggest-element")
                          .appendTo(i)
                          .click(function () {
                            d.focus(), d.val(g(this).text()), c(d);
                          });
                      }));
                }
              })
              .unbind("keydown.validation")
              .bind("keydown.validation", function (e) {
                var t,
                  d,
                  u = e.keyCode ? e.keyCode : e.which,
                  a = g(this);
                if (13 == u && null !== g.formUtils._selectedSuggestion) {
                  if (
                    ((t = a.valAttr("suggestion-nr")),
                    0 < (d = g(".jquery-form-suggestion-" + t)).length)
                  ) {
                    var n = d
                      .find("div")
                      .eq(g.formUtils._selectedSuggestion)
                      .text();
                    a.val(n), c(a), e.preventDefault();
                  }
                } else {
                  t = a.valAttr("suggestion-nr");
                  var i = (d = g(".jquery-form-suggestion-" + t)).children();
                  if (0 < i.length && -1 < g.inArray(u, [38, 40])) {
                    38 == u
                      ? (null === g.formUtils._selectedSuggestion
                          ? (g.formUtils._selectedSuggestion = i.length - 1)
                          : g.formUtils._selectedSuggestion--,
                        g.formUtils._selectedSuggestion < 0 &&
                          (g.formUtils._selectedSuggestion = i.length - 1))
                      : 40 == u &&
                        (null === g.formUtils._selectedSuggestion
                          ? (g.formUtils._selectedSuggestion = 0)
                          : g.formUtils._selectedSuggestion++,
                        g.formUtils._selectedSuggestion > i.length - 1 &&
                          (g.formUtils._selectedSuggestion = 0));
                    var r = d.innerHeight(),
                      o = d.scrollTop(),
                      s =
                        d.children().eq(0).outerHeight() *
                        g.formUtils._selectedSuggestion;
                    return (
                      (s < o || o + r < s) && d.scrollTop(s),
                      i
                        .removeClass("active-suggestion")
                        .css("background", "none")
                        .eq(g.formUtils._selectedSuggestion)
                        .addClass("active-suggestion")
                        .css(l.activeSuggestionCSS),
                      e.preventDefault(),
                      !1
                    );
                  }
                }
              })
              .unbind("blur.suggest")
              .bind("blur.suggest", function () {
                c(g(this));
              }),
            t
          );
        },
        LANG: {
          errorTitle: "Form submission failed!",
          requiredFields: "You have not answered all required fields",
          badTime: "You have not given a correct time",
          badEmail: "You have not given a correct e-mail address",
          badTelephone: "You have not given a correct phone number",
          badSecurityAnswer:
            "You have not given a correct answer to the security question",
          badDate: "You have not given a correct date",
          lengthBadStart: "The input value must be between ",
          lengthBadEnd: " characters",
          lengthTooLongStart: "The input value is longer than ",
          lengthTooShortStart: "The input value is shorter than ",
          notConfirmed: "Input values could not be confirmed",
          badDomain: "Incorrect domain value",
          badUrl: "The input value is not a correct URL",
          badCustomVal: "The input value is incorrect",
          badInt: "The input value was not a correct number",
          badSecurityNumber: "Your social security number was incorrect",
          badUKVatAnswer: "Incorrect UK VAT Number",
          badStrength: "The password isn't strong enough",
          badNumberOfSelectedOptionsStart: "You have to choose at least ",
          badNumberOfSelectedOptionsEnd: " answers",
          badAlphaNumeric:
            "The input value can only contain alphanumeric characters ",
          badAlphaNumericExtra: " and ",
          wrongFileSize:
            "The file you are trying to upload is too large (max %s)",
          wrongFileType: "Only files of type %s is allowed",
          groupCheckedRangeStart: "Please choose between ",
          groupCheckedTooFewStart: "Please choose at least ",
          groupCheckedTooManyStart: "Please choose a maximum of ",
          groupCheckedEnd: " item(s)",
          badCreditCard: "The credit card number is not correct",
          badCVV: "The CVV number was not correct",
        },
      }),
      g.formUtils.addValidator({
        name: "email",
        validatorFunction: function (e) {
          var t = e.toLowerCase().split("@");
          return (
            2 == t.length &&
            g.formUtils.validators.validate_domain.validatorFunction(t[1]) &&
            !/[^\w\+\.\-]/.test(t[0]) &&
            0 < t[0].length
          );
        },
        errorMessage: "",
        errorMessageKey: "badEmail",
      }),
      g.formUtils.addValidator({
        name: "domain",
        validatorFunction: function (e) {
          return (
            0 < e.length &&
            e.length <= 253 &&
            !/[^a-zA-Z0-9]/.test(e.substr(-2)) &&
            !/[^a-zA-Z]/.test(e.substr(0, 1)) &&
            !/[^a-zA-Z0-9\.\-]/.test(e) &&
            1 == e.split("..").length &&
            1 < e.split(".").length
          );
        },
        errorMessage: "",
        errorMessageKey: "badDomain",
      }),
      g.formUtils.addValidator({
        name: "required",
        validatorFunction: function (e, t, d, u, a) {
          switch (t.attr("type")) {
            case "checkbox":
              return t.is(":checked");
            case "radio":
              return (
                0 <
                a
                  .find('input[name="' + t.attr("name") + '"]')
                  .filter(":checked").length
              );
            default:
              return "" !== g.trim(e);
          }
        },
        errorMessage: "",
        errorMessageKey: "requiredFields",
      }),
      g.formUtils.addValidator({
        name: "length",
        validatorFunction: function (e, t, d, u) {
          var a = t.valAttr("length"),
            n = t.attr("type");
          if (null == a)
            return (
              alert(
                'Please add attribute "data-validation-length" to ' +
                  t[0].nodeName +
                  " named " +
                  t.attr("name")
              ),
              !0
            );
          var i,
            r =
              "file" == n && void 0 !== t.get(0).files
                ? t.get(0).files.length
                : e.length,
            o = g.formUtils.numericRangeCheck(r, a);
          switch (o[0]) {
            case "out":
              (this.errorMessage = u.lengthBadStart + a + u.lengthBadEnd),
                (i = !1);
              break;
            case "min":
              (this.errorMessage =
                u.lengthTooShortStart + o[1] + u.lengthBadEnd),
                (i = !1);
              break;
            case "max":
              (this.errorMessage =
                u.lengthTooLongStart + o[1] + u.lengthBadEnd),
                (i = !1);
              break;
            default:
              i = !0;
          }
          return i;
        },
        errorMessage: "",
        errorMessageKey: "",
      }),
      g.formUtils.addValidator({
        name: "url",
        validatorFunction: function (e) {
          if (
            /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
              e
            )
          ) {
            var t = e.split("://")[1],
              d = t.indexOf("/");
            return (
              -1 < d && (t = t.substr(0, d)),
              g.formUtils.validators.validate_domain.validatorFunction(t)
            );
          }
          return !1;
        },
        errorMessage: "",
        errorMessageKey: "badUrl",
      }),
      g.formUtils.addValidator({
        name: "number",
        validatorFunction: function (e, t, d) {
          if ("" !== e) {
            var u,
              a,
              n = t.valAttr("allowing") || "",
              i = t.valAttr("decimal-separator") || d.decimalSeparator,
              r = !1,
              o = t.valAttr("step") || "",
              s = !1;
            if (
              (-1 == n.indexOf("number") && (n += ",number"),
              -1 < n.indexOf("negative") &&
                0 === e.indexOf("-") &&
                (e = e.substr(1)),
              -1 < n.indexOf("range") &&
                ((u = parseFloat(
                  n.substring(n.indexOf("[") + 1, n.indexOf(";"))
                )),
                (a = parseFloat(
                  n.substring(n.indexOf(";") + 1, n.indexOf("]"))
                )),
                (r = !0)),
              "" != o && (s = !0),
              "," == i)
            ) {
              if (-1 < e.indexOf(".")) return !1;
              e = e.replace(",", ".");
            }
            if (
              -1 < n.indexOf("number") &&
              "" === e.replace(/[0-9]/g, "") &&
              (!r || (u <= e && e <= a)) &&
              (!s || e % o == 0)
            )
              return !0;
            if (
              -1 < n.indexOf("float") &&
              null !== e.match(new RegExp("^([0-9]+)\\.([0-9]+)$")) &&
              (!r || (u <= e && e <= a)) &&
              (!s || e % o == 0)
            )
              return !0;
          }
          return !1;
        },
        errorMessage: "",
        errorMessageKey: "badInt",
      }),
      g.formUtils.addValidator({
        name: "alphanumeric",
        validatorFunction: function (e, t, d, u) {
          var a = "^([a-zA-Z0-9",
            n = t.valAttr("allowing"),
            i = "";
          if (n) {
            i = a + n + "]+)$";
            var r = n.replace(/\\/g, "");
            -1 < r.indexOf(" ") &&
              ((r = r.replace(" ", "")), (r += " and spaces ")),
              (this.errorMessage =
                u.badAlphaNumeric + u.badAlphaNumericExtra + r);
          } else (i = a + "]+)$"), (this.errorMessage = u.badAlphaNumeric);
          return new RegExp(i).test(e);
        },
        errorMessage: "",
        errorMessageKey: "",
      }),
      g.formUtils.addValidator({
        name: "custom",
        validatorFunction: function (e, t, d) {
          return new RegExp(t.valAttr("regexp")).test(e);
        },
        errorMessage: "",
        errorMessageKey: "badCustomVal",
      }),
      g.formUtils.addValidator({
        name: "date",
        validatorFunction: function (e, t, d) {
          var u = t.valAttr("format") || d.dateFormat || "yyyy-mm-dd";
          return !1 !== g.formUtils.parseDate(e, u);
        },
        errorMessage: "",
        errorMessageKey: "badDate",
      }),
      g.formUtils.addValidator({
        name: "checkbox_group",
        validatorFunction: function (e, t, d, u, a) {
          var n = !0,
            i = t.attr("name"),
            r = g("input[type=checkbox][name^='" + i + "']:checked", a).length,
            o = t.valAttr("qty");
          if (null == o) {
            var s = t.get(0).nodeName;
            alert(
              'Attribute "data-validation-qty" is missing from ' +
                s +
                " named " +
                t.attr("name")
            );
          }
          var l = g.formUtils.numericRangeCheck(r, o);
          switch (l[0]) {
            case "out":
              (this.errorMessage =
                u.groupCheckedRangeStart + o + u.groupCheckedEnd),
                (n = !1);
              break;
            case "min":
              (this.errorMessage =
                u.groupCheckedTooFewStart + l[1] + u.groupCheckedEnd),
                (n = !1);
              break;
            case "max":
              (this.errorMessage =
                u.groupCheckedTooManyStart + l[1] + u.groupCheckedEnd),
                (n = !1);
              break;
            default:
              n = !0;
          }
          return n;
        },
      });
  })(jQuery),
  $(document).on("click", ".token .i-close", function (e) {
    $(this).parents("form").find(".alerts").remove(),
      $(this).parent(".token").remove(),
      $(this).attr("data-id") &&
        $(".form-data #skill-" + $(this).attr("data-id")).remove();
  }),
  $.validate(),
  $(".showpassword").click(function () {
    $(this).hasClass("act")
      ? ($(this).next("input").attr("type", "password"),
        $(this).removeClass("act i-eye").addClass("i-eye-off-outline"))
      : ($(this).next("input").attr("type", "text"),
        $(this).addClass("act i-eye").removeClass("i-eye-off-outline"));
  }),
  $(".show_item").click(function () {
    $(this).addClass("hide"),
      $("#" + $(this).attr("data-show")).removeClass("hide");
  }),
  $(document).ready(function () {
    $(".item[data-sidetext]").each(function (e, t) {
      $(this)
        .find("input")
        .before("<span class=sidetext>" + $(this).data("sidetext") + "</span>"),
        $(this)
          .find("input")
          .css({ "padding-left": $(this).find(".sidetext").outerWidth() }),
        $(this)
          .find(".sidetext, input")
          .wrapAll("<span class=sidetext_container>"),
        $(document).on("click", ".sidetext", function (e) {
          $(this).siblings("input").focus();
        });
    });
  });
var dirtyFlag = !1;
$(document).on("click", ".toggle_current:not(.disabled)", function (e) {
  e.preventDefault(),
    $(this).toggleClass("act").prev().toggleClass("current_true"),
    $(this)
      .children("input")
      .each(function () {
        this.checked = !this.checked;
      }),
    $(this).hasClass("select_all") &&
      ($(this).hasClass("act")
        ? ($(this)
            .parents(".item")
            .siblings(".item")
            .find(".toggle_current")
            .addClass("act")
            .prev()
            .addClass("current_true"),
          $(this)
            .parents(".item")
            .siblings(".item")
            .find(".toggle_current")
            .children("input")
            .prop("checked", !0))
        : ($(this)
            .parents(".item")
            .siblings(".item")
            .find(".toggle_current")
            .removeClass("act")
            .prev()
            .removeClass("current_true"),
          $(this)
            .parents(".item")
            .siblings(".item")
            .find(".toggle_current")
            .children("input")
            .prop("checked", !1)));
}),
  $(document).on("click", ".radio_toggle:not(.disabled)", function (e) {
    var t = $(this).find("input").prop("name");
    $(".radio_toggle")
      .not(this)
      .find("input[name=" + t + "]")
      .siblings("div")
      .removeClass("i-check"),
      $(".radio_toggle")
        .not(this)
        .find("input[name=" + t + "]")
        .parents(".radio_toggle")
        .removeClass("act"),
      $(this).hasClass("act")
        ? ($(this).removeClass("act"),
          $(this).find("div").removeClass("i-check"),
          $(this).find("input").prop("checked", !1).change())
        : ($(this).addClass("act"),
          $(this).find("div").addClass("i-check"),
          $(this).find("input").prop("checked", !0).change());
  }),
  $(document).ready(function () {
    $(
      ".quote ul li:nth-child(" +
        Math.round($(".quote:first").find("ul.author li").length / 2) +
        ")"
    ).addClass("act"),
      $(document).on("click mousemove", ".quote ul.author li", function (e) {
        e.preventDefault(),
          $(this).parents("ul").find("li").removeClass("act"),
          $(this).addClass("act"),
          $(this).parents(".quote").find("ul.text li").removeClass("act"),
          $(this)
            .parents(".quote")
            .find("ul.text li.tw-" + $(this).data("id"))
            .addClass("act");
      });
  }),
  (function () {
    "use strict";
    function o(e) {
      if (e) {
        var t = function () {
          e && e.parentNode && e.parentNode.removeChild(e);
        };
        e.classList.remove("show"),
          e.classList.add("hide"),
          e.addEventListener("transitionend", t),
          setTimeout(t, 500);
      }
    }
    function e() {
      var n = {
        version: "1.0.8",
        defaultOkLabel: "Ok",
        okLabel: "Ok",
        defaultCancelLabel: "Cancel",
        cancelLabel: "Cancel",
        defaultMaxLogItems: 1,
        maxLogItems: 1,
        promptValue: "",
        promptPlaceholder: "",
        closeLogOnClick: !1,
        closeLogOnClickDefault: !1,
        delay: 5e3,
        defaultDelay: 5e3,
        logContainerClass: "alertify-logs",
        logContainerDefaultClass: "alertify-logs",
        dialogs: {
          buttons: {
            holder: "<nav>{{buttons}}</nav>",
            ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
            cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>",
          },
          input: "<input type='text'>",
          message: "<p class='msg'>{{message}}</p>",
          log: "<div class='{{class}}'>{{message}}</div>",
        },
        defaultDialogs: {
          buttons: {
            holder: "<nav>{{buttons}}</nav>",
            ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
            cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>",
          },
          input: "<input type='text'>",
          message: "<p class='msg'>{{message}}</p>",
          log: "<div class='{{class}}'>{{message}}</div>",
        },
        build: function (e) {
          var t = this.dialogs.buttons.ok,
            d =
              "<div class='dialog'><div>" +
              this.dialogs.message.replace("{{message}}", e.message);
          return (
            ("confirm" !== e.type && "prompt" !== e.type) ||
              (t = this.dialogs.buttons.cancel + this.dialogs.buttons.ok),
            "prompt" === e.type && (d += this.dialogs.input),
            (d = (d + this.dialogs.buttons.holder + "</div></div>")
              .replace("{{buttons}}", t)
              .replace("{{ok}}", this.okLabel)
              .replace("{{cancel}}", this.cancelLabel))
          );
        },
        setCloseLogOnClick: function (e) {
          this.closeLogOnClick = !!e;
        },
        close: function (e, t) {
          this.closeLogOnClick &&
            e.addEventListener("click", function (e) {
              o(e.srcElement);
            }),
            (t = t && !isNaN(+t) ? +t : this.delay) < 0
              ? o(e)
              : 0 < t &&
                setTimeout(function () {
                  o(e);
                }, t);
        },
        dialog: function (e, t, d, u) {
          return this.setup({ type: t, message: e, onOkay: d, onCancel: u });
        },
        log: function (e, t, d) {
          var u = document.querySelectorAll(".alertify-logs > div");
          if (u) {
            var a = u.length - this.maxLogItems;
            if (0 <= a)
              for (var n = 0, i = 1 + a; n < i; n++) this.close(u[n], -1);
          }
          this.notify(e, t, d);
        },
        setLogPosition: function (e) {
          this.logContainerClass = "alertify-logs " + e;
        },
        setupLogContainer: function () {
          var e = document.querySelector(".alertify-logs"),
            t = this.logContainerClass;
          return (
            e ||
              (((e = document.createElement("div")).className = t),
              document.body.appendChild(e)),
            e.className !== t && (e.className = t),
            e
          );
        },
        notify: function (e, t, d) {
          var u = this.setupLogContainer(),
            a = document.createElement("div");
          (a.className = t || "default"),
            n.logTemplateMethod
              ? (a.innerHTML = n.logTemplateMethod(e))
              : (a.innerHTML = e),
            "function" == typeof d && a.addEventListener("click", d),
            u.appendChild(a),
            setTimeout(function () {
              a.className += " show";
            }, 10),
            this.close(a, this.delay);
        },
        setup: function (d) {
          var u = document.createElement("div");
          (u.className = "alertify hide"), (u.innerHTML = this.build(d));
          var e,
            a = u.querySelector(".ok"),
            n = u.querySelector(".cancel"),
            i = u.querySelector("input"),
            t = u.querySelector("label");
          function r(t) {
            "function" != typeof t && (t = function () {}),
              a &&
                a.addEventListener("click", function (e) {
                  d.onOkay &&
                    "function" == typeof d.onOkay &&
                    (i ? d.onOkay(i.value, e) : d.onOkay(e)),
                    t(
                      i
                        ? { buttonClicked: "ok", inputValue: i.value, event: e }
                        : { buttonClicked: "ok", event: e }
                    ),
                    o(u);
                }),
              n &&
                n.addEventListener("click", function (e) {
                  d.onCancel &&
                    "function" == typeof d.onCancel &&
                    d.onCancel(e),
                    t({ buttonClicked: "cancel", event: e }),
                    o(u);
                });
          }
          return (
            i &&
              ("string" == typeof this.promptPlaceholder &&
                (t
                  ? (t.textContent = this.promptPlaceholder)
                  : (i.placeholder = this.promptPlaceholder)),
              "string" == typeof this.promptValue &&
                (i.value = this.promptValue)),
            "function" == typeof Promise ? (e = new Promise(r)) : r(),
            document.body.appendChild(u),
            setTimeout(function () {
              u.classList.remove("hide"),
                i && d.type && "prompt" === d.type
                  ? (i.select(), i.focus())
                  : a && a.focus();
            }, 100),
            e
          );
        },
        okBtn: function (e) {
          return (this.okLabel = e), this;
        },
        setDelay: function (e) {
          var t = parseInt(e || 0, 10);
          return (this.delay = isNaN(t) ? this.defultDelay : e), this;
        },
        cancelBtn: function (e) {
          return (this.cancelLabel = e), this;
        },
        setMaxLogItems: function (e) {
          this.maxLogItems = parseInt(e || this.defaultMaxLogItems);
        },
        theme: function (e) {
          switch (e.toLowerCase()) {
            case "bootstrap":
              (this.dialogs.buttons.ok =
                "<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>"),
                (this.dialogs.buttons.cancel =
                  "<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>"),
                (this.dialogs.input =
                  "<input type='text' class='form-control'>");
              break;
            case "purecss":
              (this.dialogs.buttons.ok =
                "<button class='ok pure-button' tabindex='1'>{{ok}}</button>"),
                (this.dialogs.buttons.cancel =
                  "<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>");
              break;
            case "mdl":
            case "material-design-light":
              (this.dialogs.buttons.ok =
                "<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>"),
                (this.dialogs.buttons.cancel =
                  "<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>"),
                (this.dialogs.input =
                  "<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>");
              break;
            case "angular-material":
              (this.dialogs.buttons.ok =
                "<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>"),
                (this.dialogs.buttons.cancel =
                  "<button class='cancel md-button' tabindex='2'>{{cancel}}</button>"),
                (this.dialogs.input =
                  "<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>");
              break;
            case "default":
            default:
              (this.dialogs.buttons.ok = this.defaultDialogs.buttons.ok),
                (this.dialogs.buttons.cancel = this.defaultDialogs.buttons.cancel),
                (this.dialogs.input = this.defaultDialogs.input);
          }
        },
        reset: function () {
          this.theme("default"),
            this.okBtn(this.defaultOkLabel),
            this.cancelBtn(this.defaultCancelLabel),
            this.setMaxLogItems(),
            (this.promptValue = ""),
            (this.promptPlaceholder = ""),
            (this.delay = this.defaultDelay),
            this.setCloseLogOnClick(this.closeLogOnClickDefault),
            this.setLogPosition("bottom left"),
            (this.logTemplateMethod = null);
        },
        injectCSS: function () {
          if (!document.querySelector("#alertifyCSS")) {
            var e = document.getElementsByTagName("head")[0],
              t = document.createElement("style");
            (t.type = "text/css"),
              (t.id = "alertifyCSS"),
              (t.innerHTML = "/* style.css */"),
              e.insertBefore(t, e.firstChild);
          }
        },
        removeCSS: function () {
          var e = document.querySelector("#alertifyCSS");
          e && e.parentNode && e.parentNode.removeChild(e);
        },
      };
      return (
        n.injectCSS(),
        {
          _$$alertify: n,
          reset: function () {
            return n.reset(), this;
          },
          alert: function (e, t, d) {
            return n.dialog(e, "alert", t, d) || this;
          },
          confirm: function (e, t, d) {
            return n.dialog(e, "confirm", t, d) || this;
          },
          prompt: function (e, t, d) {
            return n.dialog(e, "prompt", t, d) || this;
          },
          log: function (e, t) {
            return n.log(e, "default", t), this;
          },
          theme: function (e) {
            return n.theme(e), this;
          },
          success: function (e, t) {
            return n.log(e, "success", t), this;
          },
          error: function (e, t) {
            return n.log(e, "error", t), this;
          },
          cancelBtn: function (e) {
            return n.cancelBtn(e), this;
          },
          okBtn: function (e) {
            return n.okBtn(e), this;
          },
          delay: function (e) {
            return n.setDelay(e), this;
          },
          placeholder: function (e) {
            return (n.promptPlaceholder = e), this;
          },
          defaultValue: function (e) {
            return (n.promptValue = e), this;
          },
          maxLogItems: function (e) {
            return n.setMaxLogItems(e), this;
          },
          closeLogOnClick: function (e) {
            return n.setCloseLogOnClick(!!e), this;
          },
          logPosition: function (e) {
            return n.setLogPosition(e || ""), this;
          },
          setLogTemplate: function (e) {
            return (n.logTemplateMethod = e), this;
          },
          clearLogs: function () {
            return (n.setupLogContainer().innerHTML = ""), this;
          },
          version: n.version,
        }
      );
    }
    if ("undefined" != typeof module && module && module.exports) {
      module.exports = function () {
        return new e();
      };
      var t = new e();
      for (var d in t) module.exports[d] = t[d];
    } else
      "function" == typeof define && define.amd
        ? define(function () {
            return new e();
          })
        : (window.alertify = new e());
  })();
