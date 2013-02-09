define("text!HomeViewTpl",[],function(){return'<div class="home-hero">\n            <h1>Welcome to Node Cellar</h1>\n            <h3>A sample application built with Backbone.js, Twitter Bootstrap, Node.js, Express, and MongoDB</h3>\n\n    <br/>\n    <div style="opacity: .9;">\n        <a class="btn btn-large" href="#wines"><img src="img/wine.png" class="pull-left" style="margin-right:6px;"/> Start Browsing<br/>Node Cellar</a>\n        <a class="btn btn-large" href="#">\n            <img src="img/github.png" class="pull-left" style="margin-right:6px"/> View Project<br>on GitHub</a>\n    </div>\n\n\n</div>\n\n<div class="bs-docs-social">\n  <div class="container">\n    <ul class="bs-docs-social-buttons">\n      <li>\n        <iframe class="github-btn" src="http://ghbtns.com/github-btn.html?user=ccoenraets&repo=nodecellar&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>\n      </li>\n      <li>\n        <iframe class="github-btn" src="http://ghbtns.com/github-btn.html?user=ccoenraets&repo=nodecellar&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="98px" height="20px"></iframe>\n      </li>\n\n        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>\n\n\n      <li class="follow-btn">\n        <a href="https://twitter.com/ccoenraets" class="twitter-follow-button" data-link-color="#0069D6" data-show-count="true">Follow @ccoenraets</a>\n      </li>\n\n      <li class="tweet-btn">\n        <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://coenraets.org:3000" data-count="horizontal" data-via="ccoenraets">Tweet</a>\n      </li>\n\n    </ul>\n  </div>\n</div>'}),define("HomeView",["jquery","underscore","backbone","text!HomeViewTpl"],function(e,t,n,r){return n.View.extend({template:t.template(r),initialize:function(){this.render()},render:function(){return e(this.el).html(this.template()),this}})}),define("routes/home",["jquery","underscore","HomeView"],function(e,t,n){var r=new n;return r.el});