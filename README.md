# Introduction
This is an open source repository by providing a solution for generating a PDF with barcodes/qr-codes by rendering a predefined HTML+LESS+Handlebars.JS template.

# What is the problem?
I have been looking for a solution to print the labels for different delivery boxes and products. There are too few solutions for printing the PDF and generating barcodes in Node, so i created a solution by combining different sources.

# Solution
My project depends on 2 libraries:
1. Phantom.JS - http://phantomjs.org/ - is an awesome headless web browser for the backend. It is used for rendering the page.
2. Phantom-PDF - https://www.npmjs.com/package/phantom-pdf - is a great library that connect the node, html, less, handlebars and the phantomjs library.

# Result
In this project you will find 2 examples:
1. index.js - describes how to generate an html invoice page for the onlineshop. It can be used in a combination with http server to generate the invoice on the fly for the customers.
2. index-barcodes.js - describes how to generate an html with barcodes or qr codes. It can be used for printing the PDF with labels.

# Notes
As of phantom-pdf library, i have created a fork to fix some bugs there, when some of the manifest settings are not set. Hope the author will soon pull the fork into the main repository, then we can use the original one.
