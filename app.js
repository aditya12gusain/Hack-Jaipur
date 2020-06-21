// jshint esversion: 6

const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");

const app = express();

app.use(express.static("assets"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/know-more.html", function (req, res) {
  res.sendFile(__dirname + "/know-more.html");
});

app.get("/quiz.html", function (req, res) {
  res.sendFile(__dirname + "/quiz.html");
});

app.get("/Ishaan/covid.html", function (req, res) {
  res.sendFile(__dirname + "/Ishaan/covid.html");
});

app.get("/covid.html", function (req, res) {
  res.sendFile(__dirname + "/Ishaan/covid.html");
});

app.get("/Ishaan/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/assets/img/TharoJaipurCircular.png", function (req, res) {
  res.sendFile(__dirname + "/assets/img/TharoJaipurCircular.png");
});

app.get("/assets/fold/photogallery.html", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/photogallery.html");
});

///////////////////////////////////////////////////////
app.get("/assets/fold/assets/web/assets/jquery/jquery.min.js", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/web/assets/jquery/jquery.min.js"
  );
});

app.get("/assets/fold/assets/bootstrap/js/bootstrap.min.js", function (
  req,
  res
) {
  res.sendFile(__dirname + "/assets/fold/assets/bootstrap/js/bootstrap.min.js");
});

app.get("/assets/fold/assets/tether/tether.min.js", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/tether/tether.min.js");
});

app.get("/assets/fold/assets/smoothscroll/smooth-scroll.js", function (
  req,
  res
) {
  res.sendFile(__dirname + "/assets/fold/assets/smoothscroll/smooth-scroll.js");
});

app.get(
  "/assets/fold/assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js",
  function (req, res) {
    res.sendFile(
      __dirname +
        "/assets/fold/assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js"
    );
  }
);

app.get("/assets/fold/assets/popper/popper.min.js", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/popper/popper.min.js");
});

app.get("/assets/fold/assets/bootstrap/css/bootstrap.min.css", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/bootstrap/css/bootstrap.min.css"
  );
});

app.get("/assets/fold/assets/images/img6-1000x1506-800x1205.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img6-1000x1506-800x1205.jpg"
  );
});

app.get("/assets/fold/assets/images/img3-1000x1500-800x1200.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img3-1000x1500-800x1200.jpg"
  );
});

app.get("/assets/fold/assets/images/img2-1000x667-800x534.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img2-1000x667-800x534.jpg"
  );
});

app.get("/assets/fold/assets/images/img1-1000x1250-800x1000.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img1-1000x1250-800x1000.jpg"
  );
});

app.get("/assets/fold/assets/images/img4-1000x667-800x534.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img4-1000x667-800x534.jpg"
  );
});

app.get("/assets/fold/assets/images/img5-1000x1500-800x1200.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img5-1000x1500-800x1200.jpg"
  );
});

app.get("/assets/fold/assets/images/img7-1000x694-800x555.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img7-1000x694-800x555.jpg"
  );
});

app.get("/assets/fold/assets/images/img8-1000x1506-800x1205.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img8-1000x1506-800x1205.jpg"
  );
});

app.get("/assets/fold/assets/images/img9-1000x826-800x661.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img9-1000x826-800x661.jpg"
  );
});

app.get("/assets/fold/assets/images/img10-1000x563-800x450.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img10-1000x563-800x450.jpg"
  );
});

app.get("/assets/fold/assets/images/img11-1000x667-800x534.jpg", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/images/img11-1000x667-800x534.jpg"
  );
});

app.get("/assets/fold/assets/gallery/style.css", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/gallery/style.css");
});

app.get("/assets/fold/assets/theme/css/style.css", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/theme/css/style.css");
});

app.get("/assets/fold/assets/tether/tether.min.css", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/tether/tether.min.css");
});

app.get("/assets/fold/assets/bootstrap/css/bootstrap-reboot.min.css", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/bootstrap/css/bootstrap-reboot.min.css"
  );
});

app.get("/assets/fold/assets/bootstrap/css/bootstrap-grid.min.css", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/bootstrap/css/bootstrap-grid.min.css"
  );
});

app.get(
  "/assets/fold/assets/web/assets/mobirise-icons/mobirise-icons.css",
  function (req, res) {
    res.sendFile(
      __dirname +
        "/assets/fold/assets/web/assets/mobirise-icons/mobirise-icons.css"
    );
  }
);

app.get("/assets/fold/assets/mobirise/css/mbr-additional.css", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/mobirise/css/mbr-additional.css"
  );
});

app.get("/assets/fold/assets/images/img9-1000x826.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img9-1000x826.jpg");
});

app.get("/assets/fold/assets/images/img8-1000x1506.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img8-1000x1506.jpg");
});

app.get("/assets/fold/assets/images/img7-1000x694.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img7-1000x694.jpg");
});

app.get("/assets/fold/assets/images/img5-1000x1500.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img5-1000x1500.jpg");
});

app.get(
  "/assets/fold/assets/web/assets/mobirise-icons/mobirise-icons.ttf",
  function (req, res) {
    res.sendFile(
      __dirname +
        "/assets/fold/assets/web/assets/mobirise-icons/mobirise-icons.ttf"
    );
  }
);

app.get("/assets/fold/assets/vimeoplayer/jquery.mb.vimeo_player.js", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/vimeoplayer/jquery.mb.vimeo_player.js"
  );
});

app.get("/assets/fold/assets/images/img11-1000x667.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img11-1000x667.jpg");
});

app.get("/assets/fold/assets/images/img10-1000x563.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img10-1000x563.jpg");
});

app.get("/assets/fold/assets/images/img3-1000x1500.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img3-1000x1500.jpg");
});

app.get("/assets/fold/assets/images/img2-1000x667.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img2-1000x667.jpg");
});

app.get("/assets/fold/assets/images/img1-1000x1250.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img1-1000x1250.jpg");
});

app.get("/assets/fold/assets/slidervideo/script.js", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/slidervideo/script.js");
});

app.get("/assets/fold/assets/gallery/script.js", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/gallery/script.js");
});

app.get("/assets/fold/assets/gallery/player.min.js", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/gallery/player.min.js");
});

app.get("/assets/fold/assets/images/img4-1000x667.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img4-1000x667.jpg");
});

app.get("/assets/fold/assets/images/img6-1000x1506.jpg", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/images/img6-1000x1506.jpg");
});

app.get("/assets/fold/assets/theme/js/script.js", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/theme/js/script.js");
});

app.get("/assets/fold/assets/imagesloaded/imagesloaded.pkgd.min.js", function (
  req,
  res
) {
  res.sendFile(
    __dirname + "/assets/fold/assets/imagesloaded/imagesloaded.pkgd.min.js"
  );
});

app.get("/assets/fold/assets/masonry/masonry.pkgd.min.js", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/assets/masonry/masonry.pkgd.min.js");
});

app.get("/assets/assets/img/TharoJaipurCircular.png", function (req, res) {
  res.sendFile(__dirname + "/assets/img/TharoJaipurCircular.png");
});
///////////////////////////////////////////////////////
app.get("/assets/fold/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/assets/fold/know-more.html", function (req, res) {
  res.sendFile(__dirname + "/know-more.html");
});

app.get("/assets/fold/quiz.html", function (req, res) {
  res.sendFile(__dirname + "/quiz.html");
});

app.get("/assets/fold/Ishaan/covid.html", function (req, res) {
  res.sendFile(__dirname + "/Ishaan/covid.html");
});

app.get("/assets/fold/assets/fold/photogallery.html", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/photogallery.html");
});

app.get("/manifest.json", function (req, res) {
  res.sendFile(__dirname + "/manifest.json");
});

app.get("/serviceworker.js", function (req, res) {
  res.sendFile(__dirname + "/serviceworker.js");
});

app.get("/offline.html", function (req, res) {
  res.sendFile(__dirname + "/offline.html");
});

app.get("/assets/img/TharoJaipurCircular.png", function (req, res) {
  res.sendFile(__dirname + "/assets/img/TharoJaipurCircular.png");
});

app.get("/photogallery.html", function (req, res) {
  res.sendFile(__dirname + "/assets/fold/photogallery.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running at port 3000");
});
