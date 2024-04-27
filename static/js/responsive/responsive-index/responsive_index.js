import { screen_modules_size } from '/static/js/screen_size.js';

var module_width = screen_modules_size()[1];

document.getElementById("id_navbar").style.height = module_width+'px';
