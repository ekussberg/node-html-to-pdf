var PhantomPDF = require('phantom-pdf');

var manifest = {
  phantomjsPath: __dirname+'/node_modules/phantomjs/bin/phantomjs',
  templates: {
    body: __dirname+'/templates/invoice/body.hbs', // Body is required as its the entry point
    // If header is defined it will be the page header
    // Note: phantomSettings.paperSize.header.height must also be set
    header: __dirname+'/templates/invoice/header.hbs',
    // If footer is defined it will be the page header
    // Note: phantomSettings.paperSize.footer.height must also be set
    footer: __dirname+'/templates/invoice/footer.hbs',
    // This is an example of having a parcial view
    product: __dirname+'/templates/invoice/product.hbs'
  },
  helpers: __dirname+'/helpers/index.js', // Handlebars helper
  helperVariables: {}, // Additional data to be passed in the helper such as local
  less: __dirname + '/less/invoice.less', // Less file to render into css
  output: __dirname + '/tmp/foo.pdf', // This is the destination of the newly created PDF
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

var data = { // Put any data you want to be exposed to your handlebars template
  products: ['soccer ball', 'baseball', 'football'],
  category: 'Balls',
  logopath: "file://"+__dirname+"/templates/images/logo.png"
};
var pdf = new PhantomPDF(manifest, data, function(err){
  console.log(err);
  console.log('generated to ', __dirname + '/tmp/foo.pdf');
});
