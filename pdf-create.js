// phantomjs test script
// opens url and reports time to load
// requires an active internet connection
var page = require('webpage').create()
var system = require('system')
var t
var address

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>')
  phantom.exit()
}

t = Date.now()
address = system.args[1]
page.open(address, function (status) {
  if (status !== 'success') {
    console.log('FAIL to load the address')
  } else {
    t = Date.now() - t
    console.log('Loading time ' + t + ' msec')
  }

  var manifest = {
    templates: {
      body: _dirname+'/templates/body.hbs', // Body is required as its the entry point
      // If header is defined it will be the page header
      // Note: phantomSettings.paperSize.header.height must also be set
      header: _dirname+'/templates/header.hbs',
      // If footer is defined it will be the page header
      // Note: phantomSettings.paperSize.footer.height must also be set
      footer: _dirname+'/templates/footer.hbs',
      // This is an example of having a parcial view
      product: _dirname+'/templates/product.hbs'
    },
    helpers: _dirname+'/helpers/index.js', // Handlebars helper
    helperVariables: {}, // Additional data to be passed in the helper such as local
    less: _dirname + '/less/index.less', // Less file to render into css
    output: _dirname+ '/tmp/foo.pdf', // This is the destination of the newly created PDF
    // Settings to be passed into phantom
    // List of settings: http://phantomjs.org/api/webpage/
    phantomSettings: {
      paperSize: {
        format: 'Letter',
        orientation: 'portrait',
        margin: {
          top: '0.25in',
          right: '0.5in',
          bottom: '0.25in',
          left: '0.5in'
        },
        header: {
          height: '0.5in'
        },
        footer: {
          height: '0.5in'
        }
      }
    }
  };
  var data = system.args;
  var pdf = new PhantomPDF(manifest, data, function(err){
    if(err) console.log(err); throw err;
    console.log(_dirname+'/tmp/foo.pdf');
    console.log("Generated");
  });

  phantom.exit()
});
