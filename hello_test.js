QUnit.test("testing hello_function", function(assert){
    // is the result as we expected?
    assert.deepEqual(hello(), "hello world!");
});
QUnit.test("hello_uppercase test", function(assert) {
    // is the result as we expected?
    assert.equal(hello_uppercase("HELLO"),"Hello!HELLO");
});
QUnit.test("testing hello_joe  function for Joe", function(assert){
    // is the result as we expected?
    assert.equal(hello_joe("Joe"), "Hello!");
    // is the result as we expected?
    assert.equal(hello_joe("Thando"), "Hello Thando!");
    // is the result as we expected?
    assert.equal(hello_joe("Bob"),"Hello!");
});
QUnit.test("testing number_list  function", function(assert){
    // is the result as we expected?
    assert.equal(number_list(5), [1,2,3,4,5].toString());
});

QUnit.test("testing sum_numbers  function", function(assert){
    // is the result as we expected?
    assert.equal(sum_numbers(5),15);
});
QUnit.test("testing length  function", function(assert){
    // is the result as we expected?
    assert.equal(length(4));
});
QUnit.test("testing upper  function", function(assert){
    // is the result as we expected?
    assert.equal(upper("Hello"), "Hello!HELLO");
});
QUnit.test("testing reverse function", function(assert){
    // is the result as we expected?
    assert.equal(reverse("Hello you!"));
});

QUnit.test("hello_list function", function(assert){
    // is the result as we expected?
    assert.equal(hello_list(2), "hello world,hello world");
});

QUnit.test("high_low function", function(assert){
    // is the result as we expected?
    var array = [1,2,3,4,5];
    var result = "max =5min =1";
   deepEqual(high_low(array),result);
});
QUnit.test("count_words function", function(assert){
     // is the result as we expected?
    assert.equal(count_words("hello world"),2);
});
QUnit.test("sum_word_len function", function(assert){
     // is the result as we expected?
    assert.equal(sum_word_len("hello world"),11);
});
QUnit.test("longest_word function", function(assert){
     // is the result as we expected?
     var result = longest_word("good morning");
    assert.deepEqual(result,["morning", 7]);
});
QUnit.test("shortest_word function", function(assert){
     // is the result as we expected?
     var result = shortest_word("morning south africans");
    assert.deepEqual(result,["south",5]);
});

QUnit.test("word_length function", function(assert){
     // is the result as we expected?
     var result = word_length("morning africans");
    assert.deepEqual(result,["africans", 8]);
});

QUnit.test("Average function", function(assert){
     // is the result as we expected?
     //var result = []
     var array = ["Homeboy"];

    assert.equal(array,"Homeboy",8);
});
QUnit.test("start function", function(assert){
     // is the result as we expected?
     //var result = []
     var array = ["Home"];

    assert.equal(array,"Home");
});
QUnit.test("end function", function(assert){
     // is the result as we expected?
     //var result = []
     var array = ["Edit"];

    assert.equal(array,"Edit");
});
QUnit.test("occurs_most function", function(assert){
     // is the result as we expected?
     var result = []
     var array = ["HomeLanguage"];

    assert.equal(array,"HomeLanguage");
});
