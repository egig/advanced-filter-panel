var expect = chai.expect;

describe('advancedSearchForm', function() {

  var aSF;
  var testOptions = {
    fields: [
      {name:  'test-string', type: 'string', label: "Test String"}
    ]
  }

  before(function(){
    aSF = new  AdvancedSearchForm("asf-container", testOptions);
  })

  it('should have a container', function() {
    expect(aSF.container).not.to.be.undefined;
  });

  it('should have form inside container', function(){
    expect(aSF.container.getElementsByTagName('form').length).to.be.equal(1);
  });

  it('should saves options', function(){
    expect(aSF.options).not.to.be.undefined;
    expect(aSF.options.fields[0].name).to.be.equal('test-string');
  });

  it('should create form row for fields', function(){
    var forms = aSF.container.getElementsByTagName('form');
    var form = forms[0];
    var rows = form.getElementsByTagName('div');
    expect(rows.length).to.be.equal(1);
  });

  it('should create element based on fields options', function(){

    var forms = aSF.container.getElementsByTagName('form');
    var form = forms[0];
    var rows = form.getElementsByTagName('div');
    var inputs = rows[0].getElementsByTagName('input');
    var labels = rows[0].getElementsByTagName('label');

    expect(inputs.length).to.be.equal(1);
    expect(labels.length).to.be.equal(1);
    expect(inputs[0].getAttribute('name')).to.be.equal('test-string');
    expect(labels[0].textContent).to.be.equal('Test String');

  });



});
