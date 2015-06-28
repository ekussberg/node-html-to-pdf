var PhantomPDF = require('phantom-pdf');

var barcodes = ["12_v_4_A","12_v_4_B","12_v_4_C","12_v_4_D"];

var manifest = {
  phantomjsPath: __dirname+'/node_modules/phantomjs/bin/phantomjs',
  templates: {
    header: __dirname+'/templates/warehouse/header.hbs',
    body: __dirname+'/templates/warehouse/body.hbs'
  },
  output: __dirname + '/tmp/barcodes.pdf', // This is the destination of the newly created PDF
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

var data = {
  barcodes: barcodes,
  vendorsPath: __dirname+"/templates/vendor"
};
var pdf = new PhantomPDF(manifest, data, function(err){
  console.log(err);
  console.log('generated to ', __dirname + '/tmp/foo.pdf');
});
