(function() {
  innerDbg = {};
  globalThis.$ddd = innerDbg;
  globalThis.$d = function() {
    var arr = Array.prototype.slice.call(arguments);
    var key = arr[0];
    console.log('MYLOG - ', key, Date.now(), arr.slice(1));
    if (!innerDbg[key]) innerDbg[key] = [];
    innerDbg[key].push([Date.now(), arr.slice(1)]);
  };
}
)();

$d('common', 'Logger init!')
