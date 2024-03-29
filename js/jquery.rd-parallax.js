// Generated by CoffeeScript 1.10.0

/**
 * @module       RD Parallax
 * @author       Evgeniy Gusarov
 * @see          https://ua.linkedin.com/pub/evgeniy-gusarov/8a/a40/54a
 * @version      3.0.0
 */

(function() {
  (function($, document, window) {

    /**
     * Initial flags
     * @public
     */
    var RDParallax, ieVersion, isFirefox, isIE, isMobile;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    isFirefox = typeof InstallTrigger !== 'undefined';
    isIE = navigator.appVersion.indexOf("MSIE") !== -1;
    ieVersion = isIE ? parseInt(navigator.appVersion.split("MSIE")[1]) : null;

    /**
     * Creates a parallax.
     * @class RDParallax.
     * @public
     * @param {HTMLElement} element - The element to create the parallax for.
     * @param {Object} [options] - The options
     */
    RDParallax = (function() {

      /**
       * Default options for parallax.
       * @public
       */
      RDParallax.prototype.Defaults = {
        layerBlur: true,
        layerDirection: 'inverse',
        layerSpeed: 1,
        layerDuration: 200,
        layerEasing: 'linear'
      };

      function RDParallax(element, options) {
        this.options = $.extend(true, {}, this.Defaults, options);
        this.$element = $(element);
        this.$win = $(window);
        this.$doc = $(document);
        this.initialize();
      }


      /**
       * Initializes the Parallax.
       * @protected
       */

      RDParallax.prototype.initialize = function() {
        var ctx;
        ctx = this;
        ctx.$element.wrapInner($('<div/>', {
          "class": "rd-parallax-inner"
        })).find(".rd-parallax-layer[data-type]").each(function() {
          var layer, url;
          layer = $(this);
          switch (layer.attr("data-type").toLowerCase()) {
            case "media":
              if (url = this.getAttribute("data-url")) {
                layer.css({
                  "background-image": ctx.url(url)
                });
                if (this.getAttribute("data-blur") === "true" || ctx.options.layerBlur) {
                  $('<img/>', {
                    src: url
                  }).load(function() {
                    layer.attr("data-media-width", this.width);
                    layer.attr("data-media-height", this.height);
                    ctx.$win.on("resize", $.proxy(ctx.blurMedia, layer[0], ctx));
                    return $.proxy(ctx.blurMedia, layer[0], ctx)();
                  });
                }
              }
              ctx.$element.on("resize", $.proxy(ctx.resizeMedia, this, ctx));
              ctx.$element.on("resize", $.proxy(ctx.moveLayer, this, ctx));
              ctx.$win.on((!isMobile ? "resize" : "orientationchange"), $.proxy(ctx.resizeMedia, this, ctx));
          }
          ctx.$doc.on("scroll", $.proxy(ctx.moveLayer, this, ctx));
          ctx.$doc.on("resize", $.proxy(ctx.moveLayer, this, ctx));
          if (this.getAttribute("data-fade") === "true" && !isIE) {
            ctx.$doc.on("scroll", $.proxy(ctx.fadeLayer, this, ctx));
          }
          if (this.getAttribute("data-fade") === "true" && !isIE) {
            ctx.$doc.on("resize", $.proxy(ctx.fadeLayer, this, ctx));
          }
        });
        ctx.$win.trigger("resize");
        ctx.$doc.trigger("scroll");
      };


      /**
       * Moves Layer
       * @param {object} ctx
       * @protected
       */

      RDParallax.prototype.moveLayer = function(ctx) {
        var ch, dir, h, offt, pos, scrt, v, wh;
        scrt = ctx.$win.scrollTop();
        offt = ctx.$element.offset().top;
        wh = ctx.$win.height();
        ch = ctx.$element.height();
        h = this.offsetHeight;
        v = Math.max(parseFloat(v), 0);
        dir = this.getAttribute("data-direction") === "inverse" ? -1 : (ctx.options.layerDirection === "inverse" ? -1 : 1);
        v = dir * (this.getAttribute("data-speed") ? Math.min(parseFloat(this.getAttribute("data-speed")), 2.0) : ctx.options.layerSpeed);
        pos = -(offt - scrt) * v + (ch - h) / 2 + (wh - ch) / 2 * v;
        return $(this).css(ctx.transform(pos, ctx));
      };


      /**
       * Fade Layer
       * @param {object} ctx
       * @protected
       */

      RDParallax.prototype.fadeLayer = function(ctx, e) {
        var ch, coff, layer, loff, o, pos;
        layer = $(this);
        ch = ctx.$element.height();
        coff = ctx.$element.offset().top + ch / 2;
        loff = layer.offset().top + layer.height() / 2;
        pos = ch / 6.0;
        if (coff + pos > loff && coff - pos < loff) {
          return layer.css({
            "opacity": 1
          });
        } else {
          if (coff - pos < loff) {
            o = 1 + ((coff + pos - loff) / ch / 3.0 * 10);
          } else {
            o = 1 - ((coff - pos - loff) / ch / 3.0 * 10);
          }
          return layer.css({
            "opacity": o < 0 ? 0 : o > 1 ? 1 : o.toFixed(2)
          });
        }
      };


      /**
       * Blurs Layer
       * @param {object} ctx
       * @protected
       */

      RDParallax.prototype.blurMedia = function(ctx) {
        var blur, h, mh, mw, w;
        h = this.offsetHeight;
        w = this.offsetWidth;
        mh = parseFloat(this.getAttribute("data-media-height"));
        mw = parseFloat(this.getAttribute("data-media-width"));
        blur = Math.ceil(Math.max(h / mh, w / mw));
        return $(this).css(ctx.blur(blur));
      };


      /**
       * Resize Media Layer
       * @param {object} ctx
       * @protected
       */

      RDParallax.prototype.resizeMedia = function(ctx) {
        return this.style.height = ctx.px(ctx.getMediaHeight(window.innerHeight, ctx.$element.height(), this.getAttribute("data-speed") ? this.getAttribute("data-speed") : ctx.options.layerSpeed));
      };


      /**
       * Calc media layer height.
       * @param {number} wh
       * @param {number} v
       * @returns {number} media layer height
       * @protected
       */

      RDParallax.prototype.getMediaHeight = function(wh, ch, v) {
        v = Math.max(parseFloat(v), 0);
        v = Math.min(parseFloat(v), 2.0);
        return ch + (v <= 1 ? (wh - ch) * v : wh * v);
      };


      /**
       * Generates css background path.
       * @param {string} url
       * @returns {string} css url path
       * @protected
       */

      RDParallax.prototype.url = function(url) {
        return "url(" + url + ")";
      };


      /**
       * Converts Number to Pixels.
       * @param {number} num
       * @returns {string} pixels
       * @protected
       */

      RDParallax.prototype.px = function(num) {
        return num + "px";
      };


      /**
      * Creates transform property.
      * @param {number} pos
      * @param {object} ctx
      * @returns {object} CSS transform
      * @protected
       */

      RDParallax.prototype.transform = function(pos, ctx) {
        if (isIE && ieVersion < 10) {
          return {
            "transform": "translate(0," + pos + "px)"
          };
        } else {
          return {
            "-webkit-transform": "translate3d(0," + pos + "px, 0)",
            "transform": "translate3d(0," + pos + "px, 0)",
            "transition": isMobile ? "" + ctx.options.layerDuration + "ms" + " transform " + ctx.options.layerEasing : "none"
          };
        }
      };


      /**
       * Creates blur property
       * @param {number} blur
       * @returns {object} CSS blur
       * @protected
       */

      RDParallax.prototype.blur = function(blur) {
        if (blur > 2) {
          return {
            '-webkit-filter': 'blur(' + blur + 'px)',
            'filter': 'blur(' + blur + 'px)'
          };
        } else {
          return {
            'filter': 'none',
            '-webkit-filter': 'none'
          };
        }
      };

      return RDParallax;

    })();

    /**
     * The jQuery Plugin for the RD Parallax
     * @public
     */
    $.fn.extend({
      RDParallax: function(options) {
        return this.each(function() {
          var $this;
          $this = $(this);
          if (!$this.data('RDParallax')) {
            return $this.data('RDParallax', new RDParallax(this, options));
          }
        });
      }
    });
    return window.RDParallax = RDParallax;
  })(window.jQuery, document, window);


  /**
   * The Plugin AMD export
   * @public
   */

  if (typeof module !== "undefined" && module !== null) {
    module.exports = window.RDParallax;
  } else if (typeof define === 'function' && define.amd) {
    define(["jquery"], function() {
      'use strict';
      return window.RDParallax;
    });
  }

}).call(this);
