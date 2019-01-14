this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.interface.floor-panel"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Floor name</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" v-model=\"name\" @keyup=\"onChangeData\"/>\n    </div>\n  </div>\n\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Configure your floors</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"btn btn-default\" @click.prevent=\"openFloorPicker\">\n        <span v-if=\"image\">Replace image</span>\n        <span v-else>Select an image</span>\n      </div>\n      <div v-if=\"image\" class=\"selected-folder\">Selected folder: <span>{{image.name}}</span></div>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.interface.marker-panel"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Marker name</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" v-model=\"name\" @keyup=\"onChangeData\"/>\n    </div>\n  </div>\n\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Choose the marker icon</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"btn btn-default\" @click.prevent=\"openIconPicker\">\n        <span v-if=\"icon\">Replace icon</span>\n        <span v-else>Select an icon</span>\n      </div>\n      <div v-if=\"icon\" class=\"icon-holder\">\n        <div class=\"icon-wrapper\">Selected icon: <i :class=\"'selected-icon ' + icon\"></i></div>\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});