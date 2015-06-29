TestMyCode.run("testing hello  function", function(assert){
    var result = hello();
    // is the result as we expected?
    assert.equals("hello", result, "testing hello function");
});
TestMyCode.run("testing hello_uppercase  function", function(assert){
    var result = hello_uppercase();
    // is the result as we expected?
    assert.equals("Hello!", result, "testing hello_uppercase function");
});
TestMyCode.run("testing hello_joe  function", function(assert){
    var result = hello_joe();
    // is the result as we expected?
    assert.equals("Hello!", result, "testing hello_joe function");
});
