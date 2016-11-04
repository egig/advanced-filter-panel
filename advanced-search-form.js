var AdvancedSearchForm = function(el, options) {
  this.container = document.getElementById(el);


  var form = document.createElement('FORM');
  this.container.appendChild(form);

  this.options = options;

  var labels = [];
  var fields = [];
  var optFields = this.options.fields;

  for(var i=0;i<optFields.length;i++) {

    labels[i] = document.createElement('LABEL');
    labels[i].textContent = optFields[i].label;
    fields[i] = document.createElement('INPUT');
    fields[i].setAttribute('name', optFields[i].name);

    var type;
    switch (optFields[i].type) {
      case 'string':
        type = 'text';
        break;
      default:

    }

    fields[i].setAttribute('type', type);
    var row = document.createElement('DIV');
    row.appendChild(labels[i]);
    row.appendChild(fields[i]);
    form.appendChild(row);
  }
}
