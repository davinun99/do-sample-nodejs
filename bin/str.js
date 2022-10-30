module.exports = `
<!DOCTYPE html>
<html lang="es">

<head>
  __PAGE_META__
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#1f1f39" />
  <link rel="icon" href="favicon.svg" />
  <link rel="apple-touch-icon" href="favicon.svg" />
  <link rel="manifest" href="manifest.json" />
  <link rel="stylesheet" href="style.css">
  <meta name="description"
    content="Se parte de la experiencia PROW. Sigue o suscríbete a tus canales favoritos, compra eventos bajo demanda y contribuye al desarrollo creativo de aquellos que te inspiran y entretienen." />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Prow.tv" />
  <meta name="twitter:description"
    content="Se parte de la experiencia PROW. Sigue o suscríbete a tus canales favoritos, compra eventos bajo demanda y contribuye al desarrollo creativo de aquellos que te inspiran y entretienen." />
  <meta name="twitter:image" content="https://prow-prod.s3.amazonaws.com/site-cdn/Prow/bg-moments-mobile.jpeg" />
  <meta name="twitter:site" content="https://prow.tv" />

  <meta property="fb:app_id" content="289014333209571" />
  <meta property="og:type" content="article" />
  <meta property="og:description"
    content="Se parte de la experiencia PROW. Sigue o suscríbete a tus canales favoritos, compra eventos bajo demanda y contribuye al desarrollo creativo de aquellos que te inspiran y entretienen." />
  <meta property="og:image" content="https://prow-prod.s3.amazonaws.com/site-cdn/Prow/bg-moments-mobile.jpeg" />
  <meta property="og:url" content="https://prow.tv" />

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4KEB5M0QB7"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-4KEB5M0QB7");
  </script>

  <!-- Facebook Pixel Code -->
  <script>
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1516583518813695');
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1" src="https://www.facebook.com/tr?id=1516583518813695&ev=PageView
  &noscript=1" />
  </noscript>
  <!-- End Facebook Pixel Code -->

  <!-- Hotjar Tracking Code for https://prow.tv -->
  <script>
    (function (h, o, t, j, a, r) {
      h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
      h._hjSettings = { hjid: 3094617, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script'); r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  </script>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <div class="randomDiv">Random div</div>
  <script src="https://kit.fontawesome.com/e20e4c0ad4.js" crossorigin="anonymous"></script>
</body>

</html>`