const runtime = require('./app');

async function main(){
  const result = await runtime.execute('帮我设计一个电商运营方案');
  console.log(JSON.stringify(result, null, 2));
}

main();
