<?php
/**
 * Title: addeded Scripts
 * Slug: twentytwentythree/added-scripts
 * Inserter: no
 */
?>

<?php echo "<h1>Cookies are activated!</h1>"; ?>


<?php echo "<p>Added Google tag manager</p>"; ?>
<script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=G-87CVTPNGM5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-87CVTPNGM5');
</script>

<?php echo "<p>Added Hotjar</p>"; ?>
<!-- Hotjar Tracking Code for my site -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3256117,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

<?php echo "<p>Added Clicky</p>"; ?>
<a title="Google Analytics Alternative" href="https://clicky.com/101388108"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
<script async src="//static.getclicky.com/101388108.js"></script>

<?php echo "<p>Added Clarity via Microsoft</p>"; ?>
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "em0jk8c8qj");
</script>

<?php echo "<p>Added Clarity via Microsoft</p>"; ?>
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "em0jk8c8qj");
</script>

<?php echo "<p>Added Smartlook</p>"; ?>
<script type='text/javascript'>
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '814497bc65d2457e0247cb53698cc4fe470f2603', { region: 'eu' });
</script>


<?php echo "<p>Added Custom JS that just adds a cookie</p>"; ?>

<script type='text/javascript'>
 document.cookie = 'custom_RK_cookie=test_cookie; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'
</script>
