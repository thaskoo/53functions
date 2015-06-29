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
TestMyCode.run("testing hello_joe  function when Joe is true", function(assert){
    var result = hello_joe("Joe");
    // is the result as we expected?
    assert.equals("Hello!", result, "testing hello_joe function");
});
TestMyCode.run("testing hello_joe  function when both are failing", function(assert){
    var result = hello_joe("Thandokazi");
    // is the result as we expected?
    assert.equals("Hello Thandokazi!", result, "testing hello_joe function");
});
    TestMyCode.run("testing hello_joe  function when Bob is true", function(assert){
     var result = hello_joe("Bob");
    // is the result as we expected?
    assert.equals("Hello!", result, "testing hello_joe function");
});

TestMyCode.run("testing number_list  function", function(assert){
    var result = number_list(5);
    // is the result as we expected?
    assert.equals([1,2,3,4,5].toString(), result.toString(), "testing number_list function");
});
TestMyCode.run("testing sum_numbers  function", function(assert){
    var result = sum_numbers(5);
    // is the result as we expected?
    assert.equals(15, result, "testing sum_numbers function");
});
